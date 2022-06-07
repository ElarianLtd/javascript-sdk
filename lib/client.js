/* eslint-disable max-len */
/* global window */
/* eslint-disable no-underscore-dangle */
const validate = require('validate.js');
const { Single } = require('rsocket-flowable');

const {
    ElarianMessages,
    addMessage,
    getStatusString,
    getMediaTypeString,
    getChannelProviderString,
    getMessageReactionString,
    getCustomerEventDirectionString,
    getCustomerNumberProviderString,
    getMessageSessionEndReasonString,
    getMessageConsentUpdateActionString,
} = require('./utils');

const {
    AppDataUpdate,
    DataMapValue,
    PaymentStatus,
    PaymentChannel,
    VoiceCallStatus,
    MessagingChannel,
    UssdSessionStatus,
    VoiceCallHangupCause,
    MessageDeliveryStatus,
    ServerToAppNotification,
    MessagingConsentUpdateStatus,
    ServerToAppNotificationReply,
    ServerToSimulatorNotification,
    ServerToSimulatorNotificationReply,
} = ElarianMessages;

const { connectRSocket } = require('./utils');

const defaultConfigOptions = {
    resumable: false,
    lifetime: 60000,
    keepAlive: 1000,
    notificationTimeout: 5000,
};

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @class
 * @param {ClientConfig} config
 */
function Client(config) {
    const opts = {
        ...config,
        isSimulator: config.isSimulator === true,
    };
    const constraints = {
        appId: {
            type: 'string',
            presence: true,
        },
        orgId: {
            type: 'string',
            presence: true,
        },
        apiKey: {
            type: 'string',
        },
        authToken: {
            type: 'string',
            presence: this.platform.isBrowser,
        },
        allowNotifications: {
            type: 'boolean',
        },
        isSimulator: {
            type: 'boolean',
        },
        options: {
            type: 'object',
        },
    };

    if (!opts.apiKey && !opts.authToken) {
        throw new Error('Either one of apiKey or authToken is required');
    }

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    this._client = null;
    this._socket = null;
    this.options = opts;
    const configOpts = opts.options || {};
    this.configOptions = {
        lifetime: configOpts.lifetime || defaultConfigOptions.lifetime,
        resumable: configOpts.resumable || defaultConfigOptions.resumable,
        keepAlive: configOpts.keepAlive || defaultConfigOptions.keepAlive,
        serializer: configOpts.serializer || {
            type: 'text',
            serialize: (data) => JSON.stringify(data),
            deserialize: (data) => {
                try {
                    return JSON.parse(data);
                } catch (err) { this.platform.log.warn(`Failed to deserialize ${data}: ${err.message}`); }
                return data;
            },
        },
        // eslint-disable-next-line max-len
        notificationTimeout: configOpts.notificationTimeout || defaultConfigOptions.notificationTimeout,
    };

    this.eventListeners = {
        // debug
        data: null,

        // Connection
        error: null,
        closed: null,
        pending: null,
        connected: null,
        connecting: null,
    };

    /**
     * Connecto to elarian servers
     * @returns {Elarian} this instance
     */
    this.connect = function connect({ host, port } = {}) {
        connectRSocket({
            ...this.options,
            authToken: this.options.authToken,
            apiKey: this.options.authToken ? null : this.options.apiKey,
        }, {
            host,
            port,
            ...this.configOptions,
            platform: this.platform,
            setSocket: (socket) => {
                this._socket = socket;
            },
            getConnectionHandlers: () => ({
                error: (err) => {
                    if (this.eventListeners.error) {
                        this.eventListeners.error(err);
                    }
                },
                closed: () => {
                    this.disconnect();
                    if (this.eventListeners.closed) {
                        this.eventListeners.closed();
                    }
                },
                pending: this.eventListeners.pending,
                connecting: this.eventListeners.connecting,
            }),
            notificationHandler: this._notificationHandler(this),
        }).then(({ client }) => {
            this._client = client;
            if (this.eventListeners.connected) {
                this.eventListeners.connected();
            }
            this._lifetimeId = setInterval(() => {}, 10000);
        }).catch((ex) => {
            if (this.eventListeners.error) {
                this.eventListeners.error(ex);
            }
        });
        return this;
    };

    this.getSocket = function getSocket() {
        if (!this._socket) {
            throw new Error('Client is not connected');
        }
        return this._socket;
    };

    /**
     * Check if client is connected
     * @returns {boolean}
     */
    this.isConnected = function isConnected() {
        return this._client !== null && this._socket !== null;
    };

    /**
     * Disconnect from the elarian server
     */
    this.disconnect = function disconnect() {
        if (this._client) {
            this._client.close();
            clearInterval(this._lifetimeId);
        }
        this._client = null;
        this._socket = null;
    };

    const cleanup = (code) => {
        this.platform.log.warn(`Disconnecting from API server(${code})`);
        this.disconnect();
        if (!this.platform.isBrowser) {
            process.exit(code);
        }
    };

    if (this.platform.isBrowser) {
        window.onbeforeunload = cleanup;
    } else {
        process.on('SIGINT', cleanup.bind(null));
        process.on('SIGQUIT', cleanup.bind(null));
        process.on('SIGTERM', cleanup.bind(null));
    }
}

const cleanUpNotificationPayload = (event, data) => {
    /* eslint-disable no-param-reassign */
    switch (event) {
    // App
    case 'reminder':
        data.reminder.payload = data.reminder.payload.value;
        data.reminder.remindAt = data.reminder.remindAt.seconds;
        data.reminder.interval = data.reminder.interval ? data.reminder.interval.seconds : undefined;
        break;
    case 'messagingSessionStarted':
    case 'messagingSessionRenewed':
    case 'messagingSessionEnded':
        data.sessionId = data.sessionId.value;
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        if (data.expiresAt) {
            data.expiresAt = data.expiresAt.seconds;
        }
        if (data.duration) {
            data.duration = data.duration.seconds;
        }
        if (data.reason) {
            data.reason = getMessageSessionEndReasonString(data.reason);
        }
        break;
    case 'messageStatus':
        data.status = getStatusString(data.status, MessageDeliveryStatus);
        break;

    case 'receivedMessage':
        data.sessionId = data.sessionId ? data.sessionId.value : undefined;
        data.inReplyTo = data.inReplyTo ? data.inReplyTo.value : undefined;
        data.parts = data.partsList.map((part) => {
            if (part.ussd) {
                return {
                    ussd: {
                        text: part.ussd.text ? part.ussd.text.value : '',
                        status: getStatusString(part.ussd.status, UssdSessionStatus),
                    },
                };
            }

            if (part.location) {
                return {
                    location: {
                        latitude: part.location.latitude,
                        longitude: part.location.longitude,
                        label: part.location.label ? part.location.label.value : undefined,
                        address: part.location.address ? part.location.address.value : undefined,
                    },
                };
            }

            if (part.media) {
                return {
                    media: {
                        url: part.media.url,
                        type: getMediaTypeString(part.media.media),
                    },
                };
            }

            if (part.voice) {
                return {
                    voice: {
                        ...part.voice,
                        dtmfDigits: part.voice.dtmfDigits ? part.voice.dtmfDigits.value : undefined,
                        startedAt: part.voice.startedAt ? part.voice.startedAt.seconds : undefined,
                        recordingUrl: part.voice.recordingUrl ? part.voice.recordingUrl.value : undefined,
                        status: getStatusString(part.voice.status, VoiceCallStatus),
                        direction: getCustomerEventDirectionString(part.voice.direction),
                        hangupCause: getChannelProviderString(part.voice.hangupCause || 0, VoiceCallHangupCause, /^VOICE_CALL_HANGUP_CAUSE_/),
                    },
                };
            }

            if (part.email) {
                return {
                    email: {
                        subject: part.email.subject,
                        bodyHtml: part.email.bodyHtml,
                        bodyPlain: part.email.bodyPlain,
                        ccList: part.email.ccListList,
                        bccList: part.email.bccListList,
                    },
                };
            }

            return {
                text: part.text,
            };
        });

        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };

        // Assumes only one part per type
        switch (data.channelNumber.channel) {
        case 'ussd':
            data.input = data.parts.filter((i) => Object.keys(i).includes('ussd')).map((i) => i.ussd).pop();
            break;
        case 'voice':
            data.voice = data.parts.filter((i) => i.voice).map((i) => i.voice).pop();
            break;
        case 'sms':
        case 'whatsapp':
        case 'telegram':
        case 'fb_messenger':
            data.text = data.parts.filter((i) => i.text).map((i) => i.text).pop();
            data.media = data.parts.filter((i) => i.media).map((i) => i.media).pop();
            data.location = data.parts.filter((i) => i.location).map((i) => i.location).pop();
            break;
        case 'email':
            data.email = data.parts.filter((i) => i.email).map((i) => i.email).pop();
            break;
        default:
            break;
        }
        delete data.parts;
        delete data.partsList;
        break;

    case 'paymentStatus':
        data.status = getStatusString(data.status, PaymentStatus);
        break;
    case 'receivedPayment':
        data.status = getStatusString(data.status, PaymentStatus);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
        };
        break;
    case 'messagingConsentUpdate':
        data.sessionId = data.sessionId.value;
        data.status = getStatusString(data.status, MessagingConsentUpdateStatus);
        data.update = getMessageConsentUpdateActionString(data.update);
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'customerActivity':
        data.activity = {
            key: data.activity.key,
            source: data.source,
            sessionId: data.sessionId,
            properties: Object.fromEntries(data.activity.propertiesMap),
            createdAt: data.activity.createdAt.seconds,
        };
        break;
    case 'sentMessageReaction':
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        data.reaction = getMessageReactionString(data.reaction);
        break;

    // Simulator
    case 'sendMessage':
    case 'makeVoiceCall':
        if (data.sessionId) {
            data.sessionId = data.sessionId.value;
        }
        data.channelNumber = {
            number: data.channelNumber.number,
            channel: getChannelProviderString(data.channelNumber.channel, MessagingChannel),
        };
        break;
    case 'checkoutPayment':
    case 'sendChannelPayment':
    case 'sendCustomerPayment':
        if (data.account) {
            data.account = data.account.value;
        }
        if (data.channelNumber) {
            data.channelNumber = {
                number: data.channelNumber.number,
                channel: getChannelProviderString(data.channelNumber.channel, PaymentChannel),
            };
        }
        if (data.channel) {
            data.channel = getChannelProviderString(data.channel, PaymentChannel);
        }
        break;
    default:
        break;
    }

    if (data.description && data.description.value) {
        data.description = data.description.value;
    }

    if (data.customerNumber) {
        data.customerNumber = {
            number: data.customerNumber.number,
            provider: getCustomerNumberProviderString(data.customerNumber.provider),
            partition: data.customerNumber.partition ? data.customerNumber.partition.value : undefined,
        };
    }
    /* eslint-enable no-param-reassign */
    return data;
};

// eslint-disable-next-line no-underscore-dangle
Client.prototype._notificationHandler = (client) => (incomingPayload) => {
    let event;
    const { log } = client.platform;
    const { isSimulator, notificationTimeout = 5000 } = client.options;

    let response = isSimulator ? new ServerToSimulatorNotificationReply() : new ServerToAppNotificationReply();
    const handlePayload = async () => {
        let notif = isSimulator
            ? ServerToSimulatorNotification.deserializeBinary(incomingPayload.data).toObject()
            : ServerToAppNotification.deserializeBinary(incomingPayload.data).toObject();

        if (!isSimulator) {
            notif = notif.customer || notif.purse;
        }

        const events = Object.keys(notif);
        event = events.find((i) => !['orgId', 'appId', 'createdAt', 'customerId', 'purseId', 'appData'].includes(i) && notif[i]);
        const data = cleanUpNotificationPayload(event, { ...notif[event] });
        if (!isSimulator) {
            data.orgId = notif.orgId;
            data.appId = notif.appId;
            if (notif.purseId) { data.purseId = notif.purseId; }
            data.customerId = notif.customerId;
            data.createdAt = notif.createdAt ? notif.createdAt.seconds : undefined;
        }
        const globalListener = client.eventListeners.data;
        if (globalListener) {
            await globalListener(event, data, notif);
        }
        let channel;
        if (event === 'receivedMessage') { // Split messaging into multiple events
            channel = data.channelNumber.channel;
            switch (channel) {
            case 'voice':
                event = 'voiceCall';
                break;
            case 'ussd':
                event = 'ussdSession';
                break;
            case 'sms':
                event = 'receivedSms';
                break;
            case 'fb_messenger':
                event = 'receivedFbMessenger';
                break;
            case 'telegram':
                event = 'receivedTelegram';
                break;
            case 'whatsapp':
                event = 'receivedWhatsapp';
                break;
            case 'email':
                event = 'receivedEmail';
                break;
            default:
                break;
            }
        }

        const listener = client.eventListeners[event];

        let incomingAppData = notif.appData || {};
        const { serializer } = client.configOptions;
        incomingAppData = serializer.type === 'text' ? incomingAppData.stringVal : incomingAppData.bytesVal;
        incomingAppData = incomingAppData ? serializer.deserialize(incomingAppData) : undefined;
        let outgoingAppData = incomingAppData;

        if (listener) {
            let customer;
            if (notif.customerId && !isSimulator) {
                customer = new client.Customer({
                    id: notif.customerId || data.customerId,
                    number: data.customerNumber ? data.customerNumber.number : undefined,
                    provider: data.customerNumber ? data.customerNumber.provider : undefined,
                    partition: data.customerNumber ? data.customerNumber.partition : undefined,
                });
            }

            // eslint-disable-next-line no-async-promise-executor
            const listenerExec = new Promise(async (resolve, reject) => {
                try {
                    if (customer && !customer.customerNumber) {
                        try { // hack to get customer number
                            await customer.getState();
                        } catch (error) {
                            log.warn(`${event}: Failed to fetch customer state ${customer.customerId} `, error);
                        }
                    }
                    const cb = (payload, appData) => resolve({ payload, appData });
                    listener(data, customer, incomingAppData, cb);
                } catch (ex) {
                    reject(ex);
                }
            });

            const { payload, appData } = await Promise.race([
                listenerExec,
                new Promise((resolve) => {
                    setTimeout(resolve, notificationTimeout, {});
                }),
            ]);

            if (appData) { outgoingAppData = appData; }

            if (payload) {
                switch (channel) {
                case 'voice':
                    // payload is actions[]
                    response = addMessage(response, {
                        body: {
                            voice: payload,
                        },
                    });
                    break;
                case 'ussd':
                    // payload is { text, isTerminal }
                    response = addMessage(response, {
                        body: {
                            ussd: payload,
                        },
                    });
                    break;
                default:
                    response = addMessage(response, payload);
                    break;
                }
            }
        }

        if (outgoingAppData) {
            const appDataUpdate = new DataMapValue();
            const serializedValue = serializer.serialize(outgoingAppData);
            switch (serializer.type) {
            case 'text':
                appDataUpdate.setStringVal(serializedValue);
                break;
            case 'binary':
                appDataUpdate.setBytesValue(serializedValue);
                break;
            default:
                throw new Error('Invalid serializer type');
            }
            response = response.setDataUpdate(
                new AppDataUpdate()
                    .setData(appDataUpdate),
            );
        }
        return response;
    };

    return new Single((subscriber) => {
        subscriber.onSubscribe();
        handlePayload()
            .then((data) => {
                try {
                    subscriber.onComplete({ data: Buffer.from(data.serializeBinary()) });
                } catch (error) {
                    log.error(`NotificationReplyError::${event}: `, error.message || error);
                }
            })
            .catch((error) => {
                // FIXME: This returns a valid response to avoid retries...
                //        ideally subscriber.onError(error) should be the response
                try {
                    log.error(`NotificationDefaultError::${event}: `, error.message || error);
                    subscriber.onComplete({ data: Buffer.from(response.serializeBinary()) });
                } catch (ex) {
                    log.error(`NotificationError::${event}: `, ex.message || ex);
                }
            });
    });
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {NotificationHandler} handler A function that reacts to events
 * @returns {Client} this instance
 */
Client.prototype.registerNotificationHandler = function registerNotificationHandler(event, handler) {
    const events = Object.keys(this.eventListeners);
    if (!events.includes(event)) {
        throw new Error(`Unexpected event ${event}. Must be one of ${events}`);
    }
    this.eventListeners[event] = handler;
    return this;
};

/**
 * Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code>
 * @param {Event} event The event whose listener to register
 * @param {NotificationHandler} handler A function that reacts to events
 * @returns {Client} this instance
 */
Client.prototype.on = function on(event, handler) { return this.registerNotificationHandler(event, handler); };

module.exports = Client;
