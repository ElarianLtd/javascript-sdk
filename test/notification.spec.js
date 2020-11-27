const _ = require('lodash');
const should = require('should');
const { Signale } = require('signale');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');
const simulator = require('./simulator');

const log = new Signale({
    interactive: false,
    scope: 'elarian',
});

describe('Notification', function fx() {
    this.timeout(10000);

    const client = new Client(fixtures.clientParams);
    const bob = new Customer({
        customerNumber: fixtures.notifCustomerNumber,
    });

    before(async () => {
        await client.connect();

        /*
        client.on('data', (data) => {
            log.info('Got some notification data...', data);
        });
        */

        await simulator.startSession({
            phoneNumber: bob.customerNumber.number,
            cb: (notif) => {
                log.warn('Simulator: ', notif.data.type);

                if (notif.data.type === 'UssdMenu' && !notif.data.menu.isTerminal) {
                    const ussdData = {
                        type: 'UssdRequest',
                        sessionId: notif.data.sessionId,
                        input: '1', // Math.random() < 0.5 ? '1' : '2',
                        customerNumber: bob.customerNumber.number,
                        channelNumber: notif.data.channelNumber,
                    };
                    simulator.submit(ussdData)
                        .then((res) => {
                            log.info('Simulator: ', res.data.menu.text);
                        })
                        .catch((ex) => log.error(ex));
                }

                if (notif.data.type === 'SendMessageNotification') {
                    log.info('Simulator: ', notif.data.body.text.text.value);
                }
            },
        });
        await bob.getState();
    });

    after(async () => {
        await client.disconnect();
        await simulator.endSession(bob.customerNumber.number);
    });

    it('reminder', (done) => {
        const key = new Date().getTime();
        client.on('reminder', (data, customer) => {
            data.should.have.properties([
                'tag',
                'reminder',
                'workId',
            ]);
            data.reminder.should.have.properties([
                'key',
                'appId',
                'expiration',
                'interval',
                'payload',
            ]);
            data.reminder.key.should.equal(key.toString());
            data.reminder.payload.value.should.equal('test-ok??');
            should.exist(customer);
            customer.customerId.should.equal(bob.customerId);
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
        client.on('messageStatus', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'customerId',
                'status',
            ]);
            should.exist(customer);
            done();
            client.removeListener('messageStatus');
        });
        bob.sendMessage(
            {
                number: '21414',
                provider: 'sms',
            },
            { text: 'messageStatus test' },
        )
            .then((resp) => {
                resp.status.should.equal(101);
            })
            .catch((err) => done(err));
    });

    it('receivedMessage', (done) => {
        client.on('receivedMessage', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'text',
                'mediaList',
                'location',
                'channelNumber',
                'customerNumber',
                'customerId',
            ]);
            should.exist(customer);
            done();
        });
        const sendMessageData = {
            type: 'MessageRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 3,
                number: '21414',
            },
            text: 'test receivedMessage',
        };
        simulator.submit(sendMessageData)
            .catch((err) => done(err));
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
            console.log(data);
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        client.messagingConsent(
            bob,
            {
                number: 'Elarian',
                provider: 'sms',
            },
            'opt-out',
        )
            .then((resp) => {
                resp.status.should.equal(301);
            })
            .catch((err) => done(err));
    });

    it('ussdSession', (done) => {
        client.on('ussdSession', async (data, customer) => {
            data.should.have.properties([
                'customerId',
                'customerNumber',
                'input',
                'sessionId',
                'channelNumber',
            ]);
            should.exist(customer);
            done();
            return {
                text: 'Thank you for dialing our USSD code',
                isTerminal: true,
            };
        });

        const ussdRequest = {
            type: 'UssdRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: '*384#',
            },
            input: '',
        };
        simulator.submit(ussdRequest)
            .catch((err) => done(err));
    });

    it('voiceCall', (done) => {
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
            return fixtures.dialPlan;
        });
        const callData = {
            type: 'VoiceRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: '+254711082000',
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
        client.on('receivedPayment', async (data, customer) => {
            data.should.have.properties([
                'purseId',
                'transactionId',
                'channelNumber',
                'customerId',
                'customerNumber',
                'value',
                'status',
            ]);
            should.exist(customer);
            done();
        });

        const sendPaymentData = {
            type: 'PaymentRequest',
            customerNumber: bob.customerNumber.number,
            channelNumber: {
                channel: 1,
                number: '525900',
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
        let transactionId;
        client.on('paymentStatus', async (data, customer) => {
            data.should.have.properties([
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            data.transactionId.should.equal(transactionId);
            done();
        });
        client.initiatePayment(
            {
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: '525900',
                    provider: 'telco',
                },
            },
            {
                customerId: bob.customerId,
                walletId: 'test_wallet',
            },
            {
                amount: 100,
                currencyCode: 'KES',
            },
        )
            .then(async (resp) => {
                // console.log(resp);
                resp.status.should.equal(102);
                transactionId = resp.transactionId;
                // const st = await bob.getState();
                // console.log(JSON.stringify(st, null, 2));
            })
            .catch((err) => done(err));
    });

    it('walletPaymentStatus', (done) => {
        let transactionId;
        client.on('walletPaymentStatus', async (data, customer) => {
            data.should.have.properties([
                'walletId',
                'transactionId',
                'status',
            ]);
            should.exist(customer);
            data.transactionId.should.equal(transactionId);
            done();
        });

        client.initiatePayment(
            {
                customerId: bob.customerId,
                walletId: 'test_wallet',
            },
            {
                customerNumber: {
                    number: '+254718769882',
                    provider: 'telco',
                },
                channelNumber: {
                    number: '525900', // paybill
                    provider: 'telco',
                },
            },
            {
                amount: 10,
                currencyCode: 'KES',
            },
        )
            .then((resp) => {
                // console.log(resp);
                resp.status.should.equal(102);
                transactionId = resp.transactionId;
            })
            .catch((err) => done(err));
    });
});
