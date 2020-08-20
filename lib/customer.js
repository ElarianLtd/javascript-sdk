
const {
    promisify,
    ElarianService,
    ElarianMessages,
    addTag,
    addIndices,
    addReminder,
    addCustomer,
    addOtherCustomer,
    addCustomerIndices,
} = require('./utils');

const {
    GetCustomerStateRequest,
    DeleteCustomerTagRequest,
    UpdateCustomerTagRequest,
    AdoptCustomerStateRequest,
    AddCustomerReminderRequest,
    AddCustomerReminderTagRequest,
    CancelCustomerReminderRequest,
    UpdateCustomerMetadataRequest,
    DeleteCustomerMetadataRequest,
    DeleteCustomerSecondaryIdRequest,
    UpdateCustomerSecondaryIdRequest,
    CancelCustomerReminderTagRequest,
} = ElarianMessages;


class Client {
    constructor(options, stub) {
        this.options = options;
        this._stub = stub;
    }

    async getCustomerState(params) {
        try {
            let {
                customerId,
                customerNumber,
            } = params;

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new GetCustomerStateRequest()
                .setAppId(this.options.appId);

            req = addCustomer(req, params);

            const res = await this._stub.getCustomerState(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                data: (res.getData() || {
                    toObject: () => undefined
                }).toObject()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async adoptCustomerState(params) {
        try {
            let {
                customerId,
                otherCustomerId,
                otherCustomerNumber,
            } = params;

            if (!customerId) {
                throw new Error('Either one of customerId is required');
            }

            if (!otherCustomerId && !otherCustomerNumber) {
                throw new Error('Either one of otherCustomerId or otherCustomerNumber is required');
            }

            let req = new AdoptCustomerStateRequest()
                .setAppId(this.options.appId);

            req = addCustomer(req, params);
            req = addOtherCustomer(req, params);

            const res = await this._stub.adoptCustomerState(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async addCustomerReminder(params) {
        try {
            let {
                customerId,
                customerNumber,
                reminder,
            } = params;

            if (!reminder) {
                throw new Error('reminder is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new AddCustomerReminderRequest()
                .setAppId(this.options.appId);

            req = addCustomer(req, params);
            req = addReminder(req, params);

            const res = await this._stub.addCustomerReminder(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async addCustomerReminderByTag(params) {
        try {
            let {
                tag,
                reminder,
            } = params;

            if (!reminder || !tag) {
                throw new Error('reminder and tag are required');
            }

            let req = new AddCustomerReminderTagRequest()
                .setAppId(this.options.appId);

            req = addTag(req, params);
            req = addReminder(req, params);

            const res = await this._stub.addCustomerReminderByTag(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                workId: (res.getWorkId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async cancelCustomerReminder(params) {
        try {
            let {
                key,
                productId,
                customerId,
                customerNumber,
            } = params;

            if (!productId || !key) {
                throw new Error('key and productId are required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new CancelCustomerReminderRequest()
                .setAppId(this.options.appId)
                .setKey(key)
                .setProductId(productId);

            req = addCustomer(req, params);

            const res = await this._stub.cancelCustomerReminder(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async cancelCustomerReminderByTag(params) {
        try {
            let {
                key,
                tag,
                productId,
            } = params;

            if (!productId || !key || !tag) {
                throw new Error('key, tag and productId are required');
            }


            let req = new CancelCustomerReminderTagRequest()
                .setAppId(this.options.appId)
                .setKey(key)
                .setProductId(productId);

            req = addTag(req, params);

            const res = await this._stub.cancelCustomerReminderByTag(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription(),
                workId: (res.getWorkId() || {
                    getValue: () => undefined
                }).getValue()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
       
    }

    async updateCustomerTag(params) {
        try {
            let {
                customerId,
                customerNumber,
                tags,
            } = params;

            if (!tags) {
                throw new Error('tags is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new UpdateCustomerTagRequest()
                .setAppId(this.options.appId);

            req = addCustomer(req, params);
            req = addCustomerIndices(req, params, 'tags', 'setTagsList');

            const res = await this._stub.updateCustomerTag(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteCustomerTag(params) {
        try {
            let {
                customerId,
                customerNumber,
                tags,
            } = params;

            if (!tags) {
                throw new Error('tags is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new DeleteCustomerTagRequest()
                .setAppId(this.options.appId)
                .setTagsList(tags);

            req = addCustomer(req, params);

            const res = await this._stub.deleteCustomerTag(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateCustomerSecondaryId(params) {
        try {
            let {
                customerId,
                customerNumber,
                secondaryIds,
            } = params;

            if (!secondaryIds) {
                throw new Error('secondaryIds is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new UpdateCustomerSecondaryIdRequest()
                .setAppid(this.options.appId);

            req = addCustomer(req, params);
            req = addCustomerIndices(req, params, 'secondaryIds', 'setSecondaryIdsList');

            const res = await this._stub.updateCustomerSecondaryId(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteCustomerSecondaryId(params) {
        try {
            let {
                customerId,
                customerNumber,
                secondaryIds,
            } = params;

            if (!secondaryIds) {
                throw new Error('secondaryIds is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new DeleteCustomerSecondaryIdRequest()
                .setAppId(this.options.appId);

            req = addCustomer(req, params);
            req = addIndices(req, params, 'secondaryIds', 'setSecondaryIdsList');

            const res = await this._stub.deleteCustomerSecondaryId(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateCustomerMetadata(params) {
        try {
            let {
                customerId,
                customerNumber,
                metadata,
            } = params;

            if (!metadata) {
                throw new Error('metadata is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new UpdateCustomerMetadataRequest()
                .setAppId(this.options.appId);

            Object.keys(metadata).forEach((key) => {
                req.getMetadataMap().set(key, metadata[key]);
            });

            req = addCustomer(req, params);

            const res = await this._stub.updateCustomerMetadata(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteCustomerMetadata(params) {
        try {
            let {
                customerId,
                customerNumber,
                metadata,
            } = params;

            if (!metadata) {
                throw new Error('metadata is required');
            }

            if (!customerId && !customerNumber) {
                throw new Error('Either one of customerId or customerNumber is required');
            }

            let req = new DeleteCustomerMetadataRequest()
                .setAppId(this.options.appId)
                .setMetadataList(metadata);

            req = addCustomer(req, params);

            const res = await this._stub.deleteCustomerMetadata(req);
            const result = {
                status: res.getStatus(),
                description: res.getDescription()
            }
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    Client,
    Enums: { }
};