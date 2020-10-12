const _ = require('lodash');
const grpc = require('grpc');
const validate = require('validate.js');

const {
    log,
    promisify,
    ElarianService,
} = require('./utils');

const setupUssdMethods = require('./ussd');
const setupVoiceMethods = require('./voice');
const setupPaymentMethods = require('./payment');
const setupCustomerMethods = require('./customer');
const setupMessagingMethods = require('./messaging');
const setupNotificationMethods = require('./notification');
const setupAuthenticationMethods = require('./authentication');

const HOST = 'api.elarian.dev:443';
// const HOST = '20.50.102.116:8082';

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

    const extraHeaders = new grpc.Metadata();
    if (authToken) {
        extraHeaders.set('auth-token', authToken);
    } else if (apiKey) {
        extraHeaders.set('api-key', apiKey);
    }
    const credentials = grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        // eslint-disable-next-line no-shadow
        grpc.credentials.createFromMetadataGenerator((_, callback) => {
            callback(null, extraHeaders);
        }),
    );
    // eslint-disable-next-line no-underscore-dangle
    this._stub = promisify(new ElarianService(HOST, credentials));

    const methodsOptions = {
        ...this.options,
        // extraHeaders,
        // eslint-disable-next-line no-underscore-dangle
        stub: this._stub,
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
