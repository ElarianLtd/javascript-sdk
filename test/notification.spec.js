const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Notification', () => {
    const client = new Elarian(fixtures.clientParams);

    const bob = new client.Customer({
        customerNumber: {
            number: '+254780000000',
            provider: 'telco',
        },
    });

    after(() => {
        client.disconnect();
    });

    it('ussdSession', (done) => {
        client.on('ussdSession', async (data, customer) => {
            data.should.have.properties([
                'input',
                'sessionId',
                'channelNumber',
            ]);
            should.exist(customer);
            done();
        });

        // TODO: Trigger a ussd dial
    });

    it('voiceCall', async (done) => {
        client.on('voiceCall', async (data, customer) => {
            data.should.have.properties([
                'cost',
                'input',
                'duration',
                'sessionId',
                'direction',
                'channelNumber',
            ]);
            should.exist(customer);
            done();
        });
        const resp = await client.makeVoiceCall(bob, { number: '+254711082000', provider: 'telco' });
        resp.status.should.equal(100);
    });

    it('receivedPayment', async (done) => {
        client.on('receivedPayment', async (data, customer) => {
            data.should.have.properties([
                'purseId',
                'transactionId',
                'channelNumber',
                'value',
                'status',
            ]);
            should.exist(customer);
            done();
        });

        await bob.getState();
        const debitParty = {
            customer: {
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: '525900',
                    provider: 'telco',
                },
            },
        };
        const creditParty = {
            wallet: {
                customerId: bob.customerId,
                walletId: 'test_wallet',
            },
        };
        const value = {
            amount: 5456.78,
            currencyCode: 'KES',
        };
        const resp = await client.initiatePayment(debitParty, creditParty, value);
        resp.status.should.equal(102);
    });

    it('paymentStatus', (done) => {
        client.on('paymentStatus', async (data, customer) => {
            data.should.have.properties([
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a payment?
    });

    it('walletPaymentStatus', (done) => {
        client.on('walletPaymentStatus', async (data, customer) => {
            data.should.have.properties([
                'walletId',
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a wallet payment?
    });

    it('messageStatus', (done) => {
        client.on('messageStatus', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a message
    });

    it('messagingSessionStatus', (done) => {
        client.on('messagingSessionStatus', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a message
    });

    it('messagingConsentStatus', (done) => {
        client.on('messagingConsentStatus', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a message
    });

    it('receivedMessage', (done) => {
        client.on('receivedMessage', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'text',
                'media',
                'location',
                'channelNumber',
            ]);
            should.exist(customer);
            const {
                messageId,
            } = data;

            const resp = await client.replyToMessage(messageId, {});
            resp.should.have.properties(['status', 'description']);
            done();
        });
        // TODO: Trigger a message
    });

    it('reminder', (done) => {
        client.on('reminder', async (data, customer) => {
            data.should.have.properties([
                'tag',
                'reminder',
                'workId',
            ]);
            data.tag.should.have.properties(['key', 'value']);
            data.reminder.should.have.properties(['key', 'appId', 'expiration', 'interval', 'payload']);
            should.exist(customer);
            done();
        });
        // TODO: Trigger a quick reminder
    });
});
