const { Client, GetCustomerStateRequest } = require('../');

const elarian = new Client({
    apiKey: 'test_api_key',
    sandbox: true,
});

const req = new GetCustomerStateRequest()
    .setCustomerId("fake")
    .setAppId("test_app");


elarian.getCustomerState(req)
    .then(res => console.log(res))
    .catch(ex => console.error("FAILEDDDDD", ex));