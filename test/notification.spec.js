const _ = require('lodash');
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

const log = console;

describe('Notification', function fx() {
    this.timeout(10000);

    let bob;
    let client;
    let simulator;

    before(async () => {
        client = fixtures.getClient();

        client.on('data', (evt, data) => {
            log.warn('Client ->', evt, data);
        });

        bob = new Customer({
            client,
            customerNumber: fixtures.customerNumber,
        });

        simulator = fixtures.getSimulator();

        simulator.on('data', (evt, data) => {
            log.warn('Simulator ->', evt, data);
        });

        simulator.on('sendMessage', (data, cb) => {
            // TODO: watch out for sms+ussd
            log.info(data);
            cb();
        });
        simulator.on('makeVoiceCall', (data, cb) => {
            log.info(data);
            cb();
        });
        simulator.on('sendCustomerPayment', (data, cb) => {
            log.info(data);
            cb();
        });
        simulator.on('sendChannelPayment', (data, cb) => {
            log.info(data);
            cb();
        });
        simulator.on('checkoutPayment', (data, cb) => {
            log.info(data);
            cb();
        });

        await bob.getState();
    });

    after(async () => {
        await simulator.disconnect();
    });

    it('reminder', (done) => {
        const key = new Date().getTime();
        client.on('reminder', ({ data, customer }) => {
            data.should.have.properties([
                'tag',
                'reminder',
                'workId',
            ]);
            data.reminder.should.have.properties([
                'key',
                'remindAt',
                'interval',
                'payload',
            ]);
            data.reminder.key.should.equal(key.toString());
            data.reminder.payload.should.equal('test-ok??');
            should.exist(customer);
            customer.customerId.should.equal(bob.customerId);
            client.off('reminder');
            done();
        });
        bob.addReminder({
            key: key.toString(),
            remindAt: (new Date().getTime() + 1500) / 1000,
            payload: 'test-ok??',
        })
            .then((resp) => resp.status.should.equal(true))
            .catch((err) => done(err));
    });

    it('messageStatus', (done) => {
        client.on('messageStatus', async ({ data, customer }) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            client.off('messageStatus');
            done();
        });
        bob.sendMessage(
            {
                number: fixtures.shortCode,
                channel: 'sms',
            },
            { body: { text: 'messageStatus test' } },
        )
            .then((resp) => {
                resp.status.should.equal('sent');
            })
            .catch((err) => done(err));
    });

    it('receivedPayment', (done) => {
        client.on('receivedPayment', async ({ data, customer }) => {
            data.should.have.properties([
                'purseId',
                'transactionId',
                'channelNumber',
                'customerNumber',
                'value',
                'status',
            ]);
            should.exist(customer);
            client.off('receivedPayment');
            done();
        });

        const { number } = fixtures.customerNumber;
        const { paymentChannel } = fixtures;
        simulator.receivePayment('fake-txn', number, paymentChannel, { currencyCode: 'KES', amount: _.random(100, 250) }, 'pending_confirmation')
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('paymentStatus', (done) => {
        client.on('paymentStatus', async ({ data, customer }) => {
            data.should.have.properties([
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            client.off('paymentStatus');
            done();
        });

        simulator.updatePaymentStatus('fake-txn', 'failed')
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('receivedMessage', (done) => {
        client.on('receivedMessage', async ({ data, customer }) => {
            data.should.have.properties([
                'parts',
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            client.off('receivedMessage');
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.messagingChannel;
        const messageBodyParts = [
            {
                text: 'Hello test long long long text',
            },
        ];
        const sessionId = 'some-session-id';
        simulator.receiveMessage(customerNumber, channelNumber, sessionId, messageBodyParts)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('customerActivity', (done) => {
        client.on('customerActivity', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'activity',
            ]);
            should.exist(customer);
            client.off('customerActivity');
            done();
        });

        bob.updateActivity({ number: 'www.elarian.com', channel: 'web' }, { sessionId: 'some-session', key: 'kkey' })
            .catch((err) => done(err));
    });

    it('sentMessageReaction', (done) => {
        client.on('sentMessageReaction', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'activity',
            ]);
            should.exist(customer);
            client.off('sentMessageReaction');
            done();
        });

        bob.updateActivity({ number: 'www.elarian.com', channel: 'web' }, 'fake-session', 'some-key')
            .catch((err) => done(err));
    });

    it('walletPaymentStatus', (done) => {
        let transactionId;
        client.on('walletPaymentStatus', async ({ data, customer }) => {
            data.should.have.properties([
                'walletId',
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            data.transactionId.should.equal(transactionId);
            client.off('walletPaymentStatus');
            done();
        });

        bob.getState()
            .then(() => client.initiatePayment(
                {
                    customerId: bob.customerId,
                    walletId: 'bob_wallet',
                },
                {
                    customerNumber: bob.customerNumber,
                    channelNumber: {
                        number: fixtures.paybill,
                        channel: 'cellular',
                    },
                },
                {
                    amount: 100,
                    currencyCode: 'KES',
                },
            ))
            .then((resp) => {
                resp.status.should.equal('pending_confirmation');
                transactionId = resp.transactionId;
            })
            .catch((err) => done(err));
    });

    it('messagingSession*', (done) => {
        client.on('messagingSessionStarted', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'expiresAt',
            ]);
            should.exist(customer);
            client.off('messagingSessionStarted');
        });

        client.on('messagingSessionRenewed', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'expiresAt',
            ]);
            should.exist(customer);
            client.off('messagingSessionRenewed');
        });
        client.on('messagingSessionEnded', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'duration',
                'reason',
            ]);
            should.exist(customer);
            client.off('messagingSessionEnded');
            done();
        });

        // TODO: Start session
    });

    it('messagingConsentUpdate', (done) => {
        client.on('messagingConsentUpdate', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'status',
            ]);
            should.exist(customer);
            client.off('messagingConsentUpdate');
            done();
        });
        client.updateMessagingConsent(
            bob,
            {
                number: fixtures.shortCode,
                channel: 'sms',
            },
            'block',
        )
            .then((resp) => {
                resp.status.should.equal('completed');
            })
            .catch((err) => done(err));
    });
});
