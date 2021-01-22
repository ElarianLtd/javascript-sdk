const {
    addCustomer,
    ElarianMessages,
    getMessageDeliveryStatusString,
    addVoiceCallActions,
} = require('./utils');

const { Customer } = require('./customer');

const {
    OutboundMessage,
    MessagingChannel,
    SendMessageCommand,
    AppToServerCommand,
    OutboundMessageBody,
    MessagingChannelNumber,
    AppToServerCommandReply,
    VoiceCallDialplanMessageBody,
} = ElarianMessages;

let voiceOptions;

/**
 * Initiate a voice call to customer from channelNumber
 * @param {Customer} customer
 * @param {string} channelNumber
 * @param {VoiceAction[]} actions
 * @returns {VoiceStatus}
 * @memberof Elarian.prototype
 */
const makeVoiceCall = (customer, channelNumber, actions = []) => {
    const socket = voiceOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const { customerNumber } = customer;
    if (!customerNumber) {
        // FIXME: Have Elarian return the customer number on fetch state?
        throw new Error('customerNumber is not setup on this customer');
    }

    let cmd = new SendMessageCommand()
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber)
                .setChannel(MessagingChannel.MESSAGING_CHANNEL_VOICE),
        );
    cmd = addCustomer(cmd, customer);

    const message = new OutboundMessage();
    const messageBody = new OutboundMessageBody();
    const dialPlan = addVoiceCallActions(new VoiceCallDialplanMessageBody(), actions);
    messageBody.setVoice(dialPlan);
    message.setBody(messageBody);
    cmd.setMessage(message);

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
    voiceOptions = options;
    /* eslint-disable no-param-reassign */
    client.makeVoiceCall = makeVoiceCall;
    /* eslint-enable no-param-reassign */
    return client;
};
