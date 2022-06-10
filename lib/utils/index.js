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
    VoiceCallStatus,
    OutboundMessage,
    VoiceCallAction,
    MessageReaction,
    CustomerReminder,
    RejectCallAction,
    MediaMessageBody,
    EmailMessageBody,
    DequeueCallAction,
    MessagingChannel,
    TextToSpeechVoice,
    EnqueueCallAction,
    RedirectCallAction,
    InboundMessageBody,
    UssdSessionStatus,
    VoiceCallDialInput,
    VoiceCallQueueInput,
    GetDigitsCallAction,
    OutboundMessageBody,
    LocationMessageBody,
    UssdMenuMessageBody,
    TemplateMessageBody,
    PaymentCounterParty,
    UssdInputMessageBody,
    VoiceCallHangupCause,
    PaymentChannelNumber,
    ChannelNumberProvider,
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
    VoiceCallInputMessageBody,
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

const getChannelProvider = (provider, ChannelEnum, channelRegex = /^.+_/, type = 'channel, mode or provider') => {
    const key = Object
        .keys(ChannelEnum)
        .find((i) => new RegExp(`${provider}$`).test(i.toLocaleLowerCase()));
    if (!key) {
        throw new Error(`${provider} is an invalid ${type}. Expecing one of [${getValidCollectionKeys(ChannelEnum, channelRegex)}]`);
    }
    return ChannelEnum[key];
};

const getChannelProviderString = (channel, ChannelEnum, filter = /^[A-Z]+_CHANNEL_/) => {
    const key = Object.keys(ChannelEnum).find((i) => ChannelEnum[i] === channel);
    if (!key) throw new Error(`${channel} is an invalid value. Expectinng one of [${Object.values(ChannelEnum)}]`);
    return key.replace(filter, '').toLocaleLowerCase();
};

const getChannelNumberProvider = (string) => getChannelProvider(string, ChannelNumberProvider, /^CHANNEL_NUMBER_PROVIDER_/, 'channel number provider');

const getChannelNumberProviderString = (provider) => getChannelProviderString(provider, ChannelNumberProvider, /^CHANNEL_NUMBER_PROVIDER_/);

const getMessageDeliveryStatusString = (status) => getChannelProviderString(status, MessageDeliveryStatus, /^MESSAGE_DELIVERY_STATUS_/);

const getMessageDeliveryStatus = (string) => getChannelProvider(string, MessageDeliveryStatus, /^MESSAGE_DELIVERY_STATUS_/, 'message status');

const getCustomerNumberProvider = (string) => getChannelProvider(string, CustomerNumberProvider, /^CUSTOMER_NUMBER_PROVIDER_/, 'customer number provider');

const getCustomerNumberProviderString = (provider) => getChannelProviderString(provider, CustomerNumberProvider, /^.+_PROVIDER_/);

const getMediaType = (string) => getChannelProvider(string, MediaType, /^MEDIA_TYPE_/, 'media type');

// eslint-disable-next-line max-len
const getMessageConsentUpdateAction = (string) => getChannelProvider(string, MessagingConsentUpdate, /^MESSAGING_CONSENT_UPDATE_/, 'action');

const getMessageConsentUpdateActionString = (action) => getChannelProviderString(action, MessagingConsentUpdate, /^MESSAGING_CONSENT_UPDATE_/);

const getMessageSessionEndReasonString = (action) => getChannelProviderString(action, MessagingSessionEndReason, /^MESSAGING_SESSION_END_REASON_/);

const getMessageSessionEndReason = (string) => getChannelProvider(string, MessagingSessionEndReason, /^MESSAGING_SESSION_END_REASON_/, 'reason');

const getMessageReactionString = (action) => getChannelProviderString(action, MessageReaction, /^MESSAGE_REACTION_/);

const getMessageReaction = (string) => getChannelProvider(string, MessageReaction, /^MESSAGE_REACTION_/, 'reaction');

const getMediaTypeString = (type) => getChannelProviderString(type, MediaType, /^MEDIA_TYPE_/);

// eslint-disable-next-line max-len
const getCustomerEventDirectionString = (direction) => getChannelProviderString(direction, CustomerEventDirection, /^CUSTOMER_EVENT_DIRECTION_/);

const getCustomerEventDirection = (string) => getChannelProvider(string, CustomerEventDirection, /^CUSTOMER_EVENT_DIRECTION_/, 'direction');

const getStatusString = (status, ChannelEnum) => getChannelProviderString(status, ChannelEnum, /^[A-Z_]+_STATUS_/);

const getStatus = (string, StatusEnum) => getChannelProvider(string, StatusEnum, /^[A-Z_]+_STATUS_/, 'status');

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

const addCashCost = (req, { amount, currencyCode } = {}) => {
    const cashObj = new Cash()
        .setCurrencyCode(currencyCode)
        .setAmount(amount);
    return req.setCost(cashObj);
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
                                'channel',
                            ),
                        ),
                ),
        );
    } else if (purse) {
        party.setPurse(new PaymentPurseCounterParty().setPurseId(partyOpts.purseId));
    } else if (channel) {
        party.setChannel(
            new PaymentChannelCounterParty()
                .setChannelCode(partyOpts.code)
                .setChannel(
                    getChannelProvider(
                        partyOpts.channel,
                        PaymentChannel,
                        'channel',
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
            .setAction(getChannelProvider(replyPrompt.action, PromptMessageReplyAction, 'action'))
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

const makeMessageParts = (parts = []) => parts.map((part) => {
    const keys = Object.keys(part);

    if (keys.includes('text')) {
        return new InboundMessageBody().setText(part.text);
    }

    if (keys.includes('ussd')) {
        const ussd = new UssdInputMessageBody()
            .setStatus(getStatus(part.ussd.status, UssdSessionStatus))
            .setText(new StringValue().setValue(part.ussd.text));
        return new InboundMessageBody().setUssd(ussd);
    }

    if (keys.includes('media')) {
        const mediaObj = new MediaMessageBody()
            .setUrl(part.media.url)
            .setMedia(getMediaType(part.media.type));
        return new InboundMessageBody().setMedia(mediaObj);
    }

    if (keys.includes('location')) {
        const {
            label,
            address,
            latitude,
            longitude,
        } = part.location;
        const locationObj = new LocationMessageBody()
            .setLatitude(latitude)
            .setLongitude(longitude)
            .setLabel(new StringValue().setValue(label))
            .setAddress(new StringValue().setValue(address));
        return new InboundMessageBody().setLocation(locationObj);
    }

    if (keys.includes('email')) {
        const { email } = part;
        const emailObj = new EmailMessageBody()
            .setSubject(email.subject)
            .setBodyPlain(email.bodyPlain)
            .setBodyHtml(email.bodyHtml)
            .setCcListList(email.ccList)
            .setBccListList(email.bccList);

        return new InboundMessageBody().setEmail(emailObj);
    }

    if (keys.includes('voice')) {
        let dialObj;
        if (part.voice.dialData) {
            const { dialData } = part.voice;
            dialObj = new VoiceCallDialInput()
                .setDestinationNumber(dialData.destinationNumber)
                .setStartedAt(new Timestamp().setSeconds(Math.floor(dialData.startedAt)))
                .setDuration(new Duration().setSeconds(Math.floor(dialData.duration)));
        }
        let queueObj;
        if (part.queueData) {
            const { queueData } = part.voice;
            queueObj = new VoiceCallQueueInput()
                .setEnqueuedAt(new Timestamp().setSeconds(Math.floor(queueData.enqueuedAt)))
                .setDequeuedAt(new Timestamp().setSeconds(Math.floor(queueData.dequeuedAt)))
                .setDequeuedToNumber(new StringValue().setValue(queueData.dequeuedToNumber))
                // eslint-disable-next-line max-len
                .setDequeuedToSessionId(new StringValue().setValue(queueData.dequeuedToSessionId))
                .setQueueDuration(new Duration().setSeconds(Math.floor(queueData.duration)));
        }

        let voiceObj = new VoiceCallInputMessageBody()
            // eslint-disable-next-line max-len
            .setDirection(getCustomerEventDirection(part.voice.direction, CustomerEventDirection))
            // eslint-disable-next-line max-len
            .setStartedAt(new Timestamp().setSeconds(Math.floor(part.voice.startedAt || (Date.now() / 1000))))
            .setDialData(dialObj)
            .setQueueData(queueObj);

        if (part.voice.status) {
            voiceObj = voiceObj.setStatus(getStatus(part.voice.status, VoiceCallStatus));
        }

        if (part.voice.hangupCause) {
            voiceObj = voiceObj.setHangupCause(getChannelProvider(part.voice.hangupCause, VoiceCallHangupCause, /^VOICE_CALL_HANGUP_CAUSE_/, 'hangupCause'));
        }

        if (part.voice.dtmfDigits) {
            // eslint-disable-next-line max-len
            voiceObj = voiceObj.setDtmlDigits(new StringValue().setValue(part.voice.dtmfDigits));
        }

        if (part.voice.recordingUrl) {
            // eslint-disable-next-line max-len
            voiceObj = voiceObj.setRecordingUrl(new StringValue().setValue(part.voice.recordingUrl));
        }

        return new InboundMessageBody().setVoice(voiceObj);
    }

    throw new Error(`Invalid message part: ${JSON.stringify(part)}`);
});

const makeConnectionHandlerName = (kind) => {
    const name = kind.toLowerCase().replace(/_/, '');
    return name === 'notconnected' ? 'pending' : name;
};

const extractConnectionState = (transport, isBrowser) => {
    if (isBrowser) {
        return transport._status.kind;
    }
    return transport.getConnectionState().kind;
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
        reject(new Error('notificationHandler is required'));
        return;
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
                        const connectionState = extractConnectionState(transport, isBrowser);
                        if (connectionState === 'CONNECTED') {
                            handleConnected(socket);
                        } else {
                            log.error(new Error(`Failed to connect: ${connectionState}`));
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

    client.connect().subscribe({
        onComplete: (socket) => {
            setTimeout(() => {
                const connectionState = extractConnectionState(transport, isBrowser);
                if (connectionState === 'CONNECTED') {
                    handleConnected(socket);
                    resolve({ client });
                } else {
                    reject(new Error(`Failed to connect: ${connectionState}`));
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
    addMessage,
    addIndices,
    addReminder,
    addCustomer,
    addCashCost,
    addCashValue,
    getMediaType,
    connectRSocket,
    getStatusString,
    makeMessageParts,
    addOtherCustomer,
    addCustomerNumber,
    addCustomerIndices,
    getChannelProvider,
    getMediaTypeString,
    getMessageReaction,
    addVoiceCallActions,
    addPaymentCounterParty,
    getValidCollectionKeys,
    getMessageReactionString,
    getMessageDeliveryStatus,
    getChannelProviderString,
    getChannelNumberProvider,
    getCustomerEventDirection,
    getMessageSessionEndReason,
    getMessageConsentUpdateAction,
    getMessageDeliveryStatusString,
    getChannelNumberProviderString,
    getCustomerNumberProviderString,
    getCustomerEventDirectionString,
    getMessageSessionEndReasonString,
    getMessageConsentUpdateActionString,
};
