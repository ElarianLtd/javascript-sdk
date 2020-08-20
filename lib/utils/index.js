const util = require('util');
const google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
const google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

const messages = require('./service/web_pb');
const service = require('./service/web_grpc_pb');

const ElarianMessages = messages;
const ElarianService = service.GrpcWebServiceClient;


const {
    Cash,
    IndexMapping,
    CustomerIndex,
    CustomerNumber,
    TextMessageBody,
    MediaMessageBody,
    CustomerReminder,
    CustomerMessageBody,
    LocationMessageBody,
    TextMessageTemplate,
    MessagingChannelNumber,
} = ElarianMessages;

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
}


const addTag = (req, { tag } = {}) => {
    const tagValue = new google_protobuf_wrappers_pb.StringValue().setValue(tag.value);
    const tagObj = new IndexMapping()
        .setKey(tag.key)
        .setValue(tagValue);
    return req.setTag(tagObj);
}

const addIndices = (req, params, key, keyFn) => {
    const valueObj = (params[key] || []).map((i) => {
        const mapping = new IndexMapping()
            .setKey(i.key)
            .setValue(new google_protobuf_wrappers_pb.StringValue().setValue(i.value));
        return mapping;
    })
    return req[keyFn](valueObj);
}

const addCustomerIndices = (req, params, key, keyFn) => {
    const valueObj = (params[key] || []).map((i) => {
        let idx = new CustomerIndex();
        const mapping = new IndexMapping()
            .setKey(i.mapping.key)
            .setValue(new google_protobuf_wrappers_pb.StringValue().setValue(i.mapping.value));
        idx = idx.setMapping(mapping);
        idx = idx.setExpiration(new google_protobuf_timestamp_pb.Timestamp().setSeconds(i.expiration));
        return idx;
    })
    return req[keyFn](valueObj);
}

const addReminder = (req, { reminder } = {}) => {
   const expirationValue = new google_protobuf_timestamp_pb.Timestamp().setSeconds(reminder.expiration);
   const payloadValue = new google_protobuf_wrappers_pb.StringValue().setValue(reminder.payload);
    const reminderObj = new CustomerReminder()
        .setProductId(reminder.productId)
        .setKey(reminder.key)
        .setExpiration(expirationValue)
        .setPayload(payloadValue);

    return req.setReminder(reminderObj);
}

const addCustomer = (req, { customerId, customerNumber } = {}) => {
    if (customerId) {
        return req.setCustomerId(customerId);
    }

    if (customerNumber) {
        const customerNumberObj = new CustomerNumber()
            .setNumber(customerNumber.number)
            .setProvider(customerNumber.provider || 0)
        return req.setCustomerNumber(customerNumberObj);
    }

    return req;
}

const addOtherCustomer = (req, { otherCustomerId, otherCustomerNumber } = {}) => {
    if (otherCustomerId) {
        return req.setOtherCustomerId(otherCustomerId);
    }

    if (otherCustomerNumber) {
        const customerNumberObj = new CustomerNumber()
            .setNumber(customerNumber.number)
            .setProvider(customerNumber.provider || 0)
        return req.setOtherCustomerNumber(customerNumberObj);
    }

    return req;
}

const addChannelNumber = (req, { channelNumber } = {}, Class = MessagingChannelNumber) => {
    const channelNumberObj = new Class()
            .setNumber(channelNumber.number)
            .setChannel(channelNumber.channel || 0);
    return req.setChannelNumber(channelNumberObj);
}

const addCashValue = (req, { value } = {}) => {
    const cashObj = new Cash()
            .setCurrencyCode(value.currencyCode)
            .setAmount(value.amount);
    return req.setValue(cashObj);
}

const addCustomerMessageBody = (req, { body } = {}) => {

    if (!body.text && !body.media && !body.location) {
        throw new Error('One of text, media or location is required in the body');
    }

    let bodyObj = new CustomerMessageBody();
    if (body.text) {
        let { template  = { name: null, params: [] } } = body.text;
        if (template.name) {
            template = new TextMessageTemplate()
                .setName(body.text.template.name)
                .setParamsList(body.text.template.params);
        } else {
            template = null;
        }

        const textValue = new google_protobuf_wrappers_pb.StringValue().setValue(body.text.text);
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
    addCustomerIndices,
    addCustomerMessageBody,
};