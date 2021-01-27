require('dotenv').config();

const { Elarian } = require('..');

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
    })
    .catch((ex) => console.log('error: ', ex));
