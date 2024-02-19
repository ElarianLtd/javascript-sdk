/* eslint-disable max-len */
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
 * Fetch your app state
 * @param {String[]} appIds Other apps whose state you want to get. This trigger a consent notification to the user
 * @returns {AppState|AppState[]}
 * @memberof Elarian
 */
Elarian.prototype.fetchAppState = function fetchAppState(appIds = []) {
    const { appId, token } = this.config;
    const service = this._getAppStateService();
    return new Promise((resolve, reject) => {
        const params = {
            appId,
            token,
            appIds,
        };
        service.GetAppState(params, (error, result) => {
            if (error) {
                reject(error);
            } else if (appIds && appIds.length) {
                resolve(result.states);
            } else {
                resolve(result.states[0]);
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
        throw new Error('data is required');
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

/**
 * Send user a message
 * @param {string} message
 * @returns {Response}
 * @memberof Elarian
 */
Elarian.prototype.sendMessage = function sendMessage(message) {
    if (!message) {
        throw new Error('message is required');
    }
    const { appId, token } = this.config;
    const service = this._getSocialService();
    return new Promise((resolve, reject) => {
        const params = {
            appId,
            token,
            message,
        };
        service.SendMessage(params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

/**
 * Initiale payment collection from user
 * @param {Cash} amount
 * @returns {Response}
 * @memberof Elarian
 */
Elarian.prototype.collectPayment = function sendMessage(amount) {
    if (!amount || !amount.value || !amount.currency) {
        throw new Error('A valid amount is required');
    }
    const { appId, token } = this.config;
    const service = this._getSocialService();
    return new Promise((resolve, reject) => {
        const params = {
            appId,
            token,
            amount,
        };
        service.CollectPayment(params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = Elarian;
