// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Customer', function fx() {
    this.timeout(10000);

    let client;
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        client = fixtures.getClient();
    });

    it('getCustomerState()', async () => {
        let resp = await client.getCustomerState(customer);
        resp.should.have.properties([
            'customerId',
            'paymentState',
            'activityState',
            'identityState',
            'messagingState',
        ]);

        resp = await customer.getState();
        resp.should.have.properties([
            'customerId',
            'paymentState',
            'activityState',
            'identityState',
            'messagingState',
        ]);
    });

    it('adoptCustomerState()', async () => {
        const otherCustomer = new Customer({
            customerNumber: fixtures.adoptedCustomer,
        });
        let resp = await client.adoptCustomerState(customer, otherCustomer);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.adoptState(otherCustomer);
        resp.should.have.properties(['status', 'description', 'customerId']);
    });

    it('updateCustomerTag()', async () => {
        let resp = await client.updateCustomerTag(customer, [
            {
                key: 'kind',
                value: 'testers',
                expiresAt: new Date(2030, 1, 1).getTime() / 1000,
            },
            {
                key: 'kind',
                value: 'premium',
                expiresAt: new Date(2030, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.updateTag([
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
            {
                key: 'userSegment',
                value: 'testers',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.tags.map((i) => i.key).should.containDeep(['kind', 'type']);
    });

    it('deleteCustomerTag()', async () => {
        let resp = await client.deleteCustomerTag(customer, ['type']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteTag(['kind']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.tags.map((i) => i.key).should.not.containDeep(['kind', 'type']);
    });

    it('updateCustomerSecondaryId()', async () => {
        let resp = await client.updateCustomerSecondaryId(customer, [
            {
                key: 'passport',
                value: '808082',
                expiresAt: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.updateSecondaryId([
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

    it('deleteCustomerSecondaryId()', async () => {
        let resp = await client.deleteCustomerSecondaryId(customer, [{ key: 'passport', value: '808083' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteSecondaryId([{ key: 'huduma', value: '808082' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.identityState.secondaryIds.map((i) => i.key).should.not.containDeep(['huduma', 'passport']);
    });

    it('addCustomerReminder()', async () => {
        let resp = await client.addCustomerReminder(customer, {
            key: 'a',
            remindAt: new Date(2025, 1, 1).getTime() / 1000,
            interval: 60,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);

        resp = await customer.addReminder({
            key: 'b',
            remindAt: new Date(2025, 1, 1).getTime() / 1000,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);
    });

    it('cancelCustomerReminder()', async () => {
        let resp = await client.cancelCustomerReminder(customer, 'a');
        resp.should.have.properties(['status', 'description']);

        resp = await customer.cancelReminder('b');
        resp.should.have.properties(['status', 'description']);
    });

    it('addCustomerReminderByTag()', async () => {
        const resp = await client.addCustomerReminderByTag(
            { key: 'kind', value: 'premium' },
            {
                key: 'remByTag',
                remindAt: new Date(2025, 1, 1).getTime() / 1000,
                interval: 968767,
                payload: JSON.stringify({ a: 1, c: 'de' }),
            },
        );
        resp.should.have.properties(['status', 'description']);
    });

    it('cancelCustomerReminderByTag()', async () => {
        const resp = await client.cancelCustomerReminderByTag({ key: 'kind', value: 'premium' }, 'remByTag');
        resp.should.have.properties(['status', 'description']);
    });

    it('updateCustomerMetadata()', async () => {
        let resp = await client.updateCustomerMetadata(customer, {
            abc: { name: 'fake' },
            def: 'fakery',
        });
        resp.should.have.properties(['status', 'description']);

        resp = await customer.updateMetadata({
            key: 'weird',
            hollow: new Date(2025, 1, 1).getTime() / 1000,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);

        await customer.getState();
        customer.identityState.metadata.should.have.properties(['abc', 'def', 'key']);
    });

    it('deleteCustomerMetadata()', async () => {
        let resp = await client.deleteCustomerMetadata(customer, ['abc']);
        resp.should.have.properties(['status', 'description']);

        resp = await customer.deleteMetadata(['def']);
        resp.should.have.properties(['status', 'description']);
        await customer.getState();
        Object.keys(customer.identityState.metadata).should.not.have.properties(['abc', 'def']);
    });

    it('updateCustomerAppData()', async () => {
        let resp = await client.updateCustomerAppData(customer, {
            abc: { name: 'fake' },
            def: 'fakery',
        });
        resp.should.have.properties(['status', 'description']);

        resp = await customer.updateAppData({
            key: 'weird',
            hollow: 500,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);
    });

    it('leaseCustomerAppData()', async () => {
        let resp = await client.leaseCustomerAppData(customer);
        JSON.stringify(resp)
            .should
            .equal(JSON.stringify({
                key: 'weird',
                hollow: 500,
                payload: JSON.stringify({ a: 1, c: 'de' }),
            }));

        resp = await customer.updateAppData({ abc: { name: 'updatedAfterLease' } });
        resp = await customer.leaseAppData();
        resp.abc.name.should.equal('updatedAfterLease');
        resp = await customer.updateAppData({ abc: { name: 'restored' } });
    });

    it('deleteCustomerAppData()', async () => {
        let resp = await client.deleteCustomerAppData(customer);
        resp.should.have.properties(['status', 'description']);

        resp = await customer.deleteAppData();
        resp.should.have.properties(['status', 'description']);
    });

    it('updateCustomerActivity()', async () => {
        const resp = await customer.updateActivity(
            { number: 'what-is-this-number', channel: 'web' },
            'fake-session-id',
            'some-key',
            { ok: 1, val: false },
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
            'block',
        );
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

    it('makeVoiceCall()', async () => {
        const resp = await customer.makeVoiceCall(fixtures.voiceNumber);
        resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
        resp.status.should.equal('session_initiated');
    });

    it('requestPayment()', async () => {
        let resp = await customer.requestPayment(
            { number: fixtures.paybill, channel: 'cellular' },
            { walletId: 'bob_wallet' },
            { amount: 120, currencyCode: 'KES' },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);

        resp = await customer.requestPayment(
            { number: fixtures.paybill, channel: 'cellular' },
            { purseId: fixtures.purseId },
            { amount: 120, currencyCode: 'KES' },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);

        resp = await customer.requestPayment(
            { walletId: 'bob_wallet' },
            { purseId: fixtures.purseId },
            { amount: 120, currencyCode: 'KES' },
        );
        resp.should.have.properties([
            'status',
            'description',
            'transactionId',
            'debitCustomerId',
            'creditCustomerId',
        ]);
    });
});
