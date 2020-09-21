const {
    Client,
    StringValue,
    CustomerNumber,
    TextMessageBody,
    MessagingChannel,
    SendMessageRequest,
    TextMessageTemplate,
    CustomerMessageBody,
    CustomerNumberProvider,
    MessagingChannelNumber,
} = require('../');

const elarian = new Client({
    apiKey: '77bcc4b83574b3626e5b4780169c1dd7d62ed76e4515edc3e584c21e4e89ce91',
});

const req = new SendMessageRequest()
    .setAppId('app-j90HNs')
    .setOrgId('org-1234')
    .setCustomerNumber(
        new CustomerNumber()
            .setProvider(CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELCO)
            .setNumber('+254700000000')
    )
    .setChannelNumber(
        new MessagingChannelNumber()
            .setChannel(MessagingChannel.MESSAGING_CHANNEL_SMS)
            .setNumber('41011')
    )
    .setBody(
        new CustomerMessageBody()
            .setText(
                new TextMessageBody()
                    .setText(new StringValue('????'))
                    .setTemplate(
                        new TextMessageTemplate()
                            .setName('abc')
                            .setParamsList(['efg', 'def'])
                    )
            )
    );

elarian.sendMessage(req)
    .then(res => console.log(res))
    .catch(ex => console.error(ex));