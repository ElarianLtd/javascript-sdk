require('dotenv').config();

const { Simulator } = require('..');

const client = new Simulator({
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
});

client.on('sendMessage', ({ data, customer }) => {
    console.log('sendMessage', data);
});

client.on('makeVoiceCall', ({ data, customer }) => {
    console.log('makeVoiceCall', data);
});

client.on('sendCustomerPayment', ({ data, customer }) => {
    console.log('sendCustomerPayment', data);
});

client.on('sendChannelPayment', ({ data, customer }) => {
    console.log('sendChannelPayment', data);
});

client.on('checkoutPayment', ({ data, customer }) => {
    console.log('checkoutPayment', data);
});

client
    .connect()
    .then(() => {
        console.log('Simulator running, waiting for notifications!\n');
    })
    .catch((ex) => console.log('error: ', ex));
