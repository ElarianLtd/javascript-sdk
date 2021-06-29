const Client = require('./client');

const {
    getStatus,
    addCashValue,
    getMediaType,
    ElarianMessages,
    getChannelProvider,
    getCustomerEventDirection,
} = require('./utils');

const {
    Cash,
    Duration,
    Timestamp,
    StringValue,
    PaymentStatus,
    PaymentChannel,
    VoiceCallStatus,
    UssdSessionStatus,
    MessagingChannel,
    MediaMessageBody,
    EmailMessageBody,
    InboundMessageBody,
    UssdInputMessageBody,
    LocationMessageBody,
    VoiceCallDialInput,
    VoiceCallQueueInput,
    PaymentChannelNumber,
    VoiceCallHangupCause,
    MessagingChannelNumber,
    CustomerEventDirection,
    SimulatorToServerCommand,
    VoiceCallInputMessageBody,
    SimulatorToServerCommandReply,
    ReceivePaymentSimulatorCommand,
    ReceiveMessageSimulatorCommand,
    UpdatePaymentStatusSimulatorCommand,
} = ElarianMessages;

/**
 * Instantiate an elarian simulator client
 * @class
 * @extends Client
 * @param {ClientConfig} config
 */
function Simulator(config) {
    Client.call(this, { ...config, isSimulator: true });

    this.eventListeners = {
        ...this.eventListeners,

        sendMessage: null,
        makeVoiceCall: null,
        checkoutPayment: null,
        sendChannelPayment: null,
        sendCustomerPayment: null,
    };
}

Simulator.prototype = Object.create(Client.prototype, { constructor: Simulator });

/**
 * Initiate a message request
 * @param {string} phoneNumber
 * @param {MessagingChannelNumber} channelNumber
 * @param {string} sessionId
 * @param {SimulatorMessageBody[]} parts
 * @param {Cash} cost
 * @memberof Simulator
 */
// eslint-disable-next-line max-len
Simulator.prototype.receiveMessage = function receiveMessage(phoneNumber, channelNumber, sessionId, parts = [], cost = { amount: 0, currencyCode: 'KES' }) {
    const socket = this.getSocket();

    const messageParts = parts.map((part) => {
        const keys = Object.keys(part);

        if (keys.includes('text')) {
            return new InboundMessageBody().setText(part.text);
        }

        if (keys.includes('ussd')) {
            const ussd = new UssdInputMessageBody()
                .setStatus(getStatus(part.ussd.status, UssdSessionStatus))
                .setText(new StringValue().setValue(part.ussd.text));
            return new InboundMessageBody().setUssd(ussd);
        }

        if (keys.includes('media')) {
            const mediaObj = new MediaMessageBody()
                .setUrl(part.media.url)
                .setMedia(getMediaType(part.media.type));
            return new InboundMessageBody().setMedia(mediaObj);
        }

        if (keys.includes('location')) {
            const {
                label,
                address,
                latitude,
                longitude,
            } = part.location;
            const locationObj = new LocationMessageBody()
                .setLatitude(latitude)
                .setLongitude(longitude)
                .setLabel(new StringValue().setValue(label))
                .setAddress(new StringValue().setValue(address));
            return new InboundMessageBody().setLocation(locationObj);
        }

        if (keys.includes('email')) {
            const { email } = part;
            const emailObj = new EmailMessageBody()
                .setSubject(email.subject)
                .setBodyPlain(email.bodyPlain)
                .setBodyHtml(email.bodyHtml)
                .setCcListList(email.ccList)
                .setBccListList(email.bccList)
                .setAttachmentsList(email.attachments);

            return new InboundMessageBody().setEmail(emailObj);
        }

        if (keys.includes('voice')) {
            let dialObj;
            if (part.voice.dialData) {
                const { dialData } = part.voice;
                dialObj = new VoiceCallDialInput()
                    .setDestinationNumber(dialData.destinationNumber)
                    .setStartedAt(new Timestamp().setSeconds(Math.floor(dialData.startedAt)))
                    .setDuration(new Duration().setSeconds(Math.floor(dialData.duration)));
            }
            let queueObj;
            if (part.queueData) {
                const { queueData } = part.voice;
                queueObj = new VoiceCallQueueInput()
                    .setEnqueuedAt(new Timestamp().setSeconds(Math.floor(queueData.enqueuedAt)))
                    .setDequeuedAt(new Timestamp().setSeconds(Math.floor(queueData.dequeuedAt)))
                    .setDequeuedToNumber(new StringValue().setValue(queueData.dequeuedToNumber))
                    // eslint-disable-next-line max-len
                    .setDequeuedToSessionId(new StringValue().setValue(queueData.dequeuedToSessionId))
                    .setQueueDuration(new Duration().setSeconds(Math.floor(queueData.duration)));
            }

            let voiceObj = new VoiceCallInputMessageBody()
                // eslint-disable-next-line max-len
                .setDirection(getCustomerEventDirection(part.voice.direction, CustomerEventDirection))
                // eslint-disable-next-line max-len
                .setStartedAt(new Timestamp().setSeconds(Math.floor(part.voice.startedAt || (Date.now() / 1000))))
                .setDialData(dialObj)
                .setQueueData(queueObj);

            if (part.voice.status) {
                voiceObj = voiceObj.setStatus(getStatus(part.voice.status, VoiceCallStatus));
            }

            if (part.voice.hangupCause) {
                voiceObj = voiceObj.setHangupCause(getChannelProvider(part.voice.hangupCause, VoiceCallHangupCause, /^VOICE_CALL_HANGUP_CAUSE_/));
            }

            if (part.voice.dtmfDigits) {
                // eslint-disable-next-line max-len
                voiceObj = voiceObj.setDtmlDigits(new StringValue().setValue(part.voice.dtmfDigits));
            }

            if (part.voice.recordingUrl) {
                // eslint-disable-next-line max-len
                voiceObj = voiceObj.setRecordingUrl(new StringValue().setValue(part.voice.recordingUrl));
            }

            return new InboundMessageBody().setVoice(voiceObj);
        }

        throw new Error(`Invalid message part: ${JSON.stringify(part)}`);
    });

    const cmd = new ReceiveMessageSimulatorCommand()
        .setCustomerNumber(phoneNumber)
        .setSessionId(new StringValue().setValue(sessionId))
        .setCost(new Cash().setCurrencyCode(cost.currencyCode).setAmount(cost.amount))
        .setDuration(new Duration().setSeconds(0))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel)),
        )
        .setPartsList(messageParts);

    const req = new SimulatorToServerCommand()
        .setReceiveMessage(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = SimulatorToServerCommandReply
                            .deserializeBinary(value.data);
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            message: (res.getMessage() || { toObject: () => {} }).toObject(),
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
 * Initiate payment request
 * @param {string} transactionId
 * @param {string} customerNumber
 * @param {PaymentChannelNumber} channelNumber
 * @param {Cash} value
 * @param {string} status one of [queued, pending_confirmation, pending_validation, validated,
 * invalid_request, not_supported, insufficient_funds, application_error, not_allowed,
 * duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success,
 * pass_through, failed, throttled, expired, rejected, reversed]
 * @memberof Simulator
 */
// eslint-disable-next-line max-len
Simulator.prototype.receivePayment = function receivePayment(transactionId, customerNumber, channelNumber, value, status) {
    const socket = this.getSocket();

    let cmd = new ReceivePaymentSimulatorCommand()
        .setCustomerNumber(customerNumber)
        .setTransactionId(transactionId)
        .setStatus(getStatus(status, PaymentStatus))
        .setChannelNumber(
            new PaymentChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, PaymentChannel)),
        );

    cmd = addCashValue(cmd, value);

    const req = new SimulatorToServerCommand()
        .setReceivePayment(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: ({ data }) => {
                    try {
                        const res = SimulatorToServerCommandReply
                            .deserializeBinary(data);
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            message: (res.getMessage() || { toObject: () => {} }).toObject(),
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
 * Update payment status
 * @param {string} transactionId
 * @param {string} status
 * @memberof Simulator
 */
Simulator.prototype.updatePaymentStatus = function updatePaymentStatus(transactionId, status) {
    const socket = this.getSocket();

    const cmd = new UpdatePaymentStatusSimulatorCommand()
        .setTransactionId(transactionId)
        .setStatus(getStatus(status, PaymentStatus));

    const req = new SimulatorToServerCommand()
        .setUpdatePaymentStatus(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = SimulatorToServerCommandReply
                            .deserializeBinary(value.data);
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            message: (res.getMessage() || { toObject: () => {} }).toObject(),
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

module.exports = Simulator;
