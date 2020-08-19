
const { ElarianMessages } = require('./utils');

const {
    AuthTokenRequest,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async authToken() {
        try {
            const req = new AuthTokenRequest()
                .setAppId(this.options.appId);
            const res = await this._stub.authToken(req);
            const result = {
                token: res.getToken(),
                lifetime: res.getLifetime().getSeconds(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    Client,
    Enums: { }
};