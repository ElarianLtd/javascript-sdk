const { Client, SendMessageRequest } = require('../');

const elarian = new Client({
    apiKey: 'test_api_key',
    sandbox: true,
});

const req = new SendMessageRequest({
    "customer_number": {
        "provider": "CUSTOMER_NUMBER_PROVIDER_TELCO",
        "number": "+254718008164"
    },
    "body": {
        "text": {
            "text": { "Hello": "de" }
        }
    },
    "channel_number": {
        "channel": "MESSAGING_CHANNEL_SMS",
        "number": "+254718008174"
    },
    "app_id": "test_app_id",
    "product_id": "test_product"
});
elarian.sendMessage(req)
    .then(res => console.log(res))
    .catch(ex => console.error("FAILEDDDDD", ex));
