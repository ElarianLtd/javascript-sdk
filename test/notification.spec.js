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
                'expiration',
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
            expiration: (new Date().getTime() + 1500) / 1000,
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
                provider: 'sms',
            },
            { text: 'messageStatus test' },
        )
            .then((resp) => {
                resp.status.should.equal('sent');
            })
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
                channel: 3,
                number: fixtures.shortCode,
            },
            text: 'test receivedMessage',
        };
        simulator.submit(sendMessageData)
            .catch((err) => done(err));
    });

    it('messagingConsentStatus', (done) => {
        client.on('messagingConsentStatus', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'status',
            ]);
            should.exist(customer);
            client.off('messagingConsentStatus');
            done();
        });
        client.messagingConsent(
            bob,
            {
                number: fixtures.whatsappNumber,
                provider: 'whatsapp',
            },
            'opt-in',
        )
            .then((resp) => {
                resp.status.should.equal('opt_in_request_sent');
            })
            .catch((err) => done(err));
    });

    it('messagingSessionStatus', (done) => {
        client.on('messagingSessionStatus', async ({ data, customer }) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            client.off('messagingSessionStatus');
            done();
        });
        // TODO: Trigger a message: in bound whatsapp
        bob.sendMessage(
            {
                number: fixtures.whatsappNumber,
                provider: 'whatsapp',
            },
            {
                text: 'node customer whatsapp messaging test',
            },
        ).then((resp) => {
            console.log(resp);
        }).catch((ex) => done(ex));
    });

    it('ussdSession', (done) => {
        client.on('ussdSession', async ({ data, customer }, callback) => {
            data.should.have.properties([
                'customerNumber',
                'input',
                'sessionId',
                'channelNumber',
            ]);
            should.exist(customer);
            callback(null, {
                text: 'Thank you for dialing our USSD code',
                isTerminal: true,
            });
            client.off('ussdSession');
            done();
        });

        const ussdRequest = {
            type: 'UssdRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: fixtures.ussdCode,
            },
            input: '',
        };
        simulator.submit(ussdRequest)
            .catch((err) => done(err));
    });

    it('voiceCall', (done) => {
        client.on('voiceCall', async ({ data, customer }, callback) => {
            data.should.have.properties([
                'cost',
                'input',
                'duration',
                'sessionId',
                'direction',
                'channelNumber',
            ]);
            should.exist(customer);
            callback(null, fixtures.dialPlan);
            client.off('voiceCall');
            done();
        });
        const callData = {
            type: 'VoiceRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: fixtures.voiceNumber,
            },
            direction: 0,
            input: {
                status: 102,
                startedAt: Math.floor(Date.now() / 1000),
            },
            isActive: false,
        };
        simulator.submit(callData)
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
                    provider: 'telco',
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
            resp.status.should.equal('success');
        })
            .catch((ex) => done(ex));
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
                        provider: 'telco',
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

    it('webAction', (done) => {
        client.on('webAction', async ({ data, customer }) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'sessionId',
                'action',
            ]);
            should.exist(customer);
            client.off('webAction');
            done();
        });

        bob.webAction('test.com.local', 'fake-session', 'some-key')
            .catch((err) => done(err));
    });
});
