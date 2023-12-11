/* eslint-disable max-len */

/**
 * An object representing client params
 * @typedef {Object} ClientConfig
 * @property {string} apiKey
 * @property {string} appId
 * @property {ConnectionOptions} [options] setup connection options
 */

/**
 * An object representing app state
 * @typedef {Object} AppState
 * @property {string} appId
 * @property {string} userId
 * @property {Buffer} state
 */

/**
 * A function that reacts to events
 * @typedef {function} NotificationHandler
 * @param {Notification} notification
 * @param {NotificationCallback} [callback] A response to the event. Required for voice and ussd events
 * @returns {void}
 */

/**
 * An string representing an event. Must be one of:
 * <ul>
 * <li>Connection Events:
 * <ul>
 * <li><b>error</b>: Emitted on connection error</li>
 * <li><b>closed</b>: Emitted on connection closed</li>
 * <li><b>pending</b>: Emitted when not connected</li>
 * <li><b>connected</b>: Emitted on connection success</li>
 * <li><b>connecting</b>: Emitted when connecting </li>
 * </ul>
 * </li>
 * <li>App Events
 * <ul>
 * <li><b>consentDenied</b>: ...</li>
 * <li><b>consentRevoked</b>: ...</li>
 * </ul>
 * </li>
 * </ul>
 * @typedef {string} Event
 */
