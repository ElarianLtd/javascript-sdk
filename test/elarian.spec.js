/* eslint-disable func-names, no-new */
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
require('should');

const fixtures = require('./fixtures');
const { initializeClient } = require('../index');

describe('Elarian', () => {
    let client;

    before(async () => {
        await fixtures.startMockServices();
        client = await initializeClient(fixtures.clientParams);
    });

    after(async () => {
        await fixtures.sleep(1000);
        client.disconnect();
        await fixtures.sleep(1500);
        client = null;
        await fixtures.stopMockServices();
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

    it('fetchAppState(appIds[])', async () => {
        const resp = await client.fetchAppState(['app1', 'app2']);
        resp.should.be.an.Array();
        resp[0].should.have.properties(['token', 'appId', 'state']);
    });

    it('sendMessage()', async () => {
        const resp = await client.sendMessage('This is a test');
        resp.should.have.properties(['success', 'message']);
    });

    it('collectPayment()', async () => {
        const resp = await client.collectPayment({ value: 10, currency: 'KES' });
        resp.should.have.properties(['success', 'message']);
    });
});
