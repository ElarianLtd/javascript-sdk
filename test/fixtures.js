const _ = require('lodash');
const { Client } = require('../lib/index.node');

let client;
const clientParams = {
    appId: 'test_app',
    orgId: 'test_org',
    apiKey: 'test_api_key',
    // appId: 'ck_app',
    // orgId: 'ck_org',
    // apiKey: 'ck_api_key',
    receiveNotification: true,
};

module.exports = {
    clientParams,

    customerNumber: {
        number: `+254720${_.random(100000, 999999)}`,
        provider: 'telco',
    },

    adoptedCustomer: {
        number: `+254721${_.random(100000, 999999)}`,
        provider: 'telco',
    },

    notifCustomerNumber: {
        number: `+254722${_.random(100000, 999999)}`,
        provider: 'telco',
    },

    shortCode: '21414',
    senderId: 'Elarian',
    telegramBot: 'elarian_test_bot',
    paybill: '525900',
    purseId: 'test_purse',
    ussdCode: '*384#',
    voiceNumber: '+254711082000',
    whatsappNumber: '+254711082001',

    dialPlan: [
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
        },
        {
            redirect: {
                url: 'https://awesome.xml',
            },
        },
    ],

    initializeClient: async () => {
        client = new Client(clientParams);
        await client.connect();
    },

    getClient: () => client,

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
