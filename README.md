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
} = require('elarian');

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
```

## Methods

```
authToken(AuthTokenRequest) -> AuthTokenReply

getCustomerState(GetCustomerStateRequest) -> GetCustomerStateReply
adoptCustomerState(AdoptCustomerStateRequest) -> UpdateCustomerStateReply

addCustomerReminder(AddCustomerReminderRequest) -> UpdateCustomerStateReply
addCustomerReminderByTag(AddCustomerReminderTagRequest) -> TagCommandReply
cancelCustomerReminder(CancelCustomerReminderRequest) -> UpdateCustomerStateReply
cancelCustomerReminderByTag(CancelCustomerReminderTagRequest) -> TagCommandReply

updateCustomerTag(UpdateCustomerTagRequest) -> UpdateCustomerStateReply
deleteCustomerTag(DeleteCustomerTagRequest) -> UpdateCustomerStateReply

updateCustomerSecondaryId(UpdateCustomerSecondaryIdRequest) -> UpdateCustomerStateReply
deleteCustomerSecondaryId(DeleteCustomerSecondaryIdRequest) -> UpdateCustomerStateReply

leaseCustomerMetadata(LeaseCustomerMetadataRequest) -> LeaseCustomerMetadataReply
updateCustomerMetadata(UpdateCustomerMetadataRequest) -> UpdateCustomerStateReply
deleteCustomerMetadata(DeleteCustomerMetadataRequest) -> UpdateCustomerStateReply

sendMessage(SendMessageRequest) -> SendMessageReply
sendMessageByTag(SendMessageTagRequest) -> TagCommandReply
replyToMessage(ReplyToMessageRequest) -> SendMessageReply
messagingConsent(MessagingConsentRequest) -> MessagingConsentReply

sendPayment(SendPaymentRequest) -> InitiatePaymentReply
checkoutPayment(CheckoutPaymentRequest) -> InitiatePaymentReply
customerWalletPayment(CustomerWalletPaymentRequest) -> InitiatePaymentReply

makeVoiceCall(MakeVoiceCallRequest) -> MakeVoiceCallReply

streamNotifications(StreamNotificationRequest) -> WebhookRequest
sendWebhookResponse(WebhookResponse) -> WebhookResponseReply
```

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/node-sdk/issues).