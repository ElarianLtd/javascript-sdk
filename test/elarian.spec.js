/* eslint-disable func-names, no-new */
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
require('should');

const fixtures = require('./fixtures');
const { initializeClient } = require('../index');

describe('Elarian', () => {
    let client;

    before(async () => {
        await fixtures.startMockAppStateService();
        client = await initializeClient(fixtures.clientParams);
    });

    after(async () => {
        await fixtures.sleep(1000);
        client.disconnect();
        await fixtures.sleep(1500);
        client = null;
        await fixtures.stopMockAppStateService();
    });

    it('updateAppState()', async () => {
        const data = Buffer.from(JSON.stringify([1, 2, 3]));
        const resp = await client.updateAppState(data);
        resp.should.have.properties(['token', 'appId', 'state']);
    });

    it('fetchAppState()', async () => {
        const resp = await client.fetchAppState();
        resp.should.have.properties(['token', 'appId', 'state']);
    });
});
