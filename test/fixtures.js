require('dotenv').config();

const _ = require('lodash');
const { Elarian, Simulator } = require('../lib/index.node');

let client;
let simulator;

const clientParams = {
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
    receiveNotification: true,
    options: {
        lifetime: 1800000,
        keepAlive: 2500,
    },
};

module.exports = {
    clientParams,

    customerNumber: {
        number: `+254720${_.random(100000, 999999)}`,
        provider: 'cellular',
    },

    adoptedCustomer: {
        number: `+254721${_.random(100000, 999999)}`,
        provider: 'cellular',
    },

    notifCustomerNumber: {
        number: `+254722${_.random(100000, 999999)}`,
        provider: 'cellular',
    },

    paymentChannel: {
        number: '525900',
        channel: 'cellular',
    },

    messagingChannel: {
        number: '21414',
        channel: 'sms',
    },

    ussdChannel: {
        number: '*384#',
        channel: 'ussd',
    },

    voiceChannel: {
        number: '+254711082000',
        channel: 'voice',
    },

    shortCodeSenderId: '21414',
    alphannumericSenderId: 'Elarian',
    telegramBot: 'elarian_test_bot',
    paybill: '525900',
    purseId: 'test_purse',
    ussdCode: '*384#',
    voiceNumber: '+254711082000',
    whatsappNumber: '+14155238886',
    emailSenderId: 'postmaster@sandbox388ba53b1a244f41b0f9c120783a7320.mailgun.org',

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
                        provider: 'cellular',
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
                number: '123',
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
        simulator = new Simulator({
            ...clientParams,
            // appId: 'fake-debug-test',
        });
        await simulator.connect();

        client = new Elarian(clientParams);
        await client.connect();

        return { client, simulator };
    },

    getClient: async () => {
        if (client) {
            return client;
        }
        await module.exports.initializeClient();
        return client;
    },

    getSimulator: async () => {
        if (simulator) {
            return simulator;
        }
        await module.exports.initializeClient();
        return simulator;
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
