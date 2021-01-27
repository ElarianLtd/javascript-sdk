const Elarian = require('./client');
const Customer = require('./customer');

const {
    addTag,
    addIndices,
    addCustomer,
    addReminder,
    ElarianMessages,
    addOtherCustomer,
    addCustomerNumber,
    addCustomerIndices,
    getChannelProvider,
    getCustomerNumberProviderString,
    getChannelProviderString,
} = require('./utils');

const {
    DataMapValue,

    AppToServerCommand,
    AppToServerCommandReply,

    PaymentChannel,
    ActivityChannel,
    MessagingChannel,
    ActivityChannelNumber,
    CustomerActivityCommand,
    GetCustomerStateCommand,
    DeleteCustomerTagCommand,
    UpdateCustomerTagCommand,
    AdoptCustomerStateCommand,
    AddCustomerReminderCommand,
    LeaseCustomerAppDataCommand,
    DeleteCustomerAppDataCommand,
    DeleteCustomerMetadataCommand,
    UpdateCustomerAppDataCommand,
    CancelCustomerReminderCommand,
    AddCustomerReminderTagCommand,
    UpdateCustomerMetadataCommand,
    DeleteCustomerSecondaryIdCommand,
    UpdateCustomerSecondaryIdCommand,
    CancelCustomerReminderTagCommand,

} = ElarianMessages;

/**
 * Fetch the customer's current state.
 * @param {Customer} customer
 * @returns {CustomerState}
 * @memberof Elarian
 */
Elarian.prototype.getCustomerState = function getCustomerState(customer) {
    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const socket = this.getSocket();

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

                        // TODO: Clean up paymentState, messagingState, identityState

                        // eslint-disable-next-line max-len
                        if (result.data.identityState && Object.keys(result.data.identityState).length) {
                            const { serializer: { type, deserialize } } = this.configOptions;
                            const deserializeKey = type === 'text' ? 'stringVal' : 'bytesVal';
                            const unprocessedState = result.data.identityState;
                            const identityState = {
                                tags: unprocessedState.tagsList.map((i) => ({
                                    key: i.mapping.key,
                                    value: i.mapping.value.value,
                                    expiration: i.expiresAt.seconds,
                                })),
                                secondaryIds: unprocessedState.secondaryIdsList.map((i) => ({
                                    key: i.mapping.key,
                                    value: i.mapping.value.value,
                                    expiration: i.expiresAt.seconds,
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

                        if (result.data.paymentState) {
                            const entry = result.data.paymentState;
                            result.data.paymentState = {
                                wallets: entry.walletsMap,
                                transactionLogs: entry.transactionLogList,
                                pendingTransactions: entry.pendingTransactionsList,
                                customerNumbers: entry.customerNumbersList.map((i) => ({
                                    number: i.number,
                                    provider: getCustomerNumberProviderString(i.provider),
                                })),
                                channelNumbers: entry.channelNumbersList.map((i) => ({
                                    number: i.number,
                                    channel: getChannelProviderString(i.channel, PaymentChannel),
                                })),
                            };
                        }

                        if (result.data.messagingState) {
                            result.data.messagingState = {
                                channels: result.data.messagingState.channelsList.map((ch) => {
                                    const state = {
                                        active: ch.active,
                                        blocked: ch.blocked,
                                        inSession: ch.inSession,
                                    };

                                    Object.keys(state).forEach((key) => {
                                        if (state[key]) {
                                            // customer+channel numbers
                                            state[key].customerNumber = state[key].customerNumber
                                                ? {
                                                    number: state[key].customerNumber.number,
                                                    provider: getCustomerNumberProviderString(
                                                        state[key].customerNumber.provider,
                                                    ),
                                                }
                                                : undefined;
                                            state[key].channelNumber = state[key].channelNumber
                                                ? {
                                                    number: state[key].channelNumber.number,
                                                    channel: getChannelProviderString(
                                                        state[key].channelNumber.channel,
                                                        MessagingChannel,
                                                    ),
                                                }
                                                : undefined;
                                        }
                                    });

                                    return state;
                                }),
                            };
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
 * @memberof Elarian
 */
Elarian.prototype.adoptCustomerState = async function adoptCustomerState(customer, otherCustomer) {
    const socket = this.getSocket();

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
 * @memberof Elarian
 */
Elarian.prototype.updateCustomerTag = function updateCustomerTag(customer, tags) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!tags || !tags.length) {
        throw new Error('tags is required');
    }

    let cmd = new UpdateCustomerTagCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addCustomerIndices(cmd, tags, 'setUpdatesList');
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
 * @param {string[]} tags
 * @returns {UpdateStatus}
 * @memberof Elarian
 */
Elarian.prototype.deleteCustomerTag = async function deleteCustomerTag(customer, tags) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!tags || !tags.length) {
        throw new Error('tags is required');
    }

    let cmd = new DeleteCustomerTagCommand()
        .setDeletionsList(tags);
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
 * @memberof Elarian
 */
// eslint-disable-next-line max-len
Elarian.prototype.updateCustomerSecondaryId = async function updateCustomerSecondaryId(customer, secondaryIds) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!secondaryIds || !secondaryIds.length) {
        throw new Error('secondaryIds is required');
    }

    let cmd = new UpdateCustomerSecondaryIdCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addCustomerIndices(cmd, secondaryIds, 'setUpdatesList');
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
 * @memberof Elarian
 */
// eslint-disable-next-line max-len
Elarian.prototype.deleteCustomerSecondaryId = function deleteCustomerSecondaryId(customer, secondaryIds) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!secondaryIds || !secondaryIds.length) {
        throw new Error('secondaryIds is required');
    }

    let cmd = new DeleteCustomerSecondaryIdCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addIndices(cmd, secondaryIds, 'setDeletionsList');
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
 * @memberof Elarian
 */
Elarian.prototype.addCustomerReminder = function addCustomerReminder(customer, reminder) {
    const socket = this.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    if (!reminder) {
        throw new Error('reminder is required');
    }

    let cmd = new AddCustomerReminderCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addReminder(cmd, reminder);
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
                            .getUpdateCustomerAppData();

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
 * @memberof Elarian
 */
Elarian.prototype.cancelCustomerReminder = function cancelCustomerReminder(customer, key) {
    const socket = this.getSocket();

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
                            .getUpdateCustomerAppData();

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
 * @memberof Elarian
 */
Elarian.prototype.addCustomerReminderByTag = function addCustomerReminderByTag(tag, reminder) {
    const socket = this.getSocket();

    if (!reminder || !tag) {
        throw new Error('reminder and tag are required');
    }

    let cmd = new AddCustomerReminderTagCommand();
    cmd = addTag(cmd, tag);
    cmd = addReminder(cmd, reminder);
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
 * @memberof Elarian
 */
Elarian.prototype.cancelCustomerReminderByTag = function cancelCustomerReminderByTag(tag, key) {
    const socket = this.getSocket();

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
 * @memberof Elarian
 */
Elarian.prototype.updateCustomerMetadata = function updateCustomerMetadata(customer, metadata) {
    const socket = this.getSocket();
    const { serializer } = this.configOptions;

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
        cmd.getUpdatesMap().set(key, value);
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
 * Remove some metadata from a customer.
 * @param {Customer} customer
 * @param {string[]} keys
 * @returns {UpdateStatus}
 * @memberof Elarian
 */
Elarian.prototype.deleteCustomerMetadata = function deleteCustomerMetadata(customer, keys) {
    const socket = this.getSocket();

    if (!keys || !keys.length) {
        throw new Error('keys are required');
    }

    let cmd = new DeleteCustomerMetadataCommand()
        .setDeletionsList(keys);
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

/**
 * Sets some app data on the customer.
 * Value of the data object can either be a string or a buffer,
 * depending on your serializer. @see {@link Client}
 * @param {Customer} customer
 * @param {Object} data
 * @returns {UpdateStatus}
 * @memberof Elarian
 */
Elarian.prototype.updateCustomerAppData = function updateCustomerAppData(customer, data) {
    const socket = this.getSocket();
    const { serializer } = this.configOptions;

    if (!data) {
        throw new Error('data is required');
    }

    let cmd = new UpdateCustomerAppDataCommand();
    cmd = addCustomer(cmd, customer);
    const appData = new DataMapValue();
    const serializedValue = serializer.serialize(data);
    switch (serializer.type) {
    case 'text':
        appData.setStringVal(serializedValue);
        break;
    case 'binary':
        appData.setBytesValue(serializedValue);
        break;
    default:
        throw new Error('Invalid serializer type');
    }
    cmd.setUpdate(appData);

    const req = new AppToServerCommand()
        .setUpdateCustomerAppData(cmd);

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
                            .getUpdateCustomerAppData();

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
 * Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
 * until next call to update app data.
 * @param {Customer} customer
 * @returns {LeasedAppData}
 * @memberof Elarian
 */
Elarian.prototype.leaseCustomerAppData = function leaseCustomerAppData(customer) {
    const socket = this.getSocket();
    const { serializer } = this.configOptions;

    let cmd = new LeaseCustomerAppDataCommand();
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setLeaseCustomerAppData(cmd);

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
                            .getLeaseCustomerAppData();

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

                        resolve(result.value);
                    } catch (ex) {
                        reject(ex);
                    }
                },
                onError: (error) => reject(error),
            });
    });
};

/**
 * Remove customer's app data.
 * @param {Customer} customer
 * @returns {UpdateStatus}
 * @memberof Elarian
 */
Elarian.prototype.deleteCustomerAppData = function deleteCustomerAppData(customer) {
    const socket = this.getSocket();

    let cmd = new DeleteCustomerAppDataCommand();
    cmd = addCustomer(cmd, customer);
    const req = new AppToServerCommand()
        .setDeleteCustomerAppData(cmd);

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
                            .getUpdateCustomerAppData();

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
 * Initiate a customer activity
 * @param {CustomerNumber} customerNumber
 * @param {ActivityChannelNumber} channelNumber
 * @param {Activity} activity
 * @returns {UpdateStatus}
 * @memberof Elarian
 */
// eslint-disable-next-line max-len
Elarian.prototype.updateCustomerActivity = function updateCustomerActivity(customerNumber, channelNumber, activity) {
    const socket = this.getSocket();

    const {
        sessionId,
        key,
        properties = {},
    } = activity;

    let cmd = new CustomerActivityCommand();
    cmd = cmd
        .setSessionId(sessionId)
        .setKey(key)
        .setChannelNumber(
            new ActivityChannelNumber()
                .setNumber(channelNumber.number)
                .setChannel(getChannelProvider(channelNumber.channel, ActivityChannel)),
        );
    Object.keys(properties).forEach((name) => {
        cmd.getPropertiesMap().set(name, properties[name]);
    });
    cmd = addCustomerNumber(cmd, customerNumber);
    const req = new AppToServerCommand()
        .setCustomerActivity(cmd);

    return new Promise((resolve, reject) => {
        socket
            .requestResponse({
                data: Buffer.from(req.serializeBinary()),
            })
            .subscribe({
                onComplete: (item) => {
                    try {
                        const res = AppToServerCommandReply
                            .deserializeBinary(item.data)
                            .getCustomerActivity();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            transactionId: (res.getCustomerId() || {
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

module.exports = Elarian;