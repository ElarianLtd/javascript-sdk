/* eslint-disable func-names */
/* eslint-disable no-new */
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    it('validates options', async () => {
        const options = {
            apiKey: 5,
        };

        (function () {
            new Client(options);
        }).should.throw();

        delete options.apiKey;
        (function () {
            new Client(options);
        }).should.throw();

        (function () {
            new Client({
                orgId: 'ok',
                appId: 'yes',
                authToken: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
            });
        }).should.not.throw();

        (function () {
            new Customer();
        }).should.throw();

        const customer = new Customer({
            customerNumber: {
                number: '0700000000',
                provider: 'telco',
                partition: 'xyz',
            },
        });
        should.exist(customer);
    });

    it('connect() and disconnect()', async () => {
        const client = await Client.newInstance({
            ...fixtures.clientParams,
            receiveNotifications: false,
        });
        await client.disconnect();
    });

    it('generateAuthToken()', async () => {
        const client = await fixtures.initializeClient();
        let resp = await client.generateAuthToken();
        resp.should.have.properties(['token', 'lifetime']);

        const tokenClient = await Client.newInstance({
            ...fixtures.clientParams,
            authToken: resp.token,
            receiveNotifications: false,
        });
        resp = await tokenClient.generateAuthToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
