/* eslint-disable func-names */
/* eslint-disable no-new */
const should = require('should');

const Elarian = require('..');

describe('Initialization', () => {
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

        options.apiKey = 'test_api_key';
        options.orgId = 'test_org';
        options.appId = 'test_app';
        const client = new Elarian(options);
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
});
