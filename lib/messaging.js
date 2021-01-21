const {
    ElarianMessages,
    addTag,
    addCustomer,
    getStatusString,
    addChannelNumber,
    addCustomerNumber,
    addCustomerMessageBody,
} = require('./utils');

const { Customer } = require('./customer');

const {
    MessagingChannel,
    AppToServerCommand,
    SendMessageCommand,
    ReplyToMessageCommand,
    SendMessageTagCommand,
    MessagingConsentStatus,
    MessageDeliveryStatus,
    MessagingChannelNumber,
    MessagingConsentAction,
    AppToServerCommandReply,
    MessagingConsentCommand,
} = ElarianMessages;

let messagingOptions;

/**
 * Send a message
 * @param {Customer} customer
 * @param {MessagingChannelNumber} channelNumber
 * @param {Body} body
 * @returns {MessageStatus}
 * @memberof Client.prototype
 */
const sendMessage = (customer, channelNumber, body) => {
    const socket = messagingOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!customer.customerNumber) {
        throw new Error('sendMessage() requires a customer with customerNumber');
    }

    let cmd = new SendMessageCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addChannelNumber(cmd, channelNumber, MessagingChannelNumber, MessagingChannel);
    cmd = addCustomerMessageBody(cmd, body);
    const req = new AppToServerCommand()
        .setSendMessage(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getSendMessage();
                        const result = {
                            status: getStatusString(res.getStatus(), MessageDeliveryStatus),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            messageId: (res.getMessageId() || {
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

/**
 * Send message by tag
 * @param {Tag} tag
 * @param {MessagingChannelNumber} channelNumber
 * @param {Body} body
 * @memberof Client.prototype
 * @returns {WorkStatus}
 */
const sendMessageByTag = (tag, channelNumber, body) => {
    const socket = messagingOptions.getSocket();

    let cmd = new SendMessageTagCommand();
    cmd = addTag(cmd, tag);
    cmd = addChannelNumber(cmd, channelNumber, MessagingChannelNumber, MessagingChannel);
    cmd = addCustomerMessageBody(cmd, body);
    const req = new AppToServerCommand()
        .setSendMessageTag(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getTagCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Reply to a received message
 * @param {Customer} customer
 * @param {string} replyToMessageId
 * @param {Body} body
 * @returns {MessageStatus}
 * @memberof Client.prototype
 */
const replyToMessage = async (customer, replyToMessageId, body) => {
    const socket = messagingOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    let { customerId } = customer;

    if (!customerId) {
        const state = await customer.getState();
        customerId = state.customerId;
    }

    let cmd = new ReplyToMessageCommand()
        .setCustomerId(customerId)
        .setReplyToMessageId(replyToMessageId);
    cmd = addCustomerMessageBody(cmd, body);
    const req = new AppToServerCommand()
        .setReplyToMessage(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getSendMessage();
                        const result = {
                            status: getStatusString(res.getStatus(), MessageDeliveryStatus),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            messageId: (res.getMessageId() || {
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

/**
 * Opt in or out a customer from receiving messages from a channel
 * @param {Customer} customer
 * @param {MessagingChannelNumber} channelNumber
 * @param {opt-in|opt-out} action opt-in or opt-out
 * @returns {ConsentStatus}
 * @memberof Client.prototype
 */
const updateMessagingConsent = (customer, channelNumber, action) => {
    const socket = messagingOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const { customerNumber } = customer;
    if (!customerNumber) {
        // FIXME: Have Elarian return the customer number on fetch state?
        throw new Error('customerNumber is not setup on this customer');
    }

    let cmd = new MessagingConsentCommand();
    if (action === 'opt-in') {
        cmd = cmd.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_IN);
    } else if (action === 'opt-out') {
        cmd = cmd.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_OPT_OUT);
    } else {
        cmd = cmd.setAction(MessagingConsentAction.MESSAGING_CONSENT_ACTION_UNSPECIFIED);
    }
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = addChannelNumber(cmd, channelNumber, MessagingChannelNumber, MessagingChannel);
    const req = new AppToServerCommand()
        .setMessagingConsent(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getMessagingConsent();
                        const result = {
                            status: getStatusString(res.getStatus(), MessagingConsentStatus),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
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
    messagingOptions = options;
    /* eslint-disable no-param-reassign */
    client.sendMessage = sendMessage;
    client.replyToMessage = replyToMessage;
    client.sendMessageByTag = sendMessageByTag;
    client.updateMessagingConsent = updateMessagingConsent;
    /* eslint-enable no-param-reassign */
    return client;
};
