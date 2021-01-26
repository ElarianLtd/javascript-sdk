const validate = require('validate.js');

const {
    ElarianMessages,
    getValidCollectionKeys,
} = require('./utils');

const { CustomerNumberProvider } = ElarianMessages;

/**
 * A customer is your end-user, represented by a number (from a cellular, facebook or telegram)
 * @constructor
 * @param {CustomerParams} params
 */
function Customer(params) {
    const constraints = {
        customerId: {
            type: 'string',
        },
        client: {
            type: 'object',
            presence: true,
        },
        'customerNumber.number': {
            type: 'string',
        },
        'customerNumber.provider': {
            type: 'string',
            inclusion: getValidCollectionKeys(CustomerNumberProvider),
        },
        'customerNumber.partition': {
            type: 'string',
        },
    };

    const error = validate(params, constraints);
    if (error) {
        let message = '';
        Object.keys(error).forEach((key) => {
            message += `${key}: ${error[key].join(',')}\n`;
        });
        throw new Error(message);
    }

    this.client = params.client;
    this.customerId = params.customerId;
    this.customerNumber = params.customerNumber;

    this.identityState = {};
    this.messagingState = {};
    this.paymentState = {};
    this.activityState = {};

    /* eslint-disable no-use-before-define */
    /**
     * Fetch the customer's current state.
     * @returns {CustomerState}
     */
    this.getState = async () => {
        const data = await this.client.getCustomerState(this);
        this.customerId = data.customerId;
        const numbers = [
            ...(data.messagingState ? data.messagingState.channels : [])
                .map((i) => Object.keys(i)
                    .map((ki) => (i[ki] ? i[ki].customerNumber : null))).flat(),
            ...(data.paymentState ? data.paymentState.customerNumbers : []).map((i) => ({ ...i, state: 'payment' })),
        ];
        if (numbers.length && !this.customerNumber) {
            const candidate = numbers.find((i) => i.number);
            this.customerNumber = candidate;
        }

        this.identityState = data.identityState;
        this.paymentState = data.paymentState;
        this.messagingState = data.messagingState;
        this.activityState = data.activityState;

        return data;
    };

    /**
     * Merge otherCustomer's state into this customer's state and discard otherCustomer
     * @param {Customer} otherCustomer
     * @returns {UpdateStatus}
     */
    this.adoptState = async (otherCustomer) => this.client.adoptCustomerState(this, otherCustomer);

    /**
     * Update a customer's tag list.
     * @param {Tag[]} tags
     * @returns {UpdateStatus}
     */
    this.updateTag = async (tags) => this.client.updateCustomerTag(this, tags);

    /**
     * Remove some tags from a customer
     * @param {Tag[]} tags
     * @returns {UpdateStatus}
     */
    this.deleteTag = async (tags) => this.client.deleteCustomerTag(this, tags);

    /**
     * Update a customer's secondary Ids
     * @param {SecondaryId[]} secondaryIds
     * @returns {UpdateStatus}
     */
    // eslint-disable-next-line max-len
    this.updateSecondaryId = async (secondaryIds) => this.client.updateCustomerSecondaryId(this, secondaryIds);

    /**
     * Remove some secondary Ids from a customer
     * @param {SecondaryId[]} secondaryIds
     * @returns {UpdateStatus}
     */
    // eslint-disable-next-line max-len
    this.deleteSecondaryId = async (secondaryIds) => this.client.deleteCustomerSecondaryId(this, secondaryIds);

    /**
     * Set a reminder to be triggered at the specified time for a particular customer
     * @param {Reminder} reminder
     * @returns {UpdateStatus}
     */
    this.addReminder = async (reminder) => this.client.addCustomerReminder(this, reminder);

    /**
     * Cancels a previously set reminder with the key <code>key</code> on the customer
     * @param {string} key
     * @returns {UpdateStatus}
     */
    this.cancelReminder = async (key) => this.client.cancelCustomerReminder(this, key);

    /**
     * Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer
     * @param {Object} metadata
     * @returns {UpdateStatus}
     */
    this.updateMetadata = async (metadata) => this.client.updateCustomerMetadata(this, metadata);

    /**
     * Remove some metadata from a customer. <code>keys</code> is an array of strings
     * @param {string[]} keys
     * @returns {UpdateStatus}
     */
    this.deleteMetadata = async (keys) => this.client.deleteCustomerMetadata(this, keys);

    /**
     * Sets some app data on the customer.
     * Values in the data object can either be strings or buffers,
     * depending on the set serializer
     * @param {Object} data
     * @returns {UpdateStatus}
     */
    this.updateAppData = async (data) => this.client.updateCustomerAppData(this, data);

    /**
     *  Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     *  until next call to update app data.
     * @returns {LeasedAppData}
     */
    this.leaseAppData = async () => this.client.leaseCustomerAppData(this);

    /**
     * Remove customer's app data
     * @returns {UpdateStatus}
     */
    this.deleteAppData = async () => this.client.deleteCustomerAppData(this);

    /**
     * Send a message to the customer from the specified channel number.
     * @param {MessagingChannelNumber} channelNumber
     * @param {Body} body
     * @returns {MessageStatus}
     */
    // eslint-disable-next-line max-len
    this.sendMessage = async (channelNumber, body) => this.client.sendMessage(this, channelNumber, body);

    /**
     * Initiate a voice call to the customer
     * @param {string} channelNumber
     * @param {VoiceAction[]} actions
     * @returns {MessageStatus}
     */
    // eslint-disable-next-line max-len
    this.makeVoiceCall = async (channelNumber, actions = []) => this.client.makeVoiceCall(this, channelNumber, actions);

    /**
     * Allow or block a customer from receiving messages from a channel
     * @param {Customer} customer
     * @param {MessagingChannelNumber} channelNumber
     * @param {string} action allow or block
     * @returns {ConsentStatus}
     */
    // eslint-disable-next-line max-len
    this.updateMessagingConsent = async (channelNumber, action) => this.client.updateMessagingConsent(this, channelNumber, action);

    /**
     * Initiate a customer activity
     * @param {ActivityChannelNumber} channelNumber
     * @param {Activity} sessionId
     * @returns {UpdateStatus}
     */
    // eslint-disable-next-line max-len
    this.updateActivity = async (channelNumber, activity) => this.client.updateCustomerActivity(this.customerNumber, channelNumber, activity);
    /* eslint-enable no-use-before-define */

    /**
     * Initiate a payment transaction
     * @param {PaymentChannelNumber|Wallet} source
     * @param {Wallet|Purse} destination
     * @param {Cash} value
     * @returns {PaymentStatus}
     * @memberof Client.prototype
     */
    this.requestPayment = async (source, destination, value) => {
        if (!this.customerId && (source.walletId || destination.walletId)) {
            const state = await this.getState();
            this.customerId = state.customerId;
        }

        let debitParty = source;
        if (debitParty.number) {
            debitParty = {
                customerNumber: this.customerNumber,
                channelNumber: source,
            };
        } else if (debitParty.walletId) {
            debitParty.customerId = this.customerId;
        }

        const creditParty = destination;
        if (creditParty.walletId) {
            creditParty.customerId = this.customerId;
        }
        return this.client.initiatePayment(debitParty, creditParty, value);
    };
}

module.exports = Customer;
