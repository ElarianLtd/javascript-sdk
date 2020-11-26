const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');
const simulator = require('./simulator');
const { log } = require('../lib/utils');

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
                        customerNumber: bob.customerNumber.number,
                        channelNumber: notif.data.channelNumber,
                        input: '1',
                        sessionId: notif.data.sessionId,
                    };
                    simulator.submit(ussdData)
                        .catch((ex) => log.error(ex));
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
            data.reminder.should.have.properties(['key', 'appId', 'expiration', 'interval', 'payload']);
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
            {
                text: 'messageStatus test',
            },
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
                amount: 300,
            },
        };
        simulator.submit(sendPaymentData)
            .catch((err) => done(err));
    });

    it('paymentStatus', (done) => {
        client.on('paymentStatus', async (data, customer) => {
            console.log(data);
            data.should.have.properties([
                'transactionId',
                'status',
            ]);
            should.exist(customer);
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
                amount: 567,
                currencyCode: 'KES',
            },
        )
            .then((resp) => {
                resp.status.should.equal(102);
            })
            .catch((err) => done(err));
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
            .then((resp) => {
                resp.status.should.equal(102);
            })
            .catch((err) => done(err));
    });
});
