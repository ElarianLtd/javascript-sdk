const { Signale } = require('signale');
const RSocketTcpClient = require('rsocket-tcp-client').default;
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');

const HOST = '20.50.102.116';
const PORT = 8082;

const lib = require('./index')({
    isBrowser: false,
    log: new Signale({
        interactive: false,
        scope: 'elarian',
    }),
    getTransport: (options) => {
        const {
            resumeToken,
            bufferSize = 128,
            sessionDurationSeconds = 60,
        } = options;
        if (resumeToken) {
            return new RSocketResumableTransport(
                () => new RSocketTcpClient({ host: HOST, port: PORT }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new RSocketTcpClient({ host: HOST, port: PORT }, BufferEncoders);
    },
});

module.exports = lib;
