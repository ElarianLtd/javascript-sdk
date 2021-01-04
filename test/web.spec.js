// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Web', () => {
    let client;
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        await fixtures.initializeClient();
        client = fixtures.getClient();
    });

    it('webAction()', async () => {
        const resp = await client.webAction(
            customer.customerNumber,
            'test.com.local',
            'fake-session-id',
            'some-key',
            { ok: 1, val: false },
        );
        resp.should.have.properties([
            'status',
            'description',
            'customerId',
        ]);
    });
});
