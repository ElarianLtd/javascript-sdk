/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require('./state');
require('./payment');
require('./messaging');
require('./authentication');

const Client = require('./client');
const Elarian = require('./elarian');
const Simulator = require('./simulator');

/**
 * Initialize a client
 * @param {ClientConfig} config
 * @returns {Elarian}
 */
const initializeClient = (config, connectOpts = {}) => new Promise((resolve, reject) => {
    try {
        const client = config.isSimulator ? new Simulator(config) : new Elarian(config);
        client.on('error', () => reject());
        client.on('connected', () => resolve(client));
        client.connect(connectOpts);
    } catch (error) {
        reject(error);
    }
});

module.exports = (conf) => {
    Client.prototype.platform = conf;
    return {
        Elarian,
        Simulator,

        initializeClient,
        /**
         * Initialize a simulator client
         * @param {ClientConfig} config
         * @returns {Simulator}
         */
        // eslint-disable-next-line max-len
        initializeSimulator: (config, connectOpts = {}) => initializeClient({ ...config, isSimulator: true }, connectOpts),
    };
};
