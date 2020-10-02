const socketManager = require('./socketManager');
const queueResponseHandler = require('./responseQueueManager').queue;

const SIMULATOR_EMIT_EVENTS = {
    START: 'start',
    SUBMIT: 'submit',
    END: 'end',
};

const generateEventId = () => `evt::simulator::${Date.now()}`;

const startSession = (params) => new Promise((resolve, reject) => {
    const {
        phoneNumber,
        cb,
    } = params;
    const eventId = generateEventId();
    const simulatorEventId = generateEventId();

    const data = {
        eventId,
        simulatorEventId,
        phoneNumber,
    };
    const message = {
        event: SIMULATOR_EMIT_EVENTS.START,
        data,
    };

    const responseHandler = (res) => {
        if ((res.status >= 200 && res.status < 300)) {
            queueResponseHandler(simulatorEventId, cb);
            resolve(res.message);
        } else {
            reject(new Error(res.message));
        }
    };

    const queueFactoryFunc = () => queueResponseHandler(eventId, responseHandler);
    socketManager
        .sendMessage(message)
        .then(queueFactoryFunc)
        .catch(reject);
});

const submit = (payload) => new Promise((resolve, reject) => {
    const eventId = generateEventId();
    const data = {
        eventId,
        data: payload,
    };
    const message = {
        event: SIMULATOR_EMIT_EVENTS.SUBMIT,
        data,
    };

    const responseHandler = (res) => {
        if ((res.status >= 200 && res.status < 300)) {
            resolve(res.message);
        } else {
            reject(new Error(res.message));
        }
    };

    const queueFactoryFunc = () => queueResponseHandler(eventId, responseHandler);
    socketManager
        .sendMessage(message)
        .then(queueFactoryFunc)
        .catch(reject);
});

const endSession = (phoneNumber) => new Promise((resolve, reject) => {
    const eventId = generateEventId();
    const data = {
        eventId,
        phoneNumber,
    };
    const message = {
        event: SIMULATOR_EMIT_EVENTS.END,
        data,
    };

    const responseHandler = (res) => {
        if (!(res.status >= 200 && res.status < 300)) {
            reject(res.message);
        }
        resolve();
        socketManager.disconnect();
    };

    const queueFactoryFunc = () => queueResponseHandler(eventId, responseHandler);
    socketManager
        .sendMessage(message)
        .then(queueFactoryFunc)
        .catch(reject);
});

module.exports = {
    submit,
    endSession,
    startSession,
};
