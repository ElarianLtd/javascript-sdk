const Client = require('./client');

const {
    getStatus,
    addCashValue,
    ElarianMessages,
    makeMessageParts,
    getChannelProvider,
} = require('./utils');

const {
    Cash,
    Duration,
    StringValue,
    PaymentStatus,
    PaymentChannel,
    MessagingChannel,
    PaymentChannelNumber,
    MessagingChannelNumber,
    SimulatorToServerCommand,
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
 * @param {InboundMessageBody[]} parts
 * @param {Cash} cost
 * @memberof Simulator
 */
// eslint-disable-next-line max-len
Simulator.prototype.receiveMessage = function receiveMessage(phoneNumber, channelNumber, sessionId, parts = [], cost = { amount: 0, currencyCode: 'KES' }) {
    const socket = this.getSocket();

    const cmd = new ReceiveMessageSimulatorCommand()
        .setCustomerNumber(phoneNumber)
        .setSessionId(new StringValue().setValue(sessionId))
        .setCost(new Cash().setCurrencyCode(cost.currencyCode).setAmount(cost.amount))
        .setDuration(new Duration().setSeconds(0))
        .setChannelNumber(
            new MessagingChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, MessagingChannel, 'channel')),
        )
        .setPartsList(makeMessageParts(parts));

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
                .setChannel(getChannelProvider(channelNumber.channel, PaymentChannel, 'channel')),
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
