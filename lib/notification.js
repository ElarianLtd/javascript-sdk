/* eslint-disable max-len */
const { Single } = require('rsocket-flowable');

const Elarian = require('./elarian');

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
        data.sessionId = data.sessionId.value;
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
    case 'messageStatus':
        data.messageId = data.messageId ? data.messageId.value : undefined;
        data.status = getStatusString(data.status, MessageDeliveryStatus);
        break;

    case 'receivedMessage':
        data.messageId = data.messageId ? data.messageId.value : undefined;
        data.sessionId = data.sessionId ? data.sessionId.value : undefined;
        data.inReplyTo = data.inReplyTo ? data.inReplyTo.value : undefined;
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

        switch (data.channelNumber.channel) {
        case 'sms':
            data.text = data.parts.map((i) => i.text);
            data.text = data.text.length > 0 ? data.text.pop() : data.text;
            break;
        case 'ussd':
            data.input = data.parts.map((i) => i.input);
            data.input = data.input.length > 0 ? data.input.pop() : data.input;
            break;
        case 'voice':
            data.voice = data.parts.map((i) => i.voice);
            data.voice = data.voice.length > 0 ? data.voice.pop() : data.voice;
            break;
        case 'whatsapp':
        case 'telegram':
        case 'messenger':
        case 'email':
            data.media = data.parts.map((i) => i.media);
            data.media = data.media.length > 0 ? data.media.pop() : data.media;

            data.location = data.parts.map((i) => i.location);
            data.location = data.location.length > 0 ? data.location.pop() : data.location;

            data.email = data.parts.map((i) => i.email);
            data.email = data.email.length > 0 ? data.email.pop() : data.email;
            break;
        default:
            break;
        }
        delete data.parts;
        break;

    case 'paymentStatus':
        if (data.purseId) {
            data.purseId = data.purseId.value;
        }
        data.transactionId = data.transactionId.value;
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'receivedPayment':
        data.purseId = data.purseId.value;
        data.transactionId = data.transactionId.value;
        data.status = getStatusString(data.status, PaymentStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
        };
        break;
    case 'walletPaymentStatus':
        data.walletId = data.walletId.value;
        data.transactionId = data.transactionId.value;
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'messagingConsentUpdate':
        data.sessionId = data.sessionId.value;
        data.status = getStatusString(data.status, MessagingConsentUpdateStatus);
        data.update = getMessageConsentUpdateActionString(data.update);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'customerActivity':
        data.sessionId = data.sessionId.value;
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, ActivityChannel),
        };
        break;
    case 'sentMessageReaction':
        data.messageId = data.messageId.value;
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        data.reaction = getMessageReactionString(data.reaction);
        break;

    // Simulator
    case 'sendMessage':
    case 'makeVoiceCall':
        if (data.sessionId) {
            data.sessionId = data.sessionId.value;
        }
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'checkoutPayment':
    case 'sendChannelPayment':
    case 'sendCustomerPayment':
        data.transactionId = data.transactionId.value;
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
            partition: data.customerNumber.partition ? data.customerNumber.partition.value : undefined,
        };
    }
    /* eslint-enable no-param-reassign */
    return data;
};

// eslint-disable-next-line no-underscore-dangle
Elarian.prototype._notificationHandler = (client) => (incomingPayload) => {
    let event;
    const { log } = client.platform;
    const { isSimulator, notificationTimeout = 5000 } = client.options;

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
                event = 'receivedFbMessenger';
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

        let incomingAppData = notif.appData || {};
        const { serializer } = client.configOptions;
        incomingAppData = serializer.type === 'text' ? incomingAppData.stringVal : incomingAppData.bytesVal;
        incomingAppData = incomingAppData ? serializer.deserialize(incomingAppData) : {};

        if (listener) {
            let customer;
            if (notif.customerId) {
                customer = new client.Customer({
                    id: notif.customerId || data.customerId,
                    number: data.customerNumber ? data.channelNumber.number : undefined,
                    provider: data.customerNumber ? data.customerNumber.provider : undefined,
                    partition: data.customerNumber ? data.customerNumber.partition : undefined,
                });
                if (!customer.customerNumber) {
                    customer
                        .getState()
                        .catch((err) => log.warn(`Failed to fetch customer state ${customer.customerId}`, err));
                }
            }

            // eslint-disable-next-line no-async-promise-executor
            const listenerExec = new Promise(async (resolve, reject) => {
                try {
                    const cb = (payload, outgoingAppData) => {
                        resolve({
                            payload,
                            outgoingAppData,
                        });
                    };
                    await listener(data, customer, incomingAppData, cb);
                } catch (ex) {
                    reject(ex);
                }
            });

            const { payload, outgoingAppData } = await Promise.race([
                listenerExec,
                new Promise((resolve) => {
                    setTimeout(() => resolve(false), notificationTimeout);
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
            }

            if (!isSimulator) {
                let appData = outgoingAppData;
                if (!appData) {
                    appData = incomingAppData;
                }

                const appDataUpdate = new DataMapValue();
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
 * @param {NotificationHandler} handler A function that reacts to events
 * @returns {Elarian} this instance
 * @memberof Elarian
 */
Elarian.prototype.registerNotificationHandler = function registerNotificationHandler(event, handler) {
    const events = Object.keys(this.eventListeners);
    if (!events.includes(event)) {
        throw new Error(`Unexpected event ${event}. Must be one of ${events}`);
    }
    this.eventListeners[event] = handler;
    return this;
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {NotificationHandler} handler A function that reacts to events
 * @returns {Elarian} this instance
 * @memberof Elarian
 */
Elarian.prototype.on = function on(event, handler) { return this.registerNotificationHandler(event, handler); };

module.exports = Elarian;
