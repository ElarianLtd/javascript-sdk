// eslint-disable-next-line no-unused-vars
const should = require('should');

const fixtures = require('./fixtures');
const { Elarian } = require('..');

describe('Customer', function fx() {
    this.timeout(10000);

    let client;
    let customer;

    before((done) => {
        client = new Elarian(fixtures.clientParams);
        client
            .on('error', (err) => {
                done(err);
            })
            .on('connected', () => {
                customer = new client.Customer({
                    ...fixtures.customerNumber,
                });
                done();
            })
            .connect(fixtures.connectOpts);
    });

    after(async () => {
        client.disconnect();
        await fixtures.sleep(500);
    });

    it('getState()', async () => {
        const resp = await customer.getState();
        resp.should.have.properties([
            'customerId',
            'paymentState',
            'activityState',
            'identityState',
            'messagingState',
        ]);
    });

    it('adoptState()', async () => {
        const otherCustomer = new client.Customer({
            ...fixtures.adoptedCustomer,
        });
        const resp = await customer.adoptState(otherCustomer);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('sendMessage()', async () => {
        const resp = await customer.sendMessage(
            {
                number: fixtures.senderId,
                channel: 'sms',
            },
            {
                body: {
                    text: 'node customer sms messaging test',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
    });

    it('replyToMessage()', async () => {
        const resp = await customer.replyToMessage(
            'some-message-id',
            {
                body: {
                    text: 'node customer sms messaging test',
                },
            },
        );
        resp.should.have.properties(['status', 'description', 'messageId', 'customerId']);
    });

    it('updateActivity()', async () => {
        const resp = await customer.updateActivity(
            'source----',
            {
                sessionId: 'fake-session-id',
                key: 'some-key',
                properties: { ok: 1, val: false },
            },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
        ]);
    });

    it('updateMessagingConsent()', async () => {
        const resp = await customer.updateMessagingConsent(
            {
                number: fixtures.senderId,
                channel: 'sms',
            },
            'allow',
        );
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('updateAppData()', async () => {
        const resp = await customer.updateAppData({
            key: 'weird',
            hollow: 500,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);
    });

    it('leaseAppData()', async () => {
        let resp = await customer.updateAppData({ abc: { name: 'updatedAfterLease' } });
        resp = await customer.leaseAppData();
        resp.abc.name.should.equal('updatedAfterLease');
        resp = await customer.updateAppData({ abc: { name: 'restored' } });
    });

    it('deleteAppData()', async () => {
        const resp = await customer.deleteAppData();
        resp.should.have.properties(['status', 'description']);
    });

    it('updateMetadata()', async () => {
        const resp = await customer.updateMetadata({
            key: 'weird',
            hollow: new Date(2025, 1, 1).getTime() / 1000,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);

        await customer.getState();
        customer.identityState.metadata.should.have.properties(['key', 'hollow', 'payload']);
    });

    it('getMetadata()', async () => {
        const resp = await customer.getMetadata();
        resp.should.have.properties(['key', 'hollow', 'payload']);
    });

    it('deleteMetadata()', async () => {
        const resp = await customer.deleteMetadata(['hollow']);
        resp.should.have.properties(['status', 'description']);
        await customer.getState();
        Object.keys(customer.identityState.metadata).should.not.have.properties(['hollow']);
    });

    it('updateSecondaryIds()', async () => {
        const resp = await customer.updateSecondaryIds([
            {
                key: 'passport',
                value: '808083',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
            {
                key: 'huduma',
                value: '808082',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.secondaryIds.map((i) => i.key).should.containDeep(['passport', 'huduma']);
    });

    it('getSecondaryIds()', async () => {
        const resp = await customer.getSecondaryIds();
        resp.map((i) => i.key).should.containDeep(['passport', 'huduma']);
    });

    it('deleteSecondaryIds()', async () => {
        const resp = await customer.deleteSecondaryIds([{ key: 'huduma', value: '808082' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.secondaryIds.map((i) => i.key).should.not.containDeep(['huduma']);
    });

    it('updateTags()', async () => {
        const resp = await customer.updateTags([
            {
                key: 'kind',
                value: 'testers',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
            {
                key: 'type',
                value: 'premium',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.tags.map((i) => i.key).should.containDeep(['kind', 'type']);
    });

    it('getTags()', async () => {
        const resp = await customer.getTags();
        resp.map((i) => i.key).should.containDeep(['kind', 'type']);
    });

    it('deleteTags()', async () => {
        const resp = await customer.deleteTags(['kind', 'type']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.tags.map((i) => i.key).should.not.containDeep(['kind', 'type']);
    });

    it('addReminder()', async () => {
        const resp = await customer.addReminder({
            key: 'b',
            remindAt: new Date(2025, 1, 1).getTime() / 1000,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);
    });

    it('cancelReminder()', async () => {
        const resp = await customer.cancelReminder('b');
        resp.should.have.properties(['status', 'description']);
    });
});
