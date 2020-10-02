module.exports = {
    clientParams: {
        appId: 'test_app',
        orgId: 'test_org',
        apiKey: 'test_api_key',
    },

    customerNumber: {
        number: '+254720000000',
        provider: 'telco',
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
