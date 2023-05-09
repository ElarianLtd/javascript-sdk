require('dotenv').config();

const clientParams = {
    appId: process.env.APP_ID,
    orgId: process.env.ORG_ID,
    apiKey: process.env.API_KEY,
    receiveNotification: true,
    options: {
        lifetime: 1800000,
        keepAlive: 2500,
        notificationTimeout: 10,
    },
};

module.exports = {
    clientParams,

    connectOpts: { host: process.env.HOST, port: process.env.PORT },

    humanId: '3er23re23',

    sleep: (ms) => new Promise((resolve) => {
        setTimeout(resolve, ms);
    }),
};
