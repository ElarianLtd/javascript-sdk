const { ElarianMessages } = require('./utils');

const { AuthTokenRequest } = ElarianMessages;

let authOptions;

const authToken = async () => {
    const { orgId, stub, extraHeaders } = authOptions;
    const req = new AuthTokenRequest()
        .setOrgId(orgId);
    const res = await stub.authToken(req, extraHeaders);
    const result = {
        token: res.getToken(),
        lifetime: res.getLifetime().getSeconds(),
    };
    return result;
};

module.exports = (client, options) => {
    authOptions = options;

    /* eslint-disable no-param-reassign */
    client.authToken = authToken;

    /* eslint-enable no-param-reassign */
    return client;
};
