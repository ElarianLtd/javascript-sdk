const {
    ElarianMessages,
    addChannelNumber,
    addCustomer,
} = require('./utils');

const { Customer } = require('./customer');

const {
    VoiceChannel,
    VoiceChannelNumber,
    AppToServerCommand,
    MakeVoiceCallCommand,
    AppToServerCommandReply,
} = ElarianMessages;

let voiceOptions;

/**
 * Initiate a voice call to customer
 * @param {Customer} customer
 * @param {ChannelNumber} channelNumber
 * @returns {VoiceStatus}
 * @memberof Client.prototype
 */
const makeVoiceCall = (customer, channelNumber) => {
    const socket = voiceOptions.getSocket();

    if (!(customer instanceof Customer)) {
        throw new Error('Invalid customer');
    }

    const { customerNumber } = customer;
    if (!customerNumber) {
        // FIXME: Have Elarian return the customer number on fetch state?
        throw new Error('customerNumber is not setup on this customer');
    }

    let cmd = new MakeVoiceCallCommand();
    cmd = addCustomer(cmd, customer);
    cmd = addChannelNumber(cmd, channelNumber, VoiceChannelNumber, VoiceChannel);
    const req = new AppToServerCommand()
        .setMakeVoiceCall(cmd);

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
                            .getMakeVoiceCall();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            sessionId: (res.getSessionId() || {
                                getValue: () => undefined,
                            }).getValue(),
                            customerId: (res.getCustomerId() || {
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

module.exports = (client, options) => {
    voiceOptions = options;
    /* eslint-disable no-param-reassign */
    client.makeVoiceCall = makeVoiceCall;
    /* eslint-enable no-param-reassign */
    return client;
};
