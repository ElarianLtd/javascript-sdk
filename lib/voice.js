const {
    ElarianMessages,
    addChannelNumber,
    addVoiceCallActions,
    addCustomer,
} = require('./utils');

const {
    VoiceChannel,
    WebhookResponse,
    VoiceChannelNumber,
    MakeVoiceCallRequest,
} = ElarianMessages;

let voiceOptions;

const makeVoiceCall = async (customer, channelNumber) => {
    try {
        const {
            appId,
            orgId,
            stub,
            Customer,
        } = voiceOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        const { customerNumber } = customer;
        if (!customerNumber) {
            // FIXME: Have Elarian return the customer number on fetch state?
            throw new Error('customerNumber is not setup on this customer');
        }

        let req = new MakeVoiceCallRequest()
            .setOrgId(orgId)
            .setAppId(appId);

        req = addCustomer(req, customer);
        req = addChannelNumber(req, channelNumber, VoiceChannelNumber, VoiceChannel);

        const res = await stub.makeVoiceCall(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            sessionId: (res.getSessionId() || {
                getValue: () => undefined,
            }).getValue(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const replyToVoiceCall = async (sessionId, actions) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = voiceOptions;

        if (!sessionId) {
            throw new Error('Invalid sessionId');
        }

        let req = new WebhookResponse()
            .setOrgId(orgId)
            .setAppId(appId)
            .setSessionId(sessionId);

        req = addVoiceCallActions(req, actions);

        const res = await stub.sendWebhookResponse(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = (client, options) => {
    voiceOptions = {
        ...options,
        Customer: client.Customer,
    };

    /* eslint-disable no-param-reassign */
    client.makeVoiceCall = makeVoiceCall;
    client.replyToVoiceCall = replyToVoiceCall;
    /* eslint-enable no-param-reassign */
    return client;
};
