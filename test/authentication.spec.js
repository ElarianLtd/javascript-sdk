/* eslint-disable func-names */
/* eslint-disable no-new */
const should = require('should');

const { Elarian, Simulator, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    it('validates options', async () => {
        const options = {
            apiKey: 5,
        };

        (function () {
            new Elarian(options);
        }).should.throw();

        delete options.apiKey;
        (function () {
            new Elarian(options);
        }).should.throw();

        let client;
        (function () {
            client = new Elarian({
                orgId: 'ok',
                appId: 'yes',
                authToken: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
            });
        }).should.not.throw();

        (function () {
            new Customer();
        }).should.throw();

        const customer = new Customer({
            client,
            customerNumber: {
                number: '0700000000',
                provider: 'cellular',
                partition: 'xyz',
            },
        });
        should.exist(customer);
    });

    it('connect() and disconnect()', async () => {
        let client = await Elarian.newInstance({
            ...fixtures.clientParams,
            allowNotifications: false,
        });
        await client.disconnect();

        client = await Simulator.newInstance(fixtures.clientParams);
        await client.disconnect();
    });

    it('generateAuthToken()', async () => {
        await fixtures.initializeClient();
        const client = await fixtures.getClient();
        const resp = await client.generateAuthToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
