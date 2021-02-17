// eslint-disable-next-line no-unused-vars
const should = require('should');

const fixtures = require('./fixtures');

describe('Voice', function fx() {
    let client;
    let customer;
    let simulator;

    this.timeout(10000);

    before(async () => {
        client = await fixtures.getClient();
        simulator = await fixtures.getSimulator();
        customer = new client.Customer({
            customerNumber: fixtures.customerNumber,
        });
    });

    after(async () => {
        await client.disconnect();
        await simulator.disconnect();
    });

    it('makeVoiceCall()', (done) => {
        // simulator.on('makeVoiceCall', (notif, callback) => {
        //     done();
        //     callback(null);
        // });

        client.makeVoiceCall(customer, fixtures.voiceNumber).then((resp) => {
            resp.should.have.properties(['status', 'description', 'customerId', 'sessionId']);
            // resp.status.should.equal('session_initiated');
            done();
        }).catch((ex) => {
            done(ex);
        });
    });
});
