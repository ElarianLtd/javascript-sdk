const util = require('util');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb.js');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb.js');
const { StringValue, Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb.js');

const messages = require('./service/web_pb');
const service = require('./service/web_grpc_pb');

const ElarianMessages = messages;
const ElarianService = service.GrpcWebServiceClient;

ElarianMessages.Duration = Duration;
ElarianMessages.Timestamp = Timestamp;
ElarianMessages.Int32Value = Int32Value;
ElarianMessages.StringValue = StringValue;

const {
    Cash,
    IndexMapping,
    VoiceChannel,
    CustomerIndex,
    SayCallAction,
    PlayCallAction,
    DialCallAction,
    CustomerNumber,
    PaymentChannel,
    TextMessageBody,
    VoiceCallAction,
    CustomerReminder,
    RejectCallAction,
    MediaMessageBody,
    MessagingChannel,
    DequeueCallAction,
    TextToSpeechVoice,
    EnqueueCallAction,
    RedirectCallAction,
    VoiceChannelNumber,
    GetDigitsCallAction,
    LocationMessageBody,
    CustomerMessageBody,
    TextMessageTemplate,
    PaymentCounterParty,
    PaymentChannelNumber,
    MessagingChannelNumber,
    CustomerNumberProvider,
    GetRecordingCallAction,
    RecordSessionCallAction,
    PaymentPurseCounterParty,
    PaymentWalletCounterParty,
    PaymentCustomerCounterParty,
} = ElarianMessages;

/* eslint-disable */
const promisify = (client) => {
    const to = {};
    for (var k in client) {
        if (typeof client[k] != 'function') continue;
        // Stream functions synchronously return a stream object
        // and don't use an Error first callback signature
        if (client[k].responseStream && client[k].responseStream === true) {
            to[k] = client[k].bind(client);
        } else {
            to[k] = util.promisify(client[k].bind(client));
        }
    }
    return to;
};
/* eslint-enable */

const addTag = (req, tag) => {
    const tagValue = new StringValue().setValue(tag.value);
    const tagObj = new IndexMapping()
        .setKey(tag.key)
        .setValue(tagValue);
    return req.setTag(tagObj);
};

const addIndices = (req, params, keyFn) => {
    const valueObj = (params || []).map((i) => {
        const mapping = new IndexMapping()
            .setKey(i.key)
            .setValue(new StringValue().setValue(i.value));
        return mapping;
    });
    return req[keyFn](valueObj);
};

const addCustomerIndices = (req, params, keyFn) => {
    const valueObj = (params || []).map((i) => {
        let idx = new CustomerIndex();
        const mapping = new IndexMapping()
            .setKey(i.key)
            .setValue(new StringValue().setValue(i.value));
        idx = idx.setMapping(mapping);
        idx = idx.setExpiration(new Timestamp().setSeconds(i.expiration || 0));
        return idx;
    });
    return req[keyFn](valueObj);
};

const addReminder = (req, {
    appId,
    key,
    expiration,
    payload,
    interval = undefined,
} = {}) => {
    const expirationValue = new Timestamp().setSeconds(expiration);
    const payloadValue = new StringValue().setValue(payload);
    let reminderObj = new CustomerReminder()
        .setAppId(appId)
        .setKey(key)
        .setExpiration(expirationValue)
        .setPayload(payloadValue);
    if (interval) {
        reminderObj = reminderObj.setInterval(new Duration().setSeconds(interval));
    }

    return req.setReminder(reminderObj);
};

const getCustomerNumberProvider = (string) => {
    switch (string) {
    case 'facebook':
        return CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_FACEBOOK;
    case 'telco':
        return CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELCO;
    case 'telegram':
        return CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELEGRAM;
    default:
        return CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_UNSPECIFIED;
    }
};

const addCustomerNumber = (req, { number, provider, partition } = {}) => {
    let customerNumberObj = new CustomerNumber()
        .setNumber(number)
        .setProvider(getCustomerNumberProvider(provider));
    if (partition) {
        customerNumberObj = customerNumberObj
            .setPartition(new StringValue().setValue(partition));
    }
    return req.setCustomerNumber(customerNumberObj);
};

const addCustomer = (req, { customerId, customerNumber, secondaryId } = {}) => {
    if (customerId) {
        return req.setCustomerId(customerId);
    }

    if (customerNumber) {
        return addCustomerNumber(req, customerNumber);
    }

    if (secondaryId) {
        const mapping = new IndexMapping()
            .setKey(secondaryId.key)
            .setValue(new StringValue().setValue(secondaryId.value));
        return req.setSecondaryId(mapping);
    }

    return req;
};

const addOtherCustomer = (req, { customerId, customerNumber, secondaryId } = {}) => {
    if (customerId) {
        return req.setOtherCustomerId(customerId);
    }

    if (customerNumber) {
        let customerNumberObj = new CustomerNumber()
            .setNumber(customerNumber.number)
            .setProvider(getCustomerNumberProvider(customerNumber.provider));
        if (customerNumber.partition) {
            customerNumberObj = customerNumberObj
                .setPartition(new StringValue().setValue(customerNumber.partition));
        }
        return req.setOtherCustomerNumber(customerNumberObj);
    }

    if (secondaryId) {
        const mapping = new IndexMapping()
            .setKey(secondaryId.key)
            .setValue(new StringValue().setValue(secondaryId.value));
        return req.setOtherSecondaryId(mapping);
    }

    return req;
};

const getChannelProvider = (provider, ChannelEnum) => {
    const key = Object
        .keys(ChannelEnum)
        .find((i) => new RegExp(`${provider}$`).test(i.toLocaleLowerCase()));
    return ChannelEnum[key];
};

const addChannelNumber = (
    req,
    { number, provider } = {},
    NumberClass = MessagingChannelNumber,
    ChannelEnum = MessagingChannel,
) => {
    const channelNumberObj = new NumberClass()
        .setNumber(number.toString())
        .setChannel(getChannelProvider(provider, ChannelEnum));
    return req.setChannelNumber(channelNumberObj);
};

const addCashValue = (req, { amount, currencyCode } = {}) => {
    const cashObj = new Cash()
        .setCurrencyCode(currencyCode)
        .setAmount(amount);
    return req.setValue(cashObj);
};

const addPaymentCounterParty = (req, { wallet, customer, purse }, fn) => {
    const party = new PaymentCounterParty();

    if (wallet) {
        party.setWallet(
            new PaymentWalletCounterParty()
                .setWalletId(wallet.walletId)
                .setCustomerId(wallet.customerId),
        );
    } else if (customer) {
        party.setCustomer(
            new PaymentCustomerCounterParty()
                .setCustomerNumber(
                    new CustomerNumber()
                        .setNumber(customer.customerNumber.number)
                        .setProvider(getCustomerNumberProvider(customer.customerNumber.provider)),
                )
                .setChannelNumber(
                    new PaymentChannelNumber()
                        .setNumber(customer.channelNumber.number)
                        .setChannel(
                            getChannelProvider(
                                customer.channelNumber.provider,
                                PaymentChannel,
                            ),
                        ),
                ),
        );
    } else if (purse) {
        party.setPurse(new PaymentPurseCounterParty().setPurseId(purse));
    } else {
        throw new Error('Invalid payment counter party');
    }

    return req[fn](party);
};

const addVoiceCallActions = (req, actionList) => {
    const callActions = actionList.map((actions) => Object.keys(actions).map((action) => {
        const callAction = new VoiceCallAction();
        const actionItem = actions[action];
        let actionObj;
        switch (action) {
        case 'say':
            actionObj = new SayCallAction()
                .setText(actionItem.text)
                .setPlayBeep(actionItem.playBeep)
                .setVoice(actionItem.voice === 'male' ? TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_MALE : TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_FEMALE);
            callAction.setSay(actionObj);
            break;
        case 'play':
            actionObj = new PlayCallAction().setUrl(actionItem.url);
            callAction.setPlay(actionObj);
            break;
        case 'getDigits':
            actionObj = new GetDigitsCallAction()
                .setTimeout(new Duration().setSeconds(actionItem.timeout))
                .setFinishOnKey(new StringValue().setValue(actionItem.finishOnKey))
                .setNumDigits(new Int32Value().setValue(actionItem.numDigits));
            if (actionItem.say) {
                actionObj = actionObj.setSay(
                    new SayCallAction()
                        .setText(actionItem.say.text)
                        .setPlayBeep(actionItem.say.playBeep)
                        .setVoice(actionItem.say.voice === 'male' ? TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_MALE : TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_FEMALE),
                );
            } else if (actionItem.play) {
                actionObj = actionObj.setPlay(new PlayCallAction().setUrl(actionItem.play.url));
            } else {
                throw new Error('Either one of "say" or "play" is required for getDigits');
            }
            callAction.setGetDigits(actionObj);
            break;
        case 'dial':
            actionObj = new DialCallAction()
                .setRecord(actionItem.record)
                .setSequential(actionItem.sequential)
                .setRingbackTone(new StringValue().setValue(actionItem.ringbackTone))
                .setCallerId(new StringValue().setValue(actionItem.callerId))
                .setMaxDuration(new Int32Value().setValue(actionItem.maxDuration))
                .setCustomerNumbersList(actionItem.customerNumbers.map((num) => {
                    const { number, provider, partition } = num;
                    let customerNumberObj = new CustomerNumber()
                        .setNumber(number)
                        .setProvider(getCustomerNumberProvider(provider));
                    if (partition) {
                        customerNumberObj = customerNumberObj
                            .setPartition(new StringValue().setValue(partition));
                    }
                    return customerNumberObj;
                }));
            callAction.setDial(actionObj);
            break;
        case 'recordSession':
            if (actions[action]) {
                actionObj = new RecordSessionCallAction();
                callAction.setRecordSession(actionObj);
            }
            break;
        case 'getRecording':
            actionObj = new GetRecordingCallAction()
                .setPlayBeep(actionItem.playBeep)
                .setTrimSilence(actionItem.trimSilence)
                .setTimeout(new Duration().setSeconds(actionItem.timeout))
                .setMaxLength(new Duration().setSeconds(actionItem.maxLength))
                .setFinishOnKey(new StringValue().setValue(actionItem.finishOnKey));
            if (actionItem.say) {
                actionObj = actionObj.setSay(
                    new SayCallAction()
                        .setText(actionItem.say.text)
                        .setPlayBeep(actionItem.say.playBeep)
                        .setVoice(actionItem.say.voice === 'male' ? TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_MALE : TextToSpeechVoice.TEXT_TO_SPEECH_VOICE_FEMALE),
                );
            } else if (actionItem.play) {
                actionObj = actionObj.setPlay(new PlayCallAction().setUrl(actionItem.play.url));
            } else {
                throw new Error('Either one of "say" or "play" is required for getRecording');
            }
            callAction.setGetRecording(actionObj);
            break;
        case 'enqueue':
            actionObj = new EnqueueCallAction()
                .setHoldMusic(new StringValue().setValue(actionItem.holdMusic))
                .setQueueName(new StringValue().setValue(actionItem.queueName));
            callAction.setEnqueue(actionObj);
            break;
        case 'dequeue':
            actionObj = new DequeueCallAction()
                .setRecord(actionItem.record)
                .setQueueName(new StringValue().setValue(actionItem.queueName))
                .setChannelNumber(
                    new VoiceChannelNumber()
                        .setNumber(actionItem.channelNumber.number)
                        .setChannel(
                            getChannelProvider(actionItem.channelNumber.provider, VoiceChannel),
                        ),
                );
            callAction.setDequeue(actionObj);
            break;
        case 'reject':
            if (actions[action]) {
                actionObj = new RejectCallAction();
                callAction.setReject(actionObj);
            }
            break;
        case 'redirect':
            actionObj = new RedirectCallAction().setUrl(actionItem.url);
            callAction.setRedirect(actionObj);
            break;
        default:
            throw new Error(`Unexpected voice action ${action}`);
        }
        return actionObj ? callAction : null;
    })).flat().filter((item) => item);
    return req.setVoiceCallActionsList(callActions);
};

const addCustomerMessageBody = (req, { body } = {}) => {
    if (!body.text && !body.media && !body.location) {
        throw new Error('One of text, media or location is required in the body');
    }

    let bodyObj = new CustomerMessageBody();
    if (body.text) {
        let { template = { name: null, params: [] } } = body.text;
        if (template.name) {
            template = new TextMessageTemplate()
                .setName(body.text.template.name)
                .setParamsList(body.text.template.params);
        } else {
            template = null;
        }

        const textValue = new StringValue().setValue(body.text.text);
        const bodyText = new TextMessageBody()
            .setText(textValue)
            .setTemplate(template);
        bodyObj = bodyObj.setText(bodyText);
    }

    if (body.media) {
        const mediaObj = new MediaMessageBody()
            .setUrl(body.media.url)
            .setMedia(body.media.type || 0);
        bodyObj = bodyObj.setMedia(mediaObj);
    }

    if (body.location) {
        const { latitude, longitude } = body.location;
        const locationObj = new LocationMessageBody()
            .setLatitude(latitude)
            .setLongitude(longitude);
        bodyObj.setLocation(locationObj);
    }

    return req.setBody(bodyObj);
};

module.exports = {
    promisify,
    ElarianService,
    ElarianMessages,

    addTag,
    addIndices,
    addReminder,
    addCustomer,
    addCashValue,
    addChannelNumber,
    addOtherCustomer,
    addCustomerNumber,
    addCustomerIndices,
    addVoiceCallActions,
    addPaymentCounterParty,
    // addCustomerMessageBody,
};
