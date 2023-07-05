const Client = require('./client');

const {
    ElarianMessages,
} = require('./utils');

const {
    Duration,
    Reminder,
    Timestamp,
    GroupIndex,
    StringValue,
    DataMapValue,
    IndexMapping,

    AppToServerCommand,
    AppToServerCommandReply,

    CreateHumanCommand,

    AddReminderCommand,
    AddGroupReminderCommand,
    CancelReminderCommand,
    CancelGroupReminderCommand,

    UpdateGroupCommand,
    DeleteGroupCommand,

    UpdateMetadataCommand,
    DeleteMetadataCommand,

    LeaseAppStateCommand,
    UpdateAppStateCommand,
    DeleteAppStateCommand,

} = ElarianMessages;

/**
 * Instantiate an elarian client. You have to call connect() on the client to start using it
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
    };
}

Elarian.prototype = Object.create(Client.prototype, { constructor: Elarian });

/**
 * Create a human
 * @param {string} id human id
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.createHuman = function createHuman(id) {
    const socket = this.getSocket();

    if (!id) {
        throw new Error('An id is required');
    }

    let cmd = new CreateHumanCommand();
    cmd = cmd.setHumanId(id);
    const req = new AppToServerCommand()
        .setCreateHuman(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Add a reminder
 * @param {string} id human id
 * @param {Reminder} reminder a reminder
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.addReminder = function addReminder(id, reminder) {
    const socket = this.getSocket();

    if (!id || !reminder) {
        throw new Error('An id and reminder are required');
    }

    let cmd = new AddReminderCommand();
    cmd = cmd.setHumanId(id);
    let rem = new Reminder()
        .setKey(reminder.key)
        .setPayload(new StringValue().setValue(reminder.payload))
        .setRemindAt(new Timestamp().setSeconds(Math.floor(reminder.remindAt)));
    if (reminder.interval) {
        rem = rem.setInterval(new Duration().setSeconds(Math.floor(reminder.interval)));
    }
    cmd.setReminder(rem);

    const req = new AppToServerCommand()
        .setAddReminder(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Add a group reminder
 * @param {IndexMapping} group
 * @param {Reminder} reminder a reminder
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.addGroupReminder = function addGroupReminder(group, reminder) {
    const socket = this.getSocket();

    if (!group || !reminder) {
        throw new Error('A group and reminder are required');
    }

    const cmd = new AddGroupReminderCommand();
    let rem = new Reminder()
        .setKey(reminder.key)
        .setPayload(new StringValue().setValue(reminder.payload))
        .setRemindAt(new Timestamp().setSeconds(Math.floor(reminder.remindAt)));
    if (reminder.interval) {
        rem = rem.setInterval(new Duration().setSeconds(Math.floor(reminder.interval)));
    }
    cmd.setReminder(rem);

    const grp = new IndexMapping()
        .setKey(group.key)
        .setValue(new StringValue().setValue(group.value));
    cmd.setGroup(grp);

    const req = new AppToServerCommand()
        .setAddGroupReminder(cmd);

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
                            .getGroupCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Cancel a reminder
 * @param {string} id human id
 * @param {string} reminder a reminder key
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.cancelReminder = function cancelReminder(id, reminder) {
    const socket = this.getSocket();

    if (!id || !reminder) {
        throw new Error('A human id and reminder key are required');
    }

    const cmd = new CancelReminderCommand().setHumanId(id).setKey(reminder);
    const req = new AppToServerCommand()
        .setCancelReminder(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Cancel a group reminder
 * @param {IndexMapping} group
 * @param {string} reminder a reminder key
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.cancelGroupReminder = function cancelGroupReminder(group, reminder) {
    const socket = this.getSocket();

    if (!group || !reminder) {
        throw new Error('A group and reminder key are required');
    }

    const cmd = new CancelGroupReminderCommand()
        .setGroup(new IndexMapping()
            .setKey(group.key)
            .setValue(new StringValue().setValue(group.value)))
        .setKey(reminder);
    const req = new AppToServerCommand()
        .setCancelGroupReminder(cmd);

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
                            .getGroupCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Update a human's groups
 * @param {string} id a human id
 * @param {GroupIndex[]} groups
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.updateGroups = function updateGroups(id, groups) {
    const socket = this.getSocket();

    if (!groups || !groups.length || !id) {
        throw new Error('A human id and group(s) are required');
    }

    const cmd = new UpdateGroupCommand()
        .setHumanId(id);
    groups.forEach((grp) => {
        cmd.addUpdates(new GroupIndex()
            .setExpiresAt(new Timestamp().setSeconds(Math.floor(grp.expiresAt)))
            .setMapping(new IndexMapping()
                .setKey(grp.mapping.key)
                .setValue(new StringValue().setValue(grp.mapping.value))));
    });

    const req = new AppToServerCommand()
        .setUpdateGroup(cmd);

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
                            .getGroupCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Delete a human's groups
 * @param {string} id a human id
 * @param {string[]} groups
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.deleteGroups = function deleteGroups(id, groups) {
    const socket = this.getSocket();

    if (!groups || !groups.length || !id) {
        throw new Error('A human id and group(s) are required');
    }

    const cmd = new DeleteGroupCommand()
        .setHumanId(id);
    groups.forEach((grp) => {
        cmd.addDeletions(grp);
    });

    const req = new AppToServerCommand()
        .setDeleteGroup(cmd);

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
                            .getGroupCommand();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Update a human's metadata
 * @param {string} id a human id
 * @param {map<string, DataMapValue>} updates
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.updateMetadata = function updateMetadata(id, updates) {
    const socket = this.getSocket();

    if (!updates || !id) {
        throw new Error('A human id and group(s) are required');
    }

    const cmd = new UpdateMetadataCommand()
        .setHumanId(id);

    Object.keys(updates).forEach((key) => {
        const val = new DataMapValue();
        const target = updates[key];
        if (target.stringVal) {
            val.setStringVal(target.stringVal);
        }
        if (target.bytesVal) {
            val.setBytesVal(target.bytesVal);
        }
        cmd.getUpdatesMap().set(key, val);
    });

    const req = new AppToServerCommand()
        .setUpdateMetadata(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Delete a human's metadata
 * @param {string} id a human id
 * @param {string[]} keys
 * @returns {Reply}
 * @memberof Elarian
 */
Elarian.prototype.deleteMetadata = function deleteMetadata(id, keys) {
    const socket = this.getSocket();

    if (!keys || !keys.length || !id) {
        throw new Error('A human id and keys(s) are required');
    }

    const cmd = new DeleteMetadataCommand()
        .setHumanId(id);

    keys.forEach((key) => {
        cmd.addDeletions(key);
    });

    const req = new AppToServerCommand()
        .setDeleteMetadata(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            workId: (res.getWorkId() || {
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

/**
 * Lease app state
 * @param {string} id a human id
 * @returns {StateReply}
 * @memberof Elarian
 */
Elarian.prototype.leaseAppState = function leaseAppState(id) {
    const socket = this.getSocket();

    if (!id) {
        throw new Error('A human id is required');
    }

    const cmd = new LeaseAppStateCommand()
        .setHumanId(id);

    const req = new AppToServerCommand()
        .setLeaseAppState(cmd);

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
                            .getLeaseAppState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
                            state: res.getState(),
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

/**
 * Update app state
 * @param {string} id a human id
 * @param {DataMapValue} state
 * @returns {StateReply}
 * @memberof Elarian
 */
Elarian.prototype.updateAppState = function updateAppState(id, state) {
    const socket = this.getSocket();

    if (!id || !state) {
        throw new Error('A human id and state are required');
    }

    const val = new DataMapValue();
    if (state.stringVal) {
        val.setStringVal(state.stringVal);
    }
    if (state.bytesVal) {
        val.setBytesVal(state.bytesVal);
    }
    const cmd = new UpdateAppStateCommand()
        .setHumanId(id)
        .setUpdate(val);

    const req = new AppToServerCommand()
        .setUpdateAppState(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
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

/**
 * Delete app state
 * @param {string} id a human id
 * @returns {StateReply}
 * @memberof Elarian
 */
Elarian.prototype.deleteAppState = function deleteAppState(id) {
    const socket = this.getSocket();

    if (!id) {
        throw new Error('A human id is required');
    }

    const cmd = new DeleteAppStateCommand()
        .setHumanId(id);

    const req = new AppToServerCommand()
        .setDeleteAppState(cmd);

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
                            .getUpdateState();
                        const result = {
                            status: res.getStatus(),
                            description: res.getDescription(),
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

module.exports = Elarian;
