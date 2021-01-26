// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Payment', () => {
    let client;
    let customer;

    before(async () => {
        client = fixtures.getClient();
        customer = new Customer({
            client,
            customerNumber: fixtures.customerNumber,
        });
    });

    it('initiatePayment()', async () => {
        let resp = await customer.getState();
        const { customerId } = resp;

        // B2C is purse to wallet, purse to mpesa, wallet to mpesa
        // C2B is wallet to purse, mpesa to wallet, mpesa to purse
        // B2B is wallet to wallet(C2C), purse to purse

        // C2B(Checkout): from mpesa to wallet
        resp = await client.initiatePayment(
            {
                customerNumber: customer.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                customerId,
                walletId: 'test_wallet',
            },
            {
                amount: 15456,
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

        // C2B(Checkout) from mpesa to purse
        resp = await client.initiatePayment(
            {
                customerNumber: customer.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                purseId: fixtures.purseId,
            },
            {
                amount: 178.78,
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

        // C2B: from wallet to purse
        resp = await client.initiatePayment(
            {
                customerId,
                walletId: 'test_wallet',
            },
            {
                purseId: fixtures.purseId,
            },
            {
                amount: 123.78,
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

        // B2C: From purse to mpesa
        resp = await client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                customerNumber: customer.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                amount: 1.78,
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

        // B2C: From wallet to mpesa
        resp = await client.initiatePayment(
            {
                customerId,
                walletId: 'test_wallet',
            },
            {
                customerNumber: {
                    number: '+254718769882',
                    provider: 'cellular',
                },
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                amount: 1.78,
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

        // B2C: From purse to mpesa
        resp = await client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                customerNumber: {
                    number: '+254718769882',
                    provider: 'cellular',
                },
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                amount: 1.78,
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

        // B2B: Wallet to Wallet
        resp = await client.initiatePayment(
            {
                customerId,
                walletId: 'test_wallet_test',
            },
            {
                customerId,
                walletId: 'test_wallet',
            },
            {
                amount: 10.78,
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

        // B2B: Purse to Purse
        resp = await client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                purseId: 'test_purse_test',
            },
            {
                amount: 10.78,
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
