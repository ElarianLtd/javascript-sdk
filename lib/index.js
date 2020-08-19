'use strict';

const _ = require('lodash');
const grpc = require('grpc');
const validate  = require('validate.js');

const { promisify, ElarianService } = require('./utils');

const voice = require('./voice');
const payment = require('./payment');
const customer = require('./customer');
const messaging = require('./messaging');
const auth = require('./authentication');
const notification = require('./notification');

const HOST = 'api.elarian.dev:443';

class Client {

    constructor(options) {
        this.options = _.cloneDeep(options);
        const constraints = {
            apiKey: {
                type: 'string',
            },
            authToken: {
                type: 'string',
            },
            appId: {
                type: 'string'
            }
        };

        const error = validate(this.options, constraints);
        if (error) {
            throw error;
        }

        const { apiKey, authToken, appId } = this.options;
        if (!apiKey && !authToken) {
            throw new Error('Either one of apiKey or authToken is required');
        }

        const credentials = grpc.credentials.combineChannelCredentials(
            grpc.credentials.createSsl(),
            grpc.credentials.createFromMetadataGenerator((params, callback) => {
                const metadata = new grpc.Metadata();
                if (apiKey) {
                    metadata.set('api-key', apiKey);
                }
                if (authToken) {
                    metadata.set('auth-token', authToken);
                }
                callback(null, metadata);
            }),
        );
        this._stub = promisify(new ElarianService(HOST, credentials));

        // Auth
        const authClient = new auth.Client(this.options, this._stub);
        this.authToken = authClient.authToken;

        // Customer
        const customerClient = new customer.Client(this.options, this._stub);
        this.getCustomerState = customerClient.getCustomerState;
        this.adoptCustomerState = customerClient.adoptCustomerState;
        this.addCustomerReminder = customerClient.addCustomerReminder;
        this.addCustomerReminderByTag = customerClient.addCustomerReminderByTag;
        this.cancelCustomerReminder = customerClient.cancelCustomerReminder;
        this.cancelCustomerReminderByTag = customerClient.cancelCustomerReminderByTag;
        this.updateCustomerTag = customerClient.updateCustomerTag;
        this.deleteCustomerTag = customerClient.deleteCustomerTag;
        this.updateCustomerSecondaryId = customerClient.updateCustomerSecondaryId;
        this.deleteCustomerSecondaryId = customerClient.deleteCustomerSecondaryId;
        this.updateCustomerMetadata = customerClient.updateCustomerMetadata;
        this.deleteCustomerMetadata = customerClient.deleteCustomerMetadata;

        // Messaging
        const messagingClient = new messaging.Client(this.options, this._stub);
        this.sendMessage = messagingClient.sendMessage;
        this.sendMessageByTag = messagingClient.sendMessageByTag;
        this.replyToMessage = messagingClient.replyToMessage;
        this.messagingConsent = messagingClient.messagingConsent;

        // Payment
        const paymentClient = new payment.Client(this.options, this._stub);
        this.sendPayment = paymentClient.sendPayment;
        this.checkoutPayment = paymentClient.checkoutPayment;

        // Voice
        const voiceClient = new voice.Client(this.options, this._stub);
        this.makeVoiceCall = voiceClient.makeVoiceCall;

        // Notifcation
        const notificationClient = new notification.Client(this.options, this._stub);
        this.sendWebhookResponse = notificationClient.sendWebhookResponse;
        this.streamNotifications = notificationClient.streamNotifications;
    }
}


module.exports = {
    Client,
    ...auth.Enums,
    ...voice.Enums,
    ...payment.Enums,
    ...customer.Enums,
    ...messaging.Enums,
    ...notification.Enums,
};
