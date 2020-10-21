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
            name = input.value;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
            await customer.sendMessage(
                { number: 'Elarian', provider: 'telco' },
                { text: `Hey ${name}! Thank you for trying out Elarian` },
            );
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

- `Elarian(options, configs)`: Elarian client class. `options` has the following keys:
  - `orgId`: The id of your registered organization
  - `appId`: The id of your app
  - `apiKey`: Your organization's API key
  - `authToken`: An short-lived auth token that can be used instead of the API key.

> The optional `configOptions` can have the following keys:
>
> - `serializer`:
>   - `type`: **text** or **binary**
>   - `serialize(data)`: A function that returns the serialized object.
>   - `deserialize(data)`: A function that returns a deserialized object.

```
```

- `Elarian.Customer(options)`: Customer class. `options` must have **one** the following keys:
  - `customerId`: An elarian-generated customer id.
  - `customerNumber`: An object containing the customer's phone number and provider.
    - `number`: A phone number string
    - `provider`: Must be one of `[telco, telegram, facebook]`
  - `secondaryId`: An object containing a customer secondary id.
    - `key`: A string identifying the type of id. e.g. `passportNumber`
    - `value`: A string value of the secondary id. e.g. `OP00332`

## Methods

The `Elarian` class has the following methods

- `authToken()`: Generate a short-lived auth token to use instead of `apiKey`. Used for browser and mobile clients.
```
```
- `getCustomerState(customer)`: Fetch the customer's state. The following object will be returned on success:
```js
{
    customerId: 'el_cst_....',
    messagingState: {},
    ussdState: {},
    voiceState: {},
    paymentState: {},
    tags: [{
        key,
        value,
        expiration,
    }],
    secondaryIds: [{
        key,
        value,
        expiration,
    }],
    metadata: {},
}
```
- `adoptCustomerState(customerOne, customerTwo)`: Merge `customerTwo`'s state into `customerOne`'s state and discard `customerTwo`. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `updateCustomerTag(customer, tags)`: Update a customer's tag list. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `deleteCustomerTag(customer, tags)`: Remove some tags from a customer. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `updateCustomerSecondaryId(customer, secondaryIds)`: Update a customer's secondary Ids. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `deleteCustomerSecondaryId(customer, secondaryIds)`: Remove some secondary Ids from a customer. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `addCustomerReminder(customer, reminder)`: Set a reminder to be triggered at the specified time for a particular customer. The `reminder` object has the following structure:
```js
{
    key, // String, unique key identifying this reminder
    expiration, // Number, Epoch time(in seconds), for when the reminder should be fired off
    interval, // Optional Number, in seconds, to repeat the reminder.
    payload, // Optional String, to be sent back in the reminder notification.
}
```
The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `cancelCustomerReminder(customer, key)`: Cancels a previously set reminder with the key `key` on the customer. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `addCustomerReminderByTag(tag, reminder)`: Set a reminder to be triggered at the specified time for customers with the particular tag. The following object will be returned:
```js
{
    status,
    description,
    workId
}
```
- `cancelCustomerReminderByTag(tag, key)`: Cancels a previously set reminder with tag `tag` and key `key`. The following object will be returned:
```js
{
    status,
    description,
    workId
}
```
- `updateCustomerMetadata(customer, metadata)`: Sets some metadata on the customer.
Values in the `metadata` object can either be strings or buffers. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `leaseCustomerMedatadata(customer, key)`: Fetches the value of `key` from the customer's metdata and locks metadata fetching(for up to `90s`) until next call to update metadata. The following object will be returned:
```js
{
    status,
    description,
    customerId,
    value, // Value of `key` in the metadata object
}
```
- `deleteCustomerMedata(customer, keys)`: Remove some metadata from a customer. `keys` is an array of strings. The following object will be returned:
```js
{
    status,
    description,
    customerId
}
```
- `sendMessage(customer, channelNumber, body)`: Send a message to the customer from the specified channel number.
```
```
- `sendMessageByTag(tag, channelNumber, body)`: Send a message to customers with tag `tag` from the specified channel number.
```
```
- `repyToMessage(customer, replyToMessageId, body)`: Reply to a recieved message.
```
```
- `messagingConsent(customer, channelNumber, action)`: Initiate messaging consent for this customer for this channel number. `action` can either be `opt-in` or `opt-out`.
```
```
- `initiatePayment(debitParty, creditParty, value)`: Initiate a payment.
```
```
- `replyToUssdSession(sessionId, menu)`: Respond to a ussd notification with a menu.
```
```
- `makeVoiceCall(customer, channelNumber)`: Initiate a voice call to the customer from the specified channel number. The following object will be returned:
```js
{
    status,
    description,
    sessionId,
    customerId,
}
```
- `replyToVoiceCall(sessionId, actions)`: Respond to a voice call with voice actions. `actions` is an array of one or more of the following objects:

    -  **say** action:
    ```js
    {
        say: {
            text: 'Some english text',
            playBeep: true,
            voice: 'female', // or male
        }
    }
    ```
    -  **play** action:
    ```js
    {
        play: {
            url: 'https://some/url/with/an/audio/file/to/play.mp3'
        }
    }
    ```
    -  **getDigits** action:
    ```js
    {
        getDigits: {
            timeout: 60,
            finishOnKey: '#',
            numDigits: 2,

            play: {...},
            // or
            say: {...},
        }
    }
    ```
    -  **dial** action:
    ```js
    {
        dial: {
            customerNumbers: [],
            record: false,
            sequential: true,
            ringbackTone: 'https://some/url/with/an/audio/file/to/play.mp3',
            callerId: 'ABC1334',
            maxDuration: 12,
        }
    }
    ```
    -  **recordSession** action:
    ```js
    {
        recordSession: true,
    }
    ```
    -  **getRecording** action:
    ```js
    {
        getRecording: {
            timeout: 60,
            maxLength: 10,
            finishOnKey: '#',
            playBeep: true,
            trimSilence: false,

            play: {...},
            // or
            say: {...},
        }
    }
    ```
    -  **enqueue** action:
    ```js
    {
        enqueue: {
            holdMusic: 'http://music.mp3',
            queueName: 'abcqueue',
        },
    }
    ```
    -  **dequeue** action:
    ```js
    {
        dequeue: {
            channelNumber: {...},
            record: true,
            queueName: 'abcqueue',
        },
    }
    ```
    -  **reject** action:
    ```js
    {
        reject: true
    }
    ```
    -  **redirect** action:
    ```js
    {
        redirect: {
            url: 'https://awesome.xml'
        }
    }
    ```

The `Elarian.Customer` has the following methods:

- `getState()`: Similar to `client.getCustomerState()`.
```
```
- `adoptState(otherCustomer)`: Similar to `client.adoptCustomerState()`.
```
```
- `updateTags(tags)`: Similar to `client.updateCustomerTags()`.
```
```
- `deleteTags(tags)`: Similar to `client.deleteCustomerTags()`.
```
```
- `updateSecondaryId(secondaryIds)`: Similar to `client.updateCustomerSecondaryIds()`.
```
```
- `deleteSecondaryId(secondaryId)`: Similar to `client.deleteCustomerSecondaryIds()`.
```
```
- `addReminder(reminder)`:  Similar to `client.addCustomerReminder()`.
```
```
- `cancelReminder(key)`:  Similar to `client.cancelCustomerReminder()`.
```
```
- `updateMetadata(metadata)`:  Similar to `client.updateCustomerMetadata()`.
```
```
- `leaseMetadata(key)`: Similar to `client.leaseCustomerMedatadata()`.
```
```
- `deleteMetadata(keys)`:  Similar to `client.deleteCustomerMedata()`.
```
```
- `sendMessage(channelNumber, body)`: Similar to `client.sendMessage()`.
```
```

##  Events

The elarian client can listen for the following events:

- `data`: This event is fired everytime Elarian has something to notify your app about. Can be used for debugging. You should be listeneing for the specific events shown below.
- `reminder`: When a reminder reaches it's `expiration` time(and every `interval` repeat), this event is fired.
- `voiceCall`: Fired when a voice interaction is needed.
- `ussdSession`: Fired when a USSD interaction needs to be handled
- `paymentStatus`: Fired when the status of a payment has changed. e.g. failed payment
- `messageStatus`: Fired when the status of a message has changed. e.g. message delivered
- `receivedMessage`: Fired when your app receives a message.
- `receivedPayment`: Fired when your app receives a payment.
- `walletPaymentStatus`: Fired when the status of a wallet payment changes.
- `messagingSessionStatus`: 
- `messagingConsentStatus`:

## Objects

- `tag`:
    - `key`
    - `value`
    - `expiration`

- `secondaryId`:
    - `key`
    - `value`

- `customerNumber`:
    - `number`
    - `provider`: **telco**, **telegram** or **facebook**
    - `partition`:

- `channelNumber`:
    - `number`
    - `provider`: **telco** (for payment, ussd and voice), **sms**, **telegram**, **google_rcs**, **fb_messenger**, **whatsapp** (for messaging)

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/node-sdk/issues).