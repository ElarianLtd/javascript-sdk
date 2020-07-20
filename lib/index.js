'use strict';

const _ = require('lodash');
const path = require('path');
const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const validate  = require('validate.js');
const { promisify } = require('./utils');

const ElarianServiceProto = path.join(__dirname, 'proto/web.proto');
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

    const constraints = {
        apiKey: {
            presence: true,
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

    const { apiKey, sandbox } = this.options;

    const host = sandbox ? SANDBOX_HOST : HOST;
    const credentials = grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        grpc.credentials.createFromMetadataGenerator((params, callback) => {
            const metadata = new grpc.Metadata();
            metadata.set('api-key', apiKey);
            callback(null, metadata);
        }),
    );
    this._stub = promisify(new ElarianService(host, credentials));
}

module.exports = function (options) {
    const elarian = new Elarian(options);
    return elarian._stub;
};