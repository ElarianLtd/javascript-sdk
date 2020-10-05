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
// Simple SMS+USSD app
const Elarian = require('elarian');

const client = new Elarian({
    apiKey: 'test_api_key',
    orgId: 'test_org_id',
    appId: 'test_app_id',
});

aclient.sendMessageByTag(
    {
        key: 'userSegment',
        value: 'testers',
    },
    {
        number: 21414,
        provider: 'sms',
    },
    {
        text: 'Hey There! Wanna see something cool? Dial *384#!',
    },
);

client.on('ussdSession', async (data, customer) => {
    const {
        input,
        sessionId,
    } = data;

    const metadata = await customer.leaseMetadata('awesomeSurvey');
    let {
        name,
        state = 'newbie',
    } = metadata.value;

    const menu = {
        text: null,
        isTerminal: true,
    };

    switch (state) {
    case 'veteran':
        if (name) {
            menu.text = `Welcome back ${name}! What's your new name?`;
            menu.isTerminal = false;
        } else {
            name = input;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
        }
        break;
    case 'newbie':
    default:
        menu.text = 'Hey there, welcome to Elarian! What\'s your name?';
        menu.isTerminal = false;
        state = 'veteran';
        break;
    }

    await customer.updateMetadata({
        awesomeSurvey: {
            state,
            name,
        },
    });
    await client.replyToUssdSession(sessionId, menu);
});

```

## Initialization

To use the SDK, you need an instance of the Elarian client. One can be created as follows:

```js
const client = new Elarian(options);
```

From this client, you can instantiate customer objects as follows:

```js
const kamau = new client.Customer(options);
```

## Classes

- `Elarian(options)`: Elarian client class. `options`has the following keys:
  - `orgId`: The id of your registered organization
  - `appId`: The id of your app
  - `apiKey`: Your organization's API key
  - `authToken`: An short-lived auth token that can be used instead of the API key.
- `Elarian.Customer(options)`: Customer class. `options` must have **one** the following keys:
  - `customerId`: An elarian-generated customer id.
  - `customerNumber`: An object containing the customer's phone number and provider.
    - `number`: A phone number string
    - `provider`: Must be one of `[telco, telegram, facebook]`
  - `secondaryId`: An object containining a customer secondary id.
    - `key`: A string idenifying the type of id. e.g. `passportNumber`
    - `value`: A string value of the secondary id. e.g. `OP00332`

## Methods

The `Elarian` class has the following methods

- `authToken()`

- `getCustomerState(customer)`
- `adoptCustomerState(customer)`
- `updateCustomerTag(customer, tags)`
- `deleteCustomerTag(customer, tags)`
- `updateCustomerSecondaryId(customer, secondaryIds)`
- `deleteCustomerSecondaryId(customer, secondaryIds)`
- `addCustomerReminder(customer, reminder)`
- `cancelCustomerReminder(customer, key)`
- `addCustomerReminderByTag(tag, reminder)`
- `cancelCustomerReminderByTag(tag, key)`
- `updateCustomerMetadata(customer, metadata)`
- `leaseCustomerMedatadata(customer, key)`
- `deleteCustomerMedata(customer, keys)`
- `sendMessage(customer, channelNumber, body)`
- `sendMessageByTag(tag, channelNumber, body)`
- `repyToMessage(customer, replyToMessageId, body)`
- `messagingConsent(customer, channelNumber, action)`
- `initiatePayment(debitParty, creditParty, value)`
- `replyToUssdSession(sessionId, menu)`
- `makeVoiceCall(customer, channelNumber)`
- `replyToVoiceCall(sessionId, actions)`

The `Elarian.Customer` has the following methods:

- `getState()`
- `adoptState(otherCustomer)`
- `updateTags(tags)`
- `deleteTags(tags)`
- `updateSecondaryId(secondaryIds)`
- `deleteSecondaryId(secondaryId)`
- `addReminder(reminder)`
- `cancelReminder(key)`
- `updateMetadata(metadata)`
- `leaseMetadata(key)`
- `deleteMedata(keys)`
- `sendMessage(channelNumber, body)`

##  Events

The elarian client can listen for the following events

- `reminder`
- `voiceCall`
- `ussdSession`
- `paymentStatus`
- `messageStatus`
- `receivedMessage`
- `receivedPayment`
- `walletPaymentStatus`
- `messagingSessionStatus`
- `messagingConsentStatus`

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/node-sdk/issues).