/* eslint-disable func-names, no-new */
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
require('should');

const fixtures = require('./fixtures');
const { initializeClient } = require('../index');

describe('Elarian', () => {
    let client;

    before(async () => {
        client = await initializeClient(fixtures.clientParams, fixtures.connectOpts);
    });

    after(async () => {
        await fixtures.sleep(1000);
        client.disconnect();
        await fixtures.sleep(1500);
        client = null;
    });

    it('updateAppState()', async () => {
        const data = Buffer.from([]);
        const resp = await client.updateAppState(data);
        resp.should.have.properties(['status', 'description']);
    });

    it('fetchAppState()', async () => {
        const resp = await client.fetchAppState();
        resp.should.have.properties(['sessionId', 'appId', 'state']);
    });
});
