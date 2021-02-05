require('dotenv').config();

const { Elarian } = require('..');
const Customer = require('../lib/customer');

const client = new Elarian({
    appId: process.env.ELARIAN_APP_ID,
    orgId: process.env.ELARIAN_ORG_ID,
    apiKey: process.env.ELARIAN_API_KEY,
});

client.on('data', (event, data) => {
    console.log(event, data);
});

client
    .connect()
    .then(() => {
        console.log('App running, waiting for notifications!\n');

        setInterval(() => {
            const customerNumber = {
                number: '+254718769882',
                provider: 'cellular',
            };
            const channelNumber = {
                number: '21414',
                channel: 'sms',
            };
            const customer = new Customer({
                client,
                customerNumber,
            });
            const tasks = [
                client.sendMessage(
                    customer,
                    channelNumber,
                    { body: { text: `${Date.now()}` } },
                ),
                client.sendMessage(
                    customer,
                    channelNumber,
                    { body: { text: `${Date.now()}` } },
                ),
                client.sendMessage(
                    customer,
                    channelNumber,
                    { body: { text: `${Date.now()}` } },
                ),
            ];

            Promise.all(tasks)
                .then((resp) => console.info(resp))
                .catch((ex) => console.error(ex));
        }, 5000);
    })
    .catch((ex) => console.log('error: ', ex));
