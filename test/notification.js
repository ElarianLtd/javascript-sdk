'use strict';

const _ = require('lodash');
const should = require('should');

const { Client } = require('../');

const {
    apiKey,
    appId,
} = require('./fixtures');



describe('Notification', function fx() {
    this.timeout(60000);

    const elarian = new Client({ apiKey, appId });

    it('sendWebhookResponse()', async () => {
        const res = await elarian.sendWebhookResponse({
            sessionId: 'fake',
            ussdMenu: {},
            voiceCallActions: [{}]
        });

        res.should.have.property('status');
        res.should.have.property('description');
    });

    it('streamNotifications()', function fx(done) {
        const stream = elarian.streamNotifications();

        should.exist(stream);

        stream.on('data', (res) => {
            res.should.have.property('appId');
            res.should.have.property('timestamp');

            res.should.have.property('messageStatus');
            // res.should.have.property('reminder');
            // res.should.have.property('ussdSession');
            // res.should.have.property('receivedMessage');
            // res.should.have.property('messagingConsentStatus');
            // res.should.have.property('messagingSessionStatus');
            done();
        });
    });
});