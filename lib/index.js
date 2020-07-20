'use strict';

const _ = require('lodash');
const path = require('path');
const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const validate  = require('validate.js');
const { promisify } = require('./utils');

const ElarianServiceProto = path.join(__dirname, 'hera/src/main/proto/web.proto');
const ElarianServiceDefinition = loader.loadSync(ElarianServiceProto, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const ElarianServiceDescriptor = grpc.loadPackageDefinition(ElarianServiceDefinition);
const ElarianServiceNamespace = ElarianServiceDescriptor.com.elarian.hera.proto;
const ElarianService = ElarianServiceNamespace.GrpcWebService;

const HOST = 'api.elarian.com:443';
const SANDBOX_HOST = 'api.elarian.dev:443';

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
        apiKey: {
            type: 'string',
        },
        authToken: {
            type: 'string'
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
            metadata.set('api-key', apiKey || authToken);
            callback(null, metadata);
        }),
    );
    this._stub = promisify(new ElarianService(host, credentials));
}

module.exports = function (options) {
    const elarian = new Elarian(options);
    return elarian._stub;
};