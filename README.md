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
const Elarian = require('elarian');

const elarian = new Elarian({
    apiKey: 'test_api_key',
    sandbox: true,
});

const stream = await elarian.StreamNotifications({
    app_id: 'test_app'
});

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

- `AuthToken()`: Generate auth token

- `GetCustomerState()`:
- `AdoptCustomerState()`: 

- `AddCustomerReminder()`:
- `AddCustomerReminderByTag()`:
- `CancelCustomerReminder()`:
- `CancelCustomerReminderByTag()`:
  
- `UpdateCustomerTag()`:
- `DeleteCustomerTag()`:

- `UpdateCustomerSecondaryId()`:
- `DeleteCustomerSecondaryId()`:

- `UpdateCustomerMetadata()`:
- `DeleteCustomerMetadata ()`:

- `SendMessage()`: Sending a message to your customer
- `SendMessageByTag()`: Sending a message to a group of customers using tags
- `ReplyToMessage()`: Replying to a message from your customer
- `MessagingConsent()`: Opting a customer in or out of receiving messages from your app

- `SendPayment()`:
- `CheckoutPayment()`:

- `MakeVoiceCall()`:
  
- `StreamNotifications()`:
- `SendWebhookResponse()`:


## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).