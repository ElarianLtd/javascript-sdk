/* eslint-disable func-names */
/* eslint-disable no-new */
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    let client;

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

        client = new Client(fixtures.clientParams);
        should.exist(client);

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

    it('authToken()', async () => {
        await client.connect();
        const resp = await client.authToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
