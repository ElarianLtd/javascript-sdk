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
 * @property {cellular|telegram|facebook|email|web} provider
 * @property {string} [partition]
 */

/**
 * An object representing a messaging channel number
 * @typedef {Object} MessagingChannelNumber
 * @property {string} number
 * @property {sms|telegram|whatsapp|email|messenger|voice} channel
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
 * @property {string} [text]
 * @property {Template} [template]
 * @property {Media} [media]
 * @property {Location} [location]
 * @property {Email} [email]
 * @property {string} [url]
 * @property {UssdMenu} [ussd]
 * @property {VoiceAction[]} [voice]
 */

/**
 * An object representing a message body
 * @typedef {Object} SimulatorMessageBody
 * @property {string} [text]
 * @property {Media} [media]
 * @property {Location} [location]
 * @property {Email} [email]
 * @property {string} [ussd]
 * @property {VoiceCallInput} [voice]
 */

/**
 * An object representing a voice call input
 * @typedef {Object} VoiceCallInput
 * @property {string} direction outbound or inbound
 * @property {string} status
 * @property {number} startedAt
 * @property {string} hangupCause
 * @property {string} dtmfDigits
 * @property {string} recordingUrl
 * @property {VoiceCallDialInput} dialData
 * @property {VoiceCallQueueInput} queueData
 */

/**
 * An object representing a voice call dial input
 * @typedef {Object} VoiceCallDialInput
 * @property {string} destinationNumber
 * @property {number} startedAt
 * @property {number} duration
 */

/**
 * An object representing a voice call queue input
 * @typedef {Object} VoiceCallQueueInput
 * @property {string} destinationNumber
 * @property {number} enqueuedAt
 * @property {number} dequeuedAt
 * @property {string} dequeuedToNumber
 * @property {string} dequeuedToSessionId
 * @property {number} queueDuration
 */

/**
 * An object representing a message reply prompt
 * @typedef {Object} PromptMenuItem
 * @property {string} [text]
 * @property {Media} [media]
 */

/**
 * An object representing a text template
 * @typedef {Object} Template
 * @property {string} id
 * @property {Object} params
 */

/**
 * An object representing a message reply prompt
 * @typedef {Object} ReplyPrompt
 * @property {string} action text, phone_number, email, location, url
 * @property {PromptMenuItem[]} menu
 */

/**
 * An object representing a message body
 * @typedef {Object} Message
 * @property {Body} body
 * @property {string[]} [labels]
 * @property {string} [providerTag]
 * @property {string} [replyToken]
 * @property {ReplyPrompt} [replyPrompt]
 */

/**
 * An object representing a customer activity
 * @typedef {Object} Activity
 * @property {string} sessionId
 * @property {string} key
 * @property {Object} [properties]
 */

/**
 * An object representing client params
 * @typedef {Object} ElarianConfig
 * @property {string} apiKey
 * @property {string} appId
 * @property {string} orgId
 * @property {string} [authToken] received from an client that authenticated with the API key. @see Elarian.generateAuthToken()
 * @property {boolean} [isSimulator] Run this client as a simulator
 * @property {boolean} [allowNotifications] allow this non-simulator client to receive notifications or not
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
 * @property {boolean} [resumable]
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
 * @property {string} channel number provider. Must be one of ['cellular']
 */

/**
 * An object representing an activity channel number
 * @typedef {Object} ActivityChannelNumber
 * @property {string} number
 * @property {string} channel channel type. Must be one of ['web','modile']
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
 * @property {string} channel
 */

/**
 * An object representing a ussd channel
 * @typedef {Object} UssdChannelNumber
 * @property {string} number
 * @property {string} channel
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
 * @property {string} [customerId]
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
  * @param {Message|UssdMenu|VoiceAction[]} message
  * @param {Object} appData
  * @returns {void}
  */

/**
 * A function that reacts to events
 * @typedef {function} EventListener
 * @param {Notification} notification
 * @param {NotificationCallback} [callback] A response to the event. Required for voice and ussd events
 * @returns {void}
 */

/**
 * An string representing an event. Must be one of:
 * <ul>
 * <li>data</li>
 * <li>-- Connection Events--</li>
 * <li>error</li>
 * <li>closed</li>
 * <li>pending</li>
 * <li>connected</li>
 * <li>connecting</li>
 * <li>-- Simulator Events --</li>
 * <li>sendMessage</li>
 * <li>makeVoiceCall</li>
 * <li>sendCustomerPayment</li>
 * <li>sendChannelPayment</li>
 * <li>checkoutPayment<li>
 * <li>-- Customer Events --</li>
 * <li>reminder</li>
 * <li>voiceCall</li>
 * <li>messageStatus</li>
 * <li>ussdSession</li>
 * <li>receivedSms</li>
 * <li>receivedEmail</li>
 * <li>receivedMessenger</li>
 * <li>receivedTelegram</li>
 * <li>receivedWhatsapp</li>
 * <li>paymentStatus</li>
 * <li>receivedPayment</li>
 * <li>receivedMessage</li>
 * <li>customerActivity</li>
 * <li>walletPaymentStatus</li>
 * <li>sentMessageReaction</li>
 * <li>messagingSessionEnded</li>
 * <li>messagingConsentUpdate</li>
 * <li>messagingSessionStarted</li>
 * <li>messagingSessionRenewed</li>
 * </ul>
 * @typedef {string} Event
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
