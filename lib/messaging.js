const {
    ElarianMessages,
    addTag,
    addMessage,
    addCustomer,
    getStatusString,
    addCustomerNumber,
    getMessageConsentUpdateAction,
    getChannelProvider,
} = require('./utils');

const Elarian = require('./client');
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
 * Send a message
 * @param {Customer} customer
 * @param {MessagingChannelNumber} channelNumber
 * @param {Message} message
 * @returns {MessageStatus}
 * @memberof Elarian.prototype
 */
Elarian.prototype.sendMessage = function sendMessage(customer, channelNumber, message) {
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
 * @param {Message} body
 * @memberof Elarian.prototype
 * @returns {WorkStatus}
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
 * Reply to a received message
 * @param {Customer} customer
 * @param {string} replyToMessageId
 * @param {Message} body
 * @returns {MessageStatus}
 * @memberof Elarian.prototype
 */
// eslint-disable-next-line max-len
Elarian.prototype.replyToMessage = async function replyToMessage(customer, replyToMessageId, message) {
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
 * @returns {ConsentStatus}
 * @memberof Elarian.prototype
 */
// eslint-disable-next-line max-len
Elarian.prototype.updateMessagingConsent = function updateMessagingConsent(customer, channelNumber, action) {
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
