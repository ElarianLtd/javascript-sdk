const EventEmitter = require('events');
const { ElarianMessages } = require('./utils');

const {
    WebhookResponse,
    StreamNotificationRequest,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async sendWebhookResponse(params) {
        try {
            const {
                sessionId
            } = params;

            if (!sessionId) {
                throw new Error('sessionId is required');
            }

            const req = new WebhookResponse()
                .setAppId(this.options.appId)
                .setSessionId(sessionId);
            const res = await this._stub.sendWebhookResponse(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    streamNotifications() {
        try {
            const req = new StreamNotificationRequest()
                .setAppId(this.options.appId);
            const upstream = this._stub.streamNotifications(req);
            const downstream = new EventEmitter();
            const convertEntry = (entry) => {
                if (entry) {
                    return entry.toObject();
                }
            }
            upstream.on('data', (notif) => {
                const data = {
                    appId: notif.getAppId(),
                    timestamp: notif.getTimestamp().getSeconds(),

                    messagingConsentStatus: convertEntry(notif.getMessagingConsentStatus()),
                    messagingStatusStatus: convertEntry(notif.getMessagingSessionStatus()),
                    reminder: convertEntry(notif.getReminder()),
                    receivedMessage: convertEntry(notif.getReceivedMessage()),
                    messageStatus: convertEntry(notif.getMessageStatus()),
                    ussdSession: convertEntry(notif.getUssdSession()),
                    voiceCall: convertEntry(notif.getVoiceCall()),
                    receivedPayment: convertEntry(notif.getReceivedPayment()),
                    paymentStatus: convertEntry(notif.getPaymentStatus()),

                };
                Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
                downstream.emit('data', data);
            });
            upstream.on('end', () => { downstream.emit('end'); });
            upstream.on('error', (error) => { downstream.emit('error', new Error(error.details)); });
            return downstream;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    Client,
    Enums: { }
};