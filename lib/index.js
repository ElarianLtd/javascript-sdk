'use strict';

const _ = require('lodash');
const validate  = require('validate.js');

function Elarian(options) {

    this.options = _.cloneDeep(options);

    validate.validators.isString = function(value, options, key, attributes) {
        if (validate.isEmpty(value) || validate.isString(value)) { // String or null & undefined
            return null;
        } else {
            return "must be a string";
        }
    };

    const constraints = {
        username: {
            presence: true,
            isString: true
        },
        apiKey: {
            presence: true,
            isString: true
        }
    };

    const error = validate(this.options, constraints);
    if (error) {
        throw error;
    }

    const isSandbox = this.options.username.toLowerCase() === 'sandbox';
    
    this.someStuff = () => null;
}

module.exports = function (options) {
    return new Elarian(options);
};