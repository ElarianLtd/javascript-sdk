/* global window */
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');
const RSocketWebSocketClient = require('rsocket-websocket-client').default;

const lib = require('./index')({
    isBrowser: true,
    log: (() => {
        if (window.DEBUG) {
            return window.console;
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
    getTransport: ({
        port = 443,
        resumeToken,
        bufferSize = 16,
        host = 'web.elarian.com',
        sessionDurationSeconds = 60,
    }) => {
        if (resumeToken) {
            return new RSocketResumableTransport(
                () => new RSocketWebSocketClient({ url: `ws${port === 443 ? 's' : ''}://${host}:${port}` }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new RSocketWebSocketClient({ url: `ws${port === 443 ? 's' : ''}://${host}:${port}` }, BufferEncoders);
    },
});

// FIXME: Hack Buffer in browser
if (!window.Buffer) {
    window.Buffer = Uint8Array;
}
module.exports = lib;
