// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    const client = new Elarian(fixtures.clientParams);
    it('makeVoiceCall()', async () => {
        const resp = await client.makeVoiceCall({
            customerNumber: {
                number: '+254700000000',
                provider: 'telco',
            },
            channelNumber: {
                number: '+254711082000',
                provider: 'telco',
            },
        });
        resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
    });
});
