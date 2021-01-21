const { ElarianMessages } = require('./utils');

const {
    AppToServerCommand,
    AppToServerCommandReply,
    GenerateAuthTokenCommand,
} = ElarianMessages;

let authOptions;

/**
 * Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.
 * @returns {AuthToken}
 * @memberof Elarian.prototype
 */
const generateAuthToken = () => {
    const socket = authOptions.getSocket();

    const cmd = new GenerateAuthTokenCommand();
    const req = new AppToServerCommand()
        .setGenerateAuthToken(cmd);

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
                            .getGenerateAuthToken();
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
    client.generateAuthToken = generateAuthToken;
    /* eslint-enable no-param-reassign */
    return client;
};
