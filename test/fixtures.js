require('dotenv').config();

const _ = require('lodash');
const { Client } = require('../lib/index.node');

let client;
const clientParams = {
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
    receiveNotification: true,
};
const configOptions = {
    lifetime: 1800000,
    keepAlive: 2500,
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

    shortCode: '2000',
    senderId: 'AwesomeSurvey',
    telegramBot: 'elarian_test_bot',
    paybill: '88888',
    purseId: 'awesome_purse',
    ussdCode: '*544#',
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
        client = new Client(clientParams, configOptions);
        await client.connect();
        return client;
    },

    getClient: () => client,

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
