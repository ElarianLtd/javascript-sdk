require('dotenv').config();

const clientParams = {
    appId: process.env.APP_ID,
    sessionId: process.env.SESSION_ID,
};

module.exports = {
    clientParams,

    elarianId: '3er23re23',

    sleep: (ms) => new Promise((resolve) => {
        setTimeout(resolve, ms);
    }),
};
