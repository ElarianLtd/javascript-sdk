/* eslint-disable global-require */

const Elarian = require('./elarian');

/**
 * Initialize a client
 * @param {ClientConfig} config
 * @returns {Elarian}
 */
const initializeClient = (config, connectOpts = {}) => new Promise((resolve, reject) => {
    try {
        const client = new Elarian(config);
        client.on('error', (err) => reject(err));
        client.on('connected', () => resolve(client));
        client.connect(connectOpts);
    } catch (error) {
        reject(error);
    }
});

module.exports = {
    Elarian,
    initializeClient,
};
