/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const validate = require('validate.js');

const { connectRSocket } = require('./utils');

const setupVoiceMethods = require('./voice');
const setupPaymentMethods = require('./payment');
const setupMessagingMethods = require('./messaging');
const setupAuthenticationMethods = require('./authentication');
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
 * Elarian client
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
        authToken: {
            type: 'string',
            presence: platform.isBrowser,
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
        this._socket = await connectRSocket({
            platform,
            notificationHandler,
            orgId: this.options.orgId,
            appId: this.options.appId,
            authToken: this.options.authToken,
            apiKey: this.options.authToken ? null : this.options.apiKey,
            ...this.configOptions,
        });
    };

    /**
     * Disconnect from the API server
     */
    this.disconnect = () => {
        if (this._socket) {
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

module.exports = (conf) => {
    platform = conf;
    return {
        Client,
        Customer,
    };
};
