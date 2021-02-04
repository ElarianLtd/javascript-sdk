const { /* RSocketTlsClient, */ RSocketTcpClient } = require('rsocket-tcp-client/build/RSocketTcpClient'); // FIXME: don't rely on build folder
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
        const ClientClass = RSocketTcpClient; // FIXME: Use -> RSocketTlsClient;
        if (resumeToken) {
            return new RSocketResumableTransport(
                () => new ClientClass({
                    host: HOST,
                    port: PORT,
                    enableTrace: true,
                }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new ClientClass({ host: HOST, port: PORT }, BufferEncoders);
    },
});

module.exports = lib;
