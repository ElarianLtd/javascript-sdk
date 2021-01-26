/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-underscore-dangle */
const _ = require('lodash');

const Elarian = require('./client');
const Customer = require('./customer');
const { connectRSocket } = require('./utils');

[
    'state',
    'voice',
    'payment',
    'messaging',
    'notification',
    'authentication',
].forEach((item) => {
    require(`./${item}`);
});

/**
 * Initialize client connection to the API server
 */
Elarian.prototype.connect = async function connect() {
    const { socket, transport } = await connectRSocket({
        ...this.options,
        authToken: this.options.authToken,
        apiKey: this.options.authToken ? null : this.options.apiKey,
    }, {
        ...this.configOptions,
        platform: this.platform,
        notificationHandler: this.notificationHandler(this),
    });
    this._socket = socket;
    this._transport = transport;
};

/**
 * Disconnect from the API server
 */
Elarian.prototype.disconnect = function disconnect() {
    if (this._socket) {
        this._transport.close();
        this._socket.close();
        // this._socket = null;
        // this._transport = null;
    }
};

/**
 *
 */
Elarian.prototype.getSocket = function getSocket() {
    if (!this._socket) {
        throw new Error('Client is not connected');
    }
    return this._socket;
};

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
    Elarian.call(this, { ...config, isSimulator: true });
}

Simulator.prototype = _.create(Elarian.prototype, { constructor: Simulator });

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
    Elarian.prototype.platform = conf;
    return {
        Elarian,
        Customer,
        Simulator,
    };
};
