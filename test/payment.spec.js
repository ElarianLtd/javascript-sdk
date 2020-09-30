// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Payment', () => {
    const client = new Elarian(fixtures.clientParams);
    const customer = new client.Customer({
        customerNumber: {
            number: '+254710000000',
            provider: 'telco',
        },
    });

    it('initiatePayment()', async () => {
        let resp = await customer.getState();
        const { customerId } = resp.data;
        resp = await client.initiatePayment({
            debitParty: {
                customer: {
                    customerNumber: customer.customerNumber,
                    channelNumber: {
                        number: '+254700000000',
                        provider: 'telco',
                    },
                },
            },
            creditParty: {
                wallet: {
                    customerId,
                    walletId: 'test_wallet',
                },
            },
            value: {
                amount: 5456.78,
                currencyCode: 'KES',
            },
        });
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);

        resp = await client.initiatePayment({
            debitParty: {
                wallet: {
                    customerId,
                    walletId: 'test_wallet',
                },
            },
            creditParty: {
                purse: 'test_purse',
            },
            value: {
                amount: 5456.78,
                currencyCode: 'KES',
            },
        });
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);
    });
});
