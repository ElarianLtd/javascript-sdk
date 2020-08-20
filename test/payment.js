'use strict';

const _ = require('lodash');
const should = require('should');

const { Client, NumberProvider, PaymentChannel } = require('../');

const {
    apiKey,
    appId,
    productId,
} = require('./fixtures');

describe('Payment', () => {

    const elarian = new Client({ apiKey, appId });

    it('sendPayment()', async () => {
        const res = await elarian.sendPayment({
            productId,
    
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
    
            channelNumber: {
                number: '+254700000001',
                channel: PaymentChannel.TELCO
            },

            value: {
                currencyCode: 'KES',
                amount: 8989,
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('transactionId');
        res.should.have.property('customerId');
    });

    it('checkoutPayment()', async () => {
        const res = await elarian.checkoutPayment({
            productId,
    
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
    
            channelNumber: {
                number: '+254700000001',
                channel: PaymentChannel.TELCO
            },

            value: {
                currencyCode: 'KES',
                amount: 8989,
            }
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('transactionId');
        res.should.have.property('customerId');
    });
});