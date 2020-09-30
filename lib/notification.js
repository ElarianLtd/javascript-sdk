const { ElarianMessages } = require('./utils');

const {
    UssdMenu,
    WebhookResponse,
    VoiceCallAction,
} = ElarianMessages;

let notifOptions;

const replyToUssdSession = async (sessionId, menu) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = notifOptions;

        if (!sessionId) {
            throw new Error('Invalid sessionId');
        }

        const req = new WebhookResponse()
            .setOrgId(orgId)
            .setAppId(appId)
            .setSessionId(sessionId)
            .setUssdMenu(new UssdMenu().setText(menu.text).setIsTerminal(menu.isTerminal));

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

const replyToVoiceCall = async (sessionId, actions) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = notifOptions;

        if (!sessionId) {
            throw new Error('Invalid sessionId');
        }

        const req = new WebhookResponse()
            .setOrgId(orgId)
            .setAppId(appId)
            .setSessionId(sessionId);

        // TODO: Set voice actions

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
    notifOptions = options;

    /* eslint-disable no-param-reassign */
    client.replyToVoiceCall = replyToVoiceCall;
    client.replyToUssdSession = replyToUssdSession;

    /* eslint-enable no-param-reassign */
    return client;
};
