/* eslint-disable max-len */
/**
 * An object representing a tag. Tags can be used to group customers based on some similarities. e.g. loan defaulters, etc.
 * @typedef {Object} Tag
 * @property {string} key
 * @property {string} value
 * @property {number} [expiresAt]
 */

/**
 * An object representing a secondary id. Secondary Ids can be used to add some more unique identities to a customer. e.g. driver's license, etc.
 * @typedef {Object} SecondaryId
 * @property {string} key
 * @property {string} value
 */

/**
 * An object representing a customer number.
 * @typedef {Object} CustomerNumber
 * @property {string} number
 * @property {telco|telegram|facebook} provider
 * @property {string} [partition]
 */

/**
 * An object representing a messaging channel number
 * @typedef {Object} MessagingChannelNumber
 * @property {string} number
 * @property {telco|sms|telegram|whatsapp|google_rcs|fb_messenger} provider
 */

/**
 * An object representing media
 * @typedef {Object} Media
 * @property {string} url
 * @property {image|video|audio|document|voice|sticker|contact} type
 */

/**
 * An object representing location
 * @typedef {Object} Location
 * @property {double} latitude
 * @property {double} longitude
 * @property {string} label
 * @property {string} address
 */

/**
 * An object representing email
 * @typedef {Object} Email
 * @property {string} subject
 * @property {string} bodyPlain
 * @property {string} bodyHtml
 * @property {string[]} ccList
 * @property {string[]} bccList
 * @property {string[]} attachments
 */

/**
 * An object representing a message body
 * @typedef {Object} Body
 * @property {string} text
 * @property {string} [template]
 * @property {Media} [media]
 * @property {Location} [location]
 * @property {Email} [email]
 */

/**
 * An object representing client params
 * @typedef {Object} ElarianConfig
 * @property {string} apiKey
 * @property {string} appId
 * @property {string} orgId
 * @property {string} [authToken] received from an client that authenticated with the API key. @see Elarian.generateAuthToken()
 * @property {boolean} [receivedNotifications] allow this client to receive notifications or not
 * @property {ConfigOptions} [options] setup connection options
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
 * @typedef {Object} ConfigOptions
 * @property {number} [lifetime]
 * @property {number} [keepAlive]
 * @property {number} [reconnectInterval]
 * @property {Serializer} [serializer] used to (de)serialize your metadata
 */

/**
 * An object representing cash
 * @typedef {Object} Cash
 * @property {double} amount
 * @property {string} currencyCode
 */

/**
 * An object representing wallet
 * @typedef {Object} Wallet
 * @property {string} customerId
 * @property {string} walletId
 */

/**
 * An object representing purse
 * @typedef {Object} Purse
 * @property {string} purseId
 */

/**
 * An object representing a payment channel
 * @typedef {Object} PaymentChannelNumber
 * @property {string} number
 * @property {telco} provider
 */

/**
 * An object representing a payment transaction
 * @typedef {Object} PaymentTransaction
 * @property {string} transactionId
 * @property {string} appId
 * @property {CustomerPayment|Wallet|Purse} creditParty
 * @property {CustomerPayment|Wallet|Purse} debitParty
 * @property {Cash} value
 * @property {number} status
 * @property {number} createdAt
 * @property {number} updatedAt
 */

/**
 * An object representing a voice channel
 * @typedef {Object} VoiceChannelNumber
 * @property {string} number
 * @property {telco} provider
 */

/**
 * An object representing a ussd channel
 * @typedef {Object} UssdChannelNumber
 * @property {string} number
 * @property {telco} provider
 */

/**
 * An object representing a customer's payment source or destination
 * @typedef {Object} CustomerPayment
 * @property {CustomerNumber} customerNumber
 * @property {PaymentChannelNumber} channelNumber
 */

/**
 * An object representing customer params
 * @typedef {Object} CustomerParams
 * @property {CustomerNumber} customerNumber
 */

/**
 * An object representing a reminder
 * @typedef {Object} Reminder
 * @property {string} key
 * @property {number} remindAt timestamp in seconds
 * @property {string} payload
 * @property {number} [interval]
 */

/**
 * An object representing a ussd menu
 * @typedef {Object} UssdMenu
 * @property {string} text
 * @property {boolean} isTerminal
 */

/**
 * An object representing a 'say' voice action
 * @typedef {Object} Say
 * @property {string} text
 * @property {boolean} [playBeep]
 * @property {male|female} [voice]
 */

/**
 * An object representing a 'play' voice action
 * @typedef {Object} Play
 * @property {string} url
 */

/**
 * An object representing a 'getDigits' voice action
 * @typedef {Object} GetDigits
 * @property {number} timeout
 * @property {string} finishOnKey
 * @property {number} numDigits
 * @property {Say} [say]
 * @property {Play} [play]
 */

/**
 * An object representing a 'dial' voice action
 * @typedef {Object} Dial
 * @property {CustomerNumber[]} customerNumbers
 * @property {boolean} record
 * @property {boolean} sequential
 * @property {string} ringbackTone
 * @property {string} callerId
 * @property {number} maxDuration
 */

/**
 * An object representing a 'recordSession' voice action
 * @typedef {boolean} RecordSession
 */

/**
 * An object representing a 'reject' voice action
 * @typedef {boolean} Reject
 */

/**
 * An object representing a 'redirect' voice action
 * @typedef {Object} Redirect
 * @param {string} url
 */

/**
 * An object representing a 'enqueue' voice action
 * @typedef {Object} Enqueue
 * @param {string} queueName
 * @param {string} holdMusic
 */

/**
 * An object representing a 'dequeue' voice action
 * @typedef {Object} Dequeue
 * @param {string} queueName
 * @param {boolean} record
 * @param {ChannelNumber} channelNumber
 */

/**
 * An object representing a 'getRecording' voice action
 * @typedef {Object} GetRecording
 * @property {boolean} playBeep
 * @property {boolean} trimSilence
 * @property {number} timeout
 * @property {number} maxLength
 * @property {string} finishOnKey
 * @property {Say} [say]
 * @property {Play} [play]
 */

/**
 * An object representing a voice action. Note: Only one action is required in the object.
 * @typedef {Object} VoiceAction
 * @property {Say} say
 * @property {Play} play
 * @property {Dial} dial
 * @property {RecordSession} recordSession
 * @property {GetRecording} getRecording
 * @property {Enqueue} enqueue
 * @property {Dequeue} dequeue
 * @property {Reject} reject
 * @property {Redirect} redirect
 */

/**
 * Notification data
 * @typedef {Object} Notification
 * @property {Object} data
 * @property {Customer} customer
 */

/**
  * Notification callback
  * @typedef {function} NotificationCallback
  * @param {Error} error
  * @param {UssdMenu|VoiceAction[]} data
  * @returns {void}
  */

/**
 * A function that reacts to events
 * @typedef {function} EventListener
 * @param {Notification} notification
 * @param {NotificationCallback} callback A response to the event. Required for voice and ussd events
 * @returns {void}
 */

/**
 * An string representing an event
 * @typedef {data|reminder|voiceCall|ussdSession|paymentStatus|messageStatus|receivedMessage|receivedPayment|walletPaymentStatus|messagingConsentStatus|messagingSessionStatus} Event
 */

/**
 *
 * @typedef {Object} MessagingState
 * @property {ChannelState[]} channelState
 * @property {MessageState[]} messages
 * @property {CustomerNumber[]} customerNumbers
 * @property {ChannelNumber[]} channelNumbers
 */

/**
 *
 * @typedef {Object} UssdState
 * @property {UssdSession[]} sessions
 * @property {CustomerNumber[]} customerNumbers
 * @property {ChannelNumber[]} channelNumbers
 */

/**
 *
 * @typedef {Object} VoiceState
 * @property {VoiceCall[]} calls
 * @property {CustomerNumber[]} customerNumbers
 * @property {ChannelNumber[]} channelNumbers
 */

/**
 *
 * @typedef {Object} PaymentState
 * @property {Object} wallets
 * @property {PaymentTransaction[]} transactionLog
 * @property {PaymentTransaction[]} pendingTransactions
 * @property {CustomerNumber[]} customerNumbers
 * @property {PaymentChannelNumber[]} channelNumbers
 */

/**
 *
 * @typedef {Object} NuclearState
 * @property {Tag[]} tags
 * @property {Object} metadata
 * @property {SecondaryId[]} secondaryIds
 * @property {Reminder[]} reminders
 */

/**
 * An object representing customer state
 * @typedef {Object} CustomerState
 * @property {string} customerId
 * @property {NuclearState} nuclearState
 * @property {MessagingState} messagingState
 * @property {UssdState} ussdState
 * @property {VoiceState} voiceState
 * @property {PaymentState} paymentState
 */

/**
 *
 * @typedef {Object} UpdateStatus
 * @property {string} customerId
 * @property {boolean} status
 * @property {string} description
 */

/**
 *
 * @typedef {Object} WorkStatus
 * @property {boolean} status
 * @property {string} description
 * @property {string} workId
 */

/**
 *
 * @typedef {Object} MessageStatus
 * @property {string} status
 * @property {string} description
 * @property {string} customerId
 * @property {string} messageId
 */

/**
 *
 * @typedef {Object} ConsentStatus
 * @property {string} status
 * @property {string} description
 * @property {string} customerId
 */

/**
 *
 * @typedef {string|*} LeasedAppData
 */

/**
 *
 * @typedef {Object} AuthToken
 * @property {string} token
 * @property {number} lifetime in seconds
 */

/**
 *
 * @typedef {Object} PaymentStatus
 * @property {number} status
 * @property {string} description
 * @property {string} transactionId
 * @property {string} debitCustomerId
 * @property {string} creditCustomerId
 */

/**
 *
 * @typedef {Object} VoiceStatus
 * @property {number} status
 * @property {string} description
 * @property {string} sessionId
 * @property {string} customerId
 */
