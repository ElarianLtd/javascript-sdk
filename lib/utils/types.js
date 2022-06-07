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
 * An object representing customer params
 * @typedef {Object} CustomerParams
 * @property {string} customerId
 * @property {string} number
 * @property {string} [provider=cellular]
 * @property {string} [partition]
 */

/**
 * An object representing a tag. Tags can be used to group customers based on some similarities. e.g. loan defaulters, etc.
 * @typedef {Object} Tag
 * @property {string} key
 * @property {string} value
 * @property {number} [expiresAt] timestamp in seconds. e.g. 1615361861
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
 * An object representing auth token
 * @typedef {Object} AuthToken
 * @property {string} token
 * @property {number} lifetime in seconds
 */

/**
 * An object representing a payment reply
 * @typedef {Object} InitiatePaymentReply
 * @property {number} status
 * @property {string} description
 * @property {string} transactionId
 * @property {string} debitCustomerId
 * @property {string} creditCustomerId
 */

/**
 * An object representing a paymennt replay reply
 * @typedef {Object} ReplayPaymentReply
 * @property {boolean} status
 * @property {string} description
 * @property {string} transactionId
 * @property {string} debitCustomerId
 * @property {string} creditCustomerId
 */

/**
 *
 * @typedef {Object} TagUpdateReply
 * @property {boolean} status
 * @property {string} description
 * @property {string} workId
 */

/**
 * An object representing a message
 * @typedef {Object} Message
 * @property {MessageBody} body
 * @property {string[]} [labels]
 * @property {string} [providerTag]
 * @property {string} [replyToken]
 * @property {ReplyPrompt} [replyPrompt]
 */

/**
 * An object representing a message body
 * @typedef {Object} MessageBody
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
 * An object representing a ussd menu
 * @typedef {Object} UssdMenu
 * @property {string} text
 * @property {boolean} isTerminal
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
 * An object representing a secondary id. Secondary Ids can be used to add some more unique identities to a customer. e.g. driver's license, etc.
 * @typedef {Object} SecondaryId
 * @property {string} key
 * @property {string} value
 */

/**
 * An object representing a customer number.
 * @typedef {Object} CustomerNumber
 * @property {string} number
 * @property {string} provider one of [cellular|telegram|facebook|email|app]
 * @property {string} [partition]
 */

/**
 * An object representing media
 * @typedef {Object} Media
 * @property {string} url
 * @property {string} type one of [image|video|audio|document|voice|sticker|contact]
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
 */

/**
 * An object representing cash
 * @typedef {Object} Cash
 * @property {number} amount
 * @property {string} currencyCode
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
 * @typedef {Object} RecordSession
 */

/**
 * An object representing a 'reject' voice action
 * @typedef {Object} Reject
 */

/**
 * An object representing a 'redirect' voice action
 * @typedef {Object} Redirect
 * @property {string} url
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
 * An object representing the notification data
 * @typedef {Object} Notification
 * @property {string} orgId
 * @property {string} appId
 * @property {string} customerId
 * @property {long} createdAt
 */

/**
  * Notification callback
  * @typedef {function} NotificationCallback
  * @param {MessageBody} [message = null]
  * @param {Object} [appData = null] An updated appData object. Setting this to null will delete app data for this customer.
  * @returns {void}
  */

/**
 * A function that reacts to events
 * @typedef {function} NotificationHandler
 * @param {Notification} notification
 * @param {Customer} customer
 * @param {Object} appData
 * @param {NotificationCallback} [callback] A response to the event. Required for voice and ussd events
 * @returns {void}
 */

/**
 * Reminder notification
 * @typedef {Notification} ReminderNotification
 * @property {Reminder} reminder
 * @property {Tag} tag
 * @property {string} workId
 */

/**
 * Voice call notification
 * @typedef {Notification} VoiceCallNotification
 * @property {string} messageId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channel
 * @property {VoiceCallInput} voice
 */

/**
 * Message status notification
 * @typedef {Notification} MessageStatusNotification
 * @property {string} messageId
 * @property {string} status one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, insufficient_credits, application_error]
 */

/**
 * USSD session notification
 * @typedef {Notification} UssdSessionNotification
 * @property {string} messageId
 * @property {string} sessionId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channel
 * @property {UssdInput} input
 */

/**
 * SMS notification
 * @typedef {Notification} ReceivedSmsNotification
 * @property {string} messageId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channel
 * @property {string} text
 */

/**
 * Whatsapp, telegram or email notification
 * @typedef {Notification} ReceivedMediaNotification
 * @property {string} messageId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channel
 * @property {string} sessionnId
 * @property {string} [inReplyTo]
 * @property {string} [text]
 * @property {Media} [media]
 * @property {Location} [location]
 * @property {Email} [email]
 */

/**
 * Payment status notification
 * @typedef {Notification} PaymentStatusNotification
 * @property {string} [purseId]
 * @property {string} transactionId
 * @property {string} status one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_counter_party, gateway_error, invalid_channel_number, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]
 */

/**
 * Payment status notification
 * @typedef {Notification} ReceivedPaymentNotification
 * @property {string} purseId
 * @property {string} transactionId
 * @property {CustomerNumber} customerNumber
 * @property {PaymentChannelNumber} channelNumber
 * @property {Cash} value
 * @property {string} status one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_counter_party, gateway_error, invalid_channel_number, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]
 */

/**
 * Wallet payment status notification
 * @typedef {Notification} WalletPaymentStatusNotification
 * @property {string} walletId
 * @property {string} transactionId
 * @property {string} status one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_counter_party, gateway_error, invalid_channel_number, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]
 */

/**
 * Customer activity notification
 * @typedef {Notification} CustomerActivityNotification
 * @property {string} sessionId
 * @property {CustomerNumber} customerNumber
 * @property {string} source
 * @property {Activity} activity
 */

/**
 * And object representing a customer activity
 * @typedef {Object} Activity
 * @property {string} key
 * @property {string} source
 * @property {string} sessionId
 * @property {Object} properties
 * @property {long} createdAt
 */

/**
 * Message reaction notification
 * @typedef {Notification} SentMessageReactionNotification
 * @property {string} messageId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channelNumber
 * @property {string} reaction one of [clicked, unsubscribed, complained]
 */

/**
 * Messaging session ended notification
 * @typedef {Notification} MessagingSessionEndedNotification
 * @property {string} sessionId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channelNumber
 * @property {number} duration in seconds
 * @property {string} reason one of [normal_clearing, inactivity, failure]
 */

/**
 * Messaging session initialized notification
 * @typedef {Notification} MessagingSessionInitializedNotification
 * @property {string} sessionId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channelNumber
 * @property {number} expiresAt timestamp in seconds
 */

/**
 * Messaging consent update notification
 * @typedef {Notification} MessagingConsentUpdateNotification
 * @property {string} sessionId
 * @property {CustomerNumber} customerNumber
 * @property {MessagingChannelNumber} channelNumber
 * @property {string} update one of [allow, block]
 * @property {string} status one of [queued, completed, invalid_channel_number, decommissioned_customer_id, application_error]
 */

/**
 * Replay recieved message
 * @typedef {Object} ReceivedMessage
 * @property {string} sessionId
 * @property {string} messageId
 * @property {number} receivedAt timestamp in seconds e.g 1615361861
 * @property {InboundMessageBody[]} parts
 * @property {string} inReplyTo
 * @property {Cash} cost
 * @property {string} provider one of [at, twilio, mailgun, facebook, telegram, mpesa]
 */

/**
 * Replay sent message
 * @typedef {Object} SentMessage
 * @property {string} sessionId
 * @property {string} messageId
 * @property {number} sentAt timestamp in seconds e.g 1615361861
 * @property {Message} message
 * @property {string} inReplyTo
 * @property {Cash} cost
 * @property {string} status one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, insufficient_credits, application_error, gateway_error]
 * @property {string} provider one of [at, twilio, mailgun, facebook, telegram, mpesa]
 */

/**
 * Replay message status update
 * @typedef {Object} MessageStatusUpdate
 * @property {string} messageId
 * @property {number} updatedAt timestamp in seconds e.g 1615361861
 * @property {Cash} cost
 * @property {string} status one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, insufficient_credits, application_error, gateway_error]
 */

/**
 * Replay message session update
 * @typedef {Object} MessageSessionUpdate
 * @property {string} sessionId
 * @property {number} startedAt timestamp in seconds e.g 1615361861
 * @property {number} duration in seconds e.g. 67
 * @property {Cash} cost
 * @property {string} reason one of [normal_clearing, inactivity, failure]
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
 * <li><b>voiceCall</b>: @see {@link VoiceCallNotification}</li>
 * <li><b>messageStatus</b>: @see {@link MessageStatusNotification}</li>
 * <li><b>ussdSession</b>: @see {@link UssdSessionNotification}</li>
 * <li><b>receivedSms</b>: @see {@link ReceivedSmsNotification}</li>
 * <li><b>receivedEmail</b>: @see {@link ReceivedMediaNotification}</li>
 * <li><b>receivedFbMessenger</b>: @see {@link ReceivedMediaNotification}</li>
 * <li><b>receivedTelegram</b>: @see {@link ReceivedMediaNotification}</li>
 * <li><b>receivedWhatsapp</b>: @see {@link ReceivedMediaNotification}</li>
 * <li><b>paymentStatus</b>: @see {@link PaymentStatusNotification}</li>
 * <li><b>receivedPayment</b>: @see {@link ReceivedPaymentNotification}</li>
 * <li><b>customerActivity</b>: @see {@link CustomerActivityNotification}</li>
 * <li><b>sentMessageReaction</b>: @see {@link SentMessageReactionNotification}</li>
 * <li><b>messagingSessionEnded</b>: @see {@link MessagingSessionEndedNotification}</li>
 * <li><b>messagingConsentUpdate</b>: @see {@link MessagingConsentUpdateNotification}</li>
 * <li><b>messagingSessionStarted</b>: @see {@link MessagingSessionInitializedNotification}</li>
 * <li><b>messagingSessionRenewed</b>: @see {@link MessagingSessionInitializedNotification}</li>
 * </ul>
 * </li>
 * <li>Sandbox Events
 * <ul>
 * <li><b>sendMessage</b>: @see {@link SendMessageSimulatorNotification}</li>
 * <li><b>makeVoiceCall</b>: @see {@link MakeVoiceCallSimulatorNotification}</li>
 * <li><b>sendCustomerPayment</b>: @see {@link CustomerPaymentSimulatorNotification}</li>
 * <li><b>sendChannelPayment</b>: @see {@link SendChannelPaymentSimulatorNotification}</li>
 * <li><b>checkoutPayment</b>: @see {@link CustomerPaymentSimulatorNotification}</li>
 * </ul>
 * </li>
 * </ul>
 * @typedef {string} Event
 */

/**
 * An object representing a message body
 * @typedef {Object} InboundMessageBody
 * @property {string} [text]
 * @property {Media} [media]
 * @property {Location} [location]
 * @property {Email} [email]
 * @property {UssdInput} [ussd]
 * @property {VoiceCallInput} [voice]
 */

/**
 * An object representing a ussd input
 * @typedef {Object} UssdInput
 * @property {string} text
 * @property {string} status one of [active, incomplete, completed, app_error]
 */

/**
 * An object representing a voice call input
 * @typedef {Object} VoiceCallInput
 * @property {string} direction one of [outbound, inbound]
 * @property {string} status one of [queued, answered, ringing, active, dialing, dial_completed, bridged, enqueued, dequeued, transferred, transfer_completed, completed, insufficient_credit, not_answered, invalid_phone_number, destination_not_supported, decommissioned_customerid, expired, invalid_channel_number, application_error, gateway_error]
 * @property {number} startedAt
 * @property {string} hangupCause one of [unallocated_number, user_busy, normal_clearing, no_user_response, no_answer, subscriber_absent, call_rejected, normal_unspecified, normal_temporary_failure, service_unavailable, recovery_on_timer_expire, originator_cancel, lose_race, user_not_registered]
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
 * An object representing a customer's payment source or destination
 * @typedef {Object} CustomerPayment
 * @property {CustomerNumber} customerNumber
 * @property {PaymentChannelNumber} channelNumber
 */

/**
 * An object representing a channel payment source or destination
 * @typedef {Object} ChannelPayment
 * @property {string} account
 * @property {string} source
 * @property {string} destination
 * @property {string} channel one of [cellular, airtime]
 * @property {NetworkCode} code The telco's network code.
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
 * @property {string} channel number provider. Must be one of ['cellular', 'airtime']
 */

/**
 * An object representing a messaging channel number
 * @typedef {Object} MessagingChannelNumber
 * @property {string} number
 * @property {string} channel one of [sms,telegram,whatsapp,email,messenger,voice]
 */

/**
 *
 * @typedef {Object} CustomerStateUpdateReply
 * @property {string} customerId
 * @property {boolean} status
 * @property {string} description
 */

/**
 *
 * @typedef {Object} ConsentUpdateReply
 * @property {string} status
 * @property {string} description
 * @property {string} customerId
 */

/**
 *
 * @typedef {Object} MessageReply
 * @property {string} status one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, application_error, gateway_error]
 * @property {string} description
 * @property {string} customerId
 * @property {string} sessionId
 * @property {string} messageId
 */

/**
 * An number representing a network code. Examples include:
 * <ul><li><code>62006</code>: AirtelTigo Ghana</li><li><code>62002</code>: Vodafone Ghana</li><li><code>62001</code>: MTN Ghana</li><li><code>62120</code>: Airtel Nigeria</li><li><code>62130</code>: MTN Nigeria</li><li><code>62150</code>: Glo Nigeria</li><li><code>62160</code>: Etisalat Nigeria</li><li><code>63510</code>: MTN Rwanda</li><li><code>63513</code>: Tigo Rwanda</li><li><code>63514</code>: Airtel Rwanda</li><li><code>63601</code>: EthioTelecom Ethiopia</li><li><code>63902</code>: Safaricom Kenya</li><li><code>63903</code>: Airtel Kenya</li><li><code>63907</code>: Orange Kenya</li><li><code>63999</code>: Equitel Kenya</li><li><code>64002</code>: Tigo Tanzania</li><li><code>64004</code>: Vodacom Tanzania</li><li><code>64005</code>: Airtel Tanzania</li><li><code>64101</code>: Airtel Uganda</li><li><code>64110</code>: MTN Uganda</li><li><code>64114</code>: Africell Uganda</li><li><code>64501</code>: Airtel Zambia</li><li><code>64502</code>: MTN Zambia</li><li><code>65001</code>: TNM Malawi</li><li><code>65010</code>: Airtel Malawi</li><li><code>65501</code>: Vodacom South Africa</li><li><code>65502</code>: Telkom South Africa</li><li><code>65507</code>: CellC South Africa</li><li><code>65510</code>: MTN South Africa</li><li><code>99999</code>: Athena (This is a custom networkCode that only applies when working in the sandbox environment).</li></ul>
 * @typedef {number} NetworkCode
 */
