/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require('./state');
require('./payment');
require('./messaging');
require('./notification');
require('./authentication');

const Elarian = require('./elarian');
const Simulator = require('./simulator');

module.exports = (conf) => {
    Elarian.prototype.platform = conf;
    return {
        Elarian,
        Simulator,
    };
};
