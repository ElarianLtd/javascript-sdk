const util = require('util');
const messages = require('./service/web_pb');
const service = require('./service/web_grpc_pb');

const ElarianMessages = messages;
const ElarianService = service.GrpcWebServiceClient;

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
    ElarianMessages,
};