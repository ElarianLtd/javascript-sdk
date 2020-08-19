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
const { Client, NumberProvider, MessagingChannel } = require('elarian');

const elarian = new Client({
    apiKey: 'test_api_key',
    appId: 'test_app'
});

elarian.sendMessage({
        productId: 'product-j90HNs',
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        channelNumber: {
            number: '41011',
            channel: MessagingChannel.SMS, // MessagingChannel.WHATSAPP, MessagingChannel.TELEGRAM, MessagingChannel.FACEBOOK_MESSENGER, MessagingChannel.GOOGLE_RCS
        },
        body: {
            text: {
                text: 'Hello Boss'
            }
        }
    })
    .then(res => console.log(res))
    .catch(ex => console.error(ex));
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