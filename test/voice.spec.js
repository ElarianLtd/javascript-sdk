// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');
const simulator = require('./simulator');

describe('Voice', () => {
    let client;
    const customer = new Customer({
        customerNumber: fixtures.customerNumber,
    });

    before(async () => {
        client = fixtures.getClient();

        await customer.getState();
    });

    after(async () => {
        await client.disconnect();
        await simulator.endSession(customer.customerNumber.number);
    });

    it('makeVoiceCall()', (done) => {
        simulator.startSession({
            phoneNumber: customer.customerNumber.number,
            cb: (notif) => {
                if (notif.data.type === 'MakeVoiceCallNotification') {
                    done();
                }
            },
        }).then(() => {
            client.makeVoiceCall(customer, {
                number: fixtures.voiceNumber,
                provider: 'telco',
            }).then((resp) => {
                resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
            }).catch((ex) => {
                done(ex);
            });
        }).catch((ex) => {
            done(ex);
        });
    });
});
