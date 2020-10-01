// eslint-disable-next-line no-unused-vars
const should = require('should');

const Elarian = require('..');
const fixtures = require('./fixtures');

describe('Messaging', () => {
    const client = new Elarian(fixtures.clientParams);
    it('sendMessage()', async () => {
        throw new Error('Not Implemented');
    });
    it('sendMessageByTag()', async () => {
        throw new Error('Not Implemented');
    });
    it('replyToMessage()', async () => {
        throw new Error('Not Implemented');
    });
    it('messagingConsent()', async () => {
        throw new Error('Not Implemented');
    });
});
