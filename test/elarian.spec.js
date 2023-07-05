/* eslint-disable func-names, no-new */
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
require('should');

const fixtures = require('./fixtures');
const { initializeClient } = require('..');

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

    it('generateAuthToken()', async () => {
        const resp = await client.generateAuthToken();
        resp.should.have.properties(['token', 'lifetime']);
    });

    it('createHuman()', async () => {
        const resp = await client.createHuman(fixtures.humanId);
        resp.should.have.properties(['status', 'description']);
    });

    it('addReminder()', async () => {
        const resp = await client.addReminder(
            fixtures.humanId,
            {
                key: 'remKey',
                remindAt: new Date(2025, 1, 1).getTime() / 1000,
                interval: 968767,
                payload: JSON.stringify({ a: 1, c: 'de' }),
            },
        );
        resp.should.have.properties(['status', 'description']);
    });

    it('addGroupReminder()', async () => {
        const resp = await client.addGroupReminder(
            {
                key: 'grou_id',
                value: 'abc',
            },
            {
                key: 'remByGr',
                remindAt: new Date(2025, 1, 1).getTime() / 1000,
                interval: 968767,
                payload: JSON.stringify({ a: 1, c: 'de' }),
            },
        );
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('cancelReminder()', async () => {
        const resp = await client.cancelReminder(fixtures.humanId, 'remKey');
        resp.should.have.properties(['status', 'description']);
    });

    it('cancelGroupReminder()', async () => {
        const resp = await client.cancelGroupReminder(
            {
                key: 'grou_id',
                value: 'remByGr',
            },
            'remByGr',
        );
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('updateGroups()', async () => {
        const resp = await client.updateGroups(
            fixtures.humanId,
            [
                {
                    mapping: {
                        key: 'grou_id',
                        value: 'abc',
                    },
                    expiresAt: (Date.now() / 1000) + 120,
                },
            ],
        );
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('deleteGroups()', async () => {
        const resp = await client.deleteGroups(fixtures.humanId, ['abc']);
        resp.should.have.properties(['status', 'description', 'workId']);
    });

    it('updateMetadata()', async () => {
        const resp = await client.updateMetadata(
            fixtures.humanId,
            { abc: { stringVal: 'de' /* , bytesVal: 'b3923' */ } },
        );
        resp.should.have.properties(['status', 'description']);
    });

    it('deleteMetadata()', async () => {
        const resp = await client.deleteMetadata(fixtures.humanId, ['abc']);
        resp.should.have.properties(['status', 'description']);
    });

    it('leaseAppState()', async () => {
        const resp = await client.leaseAppState(fixtures.humanId);
        resp.should.have.properties(['status', 'description', 'state']);
    });

    it('updateAppState()', async () => {
        const resp = await client.updateAppState(fixtures.humanId, { stringVal: 'dewddwe' });
        resp.should.have.properties(['status', 'description']);
    });

    it('deleteAppState()', async () => {
        const resp = await client.deleteAppState(fixtures.humanId);
        resp.should.have.properties(['status', 'description']);
    });
});
