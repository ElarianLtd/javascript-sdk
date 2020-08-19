const {
    promisify,
    ElarianService,
    ElarianMessages,
    addTag,
    addCustomer,
    addChannelNumber,
    addCustomerMessageBody,
} = require('./utils');

const {
    MediaType,
    MessagingChannel,
    SendMessageRequest,
    ReplyToMessageRequest,
    MessageDeliveryStatus,
    SendMessageTagRequest,
    MessagingConsentAction,
    MessagingConsentStatus,
    CustomerNumberProvider,
    MessagingConsentRequest,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async sendMessage(params) {
        try {
            let {
                body,
                productId,
                customerId,
                customerNumber,
                channelNumber,
            } = params;

            if (!productId || !channelNumber || !body) {
                throw new Error('productId, channelNumber and body are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new SendMessageRequest()
                .setAppId(this.options.appId)
                .setProductId(productId);

            req = addCustomer(req, params);
            req = addChannelNumber(req, params);
            req = addCustomerMessageBody(req, params);

            const res = await this._stub.sendMessage(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                messageId: (res.getMessageId() || {
                    getValue: () => undefined
                }).getValue(),
                customerId: (res.getCustomerId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async sendMessageByTag(params) {
        try {
            let {
                body,
                productId,
                tag,
                channelNumber,
            } = params;

            if (!productId || !channelNumber || !tag || !body) {
                throw new Error('productId, channelNumber, tag body are required');
            }


            let req = new SendMessageTagRequest()
                .setAppId(this.options.appId)
                .setProductId(productId);

            req = addTag(req, params);
            req = addChannelNumber(req, params);
            req = addCustomerMessageBody(req, params);

            const res = await this._stub.sendMessageByTag(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                workId: (res.getWorkId() || {
                    getValue: () => undefined
                }).getValue(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async replyToMessage(params) {
        try {
            let {
                body,
                productId,
                customerId,
                replyToMessageId,
            } = params;

            if (!customerId || !productId || !replyToMessageId || !body) {
                throw new Error('customerId, productId, replyToMessageId and body are required');
            }

            let req = new ReplyToMessageRequest()
                .setAppId(this.options.appId)
                .setProductId(productId)
                .setReplyToMessageId(replyToMessageId);

            req = addCustomer(req, params);
            req = addCustomerMessageBody(req, params);

            const res = await this._stub.replyToMessage(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                messageId: (res.getMessageId() || {
                    getValue: () => undefined
                }).getValue(),
                customerId: (res.getCustomerId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async messagingConsent(params) {
        try {
            let {
                action,
                customerId,
                customerNumber,
                channelNumber,
            } = params;

            if (!action || !channelNumber) {
                throw new Error('action, channelNumber are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new MessagingConsentRequest()
                .setAppId(this.options.appId)
                .setAction(action || MessagingConsentAction.MESSAGING_CONSENT_ACTION_UNSPECIFIED);

            req = addCustomer(req, params);
            req = addChannelNumber(req, params);

            const res = await this._stub.messagingConsent(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                customerId: (res.getCustomerId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    Client,
    Enums: {
        NumberProvider: {
            UNSPECIFIED: CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_UNSPECIFIED,
            FACEBOOK: CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_FACEBOOK,
            TELCO: CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELCO,
            TELEGRAM: CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELEGRAM,
        },

        MessagingChannel: {
            UNSPECIFIED: MessagingChannel.MESSAGING_CHANNEL_UNSPECIFIED,
            GOOGLE_RCS: MessagingChannel.MESSAGING_CHANNEL_GOOGLE_RCS,
            FACEBOOK_MESSENGER: MessagingChannel.MESSAGING_CHANNEL_FB_MESSENGER,
            SMS: MessagingChannel.MESSAGING_CHANNEL_SMS,
            TELEGRAM: MessagingChannel.MESSAGING_CHANNEL_TELEGRAM,
            WHATSAPP: MessagingChannel.MESSAGING_CHANNEL_WHATSAPP
        },

        MediaType: {
            UNSPECIFIED: MediaType.MEDIA_TYPE_UNSPECIFIED,
            IMAGE: MediaType.MEDIA_TYPE_IMAGE,
            AUDIO: MediaType.MEDIA_TYPE_AUDIO,
            VIDEO: MediaType.MEDIA_TYPE_VIDEO,
            DOCUMENT: MediaType.MEDIA_TYPE_DOCUMENT,
            VOICE: MediaType.MEDIA_TYPE_VOICE,
            STICKER: MediaType.MEDIA_TYPE_STICKER,
        },

        MessageDeliveryStatus: {
            UNSEPCIFIED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_UNSEPCIFIED,
            SENT: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_SENT,
            DELIVERED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_DELIVERED,
            READ: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_READ,
            RECEIVED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_RECEIVED,
            FAILED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_FAILED,
            NO_CONSENT: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_NO_CONSENT,
            NO_CAPABILITY: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_NO_CAPABILITY,
            EXPIRED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_EXPIRED,
            ONLY_TEMPLATE_ALLOWED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_ONLY_TEMPLATE_ALLOWED,
            INVALID_CHANNEL_NUMBER: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_INVALID_CHANNEL_NUMBER,
            NOT_SUPPORTED: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_NOT_SUPPORTED,
            INVALID_REPLY_TO_MESSAGE_ID: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_INVALID_REPLY_TO_MESSAGE_ID,
            INVALID_CUSTOMER_ID: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_INVALID_CUSTOMER_ID,
            DUPLICATE_REQUEST: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_DUPLICATE_REQUEST,
            TAG_NOT_FOUND: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_TAG_NOT_FOUND,
            CUSTOMER_NUMBER_NOT_FOUND: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_CUSTOMER_NUMBER_NOT_FOUND,
            DECOMMISSIONED_CUSTOMERID: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_DECOMMISSIONED_CUSTOMERID,
            INVALID_REQUEST: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_INVALID_REQUEST,
            APPLICATION_ERROR: MessageDeliveryStatus.MESSAGE_DELIVERY_STATUS_APPLICATION_ERROR,
        },

        ConsentAction: {
            UNSPECIFIED: MessagingConsentAction.MESSAGING_CONSENT_ACTION_UNSPECIFIED,
            OPT_IN: MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_IN,
            OPT_OUT: MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_OUT
        },

        ConsentStatus: {
            UNSEPCIFIED: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_UNSPECIFIED,
            OPT_IN_REQUEST_SENT: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_OPT_IN_REQUEST_SENT,
            OPT_IN_COMPLETED: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_OPT_IN_COMPLETED,
            OPT_OUT_COMPLETED: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_OPT_OUT_COMPLETED,
            INVALID_CHANNEL_NUMBER: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_INVALID_CHANNEL_NUMBER,
            DECOMMISSIONED_CUSTOMER_ID: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_DECOMMISSIONED_CUSTOMER_ID,
            APPLICATION_ERROR: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_APPLICATION_ERROR,
            OPT_IN_REQUEST_SENT: MessagingConsentStatus.MESSAGING_CONSENT_STATUS_OPT_IN_REQUEST_SENT,
        },
    }
};