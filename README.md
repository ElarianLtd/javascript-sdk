# Elarian JavaScript SDK

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian/sdk)

> The wrapper provides convenient access to the Elarian API from applications written in JavaScript.

## Documentation

Take a look at the [API docs here](http://docs.elarian.com).


## Install

You can install the package from [npm](npmjs.com/package/elarian/sdk) by running: 

```bash
$ npm install @elarian/sdk
$ bower install @elarian/sdk
```

## Usage


```javascript
const Elarian = require('@elarian/sdk');

const elarian = new Elarian({
    apiKey: 'test_api_key',
    sandbox: true,
});

const req = {
    "customerNumber": {
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
const resp = await elarian.SendMessage(req);
console.log(resp);
// ...
```

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).