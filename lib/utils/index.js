const { RSocketClient } = require('rsocket-core');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { StringValue, Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const pkg = require('../../package.json');
const appSocket = require('./service/app_socket_pb');

const ElarianMessages = { ...appSocket };

ElarianMessages.Duration = Duration;
ElarianMessages.Timestamp = Timestamp;
ElarianMessages.Int32Value = Int32Value;
ElarianMessages.StringValue = StringValue;

const {
    AppConnectionMetadata,
} = ElarianMessages;

const makeConnectionHandlerName = (kind) => {
    const name = kind.toLowerCase().replace(/_/, '');
    return name === 'notconnected' ? 'pending' : name;
};

const extractConnectionState = (transport, isBrowser) => {
    if (isBrowser) {
        // eslint-disable-next-line no-underscore-dangle
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
        .setSimplexMode(!allowNotifications);
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
    connectRSocket,
    ElarianMessages,
};
