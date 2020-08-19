
const {
    promisify,
    ElarianService,
    ElarianMessages,
    addTag,
    addCustomer,
    addOtherCustomer,
    addReminder,
    addChannelNumber,
    addCustomerMessageBody,
} = require('./utils');

const {
    GetCustomerStateRequest,
    DeleteCustomerTagRequest,
    AdoptCustomerStateRequest,
    AddCustomerReminderRequest,
    DeleteCustomerMetadataRequest,
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
        
    }

    async cancelCustomerReminder(params) {
        
    }

    async cancelCustomerReminderByTag(params) {
       
    }

    async updateCustomerTag(params) {
        
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
       
    }

    async deleteCustomerSecondaryId(params) {
        
    }

    async updateCustomerMetadata(params) {
       
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
    Enums: {
        
    }
};