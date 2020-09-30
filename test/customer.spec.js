// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Customer', function fx() {
    this.timeout(3000);

    const client = new Elarian(fixtures.clientParams);
    const customer = new client.Customer({
        customerNumber: {
            number: '+254710000000',
            provider: 'telco',
        },
    });

    it('getCustomerState()', async () => {
        let resp = await client.getCustomerState(customer);
        resp.should.have.properties(['status', 'description', 'data']);

        resp = await client.getCustomerState(new client.Customer({
            customerId: resp.data.customerId,
        }));
        resp.should.have.properties(['status', 'description', 'data']);

        resp = await customer.getState();
        resp.should.have.properties(['status', 'description', 'data']);
        resp.data.should.have.properties([
            'customerId',
            'messagingState',
            'ussdState',
            'voiceState',
            'paymentState',
            'tags',
            'metadata',
            'secondaryIds',
        ]);
    });

    it('adoptCustomerState()', async () => {
        const otherCustomer = new client.Customer({
            customerNumber: {
                number: '+254710000001',
                provider: 'telegram',
            },
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
        ]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.getState();
        resp.data.tags.map((i) => i.key).should.containDeep(['kind', 'type']);
    });

    it('deleteCustomerTag()', async () => {
        let resp = await client.deleteCustomerTag(customer, ['type']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteTag(['kind']);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.getState();
        resp.data.tags.map((i) => i.key).should.not.containDeep(['kind', 'type']);
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

        resp = await customer.getState();
        resp.data.secondaryIds.map((i) => i.key).should.containDeep(['passport', 'huduma']);
    });

    it('deleteCustomerSecondaryId()', async () => {
        let resp = await client.deleteCustomerSecondaryId(customer, [{ key: 'passport', value: '808083' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.deleteSecondaryId([{ key: 'huduma', value: '808082' }]);
        resp.should.have.properties(['status', 'description', 'customerId']);

        resp = await customer.getState();
        resp.data.secondaryIds.map((i) => i.key).should.not.containDeep(['huduma', 'passport']);
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
        resp = await customer.getState();
        Object.keys(resp.data.metadata).should.not.containDeep(['abc', 'def']);
    });
});
