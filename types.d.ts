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
     * <p>Connect to the elarian server</p>
     */
    connect(): void;
    /**
     * <p>Check if client is connected</p>
     */
    isConnected(): void;
    /**
     * <p>Disconnect from the elarian server</p>
     */
    disconnect(): void;
    /**
     * <p>Instantiate and connect an elarian client</p>
     */
    static newInstance(config: ElarianConfig): void;
    /**
     * <p>Send a message</p>
     */
    sendMessage(customer: Customer, channelNumber: MessagingChannelNumber, message: Message): MessageStatus;
    /**
     * <p>Send message by tag</p>
     */
    sendMessageByTag(tag: Tag, channelNumber: MessagingChannelNumber, body: Message): WorkStatus;
    /**
     * <p>Reply to a received message</p>
     */
    replyToMessage(customer: Customer, replyToMessageId: string, body: Message): MessageStatus;
    /**
     * <p>Allow or block a customer from receiving messages from a channel</p>
     * @param action - <p>allow or block</p>
     */
    updateMessagingConsent(customer: Customer, channelNumber: MessagingChannelNumber, action: string): ConsentStatus;
    /**
     * <p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param listener - <p>A function that reacts to events</p>
     */
    registerListerner(event: Event, listener: EventListener): void;
    /**
     * <p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>
     * @param event - <p>The event whose listener to register</p>
     * @param listener - <p>A function that reacts to events</p>
     */
    on(event: Event, listener: EventListener): void;
    /**
     * <p>Remove listener registered for event. Can also be called with <code>client.off(event)</code></p>
     * @param event - <p>The event whose listener to remove</p>
     */
    removeListener(event: Event): void;
    /**
     * <p>Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code></p>
     * @param event - <p>The event whose listener to remove</p>
     */
    off(event: Event): void;
    /**
     * <p>Initiate a payment transaction</p>
     */
    initiatePayment(debitParty: CustomerPayment | Wallet | Purse, creditParty: CustomerPayment | Wallet | Purse, value: Cash): PaymentStatus;
    /**
     * <p>Fetch the customer's current state.</p>
     */
    getCustomerState(customer: Customer): CustomerState;
    /**
     * <p>Adopt another customer's state</p>
     */
    adoptCustomerState(customer: Customer, otherCustomer: Customer): UpdateStatus;
    /**
     * <p>Update a customer's tag list</p>
     */
    updateCustomerTag(customer: Customer, tags: Tag[]): UpdateStatus;
    /**
     * <p>Remove tags from a customer</p>
     */
    deleteCustomerTag(customer: Customer, tags: string[]): UpdateStatus;
    /**
     * <p>Update a customer's secondary Ids</p>
     */
    updateCustomerSecondaryId(customer: Customer, secondaryIds: SecondaryId[]): UpdateStatus;
    /**
     * <p>Delete a customer's secondary Ids</p>
     */
    deleteCustomerSecondaryId(customer: Customer, secondaryIds: SecondaryId[]): UpdateStatus;
    /**
     * <p>Set a reminder to be triggered at the specified time for a particular customer</p>
     */
    addCustomerReminder(customer: Customer, reminder: Reminder): UpdateStatus;
    /**
     * <p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>
     */
    cancelCustomerReminder(customer: Customer, key: string): UpdateStatus;
    /**
     * <p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>
     */
    addCustomerReminderByTag(tag: Tag, reminder: Reminder): WorkStatus;
    /**
     * <p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>
     */
    cancelCustomerReminderByTag(tag: Tag, key: string): WorkStatus;
    /**
     * <p>Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on your serializer. @see {@link Client}</p>
     */
    updateCustomerMetadata(customer: Customer, metadata: any): UpdateStatus;
    /**
     * <p>Remove some metadata from a customer.</p>
     */
    deleteCustomerMetadata(customer: Customer, keys: string[]): UpdateStatus;
    /**
     * <p>Sets some app data on the customer.
     * Value of the data object can either be a string or a buffer,
     * depending on your serializer. @see {@link Client}</p>
     */
    updateCustomerAppData(customer: Customer, data: any): UpdateStatus;
    /**
     * <p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     * until next call to update app data.</p>
     */
    leaseCustomerAppData(customer: Customer): LeasedAppData;
    /**
     * <p>Remove customer's app data.</p>
     */
    deleteCustomerAppData(customer: Customer): UpdateStatus;
    /**
     * <p>Initiate a customer activity</p>
     */
    updateCustomerActivity(customerNumber: CustomerNumber, channelNumber: ActivityChannelNumber, activity: Activity): UpdateStatus;
    /**
     * <p>Initiate a voice call to customer from channelNumber</p>
     */
    makeVoiceCall(customer: Customer, channelNumber: string, actions: VoiceAction[]): VoiceStatus;
}

declare namespace Elarian {
    /**
     * <p>A customer object. @see {@link Customer}</p>
     */
    class Customer {
    }
}

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
    adoptState(otherCustomer: Customer): UpdateStatus;
    /**
     * <p>Update a customer's tag list.</p>
     */
    updateTag(tags: Tag[]): UpdateStatus;
    /**
     * <p>Remove some tags from a customer</p>
     */
    deleteTag(tags: Tag[]): UpdateStatus;
    /**
     * <p>Update a customer's secondary Ids</p>
     */
    updateSecondaryId(secondaryIds: SecondaryId[]): UpdateStatus;
    /**
     * <p>Remove some secondary Ids from a customer</p>
     */
    deleteSecondaryId(secondaryIds: SecondaryId[]): UpdateStatus;
    /**
     * <p>Set a reminder to be triggered at the specified time for a particular customer</p>
     */
    addReminder(reminder: Reminder): UpdateStatus;
    /**
     * <p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>
     */
    cancelReminder(key: string): UpdateStatus;
    /**
     * <p>Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer</p>
     */
    updateMetadata(metadata: any): UpdateStatus;
    /**
     * <p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>
     */
    deleteMetadata(keys: string[]): UpdateStatus;
    /**
     * <p>Sets some app data on the customer.
     * Values in the data object can either be strings or buffers,
     * depending on the set serializer</p>
     */
    updateAppData(data: any): UpdateStatus;
    /**
     * <p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     * until next call to update app data.</p>
     */
    leaseAppData(): LeasedAppData;
    /**
     * <p>Remove customer's app data</p>
     */
    deleteAppData(): UpdateStatus;
    /**
     * <p>Send a message to the customer from the specified channel number.</p>
     */
    sendMessage(channelNumber: MessagingChannelNumber, body: Body): MessageStatus;
    /**
     * <p>Initiate a voice call to the customer</p>
     */
    makeVoiceCall(channelNumber: string, actions: VoiceAction[]): MessageStatus;
    /**
     * <p>Allow or block a customer from receiving messages from a channel</p>
     * @param action - <p>allow or block</p>
     */
    updateMessagingConsent(channelNumber: MessagingChannelNumber, action: string): ConsentStatus;
    /**
     * <p>Initiate a customer activity</p>
     */
    updateActivity(channelNumber: ActivityChannelNumber, sessionId: Activity): UpdateStatus;
    /**
     * <p>Initiate a payment transaction</p>
     */
    requestPayment(source: PaymentChannelNumber | Wallet, destination: Wallet | Purse, value: Cash): PaymentStatus;
}

/**
 * <p>Instantiate an elarian simulator client</p>
 */
declare class Simulator {
    constructor(config: ElarianConfig);
    /**
     * <p>Instantiate and connect an elarian simulator client</p>
     */
    static newInstance(config: ElarianConfig): void;
    /**
     * <p>Initiate a message request</p>
     */
    receiveMessage(customerNumber: string, channelNumber: MessagingChannelNumber, sessionId: string, messageParts: SimulatorMessageBody[]): void;
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
 * <p>An object representing a tag. Tags can be used to group customers based on some similarities. e.g. loan defaulters, etc.</p>
 */
declare type Tag = {
    key: string;
    value: string;
    expiresAt?: number;
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
 */
declare type CustomerNumber = {
    number: string;
    provider: cellular | telegram | facebook | email | web;
    partition?: string;
};

/**
 * <p>An object representing a messaging channel number</p>
 */
declare type MessagingChannelNumber = {
    number: string;
    channel: sms | telegram | whatsapp | email | messenger | voice;
};

/**
 * <p>An object representing media</p>
 */
declare type Media = {
    url: string;
    type: image | video | audio | document | voice | sticker | contact;
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
 * <p>An object representing a message body</p>
 */
declare type Body = {
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
 * @property direction - <p>outbound or inbound</p>
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
 * <p>An object representing a message body</p>
 */
declare type Message = {
    body: Body;
    labels?: string[];
    providerTag?: string;
    replyToken?: string;
    replyPrompt?: ReplyPrompt;
};

/**
 * <p>An object representing a customer activity</p>
 */
declare type Activity = {
    sessionId: string;
    key: string;
    properties?: any;
};

/**
 * <p>An object representing client params</p>
 * @property [authToken] - <p>received from an client that authenticated with the API key. @see Elarian.generateAuthToken()</p>
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
    options?: ConfigOptions;
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
declare type ConfigOptions = {
    lifetime?: number;
    keepAlive?: number;
    resumable?: boolean;
    serializer?: Serializer;
};

/**
 * <p>An object representing cash</p>
 */
declare type Cash = {
    amount: double;
    currencyCode: string;
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
 * <p>An object representing an activity channel number</p>
 * @property channel - <p>channel type. Must be one of ['web','modile']</p>
 */
declare type ActivityChannelNumber = {
    number: string;
    channel: string;
};

/**
 * <p>An object representing a payment transaction</p>
 */
declare type PaymentTransaction = {
    transactionId: string;
    appId: string;
    creditParty: CustomerPayment | Wallet | Purse;
    debitParty: CustomerPayment | Wallet | Purse;
    value: Cash;
    status: number;
    createdAt: number;
    updatedAt: number;
};

/**
 * <p>An object representing a voice channel</p>
 */
declare type VoiceChannelNumber = {
    number: string;
    channel: string;
};

/**
 * <p>An object representing a ussd channel</p>
 */
declare type UssdChannelNumber = {
    number: string;
    channel: string;
};

/**
 * <p>An object representing a customer's payment source or destination</p>
 */
declare type CustomerPayment = {
    customerNumber: CustomerNumber;
    channelNumber: PaymentChannelNumber;
};

/**
 * <p>An object representing customer params</p>
 */
declare type CustomerParams = {
    customerNumber: CustomerNumber;
    customerId?: string;
};

/**
 * <p>An object representing a reminder</p>
 * @property remindAt - <p>timestamp in seconds</p>
 */
declare type Reminder = {
    key: string;
    remindAt: number;
    payload: string;
    interval?: number;
};

/**
 * <p>An object representing a ussd menu</p>
 */
declare type UssdMenu = {
    text: string;
    isTerminal: boolean;
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
 * <p>Notification data</p>
 */
declare type Notification = {
    data: any;
    customer: Customer;
};

/**
 * <p>Notification callback</p>
 */
declare type NotificationCallback = (error: Error, message?: Message | UssdMenu | VoiceAction[]) => void;

/**
 * <p>A function that reacts to events</p>
 * @param callback - <p>A response to the event. Required for voice and ussd events</p>
 */
declare type EventListener = (notification: Notification, callback: NotificationCallback) => void;

/**
 * <p>An string representing an event. Must be one of:</p>
 * <ul>
 * <li>data</li>
 * <li>--</li>
 * <li>voiceCall</li>
 * <li>ussdSession</li>
 * <li>receivedSms</li>
 * <li>receivedEmail</li>
 * <li>receivedMessenger</li>
 * <li>receivedTelegram</li>
 * <li>receivedWhatsapp</li>
 * <li>--</li>
 * <li>sendMessage</li>
 * <li>makeVoiceCall</li>
 * <li>sendCustomerPayment</li>
 * <li>sendChannelPayment</li>
 * <li>checkoutPayment<li>
 * <li>--</li>
 * <li>reminder</li>
 * <li>messageStatus</li>
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
 */
declare type Event = string;

declare type UpdateStatus = {
    customerId: string;
    status: boolean;
    description: string;
};

declare type WorkStatus = {
    status: boolean;
    description: string;
    workId: string;
};

declare type MessageStatus = {
    status: string;
    description: string;
    customerId: string;
    messageId: string;
};

declare type ConsentStatus = {
    status: string;
    description: string;
    customerId: string;
};

declare type LeasedAppData = string | any;

/**
 * @property lifetime - <p>in seconds</p>
 */
declare type AuthToken = {
    token: string;
    lifetime: number;
};

declare type PaymentStatus = {
    status: number;
    description: string;
    transactionId: string;
    debitCustomerId: string;
    creditCustomerId: string;
};

declare type VoiceStatus = {
    status: number;
    description: string;
    sessionId: string;
    customerId: string;
};

