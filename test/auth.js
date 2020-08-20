'use strict';

const _ = require('lodash');
const should = require('should');
const validate = require('validate.js');

const { Client } = require('../');

const {
    apiKey,
    appId
} = require('./fixtures');

describe('Auth', () => {

    const elarian = new Client({ apiKey, appId });

    it('authToken()', async () => {
        const res = await elarian.authToken();
        res.should.have.property('token');
        res.should.have.property('lifetime');
    });
});