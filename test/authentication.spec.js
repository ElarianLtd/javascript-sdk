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
                authToken: 'fake',
            });
        }).should.throw();

        (function () {
            new Client({
                orgId: 'ok',
                appId: 'yes',
                authToken: '13245:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
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

    it('connect()', async () => {
        const client = new Client(fixtures.clientParams);
        should.exist(client);
        return client.connect();
    });

    it('newInstance()', async () => Client.newInstance(fixtures.clientParams));

    it('disconnect()', async () => {
        const client = await Client.newInstance(fixtures.clientParams);
        await client.disconnect();
    });

    after(async () => {
        await fixtures.initializeClient();
    });
});
