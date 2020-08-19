
const {
    ElarianMessages,
    addCashValue,
    addCustomer,
    addChannelNumber,
} = require('./utils');

const {
    PaymentChannel,
    SendPaymentRequest,
    CheckoutPaymentRequest,
    PaymentChannelNumber,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async sendPayment(params) {
        try {
            let {
                value,
                productId,
                customerId,
                customerNumber,
                channelNumber,
            } = params;

            if (!productId || !channelNumber || !value) {
                throw new Error('productId, channelNumber, value are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new SendPaymentRequest()
                .setAppId(this.options.appId)
                .setProductId(productId);

            req = addCashValue(req, params)
            req = addCustomer(req, params);
            req = addChannelNumber(req, params, PaymentChannelNumber);

            const res = await this._stub.sendPayment(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                transactionId: (res.getTransactionId() || {
                    getValue: () => undefined
                }).getValue(),
                customerId: (res.getCustomerId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async checkoutPayment(params) {
        try {
            let {
                value,
                productId,
                customerId,
                customerNumber,
                channelNumber,
            } = params;

            if (!productId || !channelNumber || !value) {
                throw new Error('productId, channelNumber, value are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new CheckoutPaymentRequest()
                .setAppId(this.options.appId)
                .setProductId(productId);

            req = addCashValue(req, params)
            req = addCustomer(req, params);
            req = addChannelNumber(req, params, PaymentChannelNumber);

            const res = await this._stub.checkoutPayment(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                transactionId: (res.getTransactionId() || {
                    getValue: () => undefined
                }).getValue(),
                customerId: (res.getCustomerId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    Client,
    Enums: {
        PaymentChannel: {
            UNSPECIFIED: PaymentChannel.PAYMENT_CHANNEL_UNSPECIFIED,
            TELCO: PaymentChannel.PAYMENT_CHANNEL_TELCO,
        },
    }
};