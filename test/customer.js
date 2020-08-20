'use strict';

const should = require('should');

const { Client, NumberProvider } = require('../');

const {
    apiKey,
    appId,
    productId,
} = require('./fixtures');



describe('Customer', function () {
    this.timeout(60000);
    
    const elarian = new Client({ apiKey, appId });

    it('getCustomerState()', async () => {
        const res = await elarian.getCustomerState({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('data');
        res.data.should.have.property('messagingState');
        res.data.should.have.property('ussdState');
        res.data.should.have.property('voiceState');
        res.data.should.have.property('paymentState');
        res.data.should.have.property('tagsList');
        res.data.should.have.property('metadataMap');
        res.data.should.have.property('secondaryIdsList');
    });

    it('adoptCustomerState()', async () => {
        const res = await elarian.adoptCustomerState({
            customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94',
            otherCustomerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            otherCustomerNumber: {
                number: '+254700000001',
                provider: NumberProvider.TELCO,
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('addCustomerReminder()', async () => {
        const res = await elarian.addCustomerReminder({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            reminder: {
                productId,
                key: 'rm-key',
                expiration: 34235234523,
                payload: '{"abc":"def"}',
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('addCustomerReminderByTag()', async () => {
        const res = await elarian.addCustomerReminderByTag({
            tag: {
                key: 'fake',
                value: 'longvalue',
            },
            reminder: {
                productId,
                key: 'rm-key',
                expiration: 34235234523,
                payload: '{"abc":"def"}',
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('workId');
    });

    it('cancelCustomerReminder()', async () => {
        const res = await elarian.cancelCustomerReminder({
            productId,
            key: 'fake',
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('cancelCustomerReminderByTag()', async () => {
        const res = await elarian.cancelCustomerReminderByTag({
            tag: {
                key: 'fake',
                value: 'longvalue',
            },
            productId,
            key: 'fake',
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('workId');
    });

    it('updateCustomerTag()', async () => {
        const res = await elarian.updateCustomerTag({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            tags: [
                {
                    mapping: {
                        key: 'test_one_tag',
                        value: 'one_tag'
                    },
                    expiration: 3600
                }
            ]
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('deleteCustomerTag()', async () => {
        const res = await elarian.deleteCustomerTag({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            tags: ['a', 'c', 'd']
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('updateCustomerSecondaryId()', async () => {
        const res = await elarian.updateCustomerSecondaryId({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            secondaryIds: [
                {
                    mapping: {
                        key: 'test_one_tag',
                        value: 'one_tag'
                    },
                    expiration: 3600
                }
            ]
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('deleteCustomerSecondaryId()', async () => {
        const res = await elarian.deleteCustomerSecondaryId({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            secondaryIds: [
                {
                key: 'test_one_tag',
                value: 'one_tag'
                }
            ]
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('updateCustomerMetadata()', async () => {
        const res = await elarian.updateCustomerMetadata({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            metadata: {
                a: 1,
                b: 2
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('deleteCustomerMetadata()', async () => {
        const res = await elarian.deleteCustomerMetadata({
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
            metadata: ['a', 'c', 'd']
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });
});