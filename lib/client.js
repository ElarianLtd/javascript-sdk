/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
const grpc = require('@grpc/grpc-js');
const validate = require('validate.js');
const protoLoader = require('@grpc/proto-loader');

const utils = require('./utils');

const { log } = utils;

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @class
 * @param {ClientConfig} config
 */
function Client(config) {
    const opts = {
        ...config,
    };
    const constraints = {
        appId: {
            type: 'string',
            presence: true,
        },
        token: {
            type: 'string',
            presence: true,
        },
        options: {
            type: 'object',
        },
    };

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    this.config = {
        options: {
            uris: {
                social: 'id.elarian.com:443',
                state: 'api.elarian.com:443',
            },
        },
        ...opts,
    };
    this._socialService = null;
    this._appStateService = null;

    this.eventListeners = {
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
    this.connect = function connect() {
        // TODO: Connect to notification service

        if (this.eventListeners.connected) {
            this.eventListeners.connected();
        }
        return this;
    };

    /**
     * Check if client is connected
     * @returns {boolean}
     */
    this.isConnected = function isConnected() {
        return this._isConnected;
    };

    /**
     * Disconnect from the elarian server
     */
    this.disconnect = function disconnect() {
        // TODO: Disconnect from notification service

        if (this.eventListeners.closed) {
            this.eventListeners.closed();
        }
    };

    const cleanup = (code) => {
        log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
        process.exit(code);
    };

    process.on('SIGINT', cleanup.bind(null));
    process.on('SIGQUIT', cleanup.bind(null));
    process.on('SIGTERM', cleanup.bind(null));
}

// eslint-disable-next-line no-underscore-dangle
Client.prototype._getAppStateService = function _getAppStateService() {
    if (this._appStateService) {
        return this._appStateService;
    }

    const { options } = this.config;
    const uri = options.uris.state;
    const def = protoLoader.loadSync(
        utils.SERVICE_PROTO.APP_STATE,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        },
    );
    const pd = grpc.loadPackageDefinition(def);
    const credentials = options.dev ? grpc.credentials.createInsecure() : grpc.credentials.createSsl();
    this._appStateService = new pd.com.elarian.hera.proto.AppStateService(uri, credentials);
    return this._appStateService;
};

// eslint-disable-next-line no-underscore-dangle
Client.prototype._getSocialService = function _getSocialService() {
    if (this._socialService) {
        return this._socialService;
    }

    const { options } = this.config;
    const uri = options.uris.social;
    const def = protoLoader.loadSync(
        utils.SERVICE_PROTO.SOCIAL,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        },
    );
    const pd = grpc.loadPackageDefinition(def);
    const credentials = options.dev ? grpc.credentials.createInsecure() : grpc.credentials.createSsl();
    this._socialService = new pd.com.elarian.hera.proto.SocialService(uri, credentials);
    return this._socialService;
};

// eslint-disable-next-line no-underscore-dangle
Client.prototype._notificationHandler = () => (payload) => {
    log.debug(`TODO: Handle incoming ${payload}`);
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
