const { ElarianMessages } = require('./utils');

const {
    UssdMenu,
    WebhookResponse,
    VoiceCallAction,
} = ElarianMessages;

let notifOptions;



module.exports = (client, options) => {
    notifOptions = options;

    return client;
};
