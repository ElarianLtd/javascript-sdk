const { RSocketTlsClient } = require('rsocket-tcp-client');
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');

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
            port = 443,
            resumeToken,
            bufferSize = 128,
            host = 'tcp.elarian.com',
            sessionDurationSeconds = 60,
        } = options;

        if (resumeToken) {
            return new RSocketResumableTransport(
                () => new RSocketTlsClient({
                    host,
                    port,
                    servername: host,
                }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new RSocketTlsClient({ host, port, servername: host }, BufferEncoders);
    },
});

module.exports = lib;
