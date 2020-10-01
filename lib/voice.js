const {
    ElarianMessages,
    addChannelNumber,
    addCustomerNumber,
    addVoiceCallActions,
} = require('./utils');

const {
    VoiceChannel,
    WebhookResponse,
    VoiceChannelNumber,
    MakeVoiceCallRequest,
} = ElarianMessages;

let voiceOptions;

const makeVoiceCall = async ({ customerNumber, channelNumber } = {}) => {
    try {
        const {
            appId,
            orgId,
            stub,
        } = voiceOptions;

        let req = new MakeVoiceCallRequest()
            .setOrgId(orgId)
            .setAppId(appId);

        req = addCustomerNumber(req, customerNumber);
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
    voiceOptions = options;

    /* eslint-disable no-param-reassign */
    client.makeVoiceCall = makeVoiceCall;
    client.replyToVoiceCall = replyToVoiceCall;
    /* eslint-enable no-param-reassign */
    return client;
};
