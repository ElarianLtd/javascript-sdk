require('dotenv').config();

const { Simulator } = require('..');

const client = new Simulator({
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
});

client.on('sendMessage', ({ data }) => {
    console.log('sendMessage', data);
});

client.on('makeVoiceCall', ({ data }) => {
    console.log('makeVoiceCall', data);
});

client.on('sendCustomerPayment', ({ data }) => {
    console.log('sendCustomerPayment', data);
});

client.on('sendChannelPayment', ({ data }) => {
    console.log('sendChannelPayment', data);
});

client.on('checkoutPayment', ({ data }) => {
    console.log('checkoutPayment', data);
});

client
    .connect()
    .on('error', (error) => {
        console.error('Failed to connect: ', error);
    })
    .on('connected', async () => {
        console.log('Simulator running, waiting for notifications!\n');

        setInterval(() => {
            const customerNumber = '+254718769882';
            const channelNumber = {
                number: '21414',
                channel: 'sms',
            };
            const messageBodyParts = [
                {
                    text: `${Date.now()}`,
                },
            ];
            const tasks = [
                client.receiveMessage(customerNumber, channelNumber, `${Date.now()}`, messageBodyParts),
                client.receivePayment(
                    `${Date.now()}`,
                    customerNumber,
                    {
                        number: '525900',
                        channel: 'cellular',
                    },
                    { currencyCode: 'KES', amount: Math.floor((Math.random() * 100) + 10) },
                    'pending_confirmation',
                ),
                client.receiveMessage(customerNumber, channelNumber, `${Date.now()}`, messageBodyParts),
            ];

            Promise.all(tasks)
                .then((resp) => console.info(resp))
                .catch((ex) => console.error(ex));
        }, 5000);
    });
