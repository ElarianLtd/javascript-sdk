/**
 * <p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>
 */
 export class Client {
    constructor(config: ClientConfig);
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
     * <p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param handler - <p>A function that reacts to events</p>
     * @returns <p>this instance</p>
     */
    registerNotificationHandler(event: Event, handler: NotificationHandler): Client;
    /**
     * <p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param handler - <p>A function that reacts to events</p>
     * @returns <p>this instance</p>
     */
    on(event: Event, handler: NotificationHandler): Client;
}

/**
 * <p>A customer is your end-user, represented by a number (from a cellular, facebook or telegram)</p>
 */
export class Customer {
    customerNumber: CustomerNumber;

    constructor(params: CustomerParams);
    /**
     * <p>Fetch the customer's current state.</p>
     */
    getState(): Promise<CustomerState>;
    /**
     * <p>Merge otherCustomer's state into this customer's state and discard otherCustomer</p>
     */
    adoptState(otherCustomer: Customer): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Send a message to the customer from the specified channel number.</p>
     */
    sendMessage(channelNumber: MessagingChannelNumber, message: Message): Promise<MessageReply>;
    /**
     * <p>Reply to a message</p>
     */
    replyToMessage(messageId: string, message: Message): Promise<MessageReply>;
    /**
     * <p>Initiate a customer activity</p>
     */
    updateActivity(channelNumber: ActivityChannelNumber, activity: Activity): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Allow or block a customer from receiving messages from a channel</p>
     * @param action - <p>allow or block</p>
     */
    updateMessagingConsent(channelNumber: MessagingChannelNumber, action: string): Promise<ConsentUpdateReply>;
    /**
     * <p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     * until next call to update app data.</p>
     */
    leaseAppData(): Promise<Record<string, unknown>>;
    /**
     * <p>Sets some app data on the customer.
     * Values in the data object can either be strings or buffers,
     * depending on the set serializer. @see {@link ConnectionOptions}</p>
     */
    updateAppData(data: any): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Remove customer's app data</p>
     */
    deleteAppData(): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Fetch customer metadata</p>
     */
    getMetadata(): Promise<Record<string, unknown>>;
    /**
     * <p>Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer</p>
     */
    updateMetadata(metadata: any): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>
     */
    deleteMetadata(keys: string[]): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Fetch customer secondaryIds</p>
     */
    getSecondaryIds(): Promise<SecondaryId[]>;
    /**
     * <p>Update a customer's secondary Ids</p>
     */
    updateSecondaryIds(secondaryIds: SecondaryId[]): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Remove some secondary Ids from a customer</p>
     */
    deleteSecondaryIds(secondaryIds: SecondaryId[]): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Fetch customer tags</p>
     */
    getTags(): Promise<Tag[]>;
    /**
     * <p>Update a customer's tag list.</p>
     */
    updateTags(tags: Tag[]): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Remove some tags from a customer</p>
     */
    deleteTags(tags: string[]): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Set a reminder to be triggered at the specified time for a particular customer</p>
     */
    addReminder(reminder: Reminder): Promise<CustomerStateUpdateReply>;
    /**
     * <p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>
     */
    cancelReminder(key: string): Promise<CustomerStateUpdateReply>;
}

/**
 * <p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>
 */
export class Elarian extends Client {
    Customer = Customer;

    constructor(config: ClientConfig);
    /**
     * <p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>
     */
    generateAuthToken(): Promise<AuthToken>;
    /**
     * <p>Send message by tag</p>
     */
    sendMessageByTag(tag: Tag, channelNumber: MessagingChannelNumber, message: Message): Promise<TagUpdateReply>;
    /**
     * <p>Initiate a payment transaction</p>
     */
    initiatePayment(debitParty: CustomerPayment | Wallet | Purse | ChannelPayment, creditParty: CustomerPayment | Wallet | Purse | ChannelPayment, value: Cash): Promise<InitiatePaymentReply>;
    /**
     * <p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>
     */
    addCustomerReminderByTag(tag: Tag, reminder: Reminder): Promise<TagUpdateReply>;
    /**
     * <p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>
     */
    cancelCustomerReminderByTag(tag: Tag, key: string): Promise<TagUpdateReply>;
}

/**
 * <p>Instantiate an elarian simulator client</p>
 */
export class Simulator extends Client {
    constructor(config: ClientConfig);
    /**
     * <p>Initiate a message request</p>
     */
    receiveMessage(phoneNumber: string, channelNumber: MessagingChannelNumber, sessionId: string, parts: SimulatorMessageBody[], cost: Cash): void;
    /**
     * <p>Initiate payment request</p>
     * @param status - <p>one of [queued, pending_confirmation, pending_validation, validated,
     * invalid_request, not_supported, insufficient_funds, application_error, not_allowed,
     * duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success,
     * pass_through, failed, throttled, expired, rejected, reversed]</p>
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
type ClientConfig = {
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
type Serializer = {
    type: string | number;
    serialize: (...params: any[]) => any;
    deserialize: (...params: any[]) => any;
};

/**
 * <p>An object representing config options</p>
 * @property [serializer] - <p>used to (de)serialize your metadata</p>
 */
type ConnectionOptions = {
    lifetime?: number;
    keepAlive?: number;
    resumable?: boolean;
    notificationTimeout?: number;
    serializer?: Serializer;
};

/**
 * <p>An object representing customer params</p>
 */
type CustomerParams = {
    customerId?: string;
    number: string;
    provider?: string;
    partition?: string;
};

/**
 * <p>An object representing a tag. Tags can be used to group customers based on some similarities. e.g. loan defaulters, etc.</p>
 * @property [expiresAt] - <p>timestamp in seconds. e.g. 1615361861</p>
 */
type Tag = {
    key: string;
    value: string;
    expiresAt?: number;
};

/**
 * <p>An object representing a reminder</p>
 * @property remindAt - <p>timestamp in seconds e.g 1615361861</p>
 * @property [interval] - <p>duration in seconds e.g. 60</p>
 */
type Reminder = {
    key: string;
    remindAt: number;
    payload: string;
    interval?: number;
};

/**
 * <p>An object representing auth token</p>
 * @property lifetime - <p>in seconds</p>
 */
type AuthToken = {
    token: string;
    lifetime: number;
};

/**
 * <p>An obkect representing a paymennt reply</p>
 */
type InitiatePaymentReply = {
    status: number;
    description: string;
    transactionId: string;
    debitCustomerId: string;
    creditCustomerId: string;
};

type TagUpdateReply = {
    status: boolean;
    description: string;
    workId: string;
};

/**
 * <p>An object representing a message</p>
 */
type Message = {
    body: MessageBody;
    labels?: string[];
    providerTag?: string;
    replyToken?: string;
    replyPrompt?: ReplyPrompt;
};

/**
 * <p>An object representing a message body</p>
 */
type MessageBody = {
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
type UssdMenu = {
    text: string;
    isTerminal: boolean;
};

/**
 * <p>An object representing a message reply prompt</p>
 */
type PromptMenuItem = {
    text?: string;
    media?: Media;
};

/**
 * <p>An object representing a text template</p>
 */
type Template = {
    id: string;
    params: any;
};

/**
 * <p>An object representing a message reply prompt</p>
 * @property action - <p>text, phone_number, email, location, url</p>
 */
type ReplyPrompt = {
    action: string;
    menu: PromptMenuItem[];
};

/**
 * <p>An object representing a secondary id. Secondary Ids can be used to add some more unique identities to a customer. e.g. driver's license, etc.</p>
 */
type SecondaryId = {
    key: string;
    value: string;
};

/**
 * <p>An object representing a customers state.</p>
 */
type CustomerState = {};

/**
 * <p>An object representing a customer number.</p>
 * @property provider - <p>one of [cellular|telegram|facebook|email|web]</p>
 */
type CustomerNumber = {
    number: string;
    provider: string;
    partition?: string;
};

/**
 * <p>An object representing media</p>
 * @property type - <p>one of [image|video|audio|document|voice|sticker|contact]</p>
 */
type Media = {
    url: string;
    type: string;
};

/**
 * <p>An object representing location</p>
 */
type Location = {
    latitude: number;
    longitude: number;
    label: string;
    address: string;
};

/**
 * <p>An object representing email</p>
 */
type Email = {
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
type Cash = {
    amount: number;
    currencyCode: string;
};

/**
 * <p>An object representing a 'say' voice action</p>
 */
type Say = {
    text: string;
    playBeep?: boolean;
    voice?: 'male' | 'female';
};

/**
 * <p>An object representing a 'play' voice action</p>
 */
type Play = {
    url: string;
};

/**
 * <p>An object representing a 'getDigits' voice action</p>
 */
type GetDigits = {
    timeout: number;
    finishOnKey: string;
    numDigits: number;
    say?: Say;
    play?: Play;
};

/**
 * <p>An object representing a 'dial' voice action</p>
 */
type Dial = {
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
type RecordSession = any;

/**
 * <p>An object representing a 'reject' voice action</p>
 */
type Reject = any;

/**
 * <p>An object representing a 'redirect' voice action</p>
 */
type Redirect = {
    url: string;
};

/**
 * <p>An object representing a 'enqueue' voice action</p>
 */
type Enqueue = any;

/**
 * <p>An object representing a 'dequeue' voice action</p>
 */
type Dequeue = any;

/**
 * <p>An object representing a 'getRecording' voice action</p>
 */
type GetRecording = {
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
type VoiceAction = {
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
type Notification = {
    orgId: string;
    appId: string;
    customerId: string;
    createdAt: number;
};

/**
 * <p>Notification callback</p>
 */
type NotificationCallback = (message?: MessageBody, appData?: Record<string, unknown>) => void;

/**
 * <p>A function that reacts to events</p>
 * @param [callback] - <p>A response to the event. Required for voice and ussd events</p>
 */
type NotificationHandler = (notification: Notification, customer: Customer, callback?: NotificationCallback) => void;

/**
 * <p>Reminder notification</p>
 */
type ReminderNotification = Notification & { reminder: Reminder };

/**
 * <p>Voice call notification</p>
 */
type VoiceCallNotification = Notification;

/**
 * <p>Message status notification</p>
 * @property status - <p>one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, insufficient_credits, application_error]</p>
 */
type MessageStatusNotification = Notification;

/**
 * <p>USSD session notification</p>
 */
type UssdSessionNotification = Notification;

/**
 * <p>SMS notification</p>
 */
type ReceivedSmsNotification = Notification;

/**
 * <p>Whatsapp, telegram or email notification</p>
 */
type ReceivedMediaNotification = Notification;

/**
 * <p>Payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
type PaymentStatusNotification = Notification;

/**
 * <p>Payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
type ReceivedPaymentNotification = Notification;

/**
 * <p>Wallet payment status notification</p>
 * @property status - <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p>
 */
type WalletPaymentStatusNotification = Notification;

/**
 * <p>Customer activity notification</p>
 */
type CustomerActivityNotification = Notification;

/**
 * <p>And object representing a customer activity</p>
 */
type Activity = {
    key: string;
    sessionId: string;
    properties: any;
    createdAt: number;
};

/**
 * <p>Message reaction notification</p>
 * @property reaction - <p>one of [clicked, unsubscribed, complained]</p>
 */
type SentMessageReactionNotification = Notification;

/**
 * <p>Messaging session ended notification</p>
 * @property duration - <p>in seconds</p>
 * @property reason - <p>one of [normal_clearing, inactivity, failure]</p>
 */
type MessagingSessionEndedNotification = Notification;

/**
 * <p>Messaging session initialized notification</p>
 * @property expiresAt - <p>timestamp in seconds</p>
 */
type MessagingSessionInitializedNotification = Notification;

/**
 * <p>Messaging consent update notification</p>
 * @property update - <p>one of [allow, block]</p>
 * @property status - <p>one of [queued, completed, invalid_channel_number, decommissioned_customer_id, application_error]</p>
 */
type MessagingConsentUpdateNotification = Notification;

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
type Event = string;

/**
 * <p>An object representing a message body</p>
 */
type SimulatorMessageBody = {
    text?: string;
    media?: Media;
    location?: Location;
    email?: Email;
    ussd?: UssdInput;
    voice?: VoiceCallInput;
};

/**
 * <p>An object representing a ussd input</p>
 * @property status - <p>one of [active, incomplete, completed, app_error]</p>
 */
type UssdInput = {
    text: string;
    status: string;
};

/**
 * <p>An object representing a voice call input</p>
 * @property direction - <p>one of [outbound, inbound]</p>
 * @property status - <p>one of [queued, answered, ringing, active, dialing, dial_completed, bridged, enqueued, dequeued, transferred, transfer_completed, completed, insufficient_credit, not_answered, invalid_phone_number, destination_not_supported, decommissioned_customerid, expired, invalid_channel_number, application_error]</p>
 * @property hangupCause - <p>one of [unallocated_number, user_busy, normal_clearing, no_user_response, no_answer, subscriber_absent, call_rejected, normal_unspecified, normal_temporary_failure, service_unavailable, recovery_on_timer_expire, originator_cancel, lose_race, user_not_registered]</p>
 */
type VoiceCallInput = {
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
type VoiceCallDialInput = {
    destinationNumber: string;
    startedAt: number;
    duration: number;
};

/**
 * <p>An object representing a voice call queue input</p>
 */
type VoiceCallQueueInput = {
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
type CustomerPayment = {
    customerNumber: CustomerNumber;
    channelNumber: PaymentChannelNumber;
};

/**
 * <p>An object representing a channel payment source or destination</p>
 * @property channelCode - <p>The telco's network code.</p>
 */
type ChannelPayment = {
    account: string;
    channelCode: NetworkCode;
    channelNumber: PaymentChannelNumber;
};

/**
 * <p>An object representing wallet</p>
 */
type Wallet = {
    customerId: string;
    walletId: string;
};

/**
 * <p>An object representing purse</p>
 */
type Purse = {
    purseId: string;
};

/**
 * <p>An object representing a payment channel</p>
 * @property channel - <p>number provider. Must be one of ['cellular']</p>
 */
type PaymentChannelNumber = {
    number: string;
    channel: 'cellular';
};

/**
 * <p>An object representing a messaging channel number</p>
 * @property channel - <p>one of [sms,telegram,whatsapp,email,messenger,voice]</p>
 */
type MessagingChannelNumber = {
    number: string;
    channel: 'sms' | 'telegram' | 'whatsapp' | 'email' | 'messenger' | 'voice';
};

/**
 * <p>An object representing an activity channel number</p>
 * @property channel - <p>channel type. Must be one of ['web','mobile']</p>
 */
type ActivityChannelNumber = {
    number: string;
    channel: 'web' | 'mobile';
};

type CustomerStateUpdateReply = {
    customerId: string;
    status: boolean;
    description: string;
};

type ConsentUpdateReply = {
    status: string;
    description: string;
    customerId: string;
};

/**
 * @property status - <p>one of [queued, sent, delivered, read, received, session_initiated, failed, no_consent, no_capability, expired, no_session_in_progress, other_session_in_progress, invalid_reply_token, invalid_channel_number, not_supported, invalid_reply_to_message_id, invalid_customer_id, duplicate_request , tag_not_found, customer_number_not_found, decommissioned_customerid, rejected, invalid_request, application_error]</p>
 */
type MessageReply = {
    status: string;
    description: string;
    customerId: string;
    sessionId: string;
    messageId: string;
};

/**
 * <p>An number representing a network code. Examples include:</p>
 * <ul><li><code>62006</code>: AirtelTigo Ghana</li><li><code>62002</code>: Vodafone Ghana</li><li><code>62001</code>: MTN Ghana</li><li><code>62120</code>: Airtel Nigeria</li><li><code>62130</code>: MTN Nigeria</li><li><code>62150</code>: Glo Nigeria</li><li><code>62160</code>: Etisalat Nigeria</li><li><code>63510</code>: MTN Rwanda</li><li><code>63513</code>: Tigo Rwanda</li><li><code>63514</code>: Airtel Rwanda</li><li><code>63601</code>: EthioTelecom Ethiopia</li><li><code>63902</code>: Safaricom Kenya</li><li><code>63903</code>: Airtel Kenya</li><li><code>63907</code>: Orange Kenya</li><li><code>63999</code>: Equitel Kenya</li><li><code>64002</code>: Tigo Tanzania</li><li><code>64004</code>: Vodacom Tanzania</li><li><code>64005</code>: Airtel Tanzania</li><li><code>64101</code>: Airtel Uganda</li><li><code>64110</code>: MTN Uganda</li><li><code>64114</code>: Africell Uganda</li><li><code>64501</code>: Airtel Zambia</li><li><code>64502</code>: MTN Zambia</li><li><code>65001</code>: TNM Malawi</li><li><code>65010</code>: Airtel Malawi</li><li><code>65501</code>: Vodacom South Africa</li><li><code>65502</code>: Telkom South Africa</li><li><code>65507</code>: CellC South Africa</li><li><code>65510</code>: MTN South Africa</li><li><code>99999</code>: Athena (This is a custom networkCode that only applies when working in the sandbox environment).</li></ul>
 */
type NetworkCode = number;
