/* eslint-disable func-names */
/* eslint-disable no-new */
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    let client;

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

        client = new Elarian(fixtures.clientParams);
        should.exist(client);

        (function () {
            new client.Customer();
        }).should.throw();

        const customer = new client.Customer({
            customerNumber: {
                number: '0700000000',
                provider: 'telco',
                partition: 'xyz',
            },
        });
        should.exist(customer);
    });

    it('authToken()', async () => {
        const resp = await client.authToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
