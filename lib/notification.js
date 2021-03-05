/* eslint-disable max-len */
const { Single } = require('rsocket-flowable');

const Elarian = require('./client');

const {
    ElarianMessages,
    addMessage,
    getStatusString,
    getMediaTypeString,
    getChannelProviderString,
    getMessageReactionString,
    getCustomerEventDirectionString,
    getCustomerNumberProviderString,
    getMessageSessionEndReasonString,
    getMessageConsentUpdateActionString,
} = require('./utils');

const {
    AppDataUpdate,
    DataMapValue,
    PaymentStatus,
    PaymentChannel,
    ActivityChannel,
    MessagingChannel,
    VoiceCallStatus,
    VoiceCallHangupCause,
    MessageDeliveryStatus,
    ServerToAppNotification,
    MessagingConsentUpdateStatus,
    ServerToAppNotificationReply,
    ServerToSimulatorNotification,
    ServerToSimulatorNotificationReply,
} = ElarianMessages;

const cleanUpNotificationPayload = (event, data) => {
    /* eslint-disable no-param-reassign */
    switch (event) {
    // App
    case 'reminder':
        data.reminder.payload = data.reminder.payload.value;
        data.reminder.remindAt = data.reminder.remindAt.seconds;
        data.reminder.interval = data.reminder.interval ? data.reminder.interval.seconds : undefined;
        break;
    case 'messagingSessionStarted':
    case 'messagingSessionRenewed':
    case 'messagingSessionEnded':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        if (data.expiresAt) {
            data.expiresAt = data.expiresAt.seconds;
        }
        if (data.duration) {
            data.duration = data.duration.seconds;
        }
        if (data.reason) {
            data.reason = getMessageSessionEndReasonString(data.reason);
        }
        break;
    case 'paymentStatus':
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'messageStatus':
        data.status = getStatusString(data.status, MessageDeliveryStatus);
        break;
    case 'receivedMessage':
        data.sessionId = data.sessionId ? data.sessionId.value : undefined;
        data.parts = data.partsList.map((part) => ({
            ...part,
            ussd: part.ussd ? part.ussd.value : undefined,
            location: part.location ? {
                ...part.location,
                label: part.location.label ? part.location.label.value : undefined,
                address: part.location.address ? part.location.address.value : undefined,
            } : undefined,
            media: part.media ? {
                ...part.media,
                type: getMediaTypeString(part.media.type),
            } : undefined,
            voice: part.voice ? {
                ...part.voice,
                dtmfDigits: part.voice.dtmfDigits ? part.voice.dtmfDigits.value : undefined,
                startedAt: part.voice.startedAt ? part.voice.startedAt.seconds : undefined,
                recordingUrl: part.voice.recordingUrl ? part.voice.recordingUrl.value : undefined,
                status: getStatusString(part.voice.status, VoiceCallStatus),
                direction: getCustomerEventDirectionString(part.voice.direction),
                hangupCause: getChannelProviderString(part.voice.hangupCause || 0, VoiceCallHangupCause, /^VOICE_CALL_HANGUP_CAUSE_/),
            } : undefined,
        }));
        delete data.partsList;
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };

        if (data.channelNumber.channel === 'ussd') {
            data.input = data.parts[0].ussd;
            delete data.parts;
        }

        if (data.channelNumber.channel === 'voice') {
            data.input = data.parts[0].ussd;
            data = {
                ...data,
                ...data.parts[0].voice,
            };
            delete data.parts;
        }

        break;
    case 'receivedPayment':
        data.status = getStatusString(data.status, PaymentStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
        };
        break;
    case 'walletPaymentStatus':
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'messagingConsentUpdate':
        data.status = getStatusString(data.status, MessagingConsentUpdateStatus);
        data.update = getMessageConsentUpdateActionString(data.update);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'customerActivity':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, ActivityChannel),
        };
        break;
    case 'sentMessageReaction':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        data.reaction = getMessageReactionString(data.reaction);
        break;
    // Simulator
    case 'sendMessage':
    case 'makeVoiceCall':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'checkoutPayment':
    case 'sendChannelPayment':
    case 'sendCustomerPayment':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
        };
        break;
    default:
        break;
    }

    if (data.customerNumber) {
        data.customerNumber = {
            number: data.customerNumber.number,
            provider: getCustomerNumberProviderString(data.customerNumber.provider),
        };
    }
    /* eslint-enable no-param-reassign */
    return data;
};

Elarian.prototype.notificationHandler = (client) => (incomingPayload) => {
    let event;
    const { log } = client.platform;
    const { isSimulator } = client.options;

    let response = isSimulator ? new ServerToSimulatorNotificationReply() : new ServerToAppNotificationReply();
    const handlePayload = async () => {
        let notif = isSimulator
            ? ServerToSimulatorNotification.deserializeBinary(incomingPayload.data).toObject()
            : ServerToAppNotification.deserializeBinary(incomingPayload.data).toObject();

        if (!isSimulator) {
            notif = notif.customer || notif.purse;
        }

        const events = Object.keys(notif);
        event = events.find((i) => !['orgId', 'appId', 'createdAt', 'customerId', 'purseId', 'appData'].includes(i) && notif[i]);
        const data = cleanUpNotificationPayload(event, { ...notif[event] });
        const globalListener = client.eventListeners.data;
        if (globalListener) {
            await globalListener(event, data, notif);
        }
        let channel;
        let messagingListener;
        if (event === 'receivedMessage') { // Split messaging into multiple events
            channel = data.channelNumber.channel;
            messagingListener = client.eventListeners[event];
            switch (channel) {
            case 'voice':
                event = 'voiceCall';
                break;
            case 'ussd':
                event = 'ussdSession';
                break;
            case 'sms':
                event = 'receivedSms';
                break;
            case 'messenger':
                event = 'receivedMessenger';
                break;
            case 'telegram':
                event = 'receivedTelegram';
                break;
            case 'whatsapp':
                event = 'receivedWhatsapp';
                break;
            case 'email':
                event = 'receivedEmail';
                break;
            default:
                break;
            }
        }

        let listener = client.eventListeners[event];
        if (!listener && messagingListener) {
            listener = messagingListener;
        }

        if (listener) {
            let customer;
            if (notif.customerId) {
                customer = new client.Customer({
                    customerId: notif.customerId || data.customerId,
                    customerNumber: data.customerNumber,
                });
                const appData = notif.appData || {};
                const { serializer } = client.configOptions;
                const item = serializer.type === 'text' ? appData.stringVal : appData.bytesVal;
                customer.appData = item ? serializer.deserialize(item) : {};
                if (!customer.customerNumber) {
                    customer
                        .getState()
                        .catch((err) => log.warn(`Failed to fetch customer state ${customer.customerId}`, err));
                }
            }

            // eslint-disable-next-line no-async-promise-executor
            const listenerExec = new Promise(async (resolve, reject) => {
                try {
                    const cb = (error, payload, appData = undefined) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve({
                                payload,
                                appData,
                            });
                        }
                    };
                    await listener({ data, customer }, cb);
                } catch (ex) {
                    reject(ex);
                }
            });

            const { payload, appData } = await Promise.race([
                listenerExec,
                new Promise((resolve) => {
                    setTimeout(() => resolve(false), 15000);
                }),
            ]);

            if (payload) {
                switch (channel) {
                case 'voice':
                    // payload is actions[]
                    response = addMessage(response, {
                        body: {
                            voice: payload,
                        },
                    });
                    break;
                case 'ussd':
                    // payload is { text, isTerminal }
                    response = addMessage(response, {
                        body: {
                            ussd: payload,
                        },
                    });
                    break;
                default:
                    response = addMessage(response, payload);
                    break;
                }

                if (appData && !isSimulator) {
                    const appDataUpdate = new DataMapValue();
                    const { serializer } = client.configOptions;
                    const serializedValue = serializer.serialize(appData);
                    switch (serializer.type) {
                    case 'text':
                        appDataUpdate.setStringVal(serializedValue);
                        break;
                    case 'binary':
                        appDataUpdate.setBytesValue(serializedValue);
                        break;
                    default:
                        throw new Error('Invalid serializer type');
                    }

                    response = response.setDataUpdate(
                        new AppDataUpdate()
                            .setData(appDataUpdate),
                    );
                }
            }
        }
        return response;
    };
    return new Single((subscriber) => {
        subscriber.onSubscribe();
        handlePayload()
            .then((data) => {
                try {
                    subscriber.onComplete({ data: Buffer.from(data.serializeBinary()) });
                } catch (error) {
                    log.error(`NotificationReplyError::${event}: `, error.message || error);
                }
            })
            .catch((error) => {
                // FIXME: This returns a valid response to avoid retries...
                //        ideally subscriber.onError(error) should be the response
                try {
                    log.error(`NotificationError::${event}: `, error.message || error);
                    subscriber.onComplete({ data: Buffer.from(response.serializeBinary()) });
                } catch (ex) {
                    log.error(`NotificationError::${event}: `, ex.message || ex);
                }
            });
    });
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {EventListener} listener A function that reacts to events
 * @memberof Elarian
 */
Elarian.prototype.registerListerner = function registerListerner(event, listener) {
    const events = Object.keys(this.eventListeners);
    if (!events.includes(event)) {
        throw new Error(`Unexpected event ${event}`);
    }
    this.eventListeners[event] = listener;
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {EventListener} listener A function that reacts to events
 * @memberof Elarian
 */
Elarian.prototype.on = function on(event, listerner) { return this.registerListerner(event, listerner); };

/**
 * Remove listener registered for event. Can also be called with <code>client.off(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Elarian
 */
Elarian.prototype.removeListener = function removeListener(event) {
    delete this.eventListeners[event];
};

/**
 * Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Elarian
 */
Elarian.prototype.off = function off(event) { return this.removeListener(event); };

module.exports = Elarian;
