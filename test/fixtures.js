require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { GrpcMockServer } = require('@alenon/grpc-mock-server');

const utils = require('../lib/utils');

const clientParams = {
    appId: process.env.APP_ID ? process.env.APP_ID : 'test_app',
    token: process.env.TOKEN || 'test_token',
    options: {
        dev: true,
        uris: {
            state: '127.0.0.1:50777',
            social: '127.0.0.1:50777',
        },
    },
};

const grpcService = (() => {
    const pkgName = 'com.elarian.hera.proto';
    const appStatePKGDef = grpc.loadPackageDefinition(
        protoLoader.loadSync(utils.SERVICE_PROTO.APP_STATE),
    );
    const socialPKGDef = grpc.loadPackageDefinition(
        protoLoader.loadSync(utils.SERVICE_PROTO.SOCIAL),
    );

    const parseProto = (def, name) => {
        const pathArr = name.split('.');
        return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), def);
    };

    const service = new GrpcMockServer();
    service.addService(utils.SERVICE_PROTO.SOCIAL, pkgName, 'SocialService', {
        SendMessage: (call, callback) => {
            const { Reply } = parseProto(socialPKGDef, pkgName);
            const res = Reply.constructor({
                success: false,
                message: 'Not Implemented',
            });
            callback(null, res);
        },
        CollectPayment: (call, callback) => {
            const { Reply } = parseProto(socialPKGDef, pkgName);
            const res = Reply.constructor({
                success: false,
                message: 'Not Implemented',
            });
            callback(null, res);
        },
    });

    service.addService(utils.SERVICE_PROTO.APP_STATE, pkgName, 'AppStateService', {
        GetAppState: (call, callback) => {
            const proto = parseProto(appStatePKGDef, pkgName);
            const state = proto.AppState.constructor({
                appId: process.env.APP_ID,
                token: process.env.TOKEN,
                state: Buffer.from(JSON.stringify({ abc: 1 })),
            });
            const res = proto.GetAppStatesReply.constructor({
                states: [state],
            });
            callback(null, res);
        },
        UpdateAppState: (call, callback) => {
            const proto = parseProto(appStatePKGDef, pkgName);
            const res = proto.AppState.constructor({
                appId: process.env.APP_ID,
                token: process.env.TOKEN,
                state: Buffer.from(JSON.stringify({ abc: 1 })),
            });
            callback(null, res);
        },
    });

    return service;
})();

module.exports = {
    clientParams,
    elarianId: '3er23re23',

    sleep: (ms) => new Promise((resolve) => {
        setTimeout(resolve, ms);
    }),

    startMockServices: async () => {
        await grpcService.start();
    },

    stopMockServices: async () => {
        await grpcService.stop();
    },
};
