// eslint-disable-next-line no-unused-vars
const should = require('should');

const fixtures = require('./fixtures');

describe('Simulator', () => {
    let client;
    let simulator;
    const transactionId = 'PAQ0ZZE5DI';

    before(async () => {
        const r = await fixtures.initializeClient();
        client = r.client;
        simulator = r.simulator;

        client.on('data', (evt, data) => {
            console.log('App', evt, data);
        });

        simulator.on('data', (evt, data) => {
            console.log('Sim', evt, data);
        });
    });

    after(async () => {
        await client.disconnect();
        await simulator.disconnect();
    });

    it('receivePayment()', (done) => {
        const { number } = fixtures.customerNumber;
        const { paymentChannel } = fixtures;
        simulator.receivePayment(transactionId, number, paymentChannel, { currencyCode: 'KES', amount: 100 }, 'pending_confirmation')
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
                done();
            })
            .catch((ex) => done(ex));
    });

    it('updatePaymentStatus()', (done) => {
        simulator.updatePaymentStatus(transactionId, 'failed')
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
                done();
            })
            .catch((ex) => done(ex));
    });

    it('receiveMessage()', (done) => {
        const customerNumber = fixtures.customerNumber.number;
        const channelNumber = fixtures.messagingChannel;
        const messageBodyParts = [
            {
                ussd: fixtures.ussdCode,
            },
        ];
        const sessionId = 'some-session-id';
        simulator.receiveMessage(customerNumber, channelNumber, sessionId, messageBodyParts)
            .then((resp) => {
                resp.should.have.properties([
                    'status',
                    'message',
                    'description',
                ]);
                done();
            })
            .catch((ex) => done(ex));
    });
});
