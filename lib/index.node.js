const { Signale } = require('signale');
const { BufferEncoders } = require('rsocket-core');
const RSocketTcpClient = require('rsocket-tcp-client').default;

const HOST = '20.50.102.116';
const PORT = 8082;

const lib = require('./index')({
    isBrowser: false,
    log: new Signale({
        interactive: false,
        scope: 'elarian',
    }),
    getTransport: () => new RSocketTcpClient({ host: HOST, port: PORT }, BufferEncoders),
});

module.exports = lib;
