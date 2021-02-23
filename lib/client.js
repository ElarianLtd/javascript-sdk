/* global window */
/* eslint-disable no-underscore-dangle */
const validate = require('validate.js');

const Customer = require('./customer');
const { connectRSocket } = require('./utils');

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
 * @class
 * @param {ElarianConfig} config
 */
function Elarian(config) {
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

        // App (core)
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

        // App (virtual)
        voiceCall: null,
        ussdSession: null,
        receivedSms: null,
        receivedEmail: null,
        receivedWhatsapp: null,
        receivedTelegram: null,
        receivedMessenger: null,
    };

    /**
     * Connect to the elarian server
     */
    this.connect = async function connect() {
        const { client, socket } = await connectRSocket({
            ...this.options,
            authToken: this.options.authToken,
            apiKey: this.options.authToken ? null : this.options.apiKey,
        }, {
            ...this.configOptions,
            platform: this.platform,
            notificationHandler: this.notificationHandler(this),
        });
        this._client = client;
        this._socket = socket;
    };

    this.getSocket = function getSocket() {
        if (!this._socket) {
            throw new Error('Client is not connected');
        }
        return this._socket;
    };

    /**
     * Disconnect from the elarian server
     */
    this.disconnect = function disconnect() {
        if (this._client) {
            this._client.close();
        }
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

    Customer.prototype.client = this;
    /**
     * A customer object. @see {@link Customer}
     * @class
     */
    this.Customer = Customer;
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

module.exports = Elarian;
