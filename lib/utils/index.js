const util = require('util');
const path = require('path');
const grpc = require('grpc');
const loader = require('@grpc/proto-loader');

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

const promisify = (client) => {
    const to = {};
    for (var k in client) {
        if (typeof client[k] != 'function') continue;
        // Stream functions synchronously return a stream object
        // and don't use an Error first callback signature
        if (client[k].responseStream && client[k].responseStream === true) {
            to[k] = client[k].bind(client);
        } else {
            to[k] = util.promisify(client[k].bind(client));
        }
    }
    return to;
}

module.exports = {
    promisify,
    ElarianService,
};