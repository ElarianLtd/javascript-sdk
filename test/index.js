'use strict';

const _ = require('lodash');
const should = require('should');
const validate = require('validate.js');

const Elarian = require('../');

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
        var c = new Elarian(options);
        should.exist(c);
    });
});