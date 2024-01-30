require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { GrpcMockServer } = require('@alenon/grpc-mock-server');

const utils = require('../lib/utils');

let appStateService;

const clientParams = {
    appId: process.env.APP_ID,
    sessionId: process.env.SESSION_ID,
    options: {
        dev: true,
        uris: {
            state: '127.0.0.1:50777',
            social: '127.0.0.1:50778',
        },
    },
};

module.exports = {
    clientParams,
    elarianId: '3er23re23',

    sleep: (ms) => new Promise((resolve) => {
        setTimeout(resolve, ms);
    }),

    startMockAppStateService: async () => {
        const pkgName = 'com.elarian.hera.proto';
        const pkgDef = grpc.loadPackageDefinition(
            protoLoader.loadSync(utils.SERVICE_PROTO.APP_STATE),
        );
        const proto = (() => {
            const pathArr = pkgName.split('.');
            return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), pkgDef);
        })();

        appStateService = new GrpcMockServer();
        appStateService.addService(utils.SERVICE_PROTO.APP_STATE, pkgName, 'AppStateService', {
            GetAppState: (call, callback) => {
                const res = proto.AppState.constructor({
                    appId: process.env.APP_ID,
                    sessionId: process.env.SESSION_ID,
                    state: Buffer.from(JSON.stringify({ abc: 1 })),
                });
                callback(null, res);
            },
            UpdateAppState: (call, callback) => {
                const res = proto.AppState.constructor({
                    appId: process.env.APP_ID,
                    sessionId: process.env.SESSION_ID,
                    state: Buffer.from(JSON.stringify({ abc: 1 })),
                });
                callback(null, res);
            },
        });

        await appStateService.start();
    },

    stopMockAppStateService: async () => appStateService.stop(),
};
