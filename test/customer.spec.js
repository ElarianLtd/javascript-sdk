// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Client, Customer } = require('..');
const fixtures = require('./fixtures');

describe('Customer', function fx() {
    this.timeout(10000);

    const client = new Client(fixtures.clientParams);
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        await client.connect();
    });

    after(async () => {
        await client.disconnect();
    });

    it('getCustomerState()', async () => {
        let resp = await client.getCustomerState(customer);
        resp.should.have.properties([
            'customerId',
            'nuclearState',
            'messagingState',
            'ussdState',
            'voiceState',
            'paymentState',
        ]);

        resp = await client.getCustomerState(new Customer({
            customerId: resp.customerId,
        }));

        resp.should.have.properties([
            'customerId',
            'nuclearState',
            'messagingState',
            'ussdState',
            'voiceState',
            'paymentState',
        ]);

        resp = await customer.getState();
        resp.should.have.properties([
            'customerId',
            'nuclearState',
            'messagingState',
            'ussdState',
            'voiceState',
            'paymentState',
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
                expiration: new Date(2030, 1, 1).getTime() / 1000,
            },
            {
                key: 'kind',
                value: 'premium',
                expiration: new Date(2030, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.updateTag([
            {
                key: 'kind',
                value: 'testers',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
            {
                key: 'type',
                value: 'premium',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
            {
                key: 'userSegment',
                value: 'testers',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.tags.map((i) => i.key).should.containDeep(['kind', 'type']);
    });

    it('deleteCustomerTag()', async () => {
        let resp = await client.deleteCustomerTag(customer, ['type']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteTag(['kind']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.tags.map((i) => i.key).should.not.containDeep(['kind', 'type']);
    });

    it('updateCustomerSecondaryId()', async () => {
        let resp = await client.updateCustomerSecondaryId(customer, [
            {
                key: 'passport',
                value: '808082',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.updateSecondaryId([
            {
                key: 'passport',
                value: '808083',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
            {
                key: 'huduma',
                value: '808082',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
            },
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.secondaryIds.map((i) => i.key).should.containDeep(['passport', 'huduma']);
    });

    it('deleteCustomerSecondaryId()', async () => {
        let resp = await client.deleteCustomerSecondaryId(customer, [{ key: 'passport', value: '808083' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteSecondaryId([{ key: 'huduma', value: '808082' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        await customer.getState();
        customer.secondaryIds.map((i) => i.key).should.not.containDeep(['huduma', 'passport']);
    });

    it('addCustomerReminder()', async () => {
        let resp = await client.addCustomerReminder(customer, {
            key: 'a',
            expiration: new Date(2025, 1, 1).getTime() / 1000,
            interval: 60,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);

        resp = await customer.addReminder({
            key: 'b',
            expiration: new Date(2025, 1, 1).getTime() / 1000,
            payload: JSON.stringify({ a: 1, c: 'de' }),
        });
        resp.should.have.properties(['status', 'description']);

        await customer.getState();
        customer.reminders.map((i) => i.key).should.containDeep(['a', 'b']);
    });

    it('cancelCustomerReminder()', async () => {
        let resp = await client.cancelCustomerReminder(customer, 'a');
        resp.should.have.properties(['status', 'description']);

        resp = await customer.cancelReminder('b');
        resp.should.have.properties(['status', 'description']);

        await customer.getState();
        customer.reminders.map((i) => i.key).should.not.containDeep(['a', 'b']);
    });

    it('addCustomerReminderByTag()', async () => {
        const resp = await client.addCustomerReminderByTag(
            { key: 'kind', value: 'premium' },
            {
                key: 'remByTag',
                expiration: new Date(2025, 1, 1).getTime() / 1000,
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
        customer.metadata.should.have.properties(['abc', 'def', 'key']);
    });

    it('leaseCustomerMetadata()', async () => {
        let resp = await client.leaseCustomerMetadata(customer, 'abc');
        resp.should.have.properties(['status', 'description', 'customerId', 'value']);

        resp = await customer.updateMetadata({ abc: { name: 'updatedAfterLease' } });
        resp = await customer.leaseMetadata('abc');
        resp.value.should.have.properties(['name']);
        resp.value.name.should.equal('updatedAfterLease');
        resp.should.have.properties(['status', 'description', 'customerId', 'value']);
    });

    it('deleteCustomerMetadata()', async () => {
        let resp = await client.deleteCustomerMetadata(customer, ['abc']);
        resp.should.have.properties(['status', 'description']);

        resp = await customer.deleteMetadata(['def']);
        resp.should.have.properties(['status', 'description']);
        await customer.getState();
        Object.keys(customer.metadata).should.not.have.properties(['abc', 'def']);
    });
});
