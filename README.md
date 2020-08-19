# Elarian JavaScript SDK

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian)

> The wrapper provides convenient access to the Elarian APIs.

## Documentation

Take a look at the [API docs here](http://docs.elarian.com).


## Install

You can install the package from [npm](https://www.npmjs.com/package/elarian) by running: 

```bash
$ npm install elarian
```

## Usage


```javascript
const { Client } = require('elarian');

const elarian = new Client({
    apiKey: 'test_api_key',
    appId: 'test_app'
});

const stream = elarian.streamNotifications();

stream.on('data', (notification) => {
    console.log(notification);
});
stream.on('end', () => {
    // The server has finished sending
});
stream.on('error', (err) => {
    // An error has occurred and the stream has been closed.
    console.error(err);
});
stream.on('status', (status) => {
    // process status
});

```

## Methods

- `authToken()`:

- `getCustomerState()`:
- `adoptCustomerState()`: 

- `addCustomerReminder()`:
- `addCustomerReminderByTag()`:
- `cancelCustomerReminder()`:
- `cancelCustomerReminderByTag()`:
  
- `updateCustomerTag()`:
- `deleteCustomerTag()`:

- `updateCustomerSecondaryId()`:
- `deleteCustomerSecondaryId()`:

- `updateCustomerMetadata()`:
- `deleteCustomerMetadata ()`:

- `sendMessage()`:
- `sendMessageByTag()`:
- `replyToMessage()`:
- `messagingConsent()`:

- `sendPayment()`:
- `checkoutPayment()`:

- `makeVoiceCall()`:
  
- `streamNotifications()`:
- `sendWebhookResponse()`:


## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).