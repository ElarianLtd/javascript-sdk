require('should');

const fixtures = require('./fixtures');

describe('Simulator', () => {
    let bob;
    let client;
    let simulator;
    const transactionId = 'PAQ0ZZE5DI';

    before(async () => {
        client = await fixtures.getClient();
        simulator = await fixtures.getSimulator();

        bob = new client.Customer({
            ...fixtures.customerNumber,
        });

        await bob.getState();
    });

    after(async () => {
        await fixtures.resetClients();
    });

    it('receivePayment()', (done) => {
        const { number } = fixtures.customerNumber;
        const { paymentChannel } = fixtures;
        const cash = { currencyCode: 'KES', amount: 100 };
        const status = 'pending_confirmation';
        simulator.receivePayment(transactionId, number, paymentChannel, cash, status)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
                done();
            })
            .catch((ex) => done(ex));
    });

    it('updatePaymentStatus()', (done) => {
        simulator.updatePaymentStatus(transactionId, 'failed')
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
                done();
            })
            .catch((ex) => done(ex));
    });

    it('receiveMessage()', (done) => {
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.messagingChannel;
        const messageBodyParts = [
            {
                ussd: fixtures.ussdCode,
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
                done();
            })
            .catch((ex) => done(ex));
    });

    it('on(sendMessage)', (done) => {
        simulator.on('sendMessage', (data) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'message',
                'messageId',
            ]);
            done();
        });

        bob.sendMessage(
            {
                number: fixtures.shortCodeSenderId,
                channel: 'sms',
            },
            { body: { text: 'simulator send message event test' } },
        )
            .then((resp) => {
                resp.status.should.equal('sent');
            })
            .catch((err) => done(err));
    });

    it('on(makeVoiceCall)', (done) => {
        simulator.on('makeVoiceCall', (data) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
            ]);
            done();
        });

        bob.sendMessage(fixtures.voiceChannel, { body: { voice: [{ say: { text: 'TestingSimMakeVoiceCall' } }] } })
            .then((resp) => {
                resp.status.should.equal('session_initiated');
            })
            .catch((err) => done(err));
    });

    it('on(sendCustomerPayment)', (done) => {
        simulator.on('sendCustomerPayment', (data) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'value',
            ]);
            done();
        });

        client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                amount: 10,
                currencyCode: 'KES',
            },
        ).then((resp) => {
            resp.should.have.properties([
                'status',
                'description',
                'transactionId',
                'debitCustomerId',
                'creditCustomerId',
            ]);
        }).catch((err) => done(err));
    });

    it('on(sendChannelPayment)', (done) => {
        simulator.on('sendChannelPayment', (data) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'status',
                'update',
                'sessionId',
            ]);
            done();
        });

        client.initiatePayment(
            {
                purseId: fixtures.purseId,
            },
            {
                customerId: bob.customerId,
                walletId: 'test_wallet',
            },
            {
                amount: 150,
                currencyCode: 'KES',
            },
        ).then(() => {
            client.initiatePayment(
                {
                    customerId: bob.customerId,
                    walletId: 'test_wallet',
                },
                {
                    purseId: fixtures.purseId,
                },
                {
                    amount: 100,
                    currencyCode: 'KES',
                },
            ).then((re) => {
                re.should.have.properties([
                    'status',
                    'description',
                    'transactionId',
                    'debitCustomerId',
                    'creditCustomerId',
                ]);
            }).catch((err) => done(err));
        }).catch((ex) => done(ex));
    });

    it('on(checkoutPayment)', (done) => {
        simulator.on('checkoutPayment', (data) => {
            data.should.have.properties([
                'customerNumber',
                'channelNumber',
                'value',
            ]);

            const messageBodyParts = [
                {
                    ussd: '1',
                },
            ];
            const { sessionId, channelNumber, customerNumber } = data;
            channelNumber.channel = 'ussd';
            const { number } = customerNumber;
            simulator.receiveMessage(number, channelNumber, sessionId, messageBodyParts)
                .then((resp) => {
                    resp.should.have.properties([
                        'status',
                        'message',
                        'description',
                    ]);
                    done();
                }).catch((ex) => done(ex));
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
                customerId: bob.customerId,
                walletId: 'test_wallet',
            },
            {
                amount: 154,
                currencyCode: 'KES',
            },
        ).then((resp) => {
            resp.should.have.properties([
                'status',
                'description',
                'transactionId',
                'debitCustomerId',
                'creditCustomerId',
            ]);
        }).catch((err) => done(err));
    });
});
