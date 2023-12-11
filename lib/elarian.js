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
 * @param {string} id an elarian id
 * @returns {AppState}
 * @memberof Elarian
 */
Elarian.prototype.fetchAppState = function fetchAppState(id) {
    if (!id) {
        throw new Error('A elarian id is required');
    }

    const service = this._getAppStateService();

    return new Promise((resolve, reject) => {
        const params = {
            userId: id,
            appId: this.options.appId,
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
 * @param {string} id an elarian id
 * @param {AppState} data
 * @returns {AppState}
 * @memberof Elarian
 */
Elarian.prototype.updateAppState = function updateAppState(id, data) {
    if (!id || !data) {
        throw new Error('id and data are required');
    }

    const service = this._getAppStateService();

    return new Promise((resolve, reject) => {
        const params = {
            state: {
                ...data,
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
