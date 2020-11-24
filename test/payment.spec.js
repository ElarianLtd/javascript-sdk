// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Payment', () => {
    const client = new Client(fixtures.clientParams);
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        await client.connect();
    });

    after(async () => {
        await client.disconnect();
    });

    it('initiatePayment()', async () => {
        let resp = await customer.getState();
        const { customerId } = resp;
        resp = await client.initiatePayment(
            {
                customer: {
                    customerNumber: customer.customerNumber,
                    channelNumber: {
                        number: '525900', // paybill
                        provider: 'telco',
                    },
                },
            },
            {
                wallet: {
                    customerId,
                    walletId: 'test_wallet',
                },
            },
            {
                amount: 5456.78,
                currencyCode: 'KES',
            },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);

        resp = await client.initiatePayment(
            {
                wallet: {
                    customerId,
                    walletId: 'test_wallet',
                },
            },
            {
                purse: 'test_purse',
            },
            {
                amount: 5456.78,
                currencyCode: 'KES',
            },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);
    });
});
