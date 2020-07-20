'use strict';

const _ = require('lodash');
const grpc = require('grpc');
const validate  = require('validate.js');
const { promisify, ElarianService } = require('./utils');

const HOST = 'api.elarian.com:443';
const SANDBOX_HOST = 'api.elarian.dev:443';

function Elarian(options) {

    this.options = _.cloneDeep(options);

    const constraints = {
        apiKey: {
            type: 'string',
        },
        authToken: {
            type: 'string',
        },
        sandbox: {
            type: 'boolean'
        }
    };

    const error = validate(this.options, constraints);
    if (error) {
        throw error;
    }

    const { apiKey, authToken, sandbox } = this.options;
    if (!apiKey && !authToken) {
        throw new Error('Either one of apiKey or authToken is required');
    }

    const host = sandbox ? SANDBOX_HOST : HOST;
    const credentials = grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        grpc.credentials.createFromMetadataGenerator((params, callback) => {
            const metadata = new grpc.Metadata();
            if (apiKey) {
                metadata.set('api-key', apiKey);
            }
            if (authToken) {
                metadata.set('auth-token', authToken);
            }
            callback(null, metadata);
        }),
    );
    this._stub = promisify(new ElarianService(host, credentials));
}

module.exports = function (options) {
    const elarian = new Elarian(options);
    return elarian._stub;
};