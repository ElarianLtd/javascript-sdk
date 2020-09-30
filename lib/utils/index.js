const util = require('util');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb.js');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb.js');
const { StringValue } = require('google-protobuf/google/protobuf/wrappers_pb.js');

const messages = require('./service/web_pb');
const service = require('./service/web_grpc_pb');

const ElarianMessages = messages;
const ElarianService = service.GrpcWebServiceClient;

ElarianMessages.Duration = Duration;
ElarianMessages.Timestamp = Timestamp;
ElarianMessages.StringValue = StringValue;

const {
    Cash,
    IndexMapping,
    CustomerIndex,
    CustomerNumber,
    TextMessageBody,
    CustomerReminder,
    MediaMessageBody,
    LocationMessageBody,
    CustomerMessageBody,
    TextMessageTemplate,
    MessagingChannelNumber,
    CustomerNumberProvider,
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

const addCustomer = (req, { customerId, customerNumber, secondaryId } = {}) => {
    if (customerId) {
        return req.setCustomerId(customerId);
    }

    if (customerNumber) {
        let customerNumberObj = new CustomerNumber()
            .setNumber(customerNumber.number)
            .setProvider(getCustomerNumberProvider(customerNumber.provider));
        if (customerNumber.partition) {
            customerNumberObj = customerNumberObj
                .setPartition(new StringValue().setValue(customerNumber.partition));
        }
        return req.setCustomerNumber(customerNumberObj);
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

const addChannelNumber = (req, { channelNumber } = {}, Class = MessagingChannelNumber) => {
    const channelNumberObj = new Class()
        .setNumber(channelNumber.number)
        .setChannel(channelNumber.channel || 0);
    return req.setChannelNumber(channelNumberObj);
};

const addCashValue = (req, { value } = {}) => {
    const cashObj = new Cash()
        .setCurrencyCode(value.currencyCode)
        .setAmount(value.amount);
    return req.setValue(cashObj);
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
    // addCashValue,
    // addChannelNumber,
    addOtherCustomer,
    addCustomerIndices,
    // addCustomerMessageBody,
};
