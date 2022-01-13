/* eslint-disable no-underscore-dangle */
const validate = require('validate.js');

const {
    ElarianMessages,
    getValidCollectionKeys,
} = require('./utils');

const { CustomerNumberProvider } = ElarianMessages;

/**
 * A customer is your end-user, represented by a number (from a cellular, facebook or telegram)
 * @class
 * @param {CustomerParams} params
 */
function Customer(params) {
    const constraints = {
        id: {
            type: 'string',
        },
        number: {
            type: 'string',
        },
        provider: {
            type: 'string',
            inclusion: getValidCollectionKeys(CustomerNumberProvider),
        },
        partition: {
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

    this.customerNumber = null;
    this.customerId = params.id;
    if (params.number) {
        this.customerNumber = {
            number: params.number,
            provider: params.provider,
            partition: params.partition,
        };
    }

    this.identityState = {};
    this.messagingState = {};
    this.paymentState = {};
    this.activityState = {};

    if (this.client && this.client.isConnected() && this.customerNumber) {
        this.client._createCustomer(this.customerNumber)
            .then((res) => {
                if (res.status && res.customerId) {
                    this.customerId = res.customerId;
                }
            })
            .catch((ex) => this.client.platform.log.error(`Failed to create customer ${ex}`));
    }

    /* eslint-disable no-use-before-define */
    /**
     * Fetch the customer's current state.
     * @returns {CustomerState}
     */
    this.getState = async () => {
        const data = await this.client._getCustomerState(this);
        this.customerId = data.customerId;
        try {
            const numbers = [
                ...(data.messagingState ? data.messagingState.channels : [])
                    .map((i) => Object.keys(i).map((ki) => (i[ki] ? i[ki].customerNumber : null)))
                    .flat()
                    .filter((j) => j !== null),
                ...(data.paymentState ? data.paymentState.customerNumbers : []),
                ...(data.activityState ? data.activityState.customerNumbers : []),
            ];
            if (numbers.length && !this.customerNumber) {
                const candidate = numbers.find((i) => i.number);
                this.customerNumber = candidate;
            }
        } catch (ex) { /* ignore attempt to find customer number */ }

        this.identityState = data.identityState;
        this.paymentState = data.paymentState;
        this.messagingState = data.messagingState;
        this.activityState = data.activityState;

        return data;
    };

    /**
     * Merge otherCustomer's state into this customer's state and discard otherCustomer
     * @param {Customer} otherCustomer
     * @returns {CustomerStateUpdateReply}
     */
    this.adoptState = async (otherCustomer) => this.client._adoptCustomerState(this, otherCustomer);

    /**
     * Send a message to the customer from the specified channel number.
     * @param {MessagingChannelNumber} channelNumber
     * @param {Message} message
     * @returns {MessageReply}
     */
    // eslint-disable-next-line max-len
    this.sendMessage = async (channelNumber, message) => this.client._sendMessage(this, channelNumber, message);

    /**
     * Reply to a message
     * @param {string} messageId
     * @param {Message} message
     * @returns {MessageReply}
     */
    // eslint-disable-next-line max-len
    this.replyToMessage = async (messageId, message) => this.client._replyToMessage(this, messageId, message);

    /**
     * Initiate a customer activity
     * @param {string} source
     * @param {Activity} activity
     * @returns {CustomerStateUpdateReply}
     */
    // eslint-disable-next-line max-len
    this.updateActivity = async (source, activity) => this.client._updateCustomerActivity(this.customerNumber, source, activity);

    /**
     * Allow or block a customer from receiving messages from a channel
     * @param {MessagingChannelNumber} channelNumber
     * @param {string} action allow or block
     * @returns {ConsentUpdateReply}
     */
    // eslint-disable-next-line max-len
    this.updateMessagingConsent = async (channelNumber, action) => this.client._updateMessagingConsent(this, channelNumber, action);

    /**
     *  Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
     *  until next call to update app data.
     * @returns {LeasedAppData}
     */
    this.leaseAppData = async () => this.client._leaseCustomerAppData(this);

    /**
     * Sets some app data on the customer.
     * Values in the data object can either be strings or buffers,
     * depending on the set serializer. @see {@link ConnectionOptions}
     * @param {Object} data
     * @returns {CustomerStateUpdateReply}
     */
    this.updateAppData = async (data) => this.client._updateCustomerAppData(this, data);

    /**
     * Remove customer's app data
     * @returns {CustomerStateUpdateReply}
     */
    this.deleteAppData = async () => this.client._deleteCustomerAppData(this);

    /**
     * Fetch customer metadata
     * @returns {Object}
     */
    this.getMetadata = async () => {
        const state = await this.getState();
        return (state.identityState || {}).metadata || {};
    };

    /**
     * Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer
     * @param {Object} metadata
     * @returns {CustomerStateUpdateReply}
     */
    this.updateMetadata = async (metadata) => this.client._updateCustomerMetadata(this, metadata);

    /**
     * Remove some metadata from a customer. <code>keys</code> is an array of strings
     * @param {string[]} keys
     * @returns {CustomerStateUpdateReply}
     */
    this.deleteMetadata = async (keys) => this.client._deleteCustomerMetadata(this, keys);

    /**
     * Fetch customer secondaryIds
     * @returns {SecondaryId[]}
     */
    this.getSecondaryIds = async () => {
        const state = await this.getState();
        return (state.identityState || {}).secondaryIds || [];
    };

    /**
     * Update a customer's secondary Ids
     * @param {SecondaryId[]} secondaryIds
     * @returns {CustomerStateUpdateReply}
     */
    // eslint-disable-next-line max-len
    this.updateSecondaryIds = async (secondaryIds) => this.client._updateCustomerSecondaryIds(this, secondaryIds);

    /**
     * Remove some secondary Ids from a customer
     * @param {SecondaryId[]} secondaryIds
     * @returns {CustomerStateUpdateReply}
     */
    // eslint-disable-next-line max-len
    this.deleteSecondaryIds = async (secondaryIds) => this.client._deleteCustomerSecondaryIds(this, secondaryIds);

    /**
     * Fetch customer tags
     * @returns {Tag[]}
     */
    this.getTags = async () => {
        const state = await this.getState();
        return (state.identityState || {}).tags || [];
    };

    /**
     * Update a customer's tag list.
     * @param {Tag[]} tags
     * @returns {CustomerStateUpdateReply}
     */
    this.updateTags = async (tags) => this.client._updateCustomerTags(this, tags);

    /**
     * Remove some tags from a customer
     * @param {string[]} tags
     * @returns {CustomerStateUpdateReply}
     */
    this.deleteTags = async (keys) => this.client._deleteCustomerTags(this, keys);

    /**
     * Set a reminder to be triggered at the specified time for a particular customer
     * @param {Reminder} reminder
     * @returns {CustomerStateUpdateReply}
     */
    this.addReminder = async (reminder) => this.client._addCustomerReminder(this, reminder);

    /**
     * Cancels a previously set reminder with the key <code>key</code> on the customer
     * @param {string} key
     * @returns {CustomerStateUpdateReply}
     */
    this.cancelReminder = async (key) => this.client._cancelCustomerReminder(this, key);

    /**
     * Initiate a voice call to customer from channelNumber
     * @param {MessagingChannelNumber} channelNumber
     * @param {VoiceAction[]} actions
     */
    /*
    this.makeVoiceCall = async (channelNumber, actions = []) => {
        if (channelNumber.channel !== 'voice') {
            throw new Error('Invalid channel number. Channel must be voice');
        }
        const { customerNumber } = this;
        if (!customerNumber) {
            // FIXME: Have Elarian return the customer number on fetch state?
            throw new Error('customerNumber is not setup on this customer');
        }
        return this.sendMessage(channelNumber, { body: { voice: actions } });
    };
    */
}

module.exports = Customer;
