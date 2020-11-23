const { ElarianMessages } = require('./utils');

const {
    AuthTokenCommand,
    AppToServerCommand,
    AppToServerCommandReply,
} = ElarianMessages;

let authOptions;

/**
 * Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.
 * @returns {Promise}
 * @memberof Client.prototype
 */
const authToken = () => {
    const socket = authOptions.getSocket();

    const cmd = new AuthTokenCommand();
    const req = new AppToServerCommand()
        .setAuthToken(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getAuthTokenReply();

                        const result = {
                            token: res.getToken(),
                            lifetime: res.getLifetime().getSeconds(),
                        };
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

module.exports = (client, options) => {
    authOptions = options;

    /* eslint-disable no-param-reassign */
    client.authToken = authToken;
    /* eslint-enable no-param-reassign */
    return client;
};
