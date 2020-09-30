const _ = require('lodash');
const grpc = require('grpc');
const validate = require('validate.js');

const {
    promisify,
    ElarianService,
} = require('./utils');

const setupCustomerMethods = require('./customer');
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
        serializer: configOptions.serializer || {
            type: 'text',
            serialize: (data) => JSON.stringify(data),
            deserialize: (data) => {
                try {
                    return JSON.parse(data);
                } catch (err) { /* FIXME: fails silently */ }
                return data;
            },
        },
    };

    const credentials = grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        // eslint-disable-next-line no-shadow
        grpc.credentials.createFromMetadataGenerator((_, callback) => {
            const metadata = new grpc.Metadata();
            if (apiKey) {
                metadata.set('api-key', apiKey);
            }
            if (authToken) {
                metadata.set('auth-token', authToken);
            }
            callback(null, metadata);
        }),
    );
    // eslint-disable-next-line no-underscore-dangle
    this._stub = promisify(new ElarianService(HOST, credentials));

    const methodsOptions = {
        ...this.options,
        // eslint-disable-next-line no-underscore-dangle
        stub: this._stub,
        serializer: this.configOptions.serializer,
    };
    setupCustomerMethods(this, methodsOptions);
    // setupMessagingMethods(this);
    // setupPaymentMethods(this);
    // setupVoiceMethods(this);
    setupNotificationMethods(this, methodsOptions);
    setupAuthenticationMethods(this, methodsOptions);
}

module.exports = Client;
