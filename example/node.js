// Simple SMS+USSD app
require('dotenv').config();

const { Elarian } = require('..');

const client = new Elarian({
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
});

client.on('ussdSession', async (notification, callback) => {
    const { data: { input }, customer } = notification;

    const appData = await customer.leaseAppData();
    let {
        name,
        state = 'newbie',
    } = appData;

    const menu = {
        text: null,
        isTerminal: true,
    };

    switch (state) {
    case 'veteran':
        if (name || name === '') {
            menu.text = `Welcome back ${name}! What's your new name?`;
            menu.isTerminal = false;
            name = null;
        } else {
            name = input.value;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
            await customer.sendMessage(
                { number: 'Elarian', provider: 'sms' },
                { text: `Hey ${name}! Thank you for trying out Elarian` },
            );
        }
        break;
    case 'newbie':
    default:
        menu.text = 'Hey there, welcome to Elarian! What\'s your name?';
        menu.isTerminal = false;
        state = 'veteran';
        break;
    }

    callback(null, menu);
    await customer.updateAppData({ state, name });
});

client
    .connect()
    .then(() => {
        console.log('App running, waiting for notifications!\n');
    })
    .catch((ex) => console.log('error: ', ex));
