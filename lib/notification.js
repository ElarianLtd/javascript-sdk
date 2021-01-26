/* eslint-disable max-len */
const { Single } = require('rsocket-flowable');

const Elarian = require('./client');

const Customer = require('./customer');
const {
    ElarianMessages,
    addMessage,
    getStatusString,
    getChannelProviderString,
    getMessageReactionString,
    getCustomerNumberProviderString,
    getMessageSessionEndReasonString,
    getMessageConsentUpdateActionString,
} = require('./utils');

const {
    PaymentStatus,
    PaymentChannel,
    ActivityChannel,
    MessagingChannel,
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
        data.parts = data.partsList;
        delete data.partsList;
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
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
        event = events.find((i) => !['orgId', 'appId', 'createdAt', 'customerId', 'purseId'].includes(i) && notif[i]);
        const data = cleanUpNotificationPayload(event, notif[event]);
        const globalListener = client.eventListeners.data;
        if (globalListener) {
            await globalListener(event, data);
        }
        let messagingListener;
        if (event === 'receivedMessage') { // Split messaging into multiple events
            messagingListener = client.eventListeners[event];
            const { channel } = data.channelNumber;
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
            if (notif.customerNumber) {
                customer = new Customer({
                    client,
                    customerNumber: {
                        number: notif.customerNumber.number,
                        provider: getCustomerNumberProviderString(notif.customerNumber.provider),
                    },
                });
                customer.appData = notif.appData;
                customer
                    .getState()
                    .catch(log.warn);
            }

            // eslint-disable-next-line no-async-promise-executor
            const listenerExec = new Promise(async (resolve, reject) => {
                try {
                    const cb = (error, payload) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(payload);
                        }
                    };
                    await listener({ data, customer }, cb);
                } catch (ex) {
                    reject(ex);
                }
            });

            const payload = await Promise.race([
                listenerExec,
                new Promise((resolve) => {
                    setTimeout(() => resolve(false), 15000);
                }),
            ]);

            if (payload) {
                response = addMessage(new ServerToAppNotificationReply(), payload);
            }
        }
        return response;
    };
    return new Single((subscriber) => {
        subscriber.onSubscribe();
        handlePayload()
            .then((data) => {
                subscriber.onComplete(Buffer.from(data.serializeBinary()));
            })
            .catch((error) => {
                log.error(`NotificationError::${event}: `, error.message || error);
                // FIXME: This returns a valid response to avoid retries...
                //        ideally subscriber.onError(error) should be the response
                subscriber.onComplete(Buffer.from(response.serializeBinary()));
            });
    });
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {EventListener} listener A function that reacts to events
 * @memberof Elarian.prototype
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
 * @memberof Elarian.prototype
 */
Elarian.prototype.on = function on(event, listerner) { return this.registerListerner(event, listerner); };

/**
 * Remove listener registered for event. Can also be called with <code>client.off(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Elarian.prototype
 */
Elarian.prototype.removeListener = function removeListener(event) {
    delete this.eventListeners[event];
};

/**
 * Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Elarian.prototype
 */
Elarian.prototype.off = function off(event) { return this.removeListener(event); };

module.exports = Elarian;
