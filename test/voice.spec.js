// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    const client = new Elarian(fixtures.clientParams);
    const customer = new client.Customer({
        customerNumber: fixtures.customerNumber,
    });

    it('makeVoiceCall()', async () => {
        const resp = await client.makeVoiceCall(customer, {
            number: '+254711082000',
            provider: 'telco',
        });
        resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
    });

    it('replyToVoiceCall()', async () => {
        const resp = await client.replyToVoiceCall('test-session-id', [
            {
                say: {
                    text: 'Hi there',
                    playBeep: true,
                    voice: 'male', // female
                },
            },
            {
                play: {
                    url: 'https://music.mp3',
                },
            },
            {
                getDigits: {
                    say: {
                        text: 'Hi there',
                        playBeep: true,
                        voice: 'female',
                    },
                    // or
                    play: {
                        url: 'https://music.mp3',
                    },
                    timeout: 60,
                    finishOnKey: '#',
                    numDigits: 2,
                },
            },
            {
                dial: {
                    customerNumbers: [
                        {
                            number: '+254700000000',
                            provider: 'telco',
                            partition: '1',
                        },
                    ],
                    record: false,
                    sequential: true,
                    ringbackTone: 'http://music.mp3',
                    callerId: 'ABC',
                    maxDuration: 13,
                },
            },
            {
                recordSession: true,
            },
            {
                getRecording: {
                    say: {
                        text: 'Hi there',
                        playBeep: true,
                        voice: 'female',
                    },
                    // or
                    play: {
                        url: 'https://music.mp3',
                    },
                    timeout: 60,
                    maxLength: 10,
                    finishOnKey: '#',
                    playBeep: true,
                    trimSilence: false,
                },
            },
            {
                enqueue: {
                    holdMusic: 'http://music.mp3',
                    queueName: 'abcqueue',
                },
            },
            {
                dequeue: {
                    channelNumber: {
                        number: '123',
                        provider: 'telco',
                    },
                    record: true,
                    queueName: 'fake',
                },
            },
            {
                reject: true,
                redirect: {
                    url: 'https://awesome.xml',
                },
            },
        ]);
        resp.should.have.properties(['status', 'description']);
    });
});
