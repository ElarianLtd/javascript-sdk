// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    const client = new Client(fixtures.clientParams);
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        await client.connect();
    });

    it('makeVoiceCall()', async () => {
        const resp = await client.makeVoiceCall(customer, {
            number: '+254711082000',
            provider: 'telco',
        });
        resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
    });
});
