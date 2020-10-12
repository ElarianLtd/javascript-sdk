const {
    ElarianMessages,
    addChannelNumber,
    addCustomerNumber,
    addCustomerMessageBody,
    addTag,
    addCustomer,
} = require('./utils');

const {
    MessagingChannel,
    SendMessageRequest,
    ReplyToMessageRequest,
    SendMessageTagRequest,
    MessagingChannelNumber,
    MessagingConsentAction,
    MessagingConsentRequest,
} = ElarianMessages;

let messagingOptions;

const sendMessage = async (customer, channelNumber, body) => {
    try {
        const {
            stub,
            appId,
            orgId,
            Customer,
            extraHeaders,
        } = messagingOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        let req = new SendMessageRequest()
            .setOrgId(orgId)
            .setAppId(appId);

        req = addCustomer(req, customer);
        req = addChannelNumber(req, channelNumber, MessagingChannelNumber, MessagingChannel);
        req = addCustomerMessageBody(req, body);

        const res = await stub.sendMessage(req, extraHeaders);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
            messageId: (res.getMessageId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const sendMessageByTag = async (tag, channelNumber, body) => {
    try {
        const {
            stub,
            appId,
            orgId,
            extraHeaders,
        } = messagingOptions;

        let req = new SendMessageTagRequest()
            .setOrgId(orgId)
            .setAppId(appId);

        req = addTag(req, tag);
        req = addChannelNumber(req, channelNumber, MessagingChannelNumber, MessagingChannel);
        req = addCustomerMessageBody(req, body);

        const res = await stub.sendMessageByTag(req, extraHeaders);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            workId: (res.getWorkId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const replyToMessage = async (customer, replyToMessageId, body) => {
    try {
        const {
            stub,
            appId,
            orgId,
            Customer,
            extraHeaders,
        } = messagingOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        let { customerId } = customer;

        if (!customerId) {
            const state = await customer.getState();
            customerId = state.data.customerId;
        }

        let req = new ReplyToMessageRequest()
            .setOrgId(orgId)
            .setAppId(appId)
            .setCustomerId(customerId)
            .setReplyToMessageId(replyToMessageId);

        req = addCustomerMessageBody(req, body);

        const res = await stub.replyToMessage(req, extraHeaders);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
            messageId: (res.getMessageId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const messagingConsent = async (customer, channelNumber, action) => {
    try {
        const {
            stub,
            appId,
            orgId,
            Customer,
            extraHeaders,
        } = messagingOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        const { customerNumber } = customer;
        if (!customerNumber) {
            // FIXME: Have Elarian return the customer number on fetch state?
            throw new Error('customerNumber is not setup on this customer');
        }

        let req = new MessagingConsentRequest()
            .setOrgId(orgId)
            .setAppId(appId);

        if (action === 'opt-in') {
            req = req.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_IN);
        } else if (action === 'opt-out') {
            req = req.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_OUT);
        } else {
            req = req.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_UNSPECIFIED);
        }

        req = addCustomerNumber(req, customerNumber);
        req = addChannelNumber(req, channelNumber, MessagingChannelNumber, MessagingChannel);

        const res = await stub.messagingConsent(req, extraHeaders);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = (client, options) => {
    messagingOptions = {
        ...options,
        Customer: client.Customer,
    };

    /* eslint-disable no-param-reassign */
    client.sendMessage = sendMessage;
    client.replyToMessage = replyToMessage;
    client.sendMessageByTag = sendMessageByTag;
    client.messagingConsent = messagingConsent;
    /* eslint-enable no-param-reassign */
    return client;
};
