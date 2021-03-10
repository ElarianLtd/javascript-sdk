/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require('./state');
require('./payment');
require('./messaging');
require('./authentication');

const Client = require('./client');
const Elarian = require('./elarian');
const Simulator = require('./simulator');

module.exports = (conf) => {
    Client.prototype.platform = conf;
    return {
        Elarian,
        Simulator,
    };
};
