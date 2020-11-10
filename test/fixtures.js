module.exports = {
    clientParams: {
        appId: 'test_app',
        orgId: 'test_org',
        apiKey: 'test_api_key',
    },

    customerNumber: {
        number: '+254700000009',
        provider: 'telco',
    },

    adoptedCustomer: {
        number: '+254700000008',
        provider: 'telco',
    },

    notifCustomerNumber: {
        number: '+254700000007',
        provider: 'telco',
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
