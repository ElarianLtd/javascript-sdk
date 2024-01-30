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

Elarian.prototype.fetchUserData = function fetchUserData() {
    throw new Error('Not implemented');
};

Elarian.prototype.updateUserData = function updateUserData() {
    throw new Error('Not implemented');
};

/**
 * Lease app state
 * @returns {AppState}
 * @memberof Elarian
 */
Elarian.prototype.fetchAppState = function fetchAppState() {
    const service = this._getAppStateService();
    return new Promise((resolve, reject) => {
        const params = {
            appId: this.options.appId,
            sessionId: this.options.sessionId,
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

    const service = this._getAppStateService();

    return new Promise((resolve, reject) => {
        const params = {
            state: {
                appId: this.options.appId,
                sessionId: this.options.sessionId,
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
