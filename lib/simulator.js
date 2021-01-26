const Elarian = require('./client');

const {
    getStatus,
    addCashValue,
    ElarianMessages,
    getChannelProvider,
} = require('./utils');

const {
    Duration,
    Timestamp,
    StringValue,
    PaymentStatus,
    PaymentChannel,
    VoiceCallStatus,
    MessagingChannel,
    InboundMessageBody,
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
 * @param {ElarianConfig} config
 */
function Simulator(config) {
    Elarian.call(this, { ...config, isSimulator: true });
}

Simulator.prototype = Object.create(Elarian.prototype, { constructor: Simulator });

/**
 * Instantiate and connect an elarian simulator client
 * @param {ElarianConfig} config
 */
Simulator.newInstance = async (config) => {
    const client = new Simulator(config);
    await client.connect();
    return client;
};

/**
 * Initiate a message request
 * @param {string} customerNumber
 * @param {MessagingChannelNumber} channelNumber
 * @param {string} sessionId
 * @param {SimulatorMessageBody[]} messageBodyParts
 * @memberof Simulator.prototype
 */
// eslint-disable-next-line max-len
Simulator.prototype.receiveMessage = function receiveMessage(customerNumber, channelNumber, sessionId, messageBodyParts = []) {
    const socket = this.getSocket();

    const parts = messageBodyParts.map((part) => {
        let voiceObj;
        if (part.voice) {
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

            voiceObj = new VoiceCallInputMessageBody()
                .setStatus(getStatus(part.status, VoiceCallStatus))
                .setDirection(getStatus(part.direction, CustomerEventDirection))
                .setHangupCause(getStatus(part.hangupCause, VoiceCallHangupCause))
                .setStartedAt(new Timestamp().setSeconds(Math.floor(part.startedAt)))
                .setDtmlDigits(new StringValue().setValue(part.dtmfDigits))
                .setRecordingUrl(new StringValue().setValue(part.recordingUrl))
                .setDialData(dialObj)
                .setQueueData(queueObj);
        }

        const obj = new InboundMessageBody()
            .setText(part.text)
            .setMedia(part.media)
            .setLocation(part.location)
            .setEmail(part.email)
            .setUssd(new StringValue().setValue(part.ussd))
            .setVoice(voiceObj);

        return obj;
    });
    const cmd = new ReceiveMessageSimulatorCommand()
        .setCustomerNumber(customerNumber)
        .setSessionId(new StringValue().setValue(sessionId))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel)),
        )
        .setPartsList(parts);

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
                            message: res.getMessage(),
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
 * @param {string} status
 * @memberof Simulator.prototype
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
                            message: res.getMessage(),
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
 * @memberof Simulator.prototype
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
                            message: res.getMessage(),
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
