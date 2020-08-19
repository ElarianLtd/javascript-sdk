const {
    Client,
    NumberProvider,
    MessagingChannel,
    MediaType,
    ConsentAction,
    VoiceChannel,
    PaymentChannel,
} = require('../');

const elarian = new Client({
    apiKey: '77bcc4b83574b3626e5b4780169c1dd7d62ed76e4515edc3e584c21e4e89ce91',
    appId: 'app-j90HNs'
});


elarian.authToken()
    .then(res => console.log('authToken()', res))
    .catch(ex => console.error(ex));

elarian.sendMessage({
        productId: 'product-j90HNs',

        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },

        channelNumber: {
            number: '41011',
            channel: MessagingChannel.SMS
        },
        body: {
            text: {
                text: 'Hello Boss',
                template: {
                    name: 'abc-template',
                    params: ['value1', 'value2']
                }
            },

            // media: {
            //     url: 'https://fake.faa',
            //     type: MediaType.VOICE

            // },

            // location: {
            //     latitude: 0,
            //     longitude: 0
            // },
        }
    })
    .then(res => console.log('sendMessage()', res))
    .catch(ex => console.error(ex));


elarian.sendMessageByTag({
        productId: 'product-j90HNs',

        tag: {
            key: 'fake',
            value: 'longvalue',
        },

        channelNumber: {
            number: '41011',
            channel: MessagingChannel.SMS
        },
        body: {
            text: {
                text: 'Hello Bosses',
                // template: {
                //     name: 'abc-template',
                //     params: ['value1', 'value2']
                // }
            },

            // media: {
            //     url: 'https://fake.faa',
            //     type: MediaType.VOICE

            // },

            // location: {
            //     latitude: 0,
            //     longitude: 0
            // },
        }
    })
    .then(res => console.log('sendMessageByTag()', res))
    .catch(ex => console.error(ex));

elarian.replyToMessage({
        productId: 'product-j90HNs',

        customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
        replyToMessageId: 'el_evt_8f6cba20-9c93-4f89-bab1-86349da308b5',

        body: {
            // text: {
            //     text: 'Hello Bosses',
            //     template: {
            //         name: 'abc-template',
            //         params: ['value1', 'value2']
            //     }
            // },

            media: {
                url: 'https://fake.faa',
                type: MediaType.VOICE
            },

            // location: {
            //     latitude: 0,
            //     longitude: 0
            // },
        }
    })
    .then(res => console.log('replyToMessage()', res))
    .catch(ex => console.error(ex));

elarian.messagingConsent({
        action: ConsentAction.OPT_IN,
        // customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        channelNumber: {
            number: '41011',
            channel: MessagingChannel.SMS
        },
    })
    .then(res => console.log('messagingConsent()', res))
    .catch(ex => console.error(ex));

elarian.makeVoiceCall({
        productId: 'product-j90HNs',

        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        
        channelNumber: {
            number: '+254700000001',
            channel: VoiceChannel.TELCO
        },
    })
    .then(res => console.log('makeVoiceCall()', res))
    .catch(ex => console.error(ex));

elarian.sendPayment({
        productId: 'product-j90HNs',

        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        
        channelNumber: {
            number: '92731',
            channel: PaymentChannel.TELCO
        },

        value: {
            currencyCode: 'KES',
            amount: 8989,
        }
    })
    .then(res => console.log('sendPayment()', res))
    .catch(ex => console.error(ex));

elarian.checkoutPayment({
        productId: 'product-j90HNs',

        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        
        channelNumber: {
            number: '92731',
            channel: PaymentChannel.TELCO
        },

        value: {
            currencyCode: 'KES',
            amount: 8989,
        }
    })
    .then(res => console.log('checkoutPayment()', res))
    .catch(ex => console.error(ex));


elarian.getCustomerState({
        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        }
    })
    .then(res => console.log('getCustomerState()', res))
    .catch(ex => console.error(ex));

elarian.adoptCustomerState({
        customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
        otherCustomerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        otherCustomerNumber: {
            number: '+254700000001',
            provider: NumberProvider.TELCO,
        }
    })
    .then(res => console.log('adoptCustomerState()', res))
    .catch(ex => console.error(ex));


elarian.addCustomerReminder({
        //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
        customerNumber: {
            number: '+254700000000',
            provider: NumberProvider.TELCO,
        },
        reminder: {
            productId: 'product-j90HNs',
            key: 'rm-key',
            expiration: 34235234523,
            payload: '{"abc":"def"}',
        }
    })
    .then(res => console.log('addCustomerReminder()', res))
    .catch(ex => console.error(ex));

// ...


elarian.deleteCustomerTag({
    //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.TELCO,
    },
    tags: ['a', 'c', 'd']
})
    .then(res => console.log('deleteCustomerTag()', res))
    .catch(ex => console.error(ex));

elarian.deleteCustomerMetadata({
    //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
    customerNumber: {
        number: '+254700000000',
        provider: NumberProvider.TELCO,
    },
    metadata: ['a', 'c', 'd']
})
    .then(res => console.log('deleteCustomerMetadata()', res))
    .catch(ex => console.error(ex));


elarian.sendWebhookResponse({
        sessionId: 'fake',
        ussdMenu: {},
        voiceCallActions: [
            {}
        ]
    })
    .then(res => console.log('sendWebhookResponse()', res))
    .catch(ex => console.error(ex));

const stream = elarian.streamNotifications();

stream.on('data', (notification) => {
    console.log('streamNotifications()', 'data' ,notification);
});
stream.on('end', () => {
    console.log('streamNotifications()', 'end');
});
stream.on('error', (err) => {
    console.log('streamNotifications()', 'error', err);
});