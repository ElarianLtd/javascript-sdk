// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Messaging', () => {
    const client = new Elarian(fixtures.clientParams);
    const customer = new client.Customer({
        customerNumber: {
            number: '+254780000000',
            provider: 'telco',
        },
    });

    it('sendMessage()', async () => {
        let resp = await client.sendMessage(
            customer,
            {
                number: 'Elarian',
                provider: 'sms',
            },
            {
                text: 'ABC',
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
        resp = await customer.sendMessage(
            {
                number: '21414',
                provider: 'sms',
            },
            {
                text: 'ABC+',
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
                number: '21414',
                provider: 'sms', // sms|telegram|whatsapp|fb_messenger|google_rcs
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
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
    });

    it('messagingConsent()', async () => {
        const resp = await client.messagingConsent(
            customer,
            {
                number: 'Elarian',
                provider: 'sms',
            },
            'opt-in', // opt-out
        );
        resp.should.have.properties(['status', 'description', 'customerId']);
    });
});