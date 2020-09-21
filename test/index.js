'use strict';

const _ = require('lodash');
const should = require('should');

const { Client } = require('../');

describe('Initialization', () => {

    it('validates options', async () => {

        const options = {
            apiKey: 5,
        };

        (function (){
            new Client(options);
        }).should.throw();

        delete options.apiKey;
        (function (){
            new Client(options);
        }).should.throw();

        options.apiKey = 'SOME_POSSIBLE_VALID_KEY';
        var c = new Client(options);
        should.exist(c);
    });
});