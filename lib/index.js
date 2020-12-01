/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const validate = require('validate.js');

const { connectRSocket } = require('./utils');

const setupVoiceMethods = require('./voice');
const setupPaymentMethods = require('./payment');
const setupMessagingMethods = require('./messaging');
const { Customer, setup: setupCustomerMethods } = require('./customer');
const {
    notificationHandler,
    setup: setupNotificationMethods,
} = require('./notification');

let platform = {};

const defaultConfigOptions = {
    lifetime: 60000,
    keepAlive: 1000,
    reconnectInterval: 1000,
    serializer: {
        type: 'text',
        serialize: (data) => JSON.stringify(data),
        deserialize: (data) => {
            try {
                return JSON.parse(data);
            } catch (err) { platform.log.error(err); }
            return data;
        },
    },
};

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @constructor
 * @param {ClientParams} params
 * @param {ConfigOptions} [configOptions]
 */
function Client(params, configOptions = defaultConfigOptions) {
    const opts = _.cloneDeep(params);
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
    };

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    this.options = opts;
    this.configOptions = configOptions;

    /**
     * Initialize client connection to the API server
     */
    this.connect = async () => {
        const { socket, transport } = await connectRSocket({
            platform,
            notificationHandler,
            orgId: this.options.orgId,
            appId: this.options.appId,
            apiKey: this.options.apiKey,
            ...this.configOptions,
        });
        this._socket = socket;
        this._transport = transport;
    };

    /**
     * Disconnect from the API server
     */
    this.disconnect = () => {
        if (this._socket) {
            this._transport.close();
            this._socket.close();
            // this._socket = null;
            // this._transport = null;
        }
    };

    const getSocket = () => {
        if (!this._socket) {
            throw new Error('Client is not connected');
        }
        return this._socket;
    };

    setupVoiceMethods(this, { getSocket });
    setupPaymentMethods(this, { getSocket });
    setupMessagingMethods(this, { getSocket });
    setupCustomerMethods(this, {
        appId: this.options.appId,
        serializer: this.configOptions.serializer,
        getSocket,
    });
    setupNotificationMethods(this, { getSocket, log: platform.log });

    const cleanup = (code) => {
        platform.log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
    };
    process.on('SIGINT', cleanup.bind(null));
    process.on('exit', cleanup.bind(null));
}

/**
 * Instantiate and connect an elarian client
 * @param {ClientParams} params
 * @param {ConfigOptions} [configOptions]
 */
Client.newInstance = async (params, configOptions) => {
    const client = new Client(params, configOptions);
    await client.connect();
    return client;
};

module.exports = (conf) => {
    platform = conf;
    return {
        Client,
        Customer,
    };
};
