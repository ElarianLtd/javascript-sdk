require('dotenv').config();

const _ = require('lodash');
const { Elarian, Simulator } = require('../lib/index.node');

let client;
let simulator;

const clientParams = {
    appId: process.env.APP_ID,
    orgId: process.env.ORG_ID,
    apiKey: process.env.API_KEY,
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
        number: process.env.SMS_SENDER_ID,
        channel: 'cellular',
    },

    messagingChannel: {
        number: process.env.SMS_SENDER_ID,
        channel: 'sms',
    },

    ussdChannel: {
        number: process.env.USSD_CODE,
        channel: 'ussd',
    },

    voiceChannel: {
        number: process.env.VOICE_NUMBER,
        channel: 'voice',
    },

    shortCodeSenderId: process.env.SMS_SENDER_ID,
    alphannumericSenderId: process.env.SMS_SENDER_ID,
    telegramBot: process.env.TELEGRAM_NUMBER,
    paybill: process.env.MPESA_PAYBILL,
    purseId: process.env.PURSE_ID,
    ussdCode: process.env.USSD_CODE,
    voiceNumber: process.env.VOICE_NUMBER,
    whatsappNumber: process.env.WHATSAPP_NUMBER,
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

    getClient: async () => {
        if (client) {
            return client;
        }
        client = new Elarian(clientParams);
        return new Promise((rez, rej) => {
            client
                .on('error', (err) => rej(err))
                .on('connected', () => rez(client))
                .connect();
        });
    },

    getSimulator: async () => {
        if (simulator) {
            return simulator;
        }
        simulator = new Simulator(clientParams);
        return new Promise((rez, rej) => {
            simulator
                .on('error', (err) => {
                    console.error('Sumulator Error', err);
                    rej(err);
                })
                .on('connected', () => rez(simulator))
                .connect();
        });
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
