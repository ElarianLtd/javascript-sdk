// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    const client = new Elarian(fixtures.clientParams);
    it('authToken()', async () => {
        const resp = await client.authToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
