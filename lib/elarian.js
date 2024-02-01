/* eslint-disable no-underscore-dangle */
const Client = require('./client');

/**
 * Instantiate an elarian client. You have to call connect() on the client to start using it
 * @class
 * @extends Client
 * @param {ClientConfig} config
 */
function Elarian(config) {
    Client.call(this, config);

    this.eventListeners = {
        ...this.eventListeners,

        // Core
        consentDenied: null,
        consentRevoked: null,
    };
}

Elarian.prototype = Object.create(Client.prototype, { constructor: Elarian });

/**
 * Lease app state
 * @returns {AppState}
 * @memberof Elarian
 */
Elarian.prototype.fetchAppState = function fetchAppState() {
    const { appId, token } = this.config;
    const service = this._getAppStateService();
    return new Promise((resolve, reject) => {
        const params = {
            appId,
            token,
        };
        service.GetAppState(params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

/**
 * Update app state
 * @param {Buffer} data
 * @returns {AppState}
 * @memberof Elarian
 */
Elarian.prototype.updateAppState = function updateAppState(data) {
    if (!data) {
        throw new Error('id and data are required');
    }

    const { appId, token } = this.config;
    const service = this._getAppStateService();

    return new Promise((resolve, reject) => {
        const params = {
            state: {
                appId,
                token,
                state: data,
            },
        };
        service.UpdateAppState(params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = Elarian;
