
const {
    ElarianMessages,
    addCustomer,
    addChannelNumber,
} = require('./utils');

const {
    VoiceChannel,
    VoiceChannelNumber,
    MakeVoiceCallRequest,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async makeVoiceCall(params) {
        try {
            let {
                productId,
                customerId,
                customerNumber,
                channelNumber,
            } = params;

            if (!productId || !channelNumber) {
                throw new Error('productId, channelNumber are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new MakeVoiceCallRequest()
                .setAppId(this.options.appId)
                .setProductId(productId);

            req = addCustomer(req, params);
            req = addChannelNumber(req, params, VoiceChannelNumber);

            const res = await this._stub.makeVoiceCall(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                sessionId: (res.getSessionId() || {
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
}

module.exports = {
    Client,
    Enums: {
        VoiceChannel: {
            UNSPECIFIED: VoiceChannel.VOICE_CHANNEL_UNSPECIFIED,
            TELCO: VoiceChannel.VOICE_CHANNEL_TELCO,
        },
    }
};