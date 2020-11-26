// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    let client;
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        client = await Client.newInstance(fixtures.clientParams);
    });

    after(async () => {
        await client.disconnect();
    });

    it('makeVoiceCall()', async () => {
        const resp = await client.makeVoiceCall(customer, {
            number: '+254711082000',
            provider: 'telco',
        });
        resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
    });
});
