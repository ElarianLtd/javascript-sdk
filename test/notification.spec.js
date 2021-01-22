const _ = require('lodash');
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');
const simulator = require('./simulator');

const log = console;

describe('Notification', function fx() {
    this.timeout(10000);

    let client;
    const bob = new Customer({
        customerNumber: fixtures.notifCustomerNumber,
    });

    before(async () => {
        client = fixtures.getClient();

        /*
        client.on('data', (evt, data) => {
            log.warn(evt, data);
        });
        */

        await simulator.startSession({
            phoneNumber: bob.customerNumber.number,
            cb: (notif) => {
                if (notif.data.type === 'UssdMenu' && !notif.data.menu.isTerminal) {
                    const ussdData = {
                        type: 'UssdRequest',
                        sessionId: notif.data.sessionId,
                        input: '1', // Math.random() < 0.5 ? '1' : '2',
                        customerNumber: bob.customerNumber.number,
                        channelNumber: notif.data.channelNumber,
                    };
                    simulator.submit(ussdData)
                        .catch((ex) => log.error(ex));
                }
            },
        });
        await bob.getState();
    });

    after(async () => {
        await simulator.endSession(bob.customerNumber.number);
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

        client.initiatePayment(
            {
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                purseId: fixtures.purseId,
            },
            {
                amount: _.random(1000, 2000),
                currencyCode: 'KES',
            },
        ).then(() => client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                customerId: bob.customerId,
                walletId: 'bob_wallet',
            },
            {
                amount: _.random(100, 1000),
                currencyCode: 'KES',
            },
        )).then((resp) => {
            console.log(resp);
            resp.status.should.equal('success');
        })
            .catch((ex) => done(ex));
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

        const sendPaymentData = {
            type: 'PaymentRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: fixtures.paybill,
            },
            value: {
                currencyCode: 'KES',
                amount: _.random(100, 200),
            },
        };
        simulator.submit(sendPaymentData)
            .catch((err) => done(err));
    });

    it('receivedMessage', (done) => {
        client.on('receivedMessage', async ({ data, customer }) => {
            data.should.have.properties([
                'messageId',
                'text',
                'mediaList',
                'location',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            client.off('receivedMessage');
            done();
        });
        const sendMessageData = {
            type: 'MessageRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: fixtures.shortCode,
            },
            text: 'test receivedMessage',
        };
        simulator.submit(sendMessageData)
            .catch((err) => done(err));
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

        bob.updateActivity({ number: 'www.elarian.com', channel: 'web' }, 'fake-session', 'some-key')
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
                        channel: 'telco',
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
                'status',
            ]);
            should.exist(customer);
            client.off('messagingSessionStarted');
        });

        client.on('messagingSessionRenewed', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'status',
            ]);
            should.exist(customer);
            client.off('messagingSessionRenewed');
        });
        client.on('messagingSessionEnded', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'status',
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
                number: fixtures.whatsappNumber,
                channel: 'whatsapp',
            },
            'block',
        )
            .then((resp) => {
                console.log(resp);
                resp.status.should.equal('opt_in_request_sent');
            })
            .catch((err) => done(err));
    });
});
