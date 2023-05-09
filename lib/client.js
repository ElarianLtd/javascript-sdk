/* eslint-disable max-len */
/* global window */
/* eslint-disable no-underscore-dangle */
const validate = require('validate.js');
const { Single } = require('rsocket-flowable');

const {
    ElarianMessages,
} = require('./utils');

const {
    DataMapValue,
    ServerToAppNotification,
    ServerToAppNotificationReply,
} = ElarianMessages;

const { connectRSocket } = require('./utils');

const defaultConfigOptions = {
    resumable: false,
    lifetime: 60000,
    keepAlive: 1000,
    notificationTimeout: 5000,
};

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @class
 * @param {ClientConfig} config
 */
function Client(config) {
    const opts = {
        ...config,
        isSimulator: config.isSimulator === true,
    };
    const constraints = {
        appId: {
            type: 'string',
            presence: true,
        },
        orgId: {
            type: 'string',
            presence: true,
        },
        apiKey: {
            type: 'string',
        },
        authToken: {
            type: 'string',
            presence: this.platform.isBrowser,
        },
        allowNotifications: {
            type: 'boolean',
        },
        isSimulator: {
            type: 'boolean',
        },
        options: {
            type: 'object',
        },
    };

    if (!opts.apiKey && !opts.authToken) {
        throw new Error('Either one of apiKey or authToken is required');
    }

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    this._client = null;
    this._socket = null;
    this.options = opts;
    const configOpts = opts.options || {};
    this.configOptions = {
        lifetime: configOpts.lifetime || defaultConfigOptions.lifetime,
        resumable: configOpts.resumable || defaultConfigOptions.resumable,
        keepAlive: configOpts.keepAlive || defaultConfigOptions.keepAlive,
        serializer: configOpts.serializer || {
            type: 'text',
            serialize: (data) => JSON.stringify(data),
            deserialize: (data) => {
                try {
                    return JSON.parse(data);
                } catch (err) { this.platform.log.warn(`Failed to deserialize ${data}: ${err.message}`); }
                return data;
            },
        },
        // eslint-disable-next-line max-len
        notificationTimeout: configOpts.notificationTimeout || defaultConfigOptions.notificationTimeout,
    };

    this.eventListeners = {
        // debug
        data: null,

        // Connection
        error: null,
        closed: null,
        pending: null,
        connected: null,
        connecting: null,
    };

    /**
     * Connecto to elarian servers
     * @returns {Elarian} this instance
     */
    this.connect = function connect({ host, port } = {}) {
        connectRSocket({
            ...this.options,
            authToken: this.options.authToken,
            apiKey: this.options.authToken ? null : this.options.apiKey,
        }, {
            host,
            port,
            ...this.configOptions,
            platform: this.platform,
            setSocket: (socket) => {
                this._socket = socket;
            },
            getConnectionHandlers: () => ({
                error: (err) => {
                    if (this.eventListeners.error) {
                        this.eventListeners.error(err);
                    }
                },
                closed: () => {
                    this.disconnect();
                    if (this.eventListeners.closed) {
                        this.eventListeners.closed();
                    }
                },
                pending: this.eventListeners.pending,
                connecting: this.eventListeners.connecting,
            }),
            notificationHandler: this._notificationHandler(this),
        }).then(({ client }) => {
            this._client = client;
            if (this.eventListeners.connected) {
                this.eventListeners.connected();
            }
            this._lifetimeId = setInterval(() => {}, 10000);
        }).catch((ex) => {
            if (this.eventListeners.error) {
                this.eventListeners.error(ex);
            }
        });
        return this;
    };

    this.getSocket = function getSocket() {
        if (!this._socket) {
            throw new Error('Client is not connected');
        }
        return this._socket;
    };

    /**
     * Check if client is connected
     * @returns {boolean}
     */
    this.isConnected = function isConnected() {
        return this._client !== null && this._socket !== null;
    };

    /**
     * Disconnect from the elarian server
     */
    this.disconnect = function disconnect() {
        if (this._client) {
            this._client.close();
            clearInterval(this._lifetimeId);
        }
        this._client = null;
        this._socket = null;
    };

    const cleanup = (code) => {
        this.platform.log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
        if (!this.platform.isBrowser) {
            process.exit(code);
        }
    };

    if (this.platform.isBrowser) {
        window.onbeforeunload = cleanup;
    } else {
        process.on('SIGINT', cleanup.bind(null));
        process.on('SIGQUIT', cleanup.bind(null));
        process.on('SIGTERM', cleanup.bind(null));
    }
}

const cleanUpNotificationPayload = (event, data) => {
    /* eslint-disable no-param-reassign */
    switch (event) {
    // App
    case 'reminder':
        data.workId = data.workId.value;
        data.group = {
            mapping: data.group.mapping,
            expiresAt: data.group.expiresAt.seconds,
        };
        data.reminder = {
            key: null,
            payload: data.reminder.payload.value,
            remindAt: data.reminder.remindAt.seconds,
            interval: data.reminder?.interval.seconds,
        };
        break;
    default:
        break;
    }
    /* eslint-enable no-param-reassign */
    return data;
};

// eslint-disable-next-line no-underscore-dangle
Client.prototype._notificationHandler = (client) => (incomingPayload) => {
    let event;
    const { log } = client.platform;
    const { notificationTimeout = 5000 } = client.options;

    let response = new ServerToAppNotificationReply();
    const handlePayload = async () => {
        const notif = ServerToAppNotification.deserializeBinary(incomingPayload.data).toObject();

        const events = Object.keys(notif);
        event = events.find((i) => !['orgId', 'appId', 'createdAt', 'humanId', 'state'].includes(i) && notif[i]);
        const data = cleanUpNotificationPayload(event, { ...notif[event] });

        data.orgId = notif.orgId;
        data.appId = notif.appId;
        data.humanId = notif.humanId;
        data.createdAt = notif?.createdAt.seconds;
        data.state = notif?.state;

        const globalListener = client.eventListeners.data;
        if (globalListener) {
            await globalListener(event, data, notif);
        }

        const listener = client.eventListeners[event];

        let incomingAppData = notif.state || {};
        const { serializer } = client.configOptions;
        incomingAppData = serializer.type === 'text' ? incomingAppData.stringVal : incomingAppData.bytesVal;
        incomingAppData = incomingAppData ? serializer.deserialize(incomingAppData) : undefined;
        let outgoingAppData = incomingAppData;

        if (listener) {
            // eslint-disable-next-line no-async-promise-executor
            const listenerExec = new Promise(async (resolve, reject) => {
                try {
                    const cb = (nextState) => resolve(nextState);
                    listener(data, cb);
                } catch (ex) {
                    reject(ex);
                }
            });

            const nextState = await Promise.race([
                listenerExec,
                new Promise((resolve) => {
                    setTimeout(resolve, notificationTimeout, {});
                }),
            ]);

            if (nextState) { outgoingAppData = nextState; }
        }

        if (outgoingAppData) {
            const appDataUpdate = new DataMapValue();
            const serializedValue = serializer.serialize(outgoingAppData);
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
            response = response.setNextState(appDataUpdate);
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
                    log.error(`NotificationDefaultError::${event}: `, error.message || error);
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
 * @returns {Client} this instance
 */
Client.prototype.registerNotificationHandler = function registerNotificationHandler(event, handler) {
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
 * @returns {Client} this instance
 */
Client.prototype.on = function on(event, handler) { return this.registerNotificationHandler(event, handler); };

module.exports = Client;
