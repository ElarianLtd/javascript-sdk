const {
    ElarianMessages,
} = require('./utils');

const {
    WebhookResponse,
    UssdMenu,
} = ElarianMessages;

let messagingOptions;


module.exports = (client, options) => {
    messagingOptions = options;

    /* eslint-disable no-param-reassign */

    /* eslint-enable no-param-reassign */
    return client;
};
