'use strict';

const _ = require('lodash');
const grpc = require('grpc');
const validate = require('validate.js');

const {
    promisify,
    ElarianService,
    ElarianMessages,
} = require('./utils');

const HOST = 'api.elarian.dev:443';


function Client(options) {
    const opts = _.cloneDeep(options);
    const constraints = {
        apiKey: {
            type: 'string',
        },
        authToken: {
            type: 'string',
        },
        appId: {
            type: 'string',
        }
    };

    const error = validate(opts, constraints);
    if (error) {
        throw error;
    }

    const {
        apiKey,
        authToken,
    } = opts;
    if (!apiKey && !authToken) {
        throw new Error('Either one of apiKey or authToken is required');
    }

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
    const _stub = promisify(new ElarianService(HOST, credentials))
    return _stub;
}


module.exports = {
    Client,
    ...ElarianMessages
};