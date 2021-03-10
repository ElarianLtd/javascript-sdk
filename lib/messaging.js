/* eslint-disable no-underscore-dangle */
const {
    ElarianMessages,
    addTag,
    addMessage,
    addCustomer,
    getStatusString,
    addCustomerNumber,
    getMessageConsentUpdateAction,
    getMessageDeliveryStatusString,
    getChannelProvider,
} = require('./utils');

const Elarian = require('./elarian');
const Customer = require('./customer');

const {
    MessagingChannel,
    AppToServerCommand,
    SendMessageCommand,
    ReplyToMessageCommand,
    SendMessageTagCommand,
    MessageDeliveryStatus,
    MessagingChannelNumber,
    AppToServerCommandReply,
    MessagingConsentUpdateStatus,
    UpdateMessagingConsentCommand,
} = ElarianMessages;

/**
 * Send message by tag
 * @param {Tag} tag
 * @param {MessagingChannelNumber} channelNumber
 * @param {Message} message
 * @memberof Elarian
 * @returns {TagUpdateReply}
 */
Elarian.prototype.sendMessageByTag = function sendMessageByTag(tag, channelNumber, message) {
    const socket = this.getSocket();

    let cmd = new SendMessageTagCommand()
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel)),
        );
    cmd = addTag(cmd, tag);
    cmd = addMessage(cmd, message);
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
 * Send a message
 * @param {Customer} customer
 * @param {MessagingChannelNumber} channelNumber
 * @param {Message} message
 * @returns {MessageReply}
 * @ignore
 */
Elarian.prototype._sendMessage = function sendMessage(customer, channelNumber, message) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!customer.customerNumber) {
        throw new Error('sendMessage() requires a customer with customerNumber');
    }

    let cmd = new SendMessageCommand()
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel)),
        );
    cmd = addCustomer(cmd, customer);
    cmd = addMessage(cmd, message);
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
                            status: getMessageDeliveryStatusString(res.getStatus()),
                            description: res.getDescription(),
                            sessionId: (res.getSessionId() || {
                                getValue: () => undefined,
                            }).getValue(),
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
 * Reply to a received message
 * @param {Customer} customer
 * @param {string} replyToMessageId
 * @param {Message} body
 * @returns {MessageReply}
 * @ignore
 */
// eslint-disable-next-line max-len
Elarian.prototype._replyToMessage = async function replyToMessage(customer, replyToMessageId, message) {
    const socket = this.getSocket();

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
        .setMessageId(replyToMessageId);
    cmd = addMessage(cmd, message);
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
 * Allow or block a customer from receiving messages from a channel
 * @param {Customer} customer
 * @param {MessagingChannelNumber} channelNumber
 * @param {string} action allow or block
 * @returns {ConsentUpdateReply}
 * @ignore
 */
// eslint-disable-next-line max-len
Elarian.prototype._updateMessagingConsent = function updateMessagingConsent(customer, channelNumber, action) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const { customerNumber } = customer;
    if (!customerNumber) {
        // FIXME: Have Elarian return the customer number on fetch state?
        throw new Error('customerNumber is not setup on this customer');
    }

    let cmd = new UpdateMessagingConsentCommand()
        .setUpdate(getMessageConsentUpdateAction(action))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel)),
        );
    cmd = addCustomerNumber(cmd, customerNumber);

    const req = new AppToServerCommand()
        .setUpdateMessagingConsent(cmd);

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
                            .getUpdateMessagingConsent();
                        const result = {
                            status: getStatusString(res.getStatus(), MessagingConsentUpdateStatus),
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

module.exports = Elarian;
