const _ = require('lodash');
const validate = require('validate.js');

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
            } catch (err) { this.platform.log.error(err); }
            return data;
        },
    },
};

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @constructor
 * @param {ElarianConfig} config
 */
function Elarian(config) {
    const opts = _.cloneDeep(config);
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

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    this.options = opts;
    const configOpts = opts.options || {};
    this.configOptions = {
        lifetime: configOpts.lifetime || defaultConfigOptions.lifetime,
        keepAlive: configOpts.keepAlive || defaultConfigOptions.keepAlive,
        serializer: configOpts.serializer || defaultConfigOptions.serializer,
        reconnectInterval: configOpts.reconnectInterval || defaultConfigOptions.reconnectInterval,
    };

    this.eventListeners = {
        data: null,

        // Simulator
        sendMessage: null,
        makeVoiceCall: null,
        checkoutPayment: null,
        sendChannelPayment: null,
        sendCustomerPayment: null,

        // App
        reminder: null,
        messageStatus: null,
        paymentStatus: null,
        receivedPayment: null,
        receivedMessage: null,
        customerActivity: null,
        sentMessageReaction: null,
        walletPaymentStatus: null,
        messagingSessionEnded: null,
        messagingConsentUpdate: null,
        messagingSessionStarted: null,
        messagingSessionRenewed: null,
    };

    const cleanup = (code) => {
        this.platform.log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
    };
    process.on('SIGINT', cleanup.bind(null));
    process.on('exit', cleanup.bind(null));
}

module.exports = Elarian;
