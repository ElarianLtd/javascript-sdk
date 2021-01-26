// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    let client;
    let customer;
    let simulator;

    before(async () => {
        client = fixtures.getClient();
        simulator = fixtures.getSimulator();
        customer = new Customer({
            client,
            customerNumber: fixtures.customerNumber,
        });
        await customer.getState();
    });

    after(async () => {
        await client.disconnect();
        await simulator.disconnect();
    });

    it('makeVoiceCall()', (done) => {
        // TODO: Simulator wait for calls
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
                channel: 'cellular',
            }, fixtures.dialPlan).then((resp) => {
                resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
                resp.status.should.equal('session_initiated');
            }).catch((ex) => {
                done(ex);
            });
        }).catch((ex) => {
            done(ex);
        });
    });

    // TODO: test receiveing calls
});
