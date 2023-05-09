/* eslint-disable max-len */

/**
 * An object representing client params
 * @typedef {Object} ClientConfig
 * @property {string} apiKey
 * @property {string} appId
 * @property {string} orgId
 * @property {string} [authToken] received from an client that authenticated with the API key. @see {@link Elarian.generateAuthToken}
 * @property {boolean} [isSimulator] Run this client as a simulator
 * @property {boolean} [allowNotifications] allow this non-simulator client to receive notifications or not
 * @property {ConnectionOptions} [options] setup connection options
 */

/**
 * An object representing serializer
 * @typedef {Object} Serializer
 * @property {text|binary} type
 * @property {function} serialize
 * @property {function} deserialize
 */

/**
 * An object representing config options
 * @typedef {Object} ConnectionOptions
 * @property {number} [lifetime = 6000]
 * @property {number} [keepAlive = 1000]
 * @property {boolean} [resumable = false]
 * @property {number} [notificationTimeout = 5000]
 * @property {number} [reconnectTimeout = 60000]
 * @property {Serializer} [serializer] used to (de)serialize your metadata
 */

/**
 * An object representing a reminder
 * @typedef {Object} Reminder
 * @property {string} key
 * @property {number} remindAt timestamp in seconds e.g 1615361861
 * @property {string} payload
 * @property {number} [interval] duration in seconds e.g. 60
 */

/**
 * @typedef {Object} Reply
 * @property {boolean} status
 * @property {string} description
 * @property {string} [workId]
 */

/**
 * @typedef {Object} StateReply
 * @property {boolean} status
 * @property {string} description
 * @property {DataMapValue} state
 */

/**
 * @typedef {Object} IndexMapping
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef {Object} DataMapValue
 * @property {string} [stringVal]
 * @property {binary} [bytesVal]
 */

/**
 * @typedef {Object} GroupIndex
 * @property {IndexMapping} mapping
 * @property {number} expiresAt
 */

/**
 * An object representing auth token
 * @typedef {Object} AuthToken
 * @property {string} token
 * @property {number} lifetime in seconds
 */

/**
 * An object representing the notification data
 * @typedef {Object} Notification
 * @property {string} humanId
 * @property {string} orgId
 * @property {string} appId
 * @property {long} createdAt
 * @property {DataMapValue} state
 */

/**
 * Reminder notification
 * @typedef {Notification} ReminderNotification
 * @property {Reminder} reminder
 * @property {GroupIndex} group
 * @property {string} workId
 */

/**
  * Notification callback
  * @typedef {function} NotificationCallback
  * @param {DataMapValue} [nextState = null]
  * @returns {void}
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
 * <li><b>reminder</b>: @see {@link ReminderNotification}</li>
 * </ul>
 * </li>
 * </ul>
 * @typedef {string} Event
 */
