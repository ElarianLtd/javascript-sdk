/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require('./state');
require('./voice');
require('./payment');
require('./messaging');
require('./notification');
require('./authentication');

const Elarian = require('./client');
const Customer = require('./customer');
const Simulator = require('./simulator');

module.exports = (conf) => {
    Elarian.prototype.platform = conf;
    return {
        Elarian,
        Customer,
        Simulator,
    };
};
