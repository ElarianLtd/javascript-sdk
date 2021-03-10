/*
    Simple loan disbursing app with agressive replayment reminders
*/

require('dotenv').config(); // load connfigs from .env

const {
    Elarian,
} = require('..');

let client;

const smsChannel = {
    number: process.env.SMS_SENDER_ID,
    channel: 'sms',
};

const mpesaChannel = {
    number: process.env.MPESA_PAYBILL,
    channel: 'cellular',
};

const voiceChannel = {
    number: process.env.VOICE_NUMBER,
    channel: 'voice',
};

const purseId = process.env.PURSE_ID;

const approveLoan = async (customer, amount) => {
    console.info(`Processing loan for ${customer.customerNumber.number}`);

    const { name } = await customer.getMetadata();
    const repaymentDate = (Date.now() + 60000);
    const res = await client.initiatePayment({
        purseId,
    }, {
        channelNumber: mpesaChannel,
        customerNumber: customer.customerNumber,
    }, {
        amount,
        currencyCode: 'KES',
    });
    if (!['success', 'queued', 'pending_confirmation', 'pending_validation'].includes(res.status)) {
        console.error(`Failed to send KES ${amount} to ${customer.customerNumber.number}: `, res.description);
        return;
    }
    await customer.updateMetadata({
        name,
        balance: amount,
    });
    await customer.sendMessage(
        smsChannel, {
            body: {
                text: `
                Congratulations ${name}!
                Your loan of KES ${amount} has been approved!
                You are expected to pay it back by ${new Date(repaymentDate)}
                `,
            },
        },
    );
    await customer.addReminder({
        key: 'moni',
        remindAt: repaymentDate / 1000,
        payload: '',
    });
};
const processPayment = async (customer, {
    amount,
}) => {
    console.info(`Processing payment from ${customer.customerNumber.number}`);
    const {
        name,
        balance,
    } = await customer.getMetadata();
    const newBalance = balance - amount;
    await customer.updateMetadata({
        name,
        balance: newBalance,
    });
    if (newBalance <= 0) {
        await customer.cancelReminder('moni');
        await customer.sendMessage(
            smsChannel, {
                body: {
                    text: `Thank you for your payment ${name}, your loan has been fully repaid!!`,
                },
            },
        );
        await customer.deleteMetadata(['name', 'strike', 'balance', 'screen']); // clear state
    } else {
        await customer.sendMessage(
            smsChannel, {
                body: {
                    text: `Hey ${name}!\nThank you for your payment, but you still owe me KES ${newBalance}`,
                },
            },
        );
    }
};
const processReminder = async (customer) => {
    try {
        const customerData = await customer.getMetadata();
        console.info(`Processing reminder for ${customer.customerNumber.number}`);
        const {
            name,
            balance,
        } = customerData;
        const {
            strike = 1,
        } = customerData;
        if (strike === 1) {
            await customer.sendMessage(smsChannel, {
                body: {
                    text: `Hello ${name}, this is a friendly reminder to pay back my KES ${balance}`,
                },
            });
        } else if (strike === 2) {
            await customer.sendMessage(smsChannel, {
                body: {
                    text: `Hey ${name}, you still need to pay back my KES ${balance}`,
                },
            });
        } else {
            await customer.sendMessage(smsChannel, {
                body: {
                    text: `Yo ${name}!!!! you need to pay back my KES ${balance}`,
                },
            });
            await customer.makeVoiceCall(voiceChannel.number, [{
                say: {
                    text: `Yo ${name}!!!!, you need to pay back my KES ${balance}`,
                    voice: 'male',
                },
            }]);
        }
        await customer.updateMetadata({
            ...customerData,
            strike: strike + 1,
        });
        await customer.addReminder({
            key: 'moni',
            remindAt: (Date.now() + 60000) / 1000,
            payload: '',
        });
    } catch (error) {
        console.error('Reminder Error: ', error);
    }
};
const processUssd = async (customer, notification, appData, callback) => {
    try {
        console.info(`Processing USSD from ${customer.customerNumber.number}`);
        const {
            input,
        } = notification;
        const {
            screen = 'home',
        } = appData;
        const customerData = await customer.getMetadata();
        let {
            name,
            balance = 0,
        } = customerData;
        const menu = {
            text: null,
            isTerminal: false,
        };
        let nextScreen = screen;
        if (screen === 'home' && input !== '') {
            if (input === '1') {
                nextScreen = 'request-name';
            } else if (input === '2') {
                nextScreen = 'quit';
            }
        }
        if (screen === 'home' && input === '') {
            if (name) {
                nextScreen = 'info';
            }
        }
        switch (nextScreen) {
        case 'quit':
            menu.text = 'Happy Coding!';
            menu.isTerminal = true;
            nextScreen = 'home';
            callback(null, menu, {
                screen: nextScreen,
            });
            break;
        case 'info':
            menu.text = `Hey ${name}, `;
            menu.text += balance > 0 ? `you still owe me KES ${balance}!` : 'you have repaid your loan, good for you!';
            menu.isTerminal = true;
            nextScreen = 'home';
            callback(null, menu, {
                screen: nextScreen,
            });
            break;
        case 'request-name':
            menu.text = 'Alright, what is your name?';
            nextScreen = 'request-amount';
            callback(null, menu, {
                screen: nextScreen,
            });
            break;
        case 'request-amount':
            name = input;
            menu.text = `Okay ${name}, how much do you need?`;
            nextScreen = 'approve-amount';
            callback(null, menu, {
                screen: nextScreen,
            });
            break;
        case 'approve-amount':
            balance = parseInt(input, 10);
            menu.text = `Awesome! ${name} we are reviewing your application and will be in touch shortly!\nHave a lovely day!`;
            menu.isTerminal = true;
            nextScreen = 'home';
            callback(null, menu, {
                screen: nextScreen,
            });
            await approveLoan(customer, balance);
            break;
        case 'home':
        default:
            menu.text = 'Welcome to MoniMoni!\n1. Apply for loan\n2. Quit';
            menu.isTerminal = false;
            callback(null, menu, {
                screen: nextScreen,
            });
            break;
        }
        await customer.updateMetadata({
            name,
            balance,
        });
    } catch (error) {
        console.error('USSD Error: ', error);
    }
};
const start = () => {
    client = new Elarian({
        appId: process.env.APP_ID,
        orgId: process.env.ORG_ID,
        apiKey: process.env.API_KEY,
    });
    client.on('reminder', async (reminder, customer) => {
        await processReminder(customer);
    });
    client.on('ussdSession', async (notification, customer, appData, callback) => {
        await processUssd(customer, notification, appData, callback);
    });
    client.on('receivedPayment', async (notification, customer) => {
        await processPayment(customer, notification.value);
    });
    client
        .connect()
        .on('error', (error) => {
            console.error('App failed to start: ', error);
        })
        .on('connected', () => {
            console.log(`App is up and running, waiting for customers on ${process.env.USSD_CODE}`);
        });
};
start();
