const validate = require('validate.js');

const {
    addTag,
    addIndices,
    addCustomer,
    addReminder,
    ElarianMessages,
    addOtherCustomer,
    addCustomerIndices,
    getCustomerNumberProviderString,
} = require('./utils');

const {
    DataMapValue,

    AppToServerCommand,
    AppToServerCommandReply,

    GetCustomerStateCommand,
    DeleteCustomerTagCommand,
    UpdateCustomerTagCommand,
    AdoptCustomerStateCommand,
    AddCustomerReminderCommand,
    LeaseCustomerMetadataCommand,
    CancelCustomerReminderCommand,
    AddCustomerReminderTagCommand,
    UpdateCustomerMetadataCommand,
    DeleteCustomerMetadataCommand,
    DeleteCustomerSecondaryIdCommand,
    UpdateCustomerSecondaryIdCommand,
    CancelCustomerReminderTagCommand,

} = ElarianMessages;

let customerOptions;

/**
 * A customer is your end-user, represented by a number (from a telco, facebook or telegram)
 * @constructor
 * @param {CustomerParams} params
 */
function Customer(params) {
    const constraints = {
        customerId: {
            type: 'string',
        },
        'customerNumber.number': {
            type: 'string',
        },
        'customerNumber.provider': {
            type: 'string',
            inclusion: ['facebook', 'telco', 'telegram'],
        },
        'customerNumber.partition': {
            type: 'string',
        },
    };

    const error = validate(params, constraints);
    if (error) {
        throw error;
    }

    this.customerId = params.customerId;
    this.customerNumber = params.customerNumber;

    // Identity State
    this.tags = [];
    this.reminders = [];
    this.metadata = {};
    this.secondaryIds = [];

    // Payment State
    this.wallets = [];

    /* eslint-disable no-use-before-define */
    /**
     * Fetch the customer's current state.
     * @returns {CustomerState}
     */
    this.getState = async () => {
        const data = await getCustomerState(this);
        this.customerId = data.customerId;
        const numbers = [
            ...(data.messagingState ? data.messagingState.customerNumbersList : []).map((i) => ({ ...i, state: 'messaging' })),
            ...(data.ussdState ? data.ussdState.customerNumbersList : []).map((i) => ({ ...i, state: 'ussd' })),
            ...(data.voiceState ? data.voiceState.customerNumbersList : []).map((i) => ({ ...i, state: 'voice' })),
            ...(data.paymentState ? data.paymentState.customerNumbersList : []).map((i) => ({ ...i, state: 'payment' })),
        ];
        if (numbers.length && !this.customerNumber) {
            const candidate = numbers.find((i) => i.number);

            this.customerNumber = {
                number: candidate.number,
                provider: getCustomerNumberProviderString(candidate.provider),
                partition: candidate.partition,
            };
        }
        if (data.identityState) {
            this.tags = data.identityState.tags;
            this.metadata = data.identityState.metadata;
            this.secondaryIds = data.identityState.secondaryIds;
        }

        if (data.paymentState && data.paymentState.walletsMap) {
            this.wallets = data.paymentState.walletsMap.map((i) => ({ id: i[0], ...i[1] }));
        }
        return data;
    };

    /**
     * Merge otherCustomer's state into this customer's state and discard otherCustomer
     * @param {Customer} otherCustomer
     * @returns {UpdateStatus}
     */
    this.adoptState = async (otherCustomer) => adoptCustomerState(this, otherCustomer);

    /**
     * Update a customer's tag list.
     * @param {Tag[]} tags
     * @returns {UpdateStatus}
     */
    this.updateTag = async (tags) => updateCustomerTag(this, tags);

    /**
     * Remove some tags from a customer
     * @param {Tag[]} tags
     * @returns {UpdateStatus}
     */
    this.deleteTag = async (tags) => deleteCustomerTag(this, tags);

    /**
     * Update a customer's secondary Ids
     * @param {SecondaryId[]} secondaryIds
     * @returns {UpdateStatus}
     */
    this.updateSecondaryId = async (secondaryIds) => updateCustomerSecondaryId(this, secondaryIds);

    /**
     * Remove some secondary Ids from a customer
     * @param {SecondaryId[]} secondaryIds
     * @returns {UpdateStatus}
     */
    this.deleteSecondaryId = async (secondaryIds) => deleteCustomerSecondaryId(this, secondaryIds);

    /**
     * Set a reminder to be triggered at the specified time for a particular customer
     * @param {Reminder} reminder
     * @returns {UpdateStatus}
     */
    this.addReminder = async (reminder) => addCustomerReminder(this, reminder);

    /**
     * Cancels a previously set reminder with the key <code>key</code> on the customer
     * @param {string} key
     * @returns {UpdateStatus}
     */
    this.cancelReminder = async (key) => cancelCustomerReminder(this, key);

    /**
     * Sets some metadata on the customer.
     * Values in the metadata object can either be strings or buffers,
     * depending on the set serializer
     * @param {Object} metadata
     * @returns {UpdateStatus}
     */
    this.updateMetadata = async (metadata) => updateCustomerMetadata(this, metadata);

    /**
     *  Fetches the value of <code>key</code> from the customer's metdata
     *  and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.
     * @param {string} key
     * @returns {LeasedMetadata}
     */
    this.leaseMetadata = async (key) => leaseCustomerMetadata(this, key);

    /**
     * Remove some metadata from a customer. <code>keys</code> is an array of strings
     * @param {string[]} keys
     * @returns {UpdateStatus}
     */
    this.deleteMetadata = async (keys) => deleteCustomerMetadata(this, keys);

    /**
     * Send a message to the customer from the specified channel number.
     * @param {MessagingChannelNumber} channelNumber
     * @param {Body} body
     * @returns {MessageStatus}
     */
    // eslint-disable-next-line max-len
    this.sendMessage = async (channelNumber, body) => customerOptions.client.sendMessage(this, channelNumber, body);
    /* eslint-enable no-use-before-define */
}

/**
 * Fetch the customer's current state.
 * @param {Customer} customer
 * @returns {CustomerState}
 * @memberof Client.prototype
 */
const getCustomerState = (customer) => {
    const {
        getSocket,
    } = customerOptions;

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const socket = getSocket();

    let cmd = new GetCustomerStateCommand();
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setGetCustomerState(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getGetCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            data: (res.getData() || {
                                toObject: () => undefined,
                            }).toObject(),
                        };

                        if (!result.status) {
                            throw new Error(result.description);
                        }

                        // eslint-disable-next-line max-len
                        if (result.data.identityState && Object.keys(result.data.identityState).length) {
                            const { serializer: { type, deserialize } } = customerOptions;
                            const deserializeKey = type === 'text' ? 'stringVal' : 'bytesVal';
                            const unprocessedState = result.data.identityState;
                            const identityState = {
                                tags: unprocessedState.tagsList.map((i) => ({
                                    key: i.mapping.key,
                                    value: i.mapping.value,
                                    expiration: i.expiration.seconds,
                                })),
                                secondaryIds: unprocessedState.secondaryIdsList.map((i) => ({
                                    key: i.mapping.key,
                                    value: i.mapping.value,
                                    expiration: i.expiration.seconds,
                                })),
                                metadata: Object.assign(
                                    {},
                                    ...unprocessedState.metadataMap.map((i) => ({
                                        [i[0]]: deserialize(i[1][deserializeKey]),
                                    })),
                                ),
                            };
                            result.data.identityState = identityState;
                        }
                        resolve(result.data);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Adopt another customer's state
 * @param {Customer} customer
 * @param {Customer} otherCustomer
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const adoptCustomerState = async (customer, otherCustomer) => {
    const {
        getSocket,
    } = customerOptions;

    const socket = getSocket();

    if (!(customer instanceof Customer) || !(otherCustomer instanceof Customer)) {
        throw new Error('Invalid customer and/or otherCustomer');
    }

    let { customerId } = customer;

    if (!customerId) {
        const state = await customer.getState();
        customerId = state.customerId;
    }

    let cmd = new AdoptCustomerStateCommand()
        .setCustomerId(customerId);
    cmd = addOtherCustomer(cmd, otherCustomer);
    const req = new AppToServerCommand()
        .setAdoptCustomerState(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Update a customer's tag list
 * @param {Customer} customer
 * @param {Tag[]} tags
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const updateCustomerTag = async (customer, tags) => {
    const socket = customerOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!tags || !tags.length) {
        throw new Error('tags is required');
    }

    let cmd = new UpdateCustomerTagCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addCustomerIndices(cmd, tags, 'setTagsList');
    const req = new AppToServerCommand()
        .setUpdateCustomerTag(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Remove tags from a customer
 * @param {Customer} customer
 * @param {Tag[]} tags
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const deleteCustomerTag = async (customer, tags) => {
    const socket = customerOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!tags || !tags.length) {
        throw new Error('tags is required');
    }

    let cmd = new DeleteCustomerTagCommand()
        .setKeysList(tags);
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setDeleteCustomerTag(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
  * Update a customer's secondary Ids
  * @param {Customer} customer
  * @param {SecondaryId[]} secondaryIds
  * @returns {UpdateStatus}
  * @memberof Client.prototype
  */
const updateCustomerSecondaryId = async (customer, secondaryIds) => {
    const socket = customerOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!secondaryIds || !secondaryIds.length) {
        throw new Error('secondaryIds is required');
    }

    let cmd = new UpdateCustomerSecondaryIdCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addCustomerIndices(cmd, secondaryIds, 'setSecondaryIdsList');
    const req = new AppToServerCommand()
        .setUpdateCustomerSecondaryId(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Delete a customer's secondary Ids
 * @param {Customer} customer
 * @param {SecondaryId[]} secondaryIds
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const deleteCustomerSecondaryId = async (customer, secondaryIds) => {
    const socket = customerOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!secondaryIds || !secondaryIds.length) {
        throw new Error('secondaryIds is required');
    }

    let cmd = new DeleteCustomerSecondaryIdCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addIndices(cmd, secondaryIds, 'setMappingsList');
    const req = new AppToServerCommand()
        .setDeleteCustomerSecondaryId(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Set a reminder to be triggered at the specified time for a particular customer
 * @param {Customer} customer
 * @param {Reminder} reminder
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const addCustomerReminder = (customer, reminder) => {
    const {
        appId,
        getSocket,
    } = customerOptions;
    const socket = getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!reminder) {
        throw new Error('reminder is required');
    }

    let cmd = new AddCustomerReminderCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addReminder(cmd, { ...reminder, appId });
    const req = new AppToServerCommand()
        .setAddCustomerReminder(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Cancels a previously set reminder with the key <code>key</code> on the customer
 * @param {Customer} customer
 * @param {string} key
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const cancelCustomerReminder = async (customer, key) => {
    const socket = customerOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!key) {
        throw new Error('key is required');
    }

    let cmd = new CancelCustomerReminderCommand()
        .setKey(key);
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setCancelCustomerReminder(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Set a reminder to be triggered at the specified time for customers with the particular tag
 * @param {Tag} tag
 * @param {Reminder} reminder
 * @returns {WorkStatus}
 * @memberof Client.prototype
 */
const addCustomerReminderByTag = async (tag, reminder) => {
    const {
        appId,
        getSocket,
    } = customerOptions;
    const socket = getSocket();

    if (!reminder || !tag) {
        throw new Error('reminder and tag are required');
    }

    let cmd = new AddCustomerReminderTagCommand();
    cmd = addTag(cmd, tag);
    cmd = addReminder(cmd, { ...reminder, appId });
    const req = new AppToServerCommand()
        .setAddCustomerReminderTag(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getTagCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code>
 * @param {Tag} tag
 * @param {string} key
 * @returns {WorkStatus}
 * @memberof Client.prototype
 */
const cancelCustomerReminderByTag = async (tag, key) => {
    const socket = customerOptions.getSocket();

    if (!key || !tag) {
        throw new Error('key and tag are required');
    }

    let cmd = new CancelCustomerReminderTagCommand()
        .setKey(key);
    cmd = addTag(cmd, tag);
    const req = new AppToServerCommand()
        .setCancelCustomerReminderTag(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getTagCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Sets some metadata on the customer.
 * Values in the metadata object can either be strings or buffers,
 * depending on your serializer. @see {@link Client}
 * @param {Customer} customer
 * @param {Object} metadata
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const updateCustomerMetadata = async (customer, metadata) => {
    const {
        serializer,
        getSocket,
    } = customerOptions;
    const socket = getSocket();

    if (!metadata) {
        throw new Error('metadata is required');
    }

    let cmd = new UpdateCustomerMetadataCommand();
    cmd = addCustomer(cmd, customer);
    Object.keys(metadata).forEach((key) => {
        const value = new DataMapValue();
        const serializedValue = serializer.serialize(metadata[key]);
        switch (serializer.type) {
        case 'text':
            value.setStringVal(serializedValue);
            break;
        case 'binary':
            value.setBytesValue(serializedValue);
            break;
        default:
            throw new Error('Invalid serializer type');
        }
        cmd.getMetadataMap().set(key, value);
    });

    const req = new AppToServerCommand()
        .setUpdateCustomerMetadata(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Fetches the value of <code>key</code> from the customer's metdata
 * and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.
 * @param {Customer} customer
 * @param {string} key
 * @returns {LeasedMetadata}
 * @memberof Client.prototype
 */
const leaseCustomerMetadata = async (customer, key) => {
    const {
        serializer,
        getSocket,
    } = customerOptions;
    const socket = getSocket();

    if (!key) {
        throw new Error('key is required');
    }

    let cmd = new LeaseCustomerMetadataCommand()
        .setKey(key);
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setLeaseCustomerMetadata(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getLeaseCustomerMetadata();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            value: (res.getValue() || {
                                toObject: () => undefined,
                            }).toObject(),
                        };

                        if (!result.status) {
                            throw new Error(result.description);
                        }

                        if (result.value) {
                            const item = serializer.type === 'text' ? result.value.stringVal : result.value.bytesVal;
                            result.value = serializer.deserialize(item);
                        }
                        resolve(result.value || {});
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Remove some metadata from a customer.
 * @param {Customer} customer
 * @param {string[]} keys
 * @returns {UpdateStatus}
 * @memberof Client.prototype
 */
const deleteCustomerMetadata = async (customer, keys) => {
    const socket = customerOptions.getSocket();

    if (!keys || !keys.length) {
        throw new Error('keys are required');
    }

    let cmd = new DeleteCustomerMetadataCommand()
        .setKeysList(keys);
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setDeleteCustomerMetadata(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (value) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(value.data)
                            .getUpdateCustomerState();

                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            customerId: (res.getCustomerId() || {
                                getValue: () => undefined,
                            }).getValue(),
                        };
                        if (!result.status) {
                            throw new Error(result.description);
                        }
                        resolve(result);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

module.exports = {
    Customer,
    setup: (client, options) => {
        customerOptions = {
            ...options,
            client,
        };

        /* eslint-disable no-param-reassign */
        client.getCustomerState = getCustomerState;
        client.adoptCustomerState = adoptCustomerState;
        client.updateCustomerTag = updateCustomerTag;
        client.deleteCustomerTag = deleteCustomerTag;
        client.updateCustomerSecondaryId = updateCustomerSecondaryId;
        client.deleteCustomerSecondaryId = deleteCustomerSecondaryId;
        client.addCustomerReminder = addCustomerReminder;
        client.addCustomerReminderByTag = addCustomerReminderByTag;
        client.cancelCustomerReminder = cancelCustomerReminder;
        client.cancelCustomerReminderByTag = cancelCustomerReminderByTag;
        client.updateCustomerMetadata = updateCustomerMetadata;
        client.leaseCustomerMetadata = leaseCustomerMetadata;
        client.deleteCustomerMetadata = deleteCustomerMetadata;
        /* eslint-enable no-param-reassign */
        return client;
    },
};
