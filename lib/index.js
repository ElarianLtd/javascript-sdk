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
            presence: platform.isBrowser,
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
    this.platform = platform;
    this.configOptions = opts.options || defaultConfigOptions;

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

    /**
     * Initialize client connection to the API server
     */
    this.connect = async () => {
        const { socket, transport } = await connectRSocket({
            ...this.options,
            authToken: this.options.authToken,
            apiKey: this.options.authToken ? null : this.options.apiKey,
        }, {
            platform,
            notificationHandler: notificationHandler(this),
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

    this.getSocket = () => {
        if (!this._socket) {
            throw new Error('Client is not connected');
        }
        return this._socket;
    };

    setupVoiceMethods(this);
    setupPaymentMethods(this);
    setupCustomerMethods(this);
    setupMessagingMethods(this);
    setupNotificationMethods(this);
    setupAuthenticationMethods(this);

    const cleanup = (code) => {
        platform.log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
    };
    process.on('SIGINT', cleanup.bind(null));
    process.on('exit', cleanup.bind(null));
}

/**
 * Instantiate and connect an elarian client
 * @param {ElarianConfig} config
 */
Elarian.newInstance = async (config) => {
    const client = new Elarian(config);
    await client.connect();
    return client;
};

/**
 * Instantiate an elarian simulator client
 * @param {ElarianConfig} config
 */
function Simulator(config) {
    return new Elarian({
        ...config,
        isSimulator: true,
    });
}

/**
 * Instantiate and connect an elarian simulator client
 * @param {ElarianConfig} config
 */
Simulator.newInstance = async (config) => {
    const client = new Simulator(config);
    await client.connect();
    return client;
};

module.exports = (conf) => {
    platform = conf;
    return {
        Elarian,
        Customer,
        Simulator,
    };
};
