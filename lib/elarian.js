const Client = require('./client');
const Customer = require('./customer');

/**
 * Instantiate an elarian client. You have to call connect() on then client to start using it
 * @class
 * @extends Client
 * @param {ClientConfig} config
 */
function Elarian(config) {
    Client.call(this, config);

    this.eventListeners = {
        ...this.eventListeners,

        // Core
        reminder: null,
        messageStatus: null,
        paymentStatus: null,
        receivedPayment: null,
        customerActivity: null,
        sentMessageReaction: null,
        walletPaymentStatus: null,
        messagingSessionEnded: null,
        messagingConsentUpdate: null,
        messagingSessionStarted: null,
        messagingSessionRenewed: null,

        // Virtual
        voiceCall: null,
        ussdSession: null,
        receivedSms: null,
        receivedEmail: null,
        receivedTelegram: null,
        receivedWhatsapp: null,
        receivedFbMessenger: null,
    };

    Customer.prototype.client = this;
    /**
     * A customer object. @see {@link Customer}
     * @class
     */
    this.Customer = Customer;
}

Elarian.prototype = Object.create(Client.prototype, { constructor: Elarian });

module.exports = Elarian;
