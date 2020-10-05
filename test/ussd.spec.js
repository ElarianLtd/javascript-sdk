// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('USSD', () => {
    const client = new Elarian(fixtures.clientParams);
    it('replyToUssdSession()', async () => {
        const resp = await client.replyToUssdSession('test-session-id', {
            text: 'Hello USSD',
            isTerminal: true,
        });
        resp.should.have.properties(['status', 'description']);
    });
});
