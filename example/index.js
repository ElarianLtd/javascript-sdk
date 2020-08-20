const {
    Client,
    NumberProvider,
    MessagingChannel,
} = require('../');

const elarian = new Client({
    apiKey: 'test',
    appId: 'test'
});


elarian.sendMessage({
        productId: 'test',

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
    .then(res => console.log('sendMessage()', res))
    .catch(ex => console.error(ex));
