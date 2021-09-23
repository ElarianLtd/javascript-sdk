const { RSocketClient } = require('rsocket-core');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { StringValue, Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const pkg = require('../../package.json');
const appSocket = require('./service/app_socket_pb');
const simulatorSocket = require('./service/simulator_socket_pb');

const ElarianMessages = {
    ...appSocket,
    ...simulatorSocket,
};

ElarianMessages.Duration = Duration;
ElarianMessages.Timestamp = Timestamp;
ElarianMessages.Int32Value = Int32Value;
ElarianMessages.StringValue = StringValue;

const {

    AppConnectionMetadata,

    Cash,
    MediaType,
    IndexMapping,
    CustomerIndex,
    SayCallAction,
    PlayCallAction,
    DialCallAction,
    CustomerNumber,
    PaymentChannel,
    OutboundMessage,
    VoiceCallAction,
    CustomerReminder,
    RejectCallAction,
    MediaMessageBody,
    EmailMessageBody,
    DequeueCallAction,
    MessageReaction,
    MessagingChannel,
    TextToSpeechVoice,
    EnqueueCallAction,
    RedirectCallAction,
    GetDigitsCallAction,
    OutboundMessageBody,
    LocationMessageBody,
    UssdMenuMessageBody,
    TemplateMessageBody,
    PaymentCounterParty,
    PaymentChannelNumber,
    MessageDeliveryStatus,
    CustomerEventDirection,
    MessagingConsentUpdate,
    MessagingChannelNumber,
    CustomerNumberProvider,
    GetRecordingCallAction,
    RecordSessionCallAction,
    PromptMessageReplyAction,
    PaymentPurseCounterParty,
    PromptMessageMenuItemBody,
    PaymentWalletCounterParty,
    MessagingSessionEndReason,
    PaymentChannelCounterParty,
    OutboundMessageReplyPrompt,
    PaymentCustomerCounterParty,
    VoiceCallDialplanMessageBody,
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
        idx = idx.setExpiresAt(new Timestamp().setSeconds(Math.floor(i.expiresAt || 0)));
        return idx;
    });
    return req[keyFn](valueObj);
};

const addReminder = (req, {
    key,
    remindAt,
    payload,
    interval = undefined,
} = {}) => {
    const expirationValue = new Timestamp().setSeconds(Math.floor(remindAt));
    const payloadValue = new StringValue().setValue(payload);
    let reminderObj = new CustomerReminder()
        .setKey(key)
        .setRemindAt(expirationValue)
        .setPayload(payloadValue);
    if (interval) {
        reminderObj = reminderObj.setInterval(new Duration().setSeconds(Math.floor(interval)));
    }

    return req.setReminder(reminderObj);
};

const getValidCollectionKeys = (collection, regex = /^.+_/) => Object.keys(collection)
    .map((i) => i.replace(regex, '').toLowerCase())
    .filter((i) => i !== 'unspecified');

const getChannelProvider = (provider, ChannelEnum, channelRegex = /^.+_/) => {
    const key = Object
        .keys(ChannelEnum)
        .find((i) => new RegExp(`${provider}$`).test(i.toLocaleLowerCase()));
    if (!key) {
        throw new Error(`${provider} is an invalid channel, mode or provider. Expecing one of [${getValidCollectionKeys(ChannelEnum, channelRegex)}]`);
    }
    return ChannelEnum[key];
};

const getChannelProviderString = (channel, ChannelEnum, filter = /^[A-Z]+_CHANNEL_/) => {
    const key = Object.keys(ChannelEnum).find((i) => ChannelEnum[i] === channel);
    if (!key) throw new Error(`${channel} is an invalid value. Expectinng one of [${Object.values(ChannelEnum)}]`);
    return key.replace(filter, '').toLocaleLowerCase();
};

const getMessageDeliveryStatusString = (status) => getChannelProviderString(status, MessageDeliveryStatus, /^MESSAGE_DELIVERY_STATUS_/);

const getCustomerNumberProvider = (string) => getChannelProvider(string, CustomerNumberProvider, /^CUSTOMER_NUMBER_PROVIDER_/);

const getCustomerNumberProviderString = (provider) => getChannelProviderString(provider, CustomerNumberProvider, /^.+_PROVIDER_/);

const getMediaType = (string) => getChannelProvider(string, MediaType, /^MEDIA_TYPE_/);

// eslint-disable-next-line max-len
const getMessageConsentUpdateAction = (string) => getChannelProvider(string, MessagingConsentUpdate, /^MESSAGING_CONSENT_UPDATE_/);

const getMessageConsentUpdateActionString = (action) => getChannelProviderString(action, MessagingConsentUpdate, /^MESSAGING_CONSENT_UPDATE_/);

const getMessageSessionEndReasonString = (action) => getChannelProviderString(action, MessagingSessionEndReason, /^MESSAGING_SESSION_END_REASON_/);

const getMessageReactionString = (action) => getChannelProviderString(action, MessageReaction, /^MESSAGE_REACTION_/);

const getMediaTypeString = (type) => getChannelProviderString(type, MediaType, /^MEDIA_TYPE_/);

// eslint-disable-next-line max-len
const getCustomerEventDirectionString = (direction) => getChannelProviderString(direction, CustomerEventDirection, /^CUSTOMER_EVENT_DIRECTION_/);

const getCustomerEventDirection = (string) => getChannelProvider(string, CustomerEventDirection, /^CUSTOMER_EVENT_DIRECTION_/);

const getStatusString = (status, ChannelEnum) => getChannelProviderString(status, ChannelEnum, /^[A-Z_]+_STATUS_/);

const getStatus = (string, StatusEnum) => getChannelProvider(string, StatusEnum, /^[A-Z_]+_STATUS_/);

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
    const channel = partyOpts.channel || undefined;

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
                                partyOpts.channelNumber.channel,
                                PaymentChannel,
                            ),
                        ),
                ),
        );
    } else if (purse) {
        party.setPurse(new PaymentPurseCounterParty().setPurseId(partyOpts.purseId));
    } else if (channel) {
        party.setChannel(
            new PaymentChannelCounterParty()
                .setChannelCode(partyOpts.channelCode)
                .setChannel(
                    getChannelProvider(
                        partyOpts.channel,
                        PaymentChannel,
                    ),
                )
                .setSource(partyOpts.source)
                .setDestination(partyOpts.destination)
                .setAccount(new StringValue().setValue(partyOpts.account)),
        );
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
                    new MessagingChannelNumber()
                        .setNumber(actionItem.number)
                        .setChannel(
                            MessagingChannel.MESSAGING_CHANNEL_VOICE,
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

const addMessage = (
    req,
    {
        body,
        labels,
        replyToken,
        providerTag,
        replyPrompt,
    } = {},
) => {
    const {
        url,
        text,
        ussd,
        media,
        email,
        voice,
        location,
        template,
    } = body;

    let msg = new OutboundMessage()
        .setLabelsList(labels);

    if (providerTag) {
        msg.setProviderTag(new StringValue().setValue(providerTag));
    }

    if (replyToken) {
        msg.setReplyToken(new StringValue().setValue(replyToken));
    }

    if (replyPrompt) {
        const menu = replyPrompt.menu
            .map((mnu) => new PromptMessageMenuItemBody()
                .setText(mnu.text)
                .setMedia(new MediaMessageBody()
                    .setUrl(media.url)
                    .setMedia(getMediaType(media.type))));
        const replyPromptObj = new OutboundMessageReplyPrompt()
            .setAction(getChannelProvider(replyPrompt.action, PromptMessageReplyAction))
            .setMenuList(menu);
        msg.setReplyPrompt(replyPromptObj);
    }

    let bodyObj = new OutboundMessageBody();
    if (location) {
        const {
            label,
            address,
            latitude,
            longitude,
        } = location;
        const locationObj = new LocationMessageBody()
            .setLatitude(latitude)
            .setLongitude(longitude)
            .setLabel(new StringValue().setValue(label))
            .setAddress(new StringValue().setValue(address));
        bodyObj = bodyObj.setLocation(locationObj);
    } else if (media) {
        const mediaObj = new MediaMessageBody()
            .setUrl(media.url)
            .setMedia(getMediaType(media.type));
        bodyObj = bodyObj.setMedia(mediaObj);
    } else if (text) {
        bodyObj = bodyObj.setText(text);
    } else if (template) {
        const templateObj = new TemplateMessageBody().setId(template.id);
        Object.keys(template.params).forEach((key) => {
            templateObj.getParamsMap().set(key, template[key]);
        });
        bodyObj = bodyObj.setTemplate(templateObj);
    } else if (email) {
        const emailObj = new EmailMessageBody()
            .setSubject(email.subject)
            .setBodyPlain(email.bodyPlain)
            .setBodyHtml(email.bodyHtml)
            .setCcListList(email.ccList)
            .setBccListList(email.bccList);
        bodyObj = bodyObj.setEmail(emailObj);
    } else if (ussd) {
        const ussdObj = new UssdMenuMessageBody()
            .setText(ussd.text)
            .setIsTerminal(ussd.isTerminal);
        bodyObj.setUssd(ussdObj);
    } else if (voice) {
        bodyObj.setVoice(addVoiceCallActions(new VoiceCallDialplanMessageBody(), voice));
    } else if (url) {
        bodyObj.setUrl(url);
    }

    msg = msg.setBody(bodyObj);
    return req.setMessage(msg);
};

const makeConnectionHandlerName = (kind) => {
    const name = kind.toLowerCase().replace(/_/, '');
    return name === 'notconnected' ? 'pending' : name;
};

const connectRSocket = (options, connectionOptions) => new Promise((resolve, reject) => {
    const {
        orgId,
        appId,
        apiKey,
        authToken,
        isSimulator = false,
        allowNotifications = true,
    } = options;

    const {
        host,
        port,
        platform,
        setSocket,
        lifetime = 60000,
        keepAlive = 1000,
        reconnectTimeout = 60000,
        resumable = true,
        notificationHandler,
        getConnectionHandlers,
    } = connectionOptions;

    const { log, getTransport, isBrowser } = platform;

    if (!notificationHandler && allowNotifications) {
        return reject(new Error('notificationHandler is required'));
    }

    let data = new AppConnectionMetadata()
        .setOrgId(orgId)
        .setAppId(appId)
        .setSimulatorMode(isSimulator)
        .setSimplexMode((isSimulator || isBrowser) ? true : !allowNotifications);
    if (authToken) {
        data = data.setAuthToken(new StringValue().setValue(authToken));
    } else if (apiKey) {
        data = data.setApiKey(new StringValue().setValue(apiKey));
    }
    data = Buffer.from(data.serializeBinary());
    const metadata = Buffer.from(JSON.stringify({
        agent: `javascript/${pkg.version}`,
    }));
    const transport = getTransport({
        host,
        port,
        resumeToken: resumable ? Buffer.from(`${appId}-${Date.now()}`) : undefined,
        sessionDurationSeconds: lifetime / 1000,
    });
    log.debug(`Transport Initialized: ${host}:${port}`);
    const client = new RSocketClient({
        transport,
        setup: {
            lifetime,
            keepAlive,
            metadataMimeType: 'application/json',
            dataMimeType: 'application/octet-stream',
            payload: { data, metadata },
        },
        responder: {
            metadataPush: (payload) => {
                log.debug('Got a metadataPush', payload);
            },
            fireAndForget: (payload) => {
                log.debug('Got a fireAndForget', payload);
            },
            requestStream: (payload) => {
                log.debug('Got a requestStream', payload);
            },
            requestChannel: (payload) => {
                log.debug('Got a requestChannel', payload);
            },
            requestResponse: (payload) => notificationHandler(payload),
        },
        errorHandler: (error) => {
            log.debug('Connection Error', error);
            if (getConnectionHandlers().error) {
                getConnectionHandlers().error(error);
            }
        },
    });

    let transportStarted = false;
    const handleConnected = (socket) => {
        log.debug('Client connected');
        setSocket(socket);
    };

    const reconnect = (timeout = reconnectTimeout) => {
        setTimeout(() => {
            if (client === null) {
                // give up
                return;
            }
            log.info('Attempting to reconnect...');
            // eslint-disable-next-line no-underscore-dangle
            client._connection = null;
            client.connect().subscribe({
                onComplete: (socket) => {
                    setTimeout(() => {
                        if (transport.getConnectionState().kind === 'CONNECTED') {
                            handleConnected(socket);
                        } else {
                            log.error(new Error(`Failed to connect: ${transport.getConnectionState().kind}`));
                        }
                    }, 1000);
                },
                onError: (error) => {
                    log.debug('Client connection refused ', error);
                },
            });
        }, timeout);
    };

    transport.connectionStatus().subscribe({
        onNext: (status) => {
            log.debug(`Transport: ${status.kind}`);
            const handler = getConnectionHandlers()[makeConnectionHandlerName(status.kind)];
            if (handler) {
                try {
                    handler(status.error);
                } catch (ex) {
                    log.debug('Failed to call connection status handler');
                }
            }

            if (status.kind === 'CONNECTED') {
                transportStarted = true;
                return;
            }

            if (status.kind === 'ERROR') {
                transport.setConnectionStatus({
                    kind: 'NOT_CONNECTED',
                });
                return;
            }

            if (['NOT_CONNECTED', 'CLOSED'].includes(status.kind)) {
                if (transportStarted) {
                    log.info(`Disconnected from Elarian server, will attempt to reconnect in ${reconnectTimeout}ms...`);
                    reconnect();
                }
            }
        },
        onError: (error) => {
            log.debug(`Transport error: ${error}`);
            if (getConnectionHandlers().error) {
                getConnectionHandlers().error(error);
            }
        },
        onSubscribe: (subscription) => {
            subscription.request(Number.MAX_SAFE_INTEGER);
        },

        onComplete: (signal) => {
            log.debug(`Transport closed: ${signal}`);
        },
    });

    return client.connect().subscribe({
        onComplete: (socket) => {
            setTimeout(() => {
                if (transport.getConnectionState().kind === 'CONNECTED') {
                    handleConnected(socket);
                    resolve({ client });
                } else {
                    reject(new Error(`Failed to connect: ${transport.getConnectionState().kind}`));
                }
            }, 1000);
        },
        onError: (error) => {
            log.debug('Client connection refused ', error);
            reject(error);
        },
        onSubscribe: () => {},
        onNext: (entry) => {
            log.debug('Client data received ', entry);
        },
    });
});

module.exports = {
    ElarianMessages,

    addTag,
    getStatus,
    addIndices,
    addReminder,
    addMessage,
    addCustomer,
    addCashValue,
    getMediaType,
    connectRSocket,
    getStatusString,
    addOtherCustomer,
    addCustomerNumber,
    addCustomerIndices,
    getChannelProvider,
    getMediaTypeString,
    addVoiceCallActions,
    getValidCollectionKeys,
    addPaymentCounterParty,
    getMessageReactionString,
    getChannelProviderString,
    getCustomerEventDirection,
    getMessageConsentUpdateAction,
    getMessageDeliveryStatusString,
    getCustomerNumberProviderString,
    getCustomerEventDirectionString,
    getMessageSessionEndReasonString,
    getMessageConsentUpdateActionString,
};
