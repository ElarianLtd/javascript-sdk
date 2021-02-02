const RSocketTcpClient = require('rsocket-tcp-client').default;
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');

const HOST = '20.50.102.116';
const PORT = 8082;

const lib = require('./index')({
    isBrowser: false,
    log: (() => {
        if (process.env.DEBUG) {
            return console;
        }
        return {
            info: () => {},
            debug: () => {},
            // eslint-disable-next-line no-console
            warn: console.warn,
            // eslint-disable-next-line no-console
            error: console.error,
        };
    })(),
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
