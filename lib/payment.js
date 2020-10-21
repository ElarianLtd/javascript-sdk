const { ElarianMessages, addCashValue, addPaymentCounterParty } = require('./utils');

const {
    InitiatePaymentRequest,
} = ElarianMessages;

let paymentsOptions;

const initiatePayment = async (debitParty, creditParty, value) => {
    const {
        stub,
        appId,
        orgId,
        extraHeaders,
    } = paymentsOptions;

    let req = new InitiatePaymentRequest()
        .setOrgId(orgId)
        .setAppId(appId);

    req = addPaymentCounterParty(req, debitParty, 'setDebitParty');
    req = addPaymentCounterParty(req, creditParty, 'setCreditParty');
    req = addCashValue(req, value);

    const res = await stub.initiatePayment(req, extraHeaders);
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
    return result;
};

module.exports = (client, options) => {
    paymentsOptions = options;

    /* eslint-disable no-param-reassign */
    client.initiatePayment = initiatePayment;
    /* eslint-enable no-param-reassign */
    return client;
};
