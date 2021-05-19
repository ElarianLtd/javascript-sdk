/* global window */
const { RSocketResumableTransport, BufferEncoders } = require('rsocket-core');
const RSocketWebSocketClient = require('rsocket-websocket-client').default;

const HOST = 'web.elarian.dev';
const PORT = 443;

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
        resumeToken,
        bufferSize = 16,
        sessionDurationSeconds = 60,
    }) => {
        if (resumeToken) {
            return new RSocketResumableTransport(
                () => new RSocketWebSocketClient({ url: `wss://${HOST}:${PORT}` }, BufferEncoders),
                {
                    bufferSize,
                    resumeToken,
                    sessionDurationSeconds,
                },
                BufferEncoders,
            );
        }
        return new RSocketWebSocketClient({ url: `wss://${HOST}:${PORT}` }, BufferEncoders);
    },
});

// FIXME: Hack Buffer in browser
if (!window.Buffer) {
    window.Buffer = Uint8Array;
}
module.exports = lib;
