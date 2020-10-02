const { log } = require('../../lib/utils');

const RESPONSE_QUEUE = {};

module.exports = {
    queue: (id, cb) => {
        RESPONSE_QUEUE[id] = cb;
    },
    getResponseHandler: (response) => {
        try {
            if (response.eventId !== undefined) {
                const cb = RESPONSE_QUEUE[response.eventId];
                if (cb !== undefined) {
                    cb(response);
                } else {
                    const error = new Error(`Could not find response handler for event: ${response.eventId}`);
                    log.error(error);
                }
            }
        } catch (ex) {
            log.error(`Failed while getting response handler for response -> ${JSON.stringify(response)} ex -> ${ex}`)
        }
    },
};
