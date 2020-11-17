module.exports = {
    clientParams: {
        appId: 'test_app',
        orgId: 'test_org',
        apiKey: 'test_api_key',
    },

    customerNumber: {
        number: '+254700100009',
        provider: 'telco',
    },

    adoptedCustomer: {
        number: '+254700200008',
        provider: 'telco',
    },

    notifCustomerNumber: {
        number: '+254700300007',
        provider: 'telco',
    },

    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
