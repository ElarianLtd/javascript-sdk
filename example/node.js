// Simple SMS+USSD app
const { Client, Customer } = require('..');

const client = new Client({
    apiKey: 'test_api_key',
    orgId: 'test_org',
    appId: 'test_app',
});

client.on('ussdSession', async (data, customer) => {
    const {
        input,
        sessionId,
    } = data;

    const metadata = await customer.leaseMetadata('awesomeNameSurvey');
    let {
        name,
        state = 'newbie',
    } = metadata.value || {};

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

    await client.replyToUssdSession(sessionId, menu);
});

async function testSend() {
    const customer = new Customer({
        customerNumber: {
            number: '+254712769882',
            provider: 'telco',
        },
        // customerId: 'el_cst_c4d48f1f0247ec341e47b6d6c8a3ac7e',
    });

    let st = await customer.getState();
    console.log(st);

    const resp = await customer.sendMessage(
        {
            number: 'Elarian',
            provider: 'sms',
        },
        {
            text: 'node customer messaging test',
        },
    );
    console.log(resp);

    st = await customer.getState();
    console.log(JSON.stringify(st, null, 2));
}

client
    .connect()
    .then(() => {
        console.log('App running, waiting for notifications!\n');
        return testSend();
    })
    .catch((ex) => console.log('wed', ex));
