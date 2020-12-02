const sha256 = require('js-sha256');
const { RSocketClient } = require('rsocket-core');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb.js');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb.js');
const { StringValue, Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb.js');

const messages = require('./service/app_pb');

const ElarianMessages = messages;

ElarianMessages.Duration = Duration;
ElarianMessages.Timestamp = Timestamp;
ElarianMessages.Int32Value = Int32Value;
ElarianMessages.StringValue = StringValue;

const {

    AppConnectionMetadata,

    Cash,
    MediaType,
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
    CustomerEventDirection,
    CustomerNumberProvider,
    GetRecordingCallAction,
    RecordSessionCallAction,
    PaymentPurseCounterParty,
    PaymentWalletCounterParty,
    PaymentCustomerCounterParty,
} = ElarianMessages;

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
        idx = idx.setExpiration(new Timestamp().setSeconds(Math.floor(i.expiration || 0)));
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
    const expirationValue = new Timestamp().setSeconds(Math.floor(expiration));
    const payloadValue = new StringValue().setValue(payload);
    let reminderObj = new CustomerReminder()
        .setAppId(appId)
        .setKey(key)
        .setExpiration(expirationValue)
        .setPayload(payloadValue);
    if (interval) {
        reminderObj = reminderObj.setInterval(new Duration().setSeconds(Math.floor(interval)));
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

const getCustomerNumberProviderString = (provider) => {
    switch (provider) {
    case CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_FACEBOOK:
        return 'facebook';
    case CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELCO:
        return 'telco';
    case CustomerNumberProvider.CUSTOMER_NUMBER_PROVIDER_TELEGRAM:
        return 'telegram';
    default:
        return 'unspecified';
    }
};

const getMediaType = (string) => {
    switch (string) {
    case 'image':
        return MediaType.MEDIA_TYPE_IMAGE;
    case 'audio':
        return MediaType.MEDIA_TYPE_AUDIO;
    case 'video':
        return MediaType.MEDIA_TYPE_VIDEO;
    case 'document':
        return MediaType.MEDIA_TYPE_DOCUMENT;
    case 'voice':
        return MediaType.MEDIA_TYPE_VOICE;
    case 'sticker':
        return MediaType.MEDUA_TYPE_STICKER;
    default:
        return MediaType.MEDIA_TYPE_UNSPECIFIED;
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
    if (customerNumber) {
        return addCustomerNumber(req, customerNumber);
    }

    if (customerId) {
        return req.setCustomerId(customerId);
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

const getChannelProviderString = (channel, ChannelEnum, filter = /^[A-Z]+_CHANNEL_/) => {
    const key = Object.keys(ChannelEnum).find((i) => ChannelEnum[i] === channel);
    if (!key) throw new Error(`No name for channel ${channel} on ${JSON.stringify(ChannelEnum)}`);
    return key.replace(filter, '').toLocaleLowerCase();
};

// eslint-disable-next-line max-len
const getCustomerEventDirectionString = (direction) => getChannelProviderString(direction, CustomerEventDirection, /^[A-Z_]+_DIRECTION_/);

const getStatusString = (status, ChannelEnum) => getChannelProviderString(status, ChannelEnum, /^[A-Z_]+_STATUS_/);

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

const addPaymentCounterParty = (req, partyOpts, fn) => {
    const party = new PaymentCounterParty();

    const purse = partyOpts.purseId || undefined;
    const wallet = partyOpts.walletId || undefined;
    const customer = partyOpts.customerNumber || undefined;

    if (wallet) {
        party.setWallet(
            new PaymentWalletCounterParty()
                .setWalletId(partyOpts.walletId)
                .setCustomerId(partyOpts.customerId),
        );
    } else if (customer) {
        party.setCustomer(
            new PaymentCustomerCounterParty()
                .setCustomerNumber(
                    new CustomerNumber()
                        .setNumber(partyOpts.customerNumber.number)
                        .setProvider(getCustomerNumberProvider(partyOpts.customerNumber.provider)),
                )
                .setChannelNumber(
                    new PaymentChannelNumber()
                        .setNumber(partyOpts.channelNumber.number)
                        .setChannel(
                            getChannelProvider(
                                partyOpts.channelNumber.provider,
                                PaymentChannel,
                            ),
                        ),
                ),
        );
    } else if (purse) {
        party.setPurse(new PaymentPurseCounterParty().setPurseId(partyOpts.purseId));
    } else {
        throw new Error('Invalid payment party');
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
                .setTimeout(new Duration().setSeconds(Math.floor(actionItem.timeout)))
                .setFinishOnKey(new StringValue().setValue(actionItem.finishOnKey))
                .setNumDigits(new Int32Value().setValue(Math.floor(actionItem.numDigits)));
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
                .setTimeout(new Duration().setSeconds(Math.floor(actionItem.timeout)))
                .setMaxLength(new Duration().setSeconds(Math.floor(actionItem.maxLength)))
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
    return req.setActionsList(callActions);
};

const addCustomerMessageBody = (
    req,
    {
        text,
        template,
        media,
        location,
    } = {},
) => {
    if (!text && !media && !location) {
        throw new Error('One of text, media or location is required in the body');
    }

    let bodyObj = new CustomerMessageBody();
    if (location) {
        const { latitude, longitude } = location;
        const locationObj = new LocationMessageBody()
            .setLatitude(latitude)
            .setLongitude(longitude);
        bodyObj = bodyObj.setLocation(locationObj);
    } else if (media) {
        const mediaObj = new MediaMessageBody()
            .setUrl(media.url)
            .setMedia(getMediaType(media.type));
        bodyObj = bodyObj.setMedia(mediaObj);
    } else if (text) {
        let bodyText = new TextMessageBody()
            .setText(new StringValue().setValue(text));
        if (template) {
            const templateObj = new TextMessageTemplate()
                .setName(template.name)
                .setParamsList(template.params);
            bodyText = bodyText.setTemplate(templateObj);
        }
        bodyObj = bodyObj.setText(bodyText);
    }

    return req.setBody(bodyObj);
};

const generateAuthToken = ({ apiKey, preGeneratedToken }) => {
    let authToken;
    let timestamp = Math.floor(Date.now() / 1000);
    if (preGeneratedToken) {
        [timestamp, authToken] = preGeneratedToken.split(':');
    } else {
        const hashedKey = sha256.create().update(apiKey).hex();
        authToken = sha256.create().update(`${timestamp}:${hashedKey}`).hex();
    }
    return { authToken, timestamp };
};

const connectRSocket = (options, connectionOptions) => new Promise((resolve, reject) => {
    const {
        orgId,
        appId,
        apiKey,
        receiveNotifications = true,
    } = options;

    const {
        lifetime,
        platform,
        keepAlive,
        reconnectInterval,
        notificationHandler,
    } = connectionOptions;

    const { log, getTransport } = platform;

    const { authToken, timestamp } = generateAuthToken({
        apiKey,
        preGeneratedToken: options.authToken,
    });

    if (!notificationHandler && receiveNotifications) {
        return reject(new Error('notificationHandler is required'));
    }

    let data = new AppConnectionMetadata()
        .setOrgId(orgId)
        .setAppId(appId)
        .setAuthToken(authToken)
        .setTimestamp(new Timestamp().setSeconds(timestamp))
        .setSimplexMode(!receiveNotifications);
    data = Buffer.from(data.serializeBinary());
    const transport = getTransport({
        resumeToken: Buffer.from(appId),
    });
    const client = new RSocketClient({
        transport,
        setup: {
            keepAlive,
            lifetime,
            dataMimeType: 'application/octet-stream',
            metadataMimeType: 'application/octet-stream',
            payload: { data },
        },
        responder: {
            /*
            fireAndForget: (payload) => {
                log.debug('Got a fireAndForget');
            },
            requestStream: (payload) => {
                log.debug('Got a requestStream');
            },
            requestChannel: (payload) => {
                log.debug('Got a requestChannel');
            },
            metadataPush: (payload) => {
                log.debug('Got a metadataPush');
            }, */
            requestResponse: (payload) => notificationHandler(payload),
        },
        errorHandler: (error) => {
            log.error(error);
        },
    });

    let started = true;
    transport.connectionStatus().subscribe({
        onNext: (status) => {
            if (status.kind === 'NOT_CONNECTED') {
                if (!started) {
                    setTimeout(() => transport.connect(), reconnectInterval);
                } else {
                    started = false;
                }
            }
        },
        onSubscribe: (subscription) => {
            subscription.request(Number.MAX_SAFE_INTEGER);
        },
    });

    return client.connect().subscribe({
        onComplete: (socket) => {
            resolve({
                socket,
                transport,
                authToken: `${timestamp}:${authToken}`,
            });
        },
        onError: (error) => reject(error),
    });
});

module.exports = {
    ElarianMessages,

    addTag,
    addIndices,
    addReminder,
    addCustomer,
    addCashValue,
    connectRSocket,
    getStatusString,
    addChannelNumber,
    addOtherCustomer,
    addCustomerNumber,
    addCustomerIndices,
    addVoiceCallActions,
    addPaymentCounterParty,
    addCustomerMessageBody,
    getChannelProviderString,
    getCustomerEventDirectionString,
    getCustomerNumberProviderString,
};
