const validate = require('validate.js');

const {
    ElarianMessages,
    log,
    addTag,
    addCustomer,
    addOtherCustomer,
    addCustomerIndices,
    addIndices,
    addReminder,
} = require('./utils');

const {
    DataMapValue,
    GetCustomerStateRequest,
    DeleteCustomerTagRequest,
    UpdateCustomerTagRequest,
    AdoptCustomerStateRequest,
    AddCustomerReminderRequest,
    LeaseCustomerMetadataRequest,
    CancelCustomerReminderRequest,
    AddCustomerReminderTagRequest,
    DeleteCustomerMetadataRequest,
    UpdateCustomerMetadataRequest,
    UpdateCustomerSecondaryIdRequest,
    DeleteCustomerSecondaryIdRequest,
    CancelCustomerReminderTagRequest,
} = ElarianMessages;

let customerOptions;

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
        'secondaryId.key': {
            type: 'string',
        },
        'secondaryId.value': {
            type: 'string',
        },
    };

    const error = validate(params, constraints);
    if (error) {
        throw error;
    }

    this.customerId = params.customerId;
    this.customerNumber = params.customerNumber;
    this.secondaryId = params.secondaryId;

    const { client } = customerOptions;

    /* eslint-disable no-use-before-define */
    this.getState = async () => {
        const state = await getCustomerState(this);
        if (state.status) {
            this.customerId = state.data.customerId;
            // eslint-disable-next-line max-len
            this.secondaryId = state.data.secondaryIds.length ? state.data.secondaryIds[0] : this.secondaryId;
        } else {
            log.warn(state.description);
        }
        return state;
    };
    this.adoptState = async (otherCustomer) => adoptCustomerState(this, otherCustomer);
    this.updateTag = async (tags) => updateCustomerTag(this, tags);
    this.deleteTag = async (tags) => deleteCustomerTag(this, tags);
    this.updateSecondaryId = async (secondaryIds) => updateCustomerSecondaryId(this, secondaryIds);
    this.deleteSecondaryId = async (secondaryIds) => deleteCustomerSecondaryId(this, secondaryIds);
    this.addReminder = async (reminder) => addCustomerReminder(this, reminder);
    this.cancelReminder = async (key) => cancelCustomerReminder(this, key);
    this.updateMetadata = async (metadata) => updateCustomerMetadata(this, metadata);
    this.leaseMetadata = async (key) => leaseCustomerMetadata(this, key);
    this.deleteMetadata = async (keys) => deleteCustomerMetadata(this, keys);
    this.sendMessage = async (channelNumber, body) => client.sendMessage(this, channelNumber, body);
    /* eslint-enable no-use-before-define */
}

/**
 * Get customer state
 * @param {Customer} customer
 */
const getCustomerState = async (customer) => {
    try {
        const {
            stub,
            orgId,
            serializer,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        let req = new GetCustomerStateRequest()
            .setOrgId(orgId);

        req = addCustomer(req, customer);

        const res = await stub.getCustomerState(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            data: (res.getData() || {
                toObject: () => undefined,
            }).toObject(),
        };
        if (result.data) {
            result.data = {
                customerId: result.data.customerId,
                messagingState: result.data.messagingState,
                ussdState: result.data.ussdState,
                voiceState: result.data.voiceState,
                paymentState: result.data.paymentState,
                tags: result.data.tagsList.map((i) => ({
                    key: i.mapping.key,
                    value: i.mapping.value.value,
                    expiration: i.expiration.seconds,
                })),
                secondaryIds: result.data.secondaryIdsList.map((i) => ({
                    key: i.mapping.key,
                    value: i.mapping.value.value,
                    expiration: i.expiration.seconds,
                })),
                metadata: result.data.metadataMap,
            };
            const metadata = {};
            result.data.metadata.forEach((meta) => {
                const value = serializer.type === 'text' ? meta[1].stringVal : meta[1].bytesVal;
                metadata[meta[0]] = serializer.deserialize(value);
            });
            result.data.metadata = metadata;
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * Adopt another customer's state
 * @param {Customer} customer
 * @param {Customer} otherCustomer
 */
const adoptCustomerState = async (customer, otherCustomer) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!(customer instanceof Customer) || !(otherCustomer instanceof Customer)) {
            throw new Error('Invalid customer and/or otherCustomer');
        }

        let { customerId } = customer;

        if (!customerId) {
            const state = await customer.getState();
            customerId = state.data.customerId;
        }

        let req = new AdoptCustomerStateRequest()
            .setOrgId(orgId)
            .setCustomerId(customerId);

        req = addOtherCustomer(req, otherCustomer);

        const res = await stub.adoptCustomerState(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const updateCustomerTag = async (customer, tags) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!tags || !tags.length) {
            throw new Error('tags is required');
        }

        let req = new UpdateCustomerTagRequest()
            .setOrgId(orgId);

        req = addCustomer(req, customer);
        req = addCustomerIndices(req, tags, 'setTagsList');

        const res = await stub.updateCustomerTag(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteCustomerTag = async (customer, tags) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!tags || !tags.length) {
            throw new Error('tags is required');
        }

        let req = new DeleteCustomerTagRequest()
            .setOrgId(orgId)
            .setKeysList(tags);
        req = addCustomer(req, customer);

        const res = await stub.deleteCustomerTag(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const updateCustomerSecondaryId = async (customer, secondaryIds) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!secondaryIds || !secondaryIds.length) {
            throw new Error('secondaryIds is required');
        }

        let req = new UpdateCustomerSecondaryIdRequest()
            .setOrgId(orgId);

        req = addCustomer(req, customer);
        req = addCustomerIndices(req, secondaryIds, 'setSecondaryIdsList');

        const res = await stub.updateCustomerSecondaryId(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteCustomerSecondaryId = async (customer, secondaryIds) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!secondaryIds || !secondaryIds.length) {
            throw new Error('secondaryIds is required');
        }

        let req = new DeleteCustomerSecondaryIdRequest()
            .setOrgId(orgId);
        req = addCustomer(req, customer);
        req = addIndices(req, secondaryIds, 'setMappingsList');

        const res = await stub.deleteCustomerSecondaryId(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const addCustomerReminder = async (customer, reminder) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!reminder) {
            throw new Error('reminder is required');
        }

        let req = new AddCustomerReminderRequest()
            .setOrgId(orgId);

        req = addCustomer(req, customer);
        req = addReminder(req, { ...reminder, appId });

        const res = await stub.addCustomerReminder(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const cancelCustomerReminder = async (customer, key) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = customerOptions;

        if (!(customer instanceof Customer)) {
            throw new Error('Invalid customer');
        }

        if (!key) {
            throw new Error('key is required');
        }

        let req = new CancelCustomerReminderRequest()
            .setOrgId(orgId)
            .setAppId(appId)
            .setKey(key);

        req = addCustomer(req, customer);

        const res = await stub.cancelCustomerReminder(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const addCustomerReminderByTag = async (tag, reminder) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = customerOptions;

        if (!reminder || !tag) {
            throw new Error('reminder and tag are required');
        }

        let req = new AddCustomerReminderTagRequest()
            .setOrgId(orgId);

        req = addTag(req, tag);
        req = addReminder(req, { ...reminder, appId });

        const res = await stub.addCustomerReminderByTag(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            workId: (res.getWorkId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const cancelCustomerReminderByTag = async (tag, key) => {
    try {
        const {
            stub,
            orgId,
            appId,
        } = customerOptions;

        if (!key || !tag) {
            throw new Error('key and tag are required');
        }

        let req = new CancelCustomerReminderTagRequest()
            .setOrgId(orgId)
            .setAppId(appId)
            .setKey(key);

        req = addTag(req, tag);

        const res = await stub.cancelCustomerReminderByTag(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            workId: (res.getWorkId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const updateCustomerMetadata = async (customer, metadata) => {
    try {
        const {
            stub,
            orgId,
            serializer,
        } = customerOptions;

        if (!metadata) {
            throw new Error('metadata is required');
        }

        let req = new UpdateCustomerMetadataRequest()
            .setOrgId(orgId);
        req = addCustomer(req, customer);

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
            req.getMetadataMap().set(key, value);
        });

        const res = await stub.updateCustomerMetadata(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const leaseCustomerMetadata = async (customer, key) => {
    try {
        const {
            stub,
            orgId,
            serializer,
        } = customerOptions;

        if (!key) {
            throw new Error('key is required');
        }

        let req = new LeaseCustomerMetadataRequest()
            .setOrgId(orgId)
            .setKey(key);

        req = addCustomer(req, customer);

        const res = await stub.leaseCustomerMetadata(req);
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

        if (result.value) {
            const value = serializer.type === 'text' ? result.value.stringVal : result.value.bytesVal;
            result.value = serializer.deserialize(value);
        }

        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteCustomerMetadata = async (customer, keys) => {
    try {
        const {
            stub,
            orgId,
        } = customerOptions;

        if (!keys || !keys.length) {
            throw new Error('keys are required');
        }

        let req = new DeleteCustomerMetadataRequest()
            .setOrgId(orgId)
            .setKeysList(keys);

        req = addCustomer(req, customer);

        const res = await stub.deleteCustomerMetadata(req);
        const result = {
            status: res.getStatus(),
            description: res.getDescription(),
            customerId: (res.getCustomerId() || {
                getValue: () => undefined,
            }).getValue(),
        };
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = (client, options) => {
    customerOptions = {
        ...options,
        client,
    };

    /* eslint-disable no-param-reassign */
    client.Customer = Customer;
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
};
