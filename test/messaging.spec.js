// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Messaging', () => {
    let client;
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        client = fixtures.getClient();
    });

    it('sendMessage()', async () => {
        let resp = await client.sendMessage(
            customer,
            {
                number: fixtures.senderId,
                provider: 'sms',
            },
            {
                text: 'node messaging sms test',
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: fixtures.senderId,
                provider: 'sms',
            },
            {
                text: 'node customer sms messaging test',
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: fixtures.telegramBot,
                provider: 'telegram',
            },
            {
                text: 'node customer telegram messaging test',
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
                number: fixtures.senderId,
                provider: 'sms',
            },
            {
                text: 'Tagged',
            },
        );
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('replyToMessage()', async () => {
        const resp = await client.replyToMessage(
            customer,
            'test-messag-id',
            {
                text: 'ABC', // ~~
                template: {
                    name: 'tmpl',
                    params: [''],
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
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
    });

    it('messagingConsent()', async () => {
        const resp = await client.messagingConsent(
            customer,
            {
                number: fixtures.senderId,
                provider: 'sms',
            },
            'opt-in', // opt-out
        );
        resp.should.have.properties(['status', 'description', 'customerId']);
    });
});
