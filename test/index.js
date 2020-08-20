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
            new Elarian(options);
        }).should.throw();

        delete options.apiKey;
        (function (){
            new Elarian(options);
        }).should.throw();

        options.apiKey = 'SOME_POSSIBLE_VALID_KEY';
        options.appId = 'SOME_POSSIBLE_VALID_APP';
        var c = new Client(options);
        should.exist(c);
    });
});