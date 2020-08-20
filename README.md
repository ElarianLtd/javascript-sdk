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

- `getCustomerState(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    }
}
```

- `adoptCustomerState(params)`:
```js
{
    customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',

    // either
    // otherCustomerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    otherCustomerNumber: {
        number: '+254700000001',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    }
}
```

- `addCustomerReminder(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',

    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },
    
    reminder: {
        productId: 'fake',
        key: 'rm-key',
        expiration: 34235234523,
        payload: '{"abc":"def"}',
    }
}
```

- `addCustomerReminderByTag(params)`:
```js
{
    tag: {
        key: 'fake',
        value: 'longvalue',
    },
    reminder: {
        productId: 'fake';,
        key: 'rm-key',
        expiration: 3600,
        payload: '{"abc":"def"}',
    }
}
```

- `cancelCustomerReminder(params)`:
```js
{
    productId: 'fake',
    key: 'fake',

    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    }
}
```

- `cancelCustomerReminderByTag(params)`:
```js
{
    tag: {
        key: 'fake',
        value: 'longvalue',
    },
    productId: 'fake',
    key: 'fake',
}
```
  
- `updateCustomerTag(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    tags: [
        {
            mapping: {
                key: 'test_one_tag',
                value: 'one_tag'
            },
            expiration: 3600
        }
    ]
}
```

- `deleteCustomerTag(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',

    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    tags: ['a', 'c', 'd']
}
```

- `updateCustomerSecondaryId(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },
    
    secondaryIds: [
        {
            mapping: {
                key: 'test_one_tag',
                value: 'one_tag'
            },
            expiration: 3600
        }
    ]
}
```

- `deleteCustomerSecondaryId(params)`:
```js
{
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',

    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },
    secondaryIds: [
        {
            key: 'test_one_tag',
            value: 'one_tag'
        }
    ]
}
```

- `updateCustomerMetadata(params)`:
```js
{
    // either
    //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    metadata: {
        foo: 'bar',
    }
}
```

- `deleteCustomerMetadata(params)`:
```js
{
    // either
    //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    metadata: ['a', 'c', 'd']
}
```

- `sendMessage(params)`:
```js
{
    productId: 'fake fake',

    // either
    //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    channelNumber: {
        number: '41011',
        channel: MessagingChannel.{ SMS | TELEGRAM | WHATSAPP | FACEBOOK_MESSENGER | GOOGLE_RCS }
    },
    body: {
        text: {
            text: 'Hello Boss',
            template: {
                name: 'abc-template',
                params: ['value1', 'value2']
            }
        },

        media: {
            url: 'https://fake.faa',
            type: MediaType.{ VOICE | VIDEO | IMAGE | AUDIO | DOCUMENT | STICKER }
        },

        location: {
            latitude: -1.45609,
            longitude: 33.8449
        },
    }
}
```

- `sendMessageByTag(params)`:
```js
{
    productId: 'fake fake',

    tag: {
        key: 'fake',
        value: 'longvalue',
    },

    channelNumber: {
        number: '41011',
        channel: MessagingChannel.{ SMS | TELEGRAM | WHATSAPP | FACEBOOK_MESSENGER | GOOGLE_RCS }
    },
    body: {
        text: {
            text: 'Hello Boss',
            template: {
                name: 'abc-template',
                params: ['value1', 'value2']
            }
        },

        media: {
            url: 'https://fake.faa',
            type: MediaType.{ VOICE | VIDEO | IMAGE | AUDIO | DOCUMENT | STICKER }
        },

        location: {
            latitude: -1.45609,
            longitude: 33.8449
        },
    }
}
```

- `replyToMessage(params)`:
```js
{
    productId: 'fake',
    customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    replyToMessageId: 'el_msg_67a6d10ccffa84ba2c017ae77c9e4d94',

    body: {
        text: {
            text: 'Hello Bosses',
            template: {
                name: 'abc-template',
                params: ['value1', 'value2']
            }
        },

        media: {
            url: 'https://fake.faa',
            type: MediaType.{ VOICE | VIDEO | IMAGE | AUDIO | DOCUMENT | STICKER }
        },

        location: {
            latitude: -1.45609,
            longitude: 23.8449
        },
    }
}
```


- `messagingConsent(params)`:
```js
{
    action: ConsentAction.{ OPT_IN | OPT_OUT },

    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    channelNumber: {
        number: '41011',
        channel: MessagingChannel.{ SMS | TELEGRAM | WHATSAPP | FACEBOOK_MESSENGER | GOOGLE_RCS }
    },
}
```

- `sendPayment(params)`:
```js
{
    productId: 'product_x',
    
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    channelNumber: {
        number: '+254700000001',
        channel: PaymentChannel.{ TELCO }
    },

    value: {
        currencyCode: 'KES',
        amount: 8989,
    }
}
```

- `checkoutPayment(params)`:
```js
{
    productId: 'fake',
    
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    channelNumber: {
        number: '+254700000001',
        channel: PaymentChannel.{ TELCO }
    },

    value: {
        currencyCode: 'KES',
        amount: 8989,
    }
}
```

- `makeVoiceCall(params)`:
```js
{
    productId: 'orjnsjewkjn',
    
    // either
    // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
    
    // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.{ TELCO | FACEBOOK | TELEGRAM },
    },

    channelNumber: {
        number: '+254700000001',
        channel: VoiceChannel.{ TELCO }
    },
}
```
  
- `sendWebhookResponse(params)`:
```js
{
    sessionId: 'fake',
    ussdMenu: {
        text: 'Hey Guys! Welcome to my USSD Channel',
        isTerminal: true
    },
    voiceCallActions: [
        {
            // SayCallAction
        },
        {
            // PlayCallAction
        }
        // ...
    ]
}
```


- `streamNotifications()`:

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/node-sdk/issues).