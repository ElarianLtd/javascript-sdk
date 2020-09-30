// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Authentication', () => {
    it('authToken()', async () => {
        const client = new Elarian(fixtures.clientParams);
        const resp = await client.authToken();
        resp.should.have.properties(['token', 'lifetime']);
    });
});
