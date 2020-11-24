/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const validate = require('validate.js');

const { log, connectRSocket } = require('./utils');

const setupVoiceMethods = require('./voice');
const setupPaymentMethods = require('./payment');
const setupMessagingMethods = require('./messaging');
const setupAuthenticationMethods = require('./authentication');
const { Customer, setup: setupCustomerMethods } = require('./customer');
const {
    notificationHandler,
    setup: setupNotificationMethods,
} = require('./notification');

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
            } catch (err) { log.error(err); }
            return data;
        },
    },
};

/**
 * Elarian client
 * @constructor
 * @param {ClientParams} params
 * @param {ConfigOptions} [configOptions]
 */
function Client(params, configOptions = defaultConfigOptions) {
    const opts = _.cloneDeep(params);
    const constraints = {
        apiKey: {
            type: 'string',
        },
        appId: {
            type: 'string',
            presence: true,
        },
        orgId: {
            type: 'string',
            presence: true,
        },
    };

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    const {
        apiKey,
    } = opts;
    if (!apiKey) {
        throw new Error('apiKey is required');
    }
    this.options = opts;
    this.configOptions = configOptions;

    /**
     * Initialize client connection to the API server
     */
    this.connect = async () => {
        this._socket = await connectRSocket({
            notificationHandler,
            orgId: this.options.orgId,
            appId: this.options.appId,
            apiKey: this.options.apiKey,
        });
    };

    /**
     * Disconnect from the API server
     */
    this.disconnect = () => {
        if (this._socket && this._socket.isConnected) {
            this._socket.close();
            this._socket = null;
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
    setupNotificationMethods(this, { getSocket });
    setupAuthenticationMethods(this, { getSocket });
    setupCustomerMethods(this, {
        appId: this.options.appId,
        serializer: this.configOptions.serializer,
        getSocket,
    });
}

module.exports = {
    Client,
    Customer,
};
