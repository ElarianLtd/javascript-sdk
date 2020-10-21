/* eslint-disable no-param-reassign */
const { log, ElarianMessages } = require('./utils');

const { StreamNotificationRequest } = ElarianMessages;

let stream;
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

const initializeNotificationStream = (client, options) => {
    const {
        stub,
        appId,
        orgId,
        extraHeaders,
        reconnect = true,
        isReconnect = false,
    } = options;

    const req = new StreamNotificationRequest()
        .setOrgId(orgId)
        .setAppId(appId);
    stream = stub.streamNotifications(req, extraHeaders);

    stream.on('data', async (item) => {
        try {
            const notif = item.toObject();
            const events = Object.keys(notif);
            const event = events.find((i) => !['orgId', 'appId', 'timestamp'].includes(i) && notif[i]);

            const data = notif[event];

            const globalListener = eventListeners.data;
            if (globalListener) {
                await globalListener(data);
            }

            const customer = new client.Customer({ customerId: data.customerId });
            await customer.getState();
            const listerner = eventListeners[event];
            if (listerner) {
                await listerner(data, customer);
            }
        } catch (error) {
            log.error(error);
        }
    });
    stream.on('end', () => {
        log.warn('The server has finished sending notifications...');
        if (reconnect) {
            log.await('Reconnecting');
            setTimeout(() => {
                initializeNotificationStream(client, options);
                log.sucess('Connected');
            }, 1200);
        }
    });
    stream.on('error', (error) => {
        if (error.code === 1 && error.details === 'Cancelled') {
            return;
        }
        log.error(error.message || error);
        if (reconnect) {
            log.await('Reconnecting');
            setTimeout(() => {
                initializeNotificationStream(client, { ...options, isReconnect: true });
            }, 1200);
        }
    });

    if (isReconnect) {
        log.success('Connected');
    }
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

    client.removeListener = (event) => {
        delete eventListeners[event];
    };

    client.disconnect = () => {
        if (stream) {
            stream.cancel();
            log.warn('client has been disconnected');
        }
    };
    return client;
};
