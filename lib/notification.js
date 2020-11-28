/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
const { Single } = require('rsocket-flowable');

const { Customer } = require('./customer');
const { ElarianMessages, addVoiceCallActions } = require('./utils');

const {
    UssdMenu,
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

const notificationHandler = (incomingPayload) => {
    let event;
    const { log } = notifOptions;
    const handlePayload = async () => {
        const notif = ServerToAppNotification.deserializeBinary(incomingPayload.data).toObject();
        const events = Object.keys(notif);
        event = events.find((i) => !['orgId', 'appId', 'createdAt'].includes(i) && notif[i]);
        const data = notif[event];
        const listener = eventListeners[event];

        const globalListener = eventListeners.data;
        if (globalListener) {
            await globalListener(data);
        }

        const response = new ServerToAppNotificationReply();

        if (listener) {
            let customer;
            if (data.customerId) {
                customer = new Customer({
                    customerId: data.customerId.value || data.customerId,
                });
                await customer.getState();
            }
            const payload = await Promise.race([
                listener(data, customer),
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
            .then((data) => subscriber.onComplete(Buffer.from(data.serializeBinary())))
            .catch((error) => {
                log.error(`${event}: `, error);
                subscriber.onError(error);
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
