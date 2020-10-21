const {
    ElarianMessages,
} = require('./utils');

const {
    WebhookResponse,
    UssdMenu,
} = ElarianMessages;

let ussdOptions;

const replyToUssdSession = async (sessionId, menu) => {
    const {
        stub,
        orgId,
        appId,
        extraHeaders,
    } = ussdOptions;

    if (!sessionId) {
        throw new Error('Invalid sessionId');
    }

    const req = new WebhookResponse()
        .setOrgId(orgId)
        .setAppId(appId)
        .setSessionId(sessionId)
        .setUssdMenu(new UssdMenu().setText(menu.text).setIsTerminal(menu.isTerminal));

    const res = await stub.sendWebhookResponse(req, extraHeaders);
    const result = {
        status: res.getStatus(),
        description: res.getDescription(),
    };
    return result;
};

module.exports = (client, options) => {
    ussdOptions = options;

    /* eslint-disable no-param-reassign */
    client.replyToUssdSession = replyToUssdSession;
    /* eslint-enable no-param-reassign */
    return client;
};
