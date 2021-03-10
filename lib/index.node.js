const { RSocketTlsClient } = require('rsocket-tcp-client');
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');

const HOST = 'tcp.elarian.dev';
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
                () => new RSocketTlsClient({
                    host: HOST,
                    port: PORT,
                    servername: HOST,
                }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new RSocketTlsClient({ host: HOST, port: PORT, servername: HOST }, BufferEncoders);
    },
});

module.exports = lib;
