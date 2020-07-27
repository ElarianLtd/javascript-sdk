const Elarian = require('../');

const elarian = new Elarian({
    apiKey: 'test_api_key',
    sandbox: true,
});

const req = {
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
    "app_id": "test_app",
    "product_id": "test_product"
};
elarian.SendMessage(req)
    .then(res => console.log(res))
    .catch(ex => console.error("FAILEDDDDD", ex));

console.log(elarian.StreamNotifications);
