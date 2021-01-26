// eslint-disable-next-line no-unused-vars
const should = require('should');

const { Customer } = require('..');
const fixtures = require('./fixtures');

describe('Voice', () => {
    let client;
    let customer;
    let simulator;

    before(async () => {
        const r = await fixtures.initializeClient();
        client = r.client;
        simulator = r.simulator;
        customer = new Customer({
            client,
            customerNumber: fixtures.customerNumber,
        });

        client.on('data', (evt, data) => {
            console.log('App', evt, data);
        });

        simulator.on('data', (evt, data) => {
            console.log('Sim', evt, data);
        });

        await customer.getState();
    });

    after(async () => {
        await client.disconnect();
        await simulator.disconnect();
    });

    it('makeVoiceCall()', (done) => {
        // TODO: Simulator wait for calls

        simulator.on('makeVoiceCall', (notif, callback) => {
            console.log(notif);
            done();
            callback(null);
        });

        client.makeVoiceCall(customer, {
            number: fixtures.voiceNumber,
            channel: 'cellular',
        }, fixtures.dialPlan).then((resp) => {
            resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
            resp.status.should.equal('session_initiated');
        }).catch((ex) => {
            done(ex);
        });
    });

    // TODO: test receiveing calls
});
