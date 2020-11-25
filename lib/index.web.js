/* global window */
const RSocketWebSocketClient = require('rsocket-websocket-client').default;

const HOST = '20.50.102.116';
const PORT = 8082;

const lib = require('./index')({
    isBrowser: true,
    log: console,
    getTransport: () => new RSocketWebSocketClient({ url: `wss://${HOST}:${PORT}` }),
});

// FIXME: Hack Buffer in browser
if (!window.Buffer) {
    window.Buffer = Uint8Array;
}
module.exports = lib;
