const {
    ElarianMessages,
    addCashValue,
    getStatusString,
    addPaymentCounterParty,
} = require('./utils');

const Elarian = require('./elarian');

const {
    PaymentStatus,
    AppToServerCommand,
    AppToServerCommandReply,
    InitiatePaymentCommand,
} = ElarianMessages;

/**
 * Initiate a payment transaction
 * @param {CustomerPayment|Wallet|Purse|ChannelPayment} debitParty
 * @param {CustomerPayment|Wallet|Purse|ChannelPayment} creditParty
 * @param {Cash} value
 * @returns {InitiatePaymentReply}
 * @memberof Elarian
 */
Elarian.prototype.initiatePayment = function initiatePayment(debitParty, creditParty, value) {
    const socket = this.getSocket();

    let cmd = new InitiatePaymentCommand();
    cmd = addPaymentCounterParty(cmd, debitParty, 'setDebitParty');
    cmd = addPaymentCounterParty(cmd, creditParty, 'setCreditParty');
    cmd = addCashValue(cmd, value);
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

module.exports = Elarian;
