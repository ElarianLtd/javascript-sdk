const {
    ElarianMessages,
    addChannelNumber,
    addCustomerNumber,
} = require('./utils');

const {
    MakeVoiceCallRequest,
    VoiceChannel,
    VoiceChannelNumber,
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

module.exports = (client, options) => {
    voiceOptions = options;

    /* eslint-disable no-param-reassign */
    client.makeVoiceCall = makeVoiceCall;

    /* eslint-enable no-param-reassign */
    return client;
};
