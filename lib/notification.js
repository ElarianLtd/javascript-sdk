/* eslint-disable max-len */
const { Single } = require('rsocket-flowable');

const { Customer } = require('./customer');
const {
    ElarianMessages,
    getStatusString,
    addVoiceCallActions,
    getChannelProviderString,
    getCustomerEventDirectionString,
    getCustomerNumberProviderString,
} = require('./utils');

const {
    UssdMenu,
    UssdChannel,
    VoiceChannel,
    PaymentStatus,
    PaymentChannel,
    VoiceCallStatus,
    MessagingChannel,
    MessageDeliveryStatus,
    MessagingSessionStatus,
    MessagingConsentStatus,
    ServerToAppNotification,
    VoiceCallNotificationReply,
    ServerToAppNotificationReply,
    UssdSessionNotificationReply,
} = ElarianMessages;

const eventListeners = {
    data: null,
    reminder: null,
    voiceCall: null,
    ussdSession: null,
    paymentStatus: null,
    messageStatus: null,
    receivedMessage: null,
    receivedPayment: null,
    walletPaymentStatus: null,
    messagingSessionStatus: null,
    messagingConsentStatus: null,
};

let notifOptions;

const cleanUpNotificationPayload = (event, data) => {
    /* eslint-disable no-param-reassign */
    switch (event) {
    case 'reminder':
        data.reminder.payload = data.reminder.payload.value;
        data.reminder.expiration = data.reminder.expiration.seconds;
        data.reminder.interval = data.reminder.interval ? data.reminder.interval.seconds : undefined;
        break;
    case 'voiceCall':
        data.direction = getCustomerEventDirectionString(data.direction);
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, VoiceChannel),
        };
        data.input.status = getStatusString(data.input.status, VoiceCallStatus);
        break;
    case 'ussdSession':
        data.input = data.input.value;
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, UssdChannel),
        };
        break;
    case 'paymentStatus':
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'messageStatus':
        data.status = getStatusString(data.status, MessageDeliveryStatus);
        break;
    case 'receivedMessage':
        data.text = data.text.value;
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'receivedPayment':
        data.status = getStatusString(data.status, PaymentStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
        };
        break;
    case 'walletPaymentStatus':
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'messagingSessionStatus':
        data.status = getStatusString(data.status, MessagingSessionStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'messagingConsentStatus':
        data.status = getStatusString(data.status, MessagingConsentStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            provider: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    default:
        break;
    }

    if (data.customerNumber) {
        data.customerNumber = {
            number: data.customerNumber.number,
            provider: getCustomerNumberProviderString(data.channelNumber.provider),
        };
    }

    /* eslint-enable no-param-reassign */
    return data;
};

const notificationHandler = (incomingPayload) => {
    let event;
    const { log } = notifOptions;
    const response = new ServerToAppNotificationReply();
    const handlePayload = async () => {
        let notif = ServerToAppNotification.deserializeBinary(incomingPayload.data).toObject();
        notif = notif.customer || notif.purse;
        const events = Object.keys(notif);
        event = events.find((i) => !['orgId', 'appId', 'createdAt', 'customerId', 'purseId'].includes(i) && notif[i]);
        const data = cleanUpNotificationPayload(event, notif[event]);
        const listener = eventListeners[event];

        const globalListener = eventListeners.data;
        if (globalListener) {
            await globalListener(event, data);
        }

        if (listener) {
            let customer;
            if (notif.customerId) {
                customer = new Customer({
                    customerId: notif.customerId,
                });
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
                switch (event) {
                case 'voiceCall': {
                    // payload is actions[]
                    const res = new VoiceCallNotificationReply();
                    addVoiceCallActions(res, payload);
                    response.setVoiceCall(res);
                    break;
                }
                case 'ussdSession': {
                    // payload is { text, isTerminal }
                    const res = new UssdSessionNotificationReply()
                        .setMenu(
                            new UssdMenu()
                                .setText(payload.text)
                                .setIsTerminal(payload.isTerminal),
                        );
                    response.setUssdSession(res);
                    break;
                }
                default:
                    break;
                }
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
 * @memberof Client.prototype
 */
const registerListerner = (event, listener) => {
    const events = Object.keys(eventListeners);
    if (!events.includes(event)) {
        throw new Error(`Unexpected event ${event}`);
    }
    eventListeners[event] = listener;
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {EventListener} listener A function that reacts to events
 * @memberof Client.prototype
 */
const on = (event, listerner) => registerListerner(event, listerner);

/**
 * Remove listener registered for event. Can also be called with <code>client.off(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Client.prototype
 */
const removeListener = (event) => {
    delete eventListeners[event];
};

/**
 * Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code>
 * @param {Event} event The event whose listener to remove
 * @memberof Client.prototype
 */
const off = (event) => removeListener(event);

module.exports = {
    notificationHandler,
    setup: (client, options) => {
        notifOptions = options;
        /* eslint-disable no-param-reassign */
        client.on = on;
        client.off = off;
        client.removeListener = removeListener;
        client.registerListerner = registerListerner;
        /* eslint-enable no-param-reassign */
        return client;
    },
};
