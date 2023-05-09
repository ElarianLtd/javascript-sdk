/*
    Simple loan disbursing app with agressive replayment reminders
*/
require('dotenv').config(); // load connfigs from .env

const log = require('signale');

const {
    Elarian,
} = require('..');

let client;

const processReminder = async (notification) => {
    try {
        log.info('Processing reminder', notification);
    } catch (error) {
        log.error('Reminder Error: ', error);
    }
};

const start = () => {
    client = new Elarian({
        appId: process.env.APP_ID,
        orgId: process.env.ORG_ID,
        apiKey: process.env.API_KEY,
    });

    client.on('reminder', processReminder);
    client.addReminder(process.env.HUMAN_ID, {
        key: 'test',
        remindAt: (Date.now() / 1000) + 10,
        payload: JSON.stringify({ a: 1, b: 2 }),
    });

    client
        .on('error', (error) => {
            log.warn(`${error.message || error}`);
        })
        .on('connected', async () => {
            log.success('App is connected...');
        })
        .connect();
};

start();
