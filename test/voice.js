'use strict';

const _ = require('lodash');
const should = require('should');

const { Client, NumberProvider, VoiceChannel } = require('../');

const {
    apiKey,
    appId,
    productId,
} = require('./fixtures');

describe('Voice', () => {

    const elarian = new Client({ apiKey, appId });

    it('makeVoiceCall()', async () => {
        const res = await elarian.makeVoiceCall({
            productId,
    
            //customerId: 'el_cst_67a6d10ccffa84ba2c017ae77c9e4d94', // or
            customerNumber: {
                number: '+254700000000',
                provider: NumberProvider.TELCO,
            },
    
            channelNumber: {
                number: '+254700000001',
                channel: VoiceChannel.TELCO
            },
        });

        res.should.have.property('status');
        res.should.have.property('description');
        res.should.have.property('sessionId');
        res.should.have.property('customerId');
    });
});