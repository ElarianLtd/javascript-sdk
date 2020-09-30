const { ElarianMessages } = require('./utils');

const { AuthTokenRequest } = ElarianMessages;

let authOptions;

const authToken = async () => {
    try {
        const { orgId, stub } = authOptions;
        const req = new AuthTokenRequest()
            .setOrgId(orgId);
        const res = await stub.authToken(req);
        const result = {
            token: res.getToken(),
            lifetime: res.getLifetime().getSeconds(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = (client, options) => {
    authOptions = options;

    /* eslint-disable no-param-reassign */
    client.authToken = authToken;

    /* eslint-enable no-param-reassign */
    return client;
};
