// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Messaging', () => {
    let client;
    let customer;

    before(async () => {
        client = await fixtures.getClient();
        customer = new Customer({
            client,
            customerNumber: fixtures.customerNumber,
        });
    });

    it('sendMessage()', async () => {
        let resp = await client.sendMessage(
            customer,
            {
                number: fixtures.alphannumericSenderId,
                channel: 'sms',
            },
            {
                body: {
                    text: 'node messaging sms alphannumeric test',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: fixtures.shortCodeSenderId,
                channel: 'sms',
            },
            {
                body: {
                    text: 'node customer sms short code messaging test',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: fixtures.telegramBot,
                channel: 'telegram',
            },
            {
                body: {
                    url: 'https://fake.localhost',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: fixtures.whatsappNumber,
                channel: 'whatsapp',
            },
            {
                body: {
                    location: {
                        label: 'work',
                        address: 'Africa\'s Talking',
                        longitude: 36.7676286,
                        latitude: -1.2703046,
                    },
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
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

    it('replyToMessage()', async () => {
        const resp = await client.replyToMessage(
            customer,
            'test-messag-id',
            {
                body: {
                    text: 'ABC', // ~~
                    template: {
                        id: 'tmpl',
                        params: { key: 'val' },
                    },
                    // or
                    media: {
                        url: 'https://picha.png',
                        type: 'image',
                    },
                    // or
                    location: {
                        latitude: 12,
                        longitude: 33,
                        label: 'home',
                        address: '45th Street',
                    },
                    // or
                    email: {
                        subject: 'Hi',
                        bodyPlain: 'Hello There',
                        bodyHtml: '<h1>Hello There</h1>',
                        ccList: [],
                        bccList: [],
                        attachments: [],
                    },
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
    });

    it('updateMessagingConsent()', async () => {
        const resp = await client.updateMessagingConsent(
            customer,
            {
                number: fixtures.senderId,
                channel: 'sms',
            },
            'allow',
        );
        resp.should.have.properties(['status', 'description', 'customerId']);
    });
});
