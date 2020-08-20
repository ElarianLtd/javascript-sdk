'use strict';

const _ = require('lodash');
const should = require('should');

const {
    Client,
    MediaType,
    ConsentAction,
    NumberProvider,
    MessagingChannel,
} = require('../');

const {
    apiKey,
    appId,
    productId,
} = require('./fixtures');


describe('Messaging', () => {

    const elarian = new Client({ apiKey, appId });
    let messageId;
    let customerId;

    it('sendMessage()', async () => {
        const res = await elarian.sendMessage({
            productId,

            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },

            channelNumber: {
                number: '41011',
                channel: MessagingChannel.SMS
            },
            body: {
                text: {
                    text: 'Hello Boss',
                    // template: {
                    //     name: 'abc-template',
                    //     params: ['value1', 'value2']
                    // }
                },

                // media: {
                //     url: 'https://fake.faa',
                //     type: MediaType.VOICE

                // },

                // location: {
                //     latitude: 0,
                //     longitude: 0
                // },
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('messageId');
        res.should.have.property('customerId');
        customerId = res.customerId;
        messageId = res.messageId;
    });

    it('sendMessageByTag()', async () => {
        const res = await elarian.sendMessageByTag({
            productId,
            tag: {
                key: 'fake',
                value: 'longvalue',
            },
            channelNumber: {
                number: '41011',
                channel: MessagingChannel.TELEGRAM
            },
            body: {
                text: {
                    text: 'Hello Bosses',
                    template: {
                        name: 'abc-template',
                        params: ['value1', 'value2']
                    }
                },

                media: {
                    url: 'https://fake.faa',
                    type: MediaType.VOICE

                },

                location: {
                    latitude: 0,
                    longitude: 0
                },
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('workId');
    });

    it('replyToMessage()', async () => {
        const res = await elarian.replyToMessage({
            productId,
            customerId,
            replyToMessageId: messageId,

            body: {
                text: {
                    text: 'Hello Bosses',
                    template: {
                        name: 'abc-template',
                        params: ['value1', 'value2']
                    }
                },

                media: {
                    url: 'https://fake.faa',
                    type: MediaType.VOICE
                },

                location: {
                    latitude: 0,
                    longitude: 0
                },
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('messageId');
        res.should.have.property('customerId');
    });

    it('messagingConsent()', async () => {
        const res = await elarian.messagingConsent({
            action: ConsentAction.OPT_IN,
            // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            channelNumber: {
                number: '41011',
                channel: MessagingChannel.SMS
            },
        });

        res.should.have.property('status');
        res.should.have.property('customerId');
        res.should.have.property('description');
    });
});