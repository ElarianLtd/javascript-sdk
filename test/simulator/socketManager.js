const Ws = require('ws');

const { log } = require('../../lib/utils');
const { getResponseHandler } = require('./responseQueueManager');

const SOCKET_URL = 'wss://simulator.elarian.com/api/socket';
const SOCKET_CLOSED = 3;
const SOCKET_OPEN = 1;

class SocketManager {
    constructor() {
        this.socket = null;

        this.onClose = this.onClose.bind(this);
        this.connect = this.connect.bind(this);
        this.getSocket = this.getSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    onMessage(message) {
        try {
            const response = JSON.parse(message.data);
            getResponseHandler(response);
        } catch (ex) {
            log.error(`Failed to parse message data -> ${message.data} ex -> ${ex}`);
        }
    }

    onClose() {
        if (this.socket && this.socket.readyState === SOCKET_CLOSED) {
            this.socket.removeEventListener('message', this.onMessage);
            this.socket.removeEventListener('close', this.onClose);
            log.warn('Simulator disconnected');
            this.socket = null;
        }
    }

    connect() {
        return new Promise((resolve, reject) => {
            const SOCKET = new Ws(SOCKET_URL);

            SOCKET.addEventListener('message', this.onMessage);
            SOCKET.addEventListener('close', this.onClose);
            SOCKET.addEventListener('error', (err, message) => {
                if (SOCKET.readyState === SOCKET_CLOSED) {
                    reject(new Error(`Failed to connect: ${err} ${message}`));
                }
            });
            SOCKET.addEventListener('open', () => {
                this.socket = SOCKET;
                resolve();
            });
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }

    async getSocket() {
        if (!this.socket || this.socket.readyState !== SOCKET_OPEN) {
            await this.connect();
        }

        return this.socket;
    }

    async sendMessage(message) {
        if (!this.socket || this.socket.readyState !== SOCKET_OPEN) {
            await this.connect();
        }

        const messageStr = JSON.stringify(message);
        this.socket.send(messageStr);
    }
}

module.exports = new SocketManager();
