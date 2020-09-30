// Simple SMS+USSD app
const Elarian = require('..');

const client = new Elarian({
    apiKey: 'test_api_key',
    orgId: 'test_org_id',
    appId: 'test_app_id',
});

client.sendMessageByTag(
    {
        key: 'userSegment',
        value: 'testers',
    },
    {
        channel: {
            number: 21414,
            provider: 'sms',
        },
        body: {
            text: 'Hey There! Wanna see something cool? Dial *384#!',
        },
    },
);

client.on('ussdSession', async (data, customer) => {
    const {
        input,
        sessionId,
    } = data;

    const metadata = await customer.leaseMetadata('awesomeSurvey');
    let {
        name,
        state = 'newbie',
    } = metadata.value;

    const menu = {
        text: null,
        isTerminal: true,
    };

    switch (state) {
    case 'veteran':
        if (name) {
            menu.text = `Welcome back ${name}! What's your new name?`;
            menu.isTerminal = false;
        } else {
            name = input;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
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
        awesomeSurvey: {
            state,
            name,
        },
    });
    await client.replyToUssdSession(sessionId, menu);
});
