const _ = require('lodash');
const validate = require('validate.js');

const { log } = require('./utils');

const setupUssdMethods = require('./ussd');
const setupVoiceMethods = require('./voice');
const setupPaymentMethods = require('./payment');
const setupCustomerMethods = require('./customer');
const setupMessagingMethods = require('./messaging');
const setupNotificationMethods = require('./notification');
const setupAuthenticationMethods = require('./authentication');

const HOST = 'api.elarian.dev:443';

function Client(params, configOptions = {}) {
    const opts = _.cloneDeep(params);
    const constraints = {
        apiKey: {
            type: 'string',
        },
        authToken: {
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
        authToken,
    } = opts;
    if (!apiKey && !authToken) {
        throw new Error('Either one of apiKey or authToken is required');
    }
    this.options = opts;
    this.configOptions = {
        insecure: configOptions.insecure || false,
        host: configOptions.host || HOST,
        serializer: configOptions.serializer || {
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

    const methodsOptions = {
        ...this.options,
        stub: null,
        serializer: this.configOptions.serializer,
        reconnect: this.configOptions.reconnect || true,
    };

    setupCustomerMethods(this, methodsOptions);

    setupUssdMethods(this, methodsOptions);
    setupVoiceMethods(this, methodsOptions);
    setupPaymentMethods(this, methodsOptions);
    setupMessagingMethods(this, methodsOptions);
    setupNotificationMethods(this, methodsOptions);
    setupAuthenticationMethods(this, methodsOptions);
}

module.exports = Client;
