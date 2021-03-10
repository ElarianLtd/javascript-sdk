/**
 * <p>A customer is your end-user, represented by a number (from a cellular, facebook or telegram)</p>
 */
declare class Customer {
    constructor(params: CustomerParams);
    /**
     * <p>Fetch the customer's current state.</p>
     */
    getState(): CustomerState;
    /**
     * <p>Merge otherCustomer's state into this customer's state and discard otherCustomer</p>
     */
    adoptState(otherCustomer: Customer): CustomerStateUpdateReply;
    /**
     * <p>Send a message to the customer from the specified channel number.</p>
     */
    sendMessage(channelNumber: MessagingChannelNumber, message: Message): MessageReply;
    /**
     * <p>Reply to a message</p>
     */
    replyToMessage(messageId: string, message: Message): MessageReply;
    /**
     * <p>Initiate a customer activity</p>
     */
    updateActivity(channelNumber: ActivityChannelNumber, activity: Activity): CustomerStateUpdateReply;
    /**
     * <p>Allow or block a customer from receiving messages from a channel</p>
     * @param action - <p>allow or block</p>
     */
    updateMessagingConsent(channelNumber: MessagingChannelNumber, action: string): ConsentUpdateReply;
    /**
     * <p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     * until next call to update app data.</p>
     */
    leaseAppData(): LeasedAppData;
    /**
     * <p>Sets some app data on the customer.
     * Values in the data object can either be strings or buffers,
     * depending on the set serializer. @see {@link ConnectionOptions}</p>
     */
    updateAppData(data: any): CustomerStateUpdateReply;
    /**
     * <p>Remove customer's app data</p>
     */
    deleteAppData(): CustomerStateUpdateReply;
    /**
     * <p>Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer</p>
     */
    updateMetadata(metadata: any): CustomerStateUpdateReply;
    /**
     * <p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>
     */
    deleteMetadata(keys: string[]): CustomerStateUpdateReply;
    /**
     * <p>Update a customer's secondary Ids</p>
     */
    updateSecondaryIds(secondaryIds: SecondaryId[]): CustomerStateUpdateReply;
    /**
     * <p>Remove some secondary Ids from a customer</p>
     */
    deleteSecondaryIds(secondaryIds: SecondaryId[]): CustomerStateUpdateReply;
    /**
     * <p>Update a customer's tag list.</p>
     */
    updateTags(tags: Tag[]): CustomerStateUpdateReply;
    /**
     * <p>Remove some tags from a customer</p>
     */
    deleteTags(tags: string[]): CustomerStateUpdateReply;
    /**
     * <p>Set a reminder to be triggered at the specified time for a particular customer</p>
     */
    addReminder(reminder: Reminder): CustomerStateUpdateReply;
    /**
     * <p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>
     */
    cancelReminder(key: string): CustomerStateUpdateReply;
    /**
     * <p>Fetch customer metadata</p>
     */
    getMetadata(): any;
}

/**
 * <p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>
 */
declare class Elarian {
    constructor(config: ElarianConfig);
    /**
     * <p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>
     */
    generateAuthToken(): AuthToken;
    /**
     * <p>Connecto to elarian servers</p>
     * @returns <p>this instance</p>
     */
    connect(): Elarian;
    /**
     * <p>Check if client is connected</p>
     */
    isConnected(): boolean;
    /**
     * <p>Disconnect from the elarian server</p>
     */
    disconnect(): void;
    /**
     * <p>Send message by tag</p>
     */
    sendMessageByTag(tag: Tag, channelNumber: MessagingChannelNumber, message: Message): TagUpdateReply;
    /**
     * <p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param handler - <p>A function that reacts to events</p>
     * @returns <p>this instance</p>
     */
    registerNotificationHandler(event: Event, handler: NotificationHandler): Elarian;
    /**
     * <p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param handler - <p>A function that reacts to events</p>
     * @returns <p>this instance</p>
     */
    on(event: Event, handler: NotificationHandler): Elarian;
    /**
     * <p>Initiate a payment transaction</p>
     */
    initiatePayment(debitParty: CustomerPayment | Wallet | Purse, creditParty: CustomerPayment | Wallet | Purse, value: Cash): InitiatePaymentReply;
    /**
     * <p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>
     */
    addCustomerReminderByTag(tag: Tag, reminder: Reminder): TagUpdateReply;
    /**
     * <p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>
     */
    cancelCustomerReminderByTag(tag: Tag, key: string): TagUpdateReply;
}

declare namespace Elarian {
    /**
     * <p>A customer object. @see {@link Customer}</p>
     */
    class Customer {
    }
}

/**
 * <p>Instantiate an elarian simulator client</p>
 */
declare class Simulator {
    constructor(config: ElarianConfig);
    /**
     * <p>Initiate a message request</p>
     */
    receiveMessage(phoneNumber: string, channelNumber: MessagingChannelNumber, sessionId: string, parts: SimulatorMessageBody[]): void;
    /**
     * <p>Initiate payment request</p>
     */
    receivePayment(transactionId: string, customerNumber: string, channelNumber: PaymentChannelNumber, value: Cash, status: string): void;
    /**
     * <p>Update payment status</p>
     */
    updatePaymentStatus(transactionId: string, status: string): void;
}

/**
 * <p>An object representing client params</p>
 * @property [authToken] - <p>received from an client that authenticated with the API key. @see {@link Elarian.generateAuthToken}</p>
 * @property [isSimulator] - <p>Run this client as a simulator</p>
 * @property [allowNotifications] - <p>allow this non-simulator client to receive notifications or not</p>
 * @property [options] - <p>setup connection options</p>
 */
declare type ElarianConfig = {
    apiKey: string;
    appId: string;
    orgId: string;
    authToken?: string;
    isSimulator?: boolean;
    allowNotifications?: boolean;
    options?: ConnectionOptions;
};

/**
 * <p>An object representing serializer</p>
 */
declare type Serializer = {
    type: text | binary;
    serialize: (...params: any[]) => any;
    deserialize: (...params: any[]) => any;
};

/**
 * <p>An object representing config options</p>
 * @property [serializer] - <p>used to (de)serialize your metadata</p>
 */
declare type ConnectionOptions = {
    lifetime?: number;
    keepAlive?: number;
    resumable?: boolean;
    notificationTimeout?: number;
    serializer?: Serializer;
};

/**
 * <p>An object representing customer params</p>
 */
declare type CustomerParams = {
    customerId: string;
    number: string;
    provider?: string;
    partition?: string;
};

/**
 * <p>An object representing a tag. Tags can be used to group customers based on some similarities. e.g. loan defaulters, etc.</p>
 * @property [expiresAt] - <p>timestamp in seconds. e.g. 1615361861</p>
 */
declare type Tag = {
    key: string;
    value: string;
    expiresAt?: number;
};

/**
 * <p>An object representing a reminder</p>
 * @property remindAt - <p>timestamp in seconds e.g 1615361861</p>
 * @property [interval] - <p>duration in seconds e.g. 60</p>
 */
declare type Reminder = {
    key: string;
    remindAt: number;
    payload: string;
    interval?: number;
};

/**
 * <p>An object representing auth token</p>
 * @property lifetime - <p>in seconds</p>
 */
declare type AuthToken = {
    token: string;
    lifetime: number;
};

/**
 * <p>An obkect representing a paymennt reply</p>
 */
declare type InitiatePaymentReply = {
    status: number;
    description: string;
    transactionId: string;
    debitCustomerId: string;
    creditCustomerId: string;
};

declare type TagUpdateReply = {
    status: boolean;
    description: string;
    workId: string;
};

/**
 * <p>An object representing a message</p>
 */
declare type Message = {
    body: MessageBody;
    labels?: string[];
    providerTag?: string;
    replyToken?: string;
    replyPrompt?: ReplyPrompt;
};

/**
 * <p>An object representing a message body</p>
 */
declare type MessageBody = {
    text?: string;
    template?: Template;
    media?: Media;
    location?: Location;
    email?: Email;
    url?: string;
    ussd?: UssdMenu;
    voice?: VoiceAction[];
};

/**
 * <p>An object representing a ussd menu</p>
 */
declare type UssdMenu = {
    text: string;
    isTerminal: boolean;
};

/**
 * <p>An object representing a message reply prompt</p>
 */
declare type PromptMenuItem = {
    text?: string;
    media?: Media;
};

/**
 * <p>An object representing a text template</p>
 */
declare type Template = {
    id: string;
    params: any;
};

/**
 * <p>An object representing a message reply prompt</p>
 * @property action - <p>text, phone_number, email, location, url</p>
 */
declare type ReplyPrompt = {
    action: string;
    menu: PromptMenuItem[];
};

/**
 * <p>An object representing a secondary id. Secondary Ids can be used to add some more unique identities to a customer. e.g. driver's license, etc.</p>
 */
declare type SecondaryId = {
    key: string;
    value: string;
};

/**
 * <p>An object representing a customer number.</p>
 * @property provider - <p>one of [cellular|telegram|facebook|email|web]</p>
 */
declare type CustomerNumber = {
    number: string;
    provider: string;
    partition?: string;
};

/**
 * <p>An object representing media</p>
 * @property type - <p>one of [image|video|audio|document|voice|sticker|contact]</p>
 */
declare type Media = {
    url: string;
    type: string;
};

/**
 * <p>An object representing location</p>
 */
declare type Location = {
    latitude: double;
    longitude: double;
    label: string;
    address: string;
};

/**
 * <p>An object representing email</p>
 */
declare type Email = {
    subject: string;
    bodyPlain: string;
    bodyHtml: string;
    ccList: string[];
    bccList: string[];
    attachments: string[];
};

/**
 * <p>An object representing cash</p>
 */
declare type Cash = {
    amount: number;
    currencyCode: string;
};

/**
 * <p>An object representing a 'say' voice action</p>
 */
declare type Say = {
    text: string;
    playBeep?: boolean;
    voice?: male | female;
};

/**
 * <p>An object representing a 'play' voice action</p>
 */
declare type Play = {
    url: string;
};

/**
 * <p>An object representing a 'getDigits' voice action</p>
 */
declare type GetDigits = {
    timeout: number;
    finishOnKey: string;
    numDigits: number;
    say?: Say;
    play?: Play;
};

/**
 * <p>An object representing a 'dial' voice action</p>
 */
declare type Dial = {
    customerNumbers: CustomerNumber[];
    record: boolean;
    sequential: boolean;
    ringbackTone: string;
    callerId: string;
    maxDuration: number;
};

/**
 * <p>An object representing a 'recordSession' voice action</p>
 */
declare type RecordSession = boolean;

/**
 * <p>An object representing a 'reject' voice action</p>
 */
declare type Reject = boolean;

/**
 * <p>An object representing a 'redirect' voice action</p>
 */
declare type Redirect = any;

/**
 * <p>An object representing a 'enqueue' voice action</p>
 */
declare type Enqueue = any;

/**
 * <p>An object representing a 'dequeue' voice action</p>
 */
declare type Dequeue = any;

/**
 * <p>An object representing a 'getRecording' voice action</p>
 */
declare type GetRecording = {
    playBeep: boolean;
    trimSilence: boolean;
    timeout: number;
    maxLength: number;
    finishOnKey: string;
    say?: Say;
    play?: Play;
};

/**
 * <p>An object representing a voice action. Note: Only one action is required in the object.</p>
 */
declare type VoiceAction = {
    say: Say;
    play: Play;
    dial: Dial;
    recordSession: RecordSession;
    getRecording: GetRecording;
    enqueue: Enqueue;
    dequeue: Dequeue;
    reject: Reject;
    redirect: Redirect;
};

/**
 * <p>An object representing the notification data</p>
 */
declare type Notification = {
    orgId: string;
    appId: string;
    customerId: string;
    createdAt: long;
    appData: any;
};

/**
 * <p>Notification callback</p>
 */
declare type NotificationCallback = (message?: MessageBody, appData?: any) => void;

/**
 * <p>A function that reacts to events</p>
 * @param [callback] - <p>A response to the event. Required for voice and ussd events</p>
 */
declare type NotificationHandler = (notification: Notification, customer: Customer, callback?: NotificationCallback) => void;

/**
 * <p>Reminder notification</p>
 */
declare type ReminderNotification = Notification;

/**
 * <p>Voice call notification</p>
 */
declare type VoiceCallNotification = Notification;

/**
 * <p>Message status notification</p>
 * @property status - <p>one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, application_error]</p>
 */
declare type MessageStatusNotification = Notification;

/**
 * <p>USSD session notification</p>
 */
declare type UssdSessionNotification = Notification;

/**
 * <p>SMS notification</p>
 */
declare type ReceivedSmsNotification = Notification;

/**
 * <p>Whatsapp, telegram or email notification</p>
 */
declare type ReceivedMediaNotification = Notification;

/**
 * <p>Payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
declare type PaymentStatusNotification = Notification;

/**
 * <p>Payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
declare type ReceivedPaymentNotification = Notification;

/**
 * <p>Wallet payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
declare type WalletPaymentStatusNotification = Notification;

/**
 * <p>Custoer activity notification</p>
 */
declare type CustomerActivityNotification = Notification;

/**
 * <p>Message reaction notification</p>
 * @property reaction - <p>one of [clicked, unsubscribed, complained]</p>
 */
declare type SentMessageReactionNotification = Notification;

/**
 * <p>Messaging session ended notification</p>
 * @property duration - <p>in seconds</p>
 * @property reason - <p>one of [normal_clearing, inactivity, failure]</p>
 */
declare type MessagingSessionEndedNotification = Notification;

/**
 * <p>Messaging session initialized notification</p>
 * @property expiresAt - <p>timestamp in seconds</p>
 */
declare type MessagingSessionInitializedNotification = Notification;

/**
 * <p>Messaging consent update notification</p>
 * @property update - <p>one of [allow, block]</p>
 * @property status - <p>one of [queued, completed, invalid_channel_number, decommissioned_customer_id, application_error]</p>
 */
declare type MessagingConsentUpdateNotification = Notification;

/**
 * <p>An string representing an event. Must be one of:</p>
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
 * <li><b>walletPaymentStatus</b>: @see {@link WalletPaymentStatusNotification}</li>
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
 */
declare type Event = string;

/**
 * <p>An object representing a message body</p>
 */
declare type SimulatorMessageBody = {
    text?: string;
    media?: Media;
    location?: Location;
    email?: Email;
    ussd?: string;
    voice?: VoiceCallInput;
};

/**
 * <p>An object representing a voice call input</p>
 * @property direction - <p>one of [outbound, inbound]</p>
 * @property status - <p>one of [queued, answered, ringing, active, dialing, dial_completed, bridged, enqueued, dequeued, transferred, transfer_completed, completed, insufficient_credit, not_answered, invalid_phone_number, destination_not_supported, decommissioned_customerid, expired, invalid_channel_number, application_error]</p>
 * @property hangupCause - <p>one of [unallocated_number, user_busy, normal_clearing, no_user_response, no_answer, subscriber_absent, call_rejected, normal_unspecified, normal_temporary_failure, service_unavailable, recovery_on_timer_expire, originator_cancel, lose_race, user_not_registered]</p>
 */
declare type VoiceCallInput = {
    direction: string;
    status: string;
    startedAt: number;
    hangupCause: string;
    dtmfDigits: string;
    recordingUrl: string;
    dialData: VoiceCallDialInput;
    queueData: VoiceCallQueueInput;
};

/**
 * <p>An object representing a voice call dial input</p>
 */
declare type VoiceCallDialInput = {
    destinationNumber: string;
    startedAt: number;
    duration: number;
};

/**
 * <p>An object representing a voice call queue input</p>
 */
declare type VoiceCallQueueInput = {
    destinationNumber: string;
    enqueuedAt: number;
    dequeuedAt: number;
    dequeuedToNumber: string;
    dequeuedToSessionId: string;
    queueDuration: number;
};

/**
 * <p>An object representing a customer's payment source or destination</p>
 */
declare type CustomerPayment = {
    customerNumber: CustomerNumber;
    channelNumber: PaymentChannelNumber;
};

/**
 * <p>An object representing wallet</p>
 */
declare type Wallet = {
    customerId: string;
    walletId: string;
};

/**
 * <p>An object representing purse</p>
 */
declare type Purse = {
    purseId: string;
};

/**
 * <p>An object representing a payment channel</p>
 * @property channel - <p>number provider. Must be one of ['cellular']</p>
 */
declare type PaymentChannelNumber = {
    number: string;
    channel: string;
};

/**
 * <p>An object representing a messaging channel number</p>
 * @property channel - <p>one of [sms,telegram,whatsapp,email,messenger,voice]</p>
 */
declare type MessagingChannelNumber = {
    number: string;
    channel: string;
};

/**
 * <p>An object representing an activity channel number</p>
 * @property channel - <p>channel type. Must be one of ['web','modile']</p>
 */
declare type ActivityChannelNumber = {
    number: string;
    channel: string;
};

declare type CustomerStateUpdateReply = {
    customerId: string;
    status: boolean;
    description: string;
};

declare type ConsentUpdateReply = {
    status: string;
    description: string;
    customerId: string;
};

/**
 * @property status - <p>one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, application_error]</p>
 */
declare type MessageReply = {
    status: string;
    description: string;
    customerId: string;
    sessionId: string;
    messageId: string;
};

