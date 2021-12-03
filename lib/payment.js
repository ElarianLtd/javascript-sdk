/* eslint-disable max-len */
const {
    ElarianMessages,

    getStatus,
    addCashValue,
    getStatusString,
    addCustomerNumber,
    addPaymentCounterParty,
} = require('./utils');

const Elarian = require('./elarian');

const {
    Timestamp,
    PaymentStatus,
    AppToServerCommand,
    ReplayPaymentCommand,
    InitiatePaymentCommand,
    AppToServerCommandReply,
    ReplayPaymentStatusUpdateCommand,
} = ElarianMessages;

/**
 * Initiate a payment transaction
 * @param {CustomerPayment|Wallet|Purse} debitParty
 * @param {CustomerPayment|Wallet|Purse|ChannelPayment} creditParty
 * @param {Cash} value
 * @param {string} narration
 * @returns {InitiatePaymentReply}
 * @memberof Elarian
 */
// eslint-disable-next-line max-len
Elarian.prototype.initiatePayment = function initiatePayment(debitParty, creditParty, value, narration) {
    const socket = this.getSocket();

    let cmd = new InitiatePaymentCommand();
    cmd = addPaymentCounterParty(cmd, debitParty, 'setDebitParty');
    cmd = addPaymentCounterParty(cmd, creditParty, 'setCreditParty');
    cmd = addCashValue(cmd, value);
    cmd = cmd.setNarration(narration);
    const req = new AppToServerCommand()
        .setInitiatePayment(cmd);

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
                            .getInitiatePayment();
                        const result = {
                            status: getStatusString(res.getStatus(), PaymentStatus),
                            description: res.getDescription(),
                            transactionId: (res.getTransactionId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            debitCustomerId: (res.getDebitCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            creditCustomerId: (res.getCreditCustomerId() || {
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
 * Replay a payment
 * @param {string} transactionId
 * @param {CustomerPayment|Wallet|Purse} debitParty
 * @param {CustomerPayment|Wallet|Purse|ChannelPayment} creditParty
 * @param {string} status one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]
 * @param {Cash} value
 * @param {string} narration
 * @param {number} updatedAt
 * @returns {ReplayPaymentReply}
 * @memberof Elarian
 */
Elarian.prototype.replayPayment = function replayPayment(transactionId, debitParty, creditParty, status, value, narration, updatedAt) {
    const socket = this.getSocket();

    let cmd = new ReplayPaymentCommand();
    cmd = addPaymentCounterParty(cmd, debitParty, 'setDebitParty');
    cmd = addPaymentCounterParty(cmd, creditParty, 'setCreditParty');
    cmd = addCashValue(cmd, value);
    cmd = cmd
        .setProviderTransactionId(transactionId)
        .setCreatedAt(new Timestamp().setSeconds(Math.floor(updatedAt || 0)))
        .setStatus(getStatus(status, PaymentStatus))
        .setNarration(narration);
    const req = new AppToServerCommand()
        .setReplayPayment(cmd);

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
                            .getReplayPayment();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            transactionId: (res.getTransactionId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            debitCustomerId: (res.getDebitCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            creditCustomerId: (res.getCreditCustomerId() || {
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
 * Replay a payment status update
 * @param {CustomerNumber} customerNumber
 * @param {string} transactionId
 * @param {string} status one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]
 * @param {number} updatedAt
 * @returns {ReplayPaymentReply}
 * @memberof Elarian
 */
Elarian.prototype.replayPaymentStatusUpdate = function replayPaymentStatusUpdate(customerNumber, transactionId, status, updatedAt) {
    const socket = this.getSocket();

    let cmd = new ReplayPaymentStatusUpdateCommand();
    cmd = addCustomerNumber(cmd, customerNumber);
    cmd = cmd
        .setProviderTransactionId(transactionId)
        .setUpdatedAt(new Timestamp().setSeconds(Math.floor(updatedAt || 0)))
        .setStatus(getStatus(status, PaymentStatus));
    const req = new AppToServerCommand()
        .setReplayPaymentStatusUpdate(cmd);

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
                            .getReplayPayment();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            transactionId: (res.getTransactionId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            debitCustomerId: (res.getDebitCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            creditCustomerId: (res.getCreditCustomerId() || {
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
