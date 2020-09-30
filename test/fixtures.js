module.exports = {
    clientParams: {
        appId: 'test_app',
        orgId: 'test_org',
        apiKey: 'test_api_key',
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
