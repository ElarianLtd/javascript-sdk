const util = require('util');

const promisify = (client) => {
    const to = {};
    for (var k in client) {
        if (typeof client[k] != 'function') continue;
        to[k] = util.promisify(client[k].bind(client));
    }
    return to;
}

module.exports = {
    promisify
};