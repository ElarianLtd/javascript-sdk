const {
    ElarianMessages,
    addCustomerNumber,
} = require('./utils');

const {
    WebChannelNumber,
    WebActionCommand,
    AppToServerCommand,
    AppToServerCommandReply,
} = ElarianMessages;

let webOptions;

/**
 * Initiate a web action?
 * @param {CustomerNumber} customerNumber
 * @param {string} domain
 * @param {string} sessionId
 * @param {string} key
 * @param {Object} properties
 * @returns {PaymentStatus}
 * @memberof Client.prototype
 */
const webAction = (customerNumber, domain, sessionId, key, properties = {}) => {
    const socket = webOptions.getSocket();

    let cmd = new WebActionCommand();
    cmd = cmd
        .setSessionId(sessionId)
        .setKey(key)
        .setChannelNumber(new WebChannelNumber().setDomain(domain));
    Object.keys(properties).forEach((name) => {
        cmd.getPropertiesMap().set(name, properties[name]);
    });
    cmd = addCustomerNumber(cmd, customerNumber);
    const req = new AppToServerCommand()
        .setWebAction(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (item) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(item.data)
                            .getWebAction();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            transactionId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

module.exports = (client, options) => {
    webOptions = options;
    /* eslint-disable no-param-reassign */
    client.webAction = webAction;
    /* eslint-enable no-param-reassign */
    return client;
};
