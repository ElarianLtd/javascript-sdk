// Simple SMS+USSD app
const { Client } = require('..');

const client = new Client({
    apiKey: 'test_api_key',
    orgId: 'test_org',
    appId: 'test_app',
});

client.on('ussdSession', async (data, customer) => {
    const {
        input,
    } = data;

    const metadata = await customer.leaseMetadata('awesomeNameSurvey');
    let {
        name,
        state = 'newbie',
    } = metadata;

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

    await customer.updateMetadata({
        awesomeNameSurvey: {
            state,
            name,
        },
    });

    return menu;
});

client
    .connect()
    .then(() => {
        console.log('App running, waiting for notifications!\n');
    })
    .catch((ex) => console.log('error: ', ex));
