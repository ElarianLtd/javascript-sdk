/* eslint-disable no-param-reassign */
const { log, ElarianMessages } = require('./utils');

const { StreamNotificationRequest } = ElarianMessages;

let stream;
const eventListeners = {
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

const initializeNotificationStream = (client, options) => {
    const {
        stub,
        appId,
        orgId,
        reconnect = true,
    } = options;

    const req = new StreamNotificationRequest()
        .setOrgId(orgId)
        .setAppId(appId);
    stream = stub.streamNotifications(req);

    stream.on('data', (item) => {
        const notif = item.toObject();
        const events = Object.keys(notif);
        const event = events.find((i) => !['orgId', 'appId', 'timestamp'].includes() && notif[i]);
        const listerner = eventListeners[event];
        if (listerner) {
            const data = notif[event];
            const customer = new client.Customer({ customerId: data.customerId });
            listerner(data, customer)
                .catch((ex) => log.error(ex));
        }

        log.debug(event, notif[event]);
    });
    stream.on('end', () => {
        log.warn('The server has finished sending notifications...');
        if (reconnect) {
            log.warn('Reconnecting...');
            setTimeout(() => initializeNotificationStream(client, options), 1200);
        }
    });
    stream.on('error', (error) => {
        if (error.code === 1 && error.details === 'Cancelled') {
            return;
        }
        log.error(error.message || error);
        if (reconnect) {
            log.warn('Reconnecting...');
            setTimeout(() => initializeNotificationStream(client, options), 1200);
        }
    });
};

module.exports = (client, options) => {
    client.on = (event, callback) => {
        const events = Object.keys(eventListeners);
        if (!events.includes(event)) {
            throw new Error(`Unexpected event ${event}`);
        }
        eventListeners[event] = callback;
        if (!stream) {
            initializeNotificationStream(client, options);
        }
    };
    client.disconnect = () => {
        if (stream) {
            stream.cancel();
            log.warn('client has been disconnected');
        }
    };
    return client;
};
