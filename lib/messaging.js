/* eslint-disable no-underscore-dangle */
const {
    ElarianMessages,
    addTag,
    addMessage,
    addCustomer,
    addCashCost,
    getStatusString,
    makeMessageParts,
    addCustomerNumber,
    getChannelProvider,
    getMessageReaction,
    getChannelNumberProvider,
    getMessageDeliveryStatus,
    getMessageSessionEndReason,
    getMessageConsentUpdateAction,
    getMessageDeliveryStatusString,
} = require('./utils');

const Elarian = require('./elarian');
const Customer = require('./customer');

const {
    Duration,
    Timestamp,
    StringValue,
    MessagingChannel,
    AppToServerCommand,
    SendMessageCommand,
    ReplyToMessageCommand,
    SendMessageTagCommand,
    MessageDeliveryStatus,
    MessagingChannelNumber,
    AppToServerCommandReply,
    ReplaySentMessageCommand,
    MessagingConsentUpdateStatus,
    ReplayReceivedMessageCommand,
    UpdateMessagingConsentCommand,
    ReplayMessagingSessionCommand,
    ReplayMessageStatusUpdateCommand,
    ReplayMessageReactionUpdateCommand,
    ReplayMessagingConsentUpdateCommand,
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
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
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
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
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
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
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

/**
 * Replay a messaging consent update event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {string} consent
 * @param {number} updatedAt
 */
// eslint-disable-next-line max-len
Elarian.prototype.replayMessagingConsentUpdate = function replayMessagingConsentUpdate(customerNumber, channelNumber, consent, updatedAt) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    let cmd = new ReplayMessagingConsentUpdateCommand()
        .setUpdate(getMessageConsentUpdateAction(consent))
        .setUpdatedAt(new Timestamp().setSeconds(Math.floor(updatedAt || 0)))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        );
    cmd = addCustomerNumber(cmd, customerNumber);

    const req = new AppToServerCommand()
        .setReplayMessagingConsentUpdate(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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

/**
 * Replay a message reaction update event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {string} messageId
 * @param {string} reaction
 * @param {number} updatedAt
 */
// eslint-disable-next-line max-len
Elarian.prototype.replayMessageReactionUpdate = function replayMessageReactionUpdate(customerNumber, channelNumber, messageId, reaction, updatedAt) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    let cmd = new ReplayMessageReactionUpdateCommand()
        .setReaction(getMessageReaction(reaction))
        .setProviderMessageId(messageId)
        .setUpdatedAt(new Timestamp().setSeconds(Math.floor(updatedAt || 0)))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        );
    cmd = addCustomerNumber(cmd, customerNumber);

    const req = new AppToServerCommand()
        .setReplayMessageReactionUpdate(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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

/**
 * Replay a messaging session event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {MessageSessionUpdate} sessionUpdate
 */
// eslint-disable-next-line max-len
Elarian.prototype.replayMessagingSession = function replayMessagingSession(customerNumber, channelNumber, sessionUpdate) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    if (!sessionUpdate) {
        throw new Error('sessionUpdate is required');
    }

    let cmd = new ReplayMessagingSessionCommand()
        .setProviderSessionId(sessionUpdate.sessionId)
        .setStartedAt(new Timestamp().setSeconds(Math.floor(sessionUpdate.startedAt || 0)))
        .setDuration(new Duration().setSeconds(sessionUpdate.duration))
        .setEndReason(getMessageSessionEndReason(sessionUpdate.reason))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        );
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = addCashCost(cmd, sessionUpdate.cost);

    const req = new AppToServerCommand()
        .setReplayMessagingSession(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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

/**
 * Replay a messaging status event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {MessageStatusUpdate} statusUpdate
 */
// eslint-disable-next-line max-len
Elarian.prototype.replayMessageStatusUpdate = function replayMessageStatusUpdate(customerNumber, channelNumber, statusUpdate) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    if (!statusUpdate) {
        throw new Error('statusUpdate is required');
    }

    let cmd = new ReplayMessageStatusUpdateCommand()
        .setProviderMessageId(statusUpdate.messageId)
        .setUpdatedAt(new Timestamp().setSeconds(Math.floor(statusUpdate.updatedAt || 0)))
        .setStatus(getMessageDeliveryStatus(statusUpdate.status))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        );
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = addCashCost(cmd, statusUpdate.cost);

    const req = new AppToServerCommand()
        .setReplayMessageStatusUpdate(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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

/**
 * Replay a received message event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {ReceivedMessage} receivedMessage
 */
// eslint-disable-next-line max-len
Elarian.prototype.replayReceivedMessage = function replayReceivedMessage(customerNumber, channelNumber, receivedMessage) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    if (!receivedMessage) {
        throw new Error('receivedMessage is required');
    }

    let cmd = new ReplayReceivedMessageCommand()
        .setProviderMessageId(receivedMessage.messageId)
        .setProviderSessionId(new StringValue(receivedMessage.sessionId))
        .setReceivedAt(new Timestamp().setSeconds(Math.floor(receivedMessage.receivedAt || 0)))
        .setInReplyTo(new StringValue(receivedMessage.inReplyTo))
        .setProvider(getChannelNumberProvider(receivedMessage.provider))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        )
        .setPartsList(makeMessageParts(receivedMessage.parts));
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = addCashCost(cmd, receivedMessage.cost);

    const req = new AppToServerCommand()
        .setReplayReceivedMessage(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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

/**
 * Replay a sent message event
 * @param {CustomerNumber} customerNumber
 * @param {MessagingChannel} channelNumber
 * @param {SentMessage} sentMessage
 */
// eslint-disable-next-line max-len
Elarian.prototype.replaySentMessage = function replaySentMessage(customerNumber, channelNumber, sentMessage) {
    const socket = this.getSocket();

    if (!customerNumber) {
        throw new Error('customerNumber is required');
    }

    if (!channelNumber) {
        throw new Error('channelNumber is required');
    }

    if (!sentMessage) {
        throw new Error('sentMessage is required');
    }

    let cmd = new ReplaySentMessageCommand()
        .setProviderMessageId(sentMessage.messageId)
        .setProviderSessionId(new StringValue(sentMessage.sessionId))
        .setSentAt(new Timestamp().setSeconds(Math.floor(sentMessage.sentAt || 0)))
        .setInReplyTo(new StringValue(sentMessage.inReplyTo))
        .setProvider(getChannelNumberProvider(sentMessage.provider))
        .setStatus(getMessageDeliveryStatus(sentMessage.status))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        );
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = addCashCost(cmd, sentMessage.cost);
    cmd = addMessage(cmd, sentMessage.message);

    const req = new AppToServerCommand()
        .setReplaySentMessage(cmd);

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
                            .getUpdateCustomerState();
                        const result = {
                            status: res.getStatus(),
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
