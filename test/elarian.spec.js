/* eslint-disable func-names */
/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
const should = require('should');

const fixtures = require('./fixtures');
const { initializeClient, initializeSimulator } = require('..');

describe('Elarian', () => {
    let client;
    let bob;
    let simulator;

    before(async () => {
        client = await initializeClient(fixtures.clientParams, fixtures.connectOpts);
        bob = client.initializeCustomer({
            ...fixtures.customerNumber,
        });
        await bob.getState();
        simulator = await initializeSimulator(fixtures.clientParams, fixtures.connectOpts);
    });

    after(async () => {
        await fixtures.sleep(1000);
        client.disconnect();
        simulator.disconnect();
        await fixtures.sleep(1500);
        client = null;
        simulator = null;
    });

    it('generateAuthToken()', async () => {
        const resp = await client.generateAuthToken();
        resp.should.have.properties(['token', 'lifetime']);
    });

    it('sendMessageByTag()', async () => {
        const resp = await client.sendMessageByTag(
            {
                key: 'userSegment',
                value: 'testers',
            },
            {
                number: fixtures.alphannumericSenderId,
                channel: 'sms',
            },
            {
                body: {
                    text: 'Tagged',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('addCustomerReminderByTag()', async () => {
        const resp = await client.addCustomerReminderByTag(
            { key: 'kind', value: 'premium' },
            {
                key: 'remByTag',
                remindAt: new Date(2025, 1, 1).getTime() / 1000,
                interval: 968767,
                payload: JSON.stringify({ a: 1, c: 'de' }),
            },
        );
        resp.should.have.properties(['status', 'description']);
    });

    it('cancelCustomerReminderByTag()', async () => {
        const tag = { key: 'kind', value: 'premium' };
        const resp = await client.cancelCustomerReminderByTag(tag, 'remByTag');
        resp.should.have.properties(['status', 'description']);
    });

    it('initiatePayment()', async () => {
        let resp = await bob.getState();
        const { customerId } = resp;

        // B2C is purse to wallet, purse to mpesa, wallet to mpesa
        // B2C wallet to airtime, purse to airtime
        // C2B is wallet to purse, mpesa to wallet, mpesa to purse
        // B2B is wallet to wallet(C2C), purse to purse

        // C2B(Checkout): from mpesa to wallet
        resp = await client.initiatePayment(
            {
                customerNumber: bob.customerNumber,
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
            'test-payment',
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
                amount: 178.78,
                currencyCode: 'KES',
            },
            'test-payment',
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
            'test-payment',
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
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                amount: 1.78,
                currencyCode: 'KES',
            },
            'test-payment',
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
            'test-payment',
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
            'test-payment',
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
            'test-payment',
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
            'test-payment',
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);

        // B2C: Airtime
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
                    channel: 'airtime',
                },
            },
            {
                amount: 10.78,
                currencyCode: 'KES',
            },
            'test-airtime',
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);
    });

    it('replayPayment()', async () => {
        let resp = await bob.getState();
        const { customerId } = resp;

        resp = await client.replayPayment(
            'some-transaction',
            {
                customerNumber: bob.customerNumber,
                channelNumber: {
                    number: fixtures.paybill,
                    channel: 'cellular',
                },
            },
            {
                customerId,
                walletId: 'test_wallet',
            },
            'success',
            {
                amount: 15456,
                currencyCode: 'KES',
            },
            'test narration',
            Date.now() / 1000,
        );
        resp.should.have.properties(['status', 'description', 'transactionId']);
    });

    it('replayPaymentStatusUpdate()', async () => {
        let resp = await bob.getState();
        resp = await client.replayPaymentStatusUpdate(
            bob.customerNumber,
            'some-transaction',
            'failed',
            Date.now() / 1000,
        );
        resp.should.have.properties(['status', 'description', 'transactionId']);
    });

    it('replayMessagingConsentUpdate()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const resp = await client.replayMessagingConsentUpdate(customerNumber, channel, 'block', Date.now() / 1000);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('replayMessageReactionUpdate()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const resp = await client.replayMessageReactionUpdate(customerNumber, channel, 'some-message-id', 'complained', Date.now() / 1000);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('replayMessagingSession()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const sessionUpdate = {
            sessionId: 'some-session-id',
            startedAt: (Date.now() - 1189768) / 1000,
            duration: 10,
            reason: 'inactivity',
            cost: {
                currencyCode: 'KES',
                amount: 10,
            },
        };
        const resp = await client.replayMessagingSession(customerNumber, channel, sessionUpdate);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('replayMessageStatusUpdate()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const messageStatus = {
            messageId: '123dkhjbfsjkw',
            updatedAt: Date.now() / 1000,
            status: 'failed',
            cost: {
                currencyCode: 'KES',
                amount: 10,
            },
        };
        const resp = await client.replayMessageStatusUpdate(customerNumber, channel, messageStatus);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('replayReceivedMessage()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const message = {
            sessionId: 'some-session-id',
            messageId: '123dkhjbfsjkw',
            receivedAt: Date.now() / 1000,
            parts: [
                { text: 'Hello Test' },
                {
                    location: {
                        label: 'place',
                        address: 'The Place',
                        latitude: 2,
                        longitude: 123,
                    },
                },
            ],
            inReplyTo: 'some-message-id',
            provider: 'twilio',
            cost: {
                currencyCode: 'KES',
                amount: 10,
            },
        };
        const resp = await client.replayReceivedMessage(customerNumber, channel, message);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('replaySentMessage()', async () => {
        const customerNumber = {
            number: '+254718769882',
            provider: 'cellular',
        };
        const channel = {
            number: fixtures.alphannumericSenderId,
            channel: 'sms',
        };
        const message = {
            sessionId: 'some-session-id',
            messageId: '123dkhjbfsjkw',
            sentAt: Date.now() / 1000,
            message: {
                body: {
                    text: 'Hi There',
                },
                labels: ['abc', 'def'],
                providerTag: '4443',
                replyToken: 'dewdwe',
            },
            inReplyTo: 'some-message-id',
            provider: 'twilio',
            status: 'sent',
            cost: {
                currencyCode: 'KES',
                amount: 10,
            },
        };
        const resp = await client.replaySentMessage(customerNumber, channel, message);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('on(reminder)', (done) => {
        const key = new Date().getTime();
        client.on('reminder', (data, customer) => {
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

    it('on(messagingSession[Started|Renewed|Ended])', (done) => {
        // client.on('messagingSessionStarted', async (data, customer) => {
        //     data.should.have.properties([
        //         'customerNumber',
        //         'channelNumber',
        //         'sessionId',
        //         'expiresAt',
        //     ]);
        //     should.exist(customer);
        // });

        // client.on('messagingSessionRenewed', async (data, customer) => {
        //     data.should.have.properties([
        //         'customerNumber',
        //         'channelNumber',
        //         'sessionId',
        //         'expiresAt',
        //     ]);
        //     should.exist(customer);
        // });
        // client.on('messagingSessionEnded', async (data, customer) => {
        //     data.should.have.properties([
        //         'customerNumber',
        //         'channelNumber',
        //         'sessionId',
        //         'duration',
        //         'reason',
        //     ]);
        //     should.exist(customer);
        //     done();
        // });

        // const customerNumber = fixtures.customerNumber.number;
        // const channelNumber = {
        //     number: fixtures.telegramBot,
        //     channel: 'telegram',
        // };
        // const parts = [
        //     {
        //         text: 'Hello test long long long text',
        //     },
        //     {
        //         location: {
        //             latitude: 0,
        //             longitude: 0,
        //         },
        //     },
        // ];
        // const sessionId = 'some-session-id';

        // simulator.receiveMessage(customerNumber, channelNumber, sessionId, parts)
        //     .then((resp) => {
        //         resp.should.have.properties([
        //             'status',
        //             'message',
        //             'description',
        //         ]);

        //         // TODO: Renew session
        //         // TODO: End session
        //     })
        //     .catch((ex) => done(ex));

        console.warn('Warning: on(messagingSession[Started|Renewed|Ended]) is not functional');
        done();
    });

    it('on(messagingConsentUpdate)', (done) => {
        // client.on('messagingConsentUpdate', (data, customer) => {
        //     data.should.have.properties([
        //         'customerNumber',
        //         'channelNumber',
        //         'status',
        //         'update',
        //         'sessionId',
        //     ]);
        //     should.exist(customer);
        //     done();
        // });
        // bob.updateMessagingConsent(
        //     {
        //         number: fixtures.whatsappNumber,
        //         channel: 'whatsapp',
        //     },
        //     'allow',
        // )
        //     .then((resp) => {
        //         resp.status.should.equal('completed');
        //     })
        //     .catch((err) => done(err));

        console.warn('Warning: on(messagingConsentUpdate) not functional');
        done();
    });

    it('on(receivedSms)', (done) => {
        client.on('receivedSms', async (data, customer) => {
            data.should.have.properties([
                'text',
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.messagingChannel;
        const parts = [
            {
                text: 'HSSSSSSS--TT',
            },
        ];
        const sessionId = `ss-${Date.now()}`;
        simulator.receiveMessage(customerNumber, channelNumber, sessionId, parts)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('on(receivedFbMessenger)', (done) => {
        client.on('receivedFbMessenger', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = {
            number: fixtures.messengerBot,
            channel: 'fb_messenger',
        };
        const parts = [
            {
                text: 'FB FB Hello test long long long text',
            },
            {
                location: {
                    longitude: 3.445,
                    latitude: 8,
                    label: 'SOme place',
                    address: 'Yessssss Road',
                },
            },
            {
                media: {
                    url: 'https://fake-image.com/img.png',
                    type: 'image',
                },
            },
        ];
        const sessionId = `ss-${Date.now()}`;
        simulator.receiveMessage(customerNumber, channelNumber, sessionId, parts)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('on(receivedTelegram)', (done) => {
        client.on('receivedTelegram', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = {
            number: fixtures.telegramBot,
            channel: 'telegram',
        };
        const messageBodyParts = [
            {
                text: 'Telegram Text',
            },
            {
                location: {
                    longitude: 3.445,
                    latitude: 8,
                    label: 'SOme place',
                    address: 'Yessssss Road',
                },
            },
            {
                media: {
                    url: 'https://fake-image.com/img.png',
                    type: 'image',
                },
            },
        ];
        const sessionId = `ss-${Date.now()}`;
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

    it('on(receivedWhatsapp)', (done) => {
        client.on('receivedWhatsapp', (data, customer) => {
            data.should.have.properties([
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = {
            number: fixtures.whatsappNumber,
            channel: 'whatsapp',
        };
        const messageBodyParts = [
            {
                text: 'Hello test long long long text',
            },
            {
                location: {
                    longitude: 0,
                    latitude: 0,
                },
            },
        ];
        const sessionId = `ss-${Date.now()}`;
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

    it('on(receivedEmail)', (done) => {
        client.on('receivedEmail', async (data, customer) => {
            data.should.have.properties([
                'email',
                'messageId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = {
            number: fixtures.emailSenderId,
            channel: 'email',
        };
        const messageBodyParts = [
            {
                email: {
                    subject: 'Test Email',
                    bodyPlain: 'This is a long long email gone email long',
                    ccList: [
                        'test-one@elarian.com',
                    ],
                    bccList: [
                        'test-two@elarian.com',
                    ],

                },
            },
        ];
        const sessionId = `ss-${Date.now()}`;
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

    it('on(voiceCall)', (done) => {
        client.on('voiceCall', (data, customer, appData, callback) => {
            data.should.have.properties([
                'messageId',
                'sessionId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            callback(fixtures.dialPlan, appData);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.voiceChannel;
        const messageBodyParts = [{
            voice: {
                direction: 'inbound',
                status: 'dialing',
            },
        }];
        const sessionId = `ss-${Date.now()}`;
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

    it('on(ussdSession)', (done) => {
        client.on('ussdSession', (data, customer, appData, callback) => {
            data.should.have.properties([
                'input',
                'messageId',
                'sessionId',
                'channelNumber',
                'customerNumber',
            ]);
            should.exist(customer);
            callback({ text: 'Hello', isTerminal: true }, appData);
            done();
        });
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.ussdChannel;
        const messageBodyParts = [
            {
                ussd: {
                    text: '',
                    status: 'active',
                },
            },
        ];
        const sessionId = `ss-${Date.now()}`;
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

    it('on(messageStatus)', (done) => {
        client.on('messageStatus', async (data, customer) => {
            data.should.have.properties([
                'messageId',
                'status',
            ]);
            should.exist(customer);
            done();
        });
        bob.sendMessage(
            {
                number: fixtures.shortCodeSenderId,
                channel: 'sms',
            },
            { body: { text: 'messageStatus test' } },
        )
            .then((resp) => {
                resp.status.should.equal('sent');
            })
            .catch((err) => done(err));
    });

    it('on(sentMessageReaction)', (done) => {
        // client.on('sentMessageReaction', async (data, customer) => {
        //     data.should.have.properties([
        //         'customerNumber',
        //         'channelNumber',
        //         'sessionId',
        //         'activity',
        //     ]);
        //     should.exist(customer);
        //     done();
        // });

        // const channel = { number: 'www.elarian.com', channel: 'web' };
        // const activity = { sessionId: 'some-session', key: 'kkey' };
        // bob.updateActivity(channel, activity)
        //     .catch((err) => done(err));

        console.warn('Warning: on(sentMessageReaction) not functional');
        done();
    });

    it('on(receivedPayment)', (done) => {
        client.on('receivedPayment', async (data, customer) => {
            data.should.have.properties([
                'purseId',
                'transactionId',
                'channelNumber',
                'customerNumber',
                'value',
                'status',
            ]);
            should.exist(customer);
            done();
        });

        const { number } = fixtures.customerNumber;
        const { paymentChannel } = fixtures;
        const value = { currencyCode: 'KES', amount: _.random(100, 250) };
        const status = 'success';
        simulator.receivePayment('fake-txn', number, paymentChannel, value, status)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('on(paymentStatus)', (done) => {
        client.on('paymentStatus', async (data, customer) => {
            data.should.have.properties([
                'transactionId',
                'status',
            ]);
            should.exist(customer);
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
                amount: 1.78,
                currencyCode: 'KES',
            },
            'test-payment',
        )
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'description',
                    'transactionId',
                ]);
            })
            .catch((ex) => done(ex));
    });

    it('on(customerActivity)', (done) => {
        client.on('customerActivity', async (data, customer) => {
            data.should.have.properties([
                'customerNumber',
                'source',
                'sessionId',
                'activity',
            ]);
            data.source.should.equal('www.elarian.com');
            data.sessionId.should.equal('some-session');
            data.activity.should.have.properties([
                'key',
                'source',
                'sessionId',
                'properties',
                'createdAt',
            ]);
            should.exist(customer);
            await fixtures.sleep(5000);
            done();
        });
        bob.updateActivity('www.elarian.com', { sessionId: 'some-session', key: 'kkey' })
            .catch((err) => done(err));
    });
});
