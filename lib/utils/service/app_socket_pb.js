// source: app_socket.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var common_model_pb = require('./common_model_pb.js');
goog.object.extend(proto, common_model_pb);
var app_model_pb = require('./app_model_pb.js');
goog.object.extend(proto, app_model_pb);
var identity_state_pb = require('./identity_state_pb.js');
goog.object.extend(proto, identity_state_pb);
var messaging_model_pb = require('./messaging_model_pb.js');
goog.object.extend(proto, messaging_model_pb);
var messaging_state_pb = require('./messaging_state_pb.js');
goog.object.extend(proto, messaging_state_pb);
var payment_model_pb = require('./payment_model_pb.js');
goog.object.extend(proto, payment_model_pb);
var payment_state_pb = require('./payment_state_pb.js');
goog.object.extend(proto, payment_state_pb);
var activity_state_pb = require('./activity_state_pb.js');
goog.object.extend(proto, activity_state_pb);
var activity_model_pb = require('./activity_model_pb.js');
goog.object.extend(proto, activity_model_pb);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderTagCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AdoptCustomerStateCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AdoptCustomerStateCommand.OtherCustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppConnectionMetadata', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppDataUpdate', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppToServerCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppToServerCommand.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppToServerCommandReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AppToServerCommandReply.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CreateCustomerCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerActivityCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerActivityNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerActivityReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerStateReplyData', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerTagCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerTagCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GenerateAuthTokenCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GenerateAuthTokenReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.InitiatePaymentCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.InitiatePaymentReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.LeaseCustomerAppDataReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentUpdateNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionEndedNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionRenewedNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionStartedNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReceivedMessageNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReceivedPaymentNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReminderNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReplyToMessageCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageTagCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SentMessageReactionNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppCustomerNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppCustomerNotification.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppNotification.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppNotificationReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppPurseNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ServerToAppPurseNotification.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TagCommandReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerAppDataReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerStateReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerTagCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerTagCommand.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateMessagingConsentCommand', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateMessagingConsentReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.WalletPaymentStatusNotification', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AppConnectionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AppConnectionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AppConnectionMetadata.displayName = 'proto.com.elarian.hera.proto.AppConnectionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AppToServerCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AppToServerCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AppToServerCommand.displayName = 'proto.com.elarian.hera.proto.AppToServerCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AppToServerCommandReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AppToServerCommandReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AppToServerCommandReply.displayName = 'proto.com.elarian.hera.proto.AppToServerCommandReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.GenerateAuthTokenCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GenerateAuthTokenCommand.displayName = 'proto.com.elarian.hera.proto.GenerateAuthTokenCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.GenerateAuthTokenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GenerateAuthTokenReply.displayName = 'proto.com.elarian.hera.proto.GenerateAuthTokenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CreateCustomerCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CreateCustomerCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CreateCustomerCommand.displayName = 'proto.com.elarian.hera.proto.CreateCustomerCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetCustomerStateCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetCustomerStateCommand.displayName = 'proto.com.elarian.hera.proto.GetCustomerStateCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GetCustomerStateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.GetCustomerStateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetCustomerStateReply.displayName = 'proto.com.elarian.hera.proto.GetCustomerStateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CustomerStateReplyData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerStateReplyData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerStateReplyData.displayName = 'proto.com.elarian.hera.proto.CustomerStateReplyData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AdoptCustomerStateCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AdoptCustomerStateCommand.displayName = 'proto.com.elarian.hera.proto.AdoptCustomerStateCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AddCustomerReminderCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AddCustomerReminderCommand.displayName = 'proto.com.elarian.hera.proto.AddCustomerReminderCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AddCustomerReminderTagCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.displayName = 'proto.com.elarian.hera.proto.AddCustomerReminderTagCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.CancelCustomerReminderCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CancelCustomerReminderCommand.displayName = 'proto.com.elarian.hera.proto.CancelCustomerReminderCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.displayName = 'proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.repeatedFields_, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerTagCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerTagCommand.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerTagCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerTagCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerTagCommand.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerTagCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.repeatedFields_, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerStateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerStateReply.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerStateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerAppDataReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerAppDataReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.displayName = 'proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.LeaseCustomerAppDataReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.displayName = 'proto.com.elarian.hera.proto.LeaseCustomerAppDataReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.SendMessageCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SendMessageCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendMessageCommand.displayName = 'proto.com.elarian.hera.proto.SendMessageCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.ReplyToMessageCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ReplyToMessageCommand.displayName = 'proto.com.elarian.hera.proto.ReplyToMessageCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.SendMessageTagCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SendMessageTagCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendMessageTagCommand.displayName = 'proto.com.elarian.hera.proto.SendMessageTagCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.SendMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SendMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendMessageReply.displayName = 'proto.com.elarian.hera.proto.SendMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateMessagingConsentCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.displayName = 'proto.com.elarian.hera.proto.UpdateMessagingConsentCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateMessagingConsentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateMessagingConsentReply.displayName = 'proto.com.elarian.hera.proto.UpdateMessagingConsentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.InitiatePaymentCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.InitiatePaymentCommand.displayName = 'proto.com.elarian.hera.proto.InitiatePaymentCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.InitiatePaymentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.InitiatePaymentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.InitiatePaymentReply.displayName = 'proto.com.elarian.hera.proto.InitiatePaymentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.TagCommandReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.TagCommandReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.TagCommandReply.displayName = 'proto.com.elarian.hera.proto.TagCommandReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CustomerActivityCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerActivityCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerActivityCommand.displayName = 'proto.com.elarian.hera.proto.CustomerActivityCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CustomerActivityReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerActivityReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerActivityReply.displayName = 'proto.com.elarian.hera.proto.CustomerActivityReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ServerToAppNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.ServerToAppNotification.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.ServerToAppNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ServerToAppNotification.displayName = 'proto.com.elarian.hera.proto.ServerToAppNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.ServerToAppCustomerNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ServerToAppCustomerNotification.displayName = 'proto.com.elarian.hera.proto.ServerToAppCustomerNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.ServerToAppPurseNotification.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.ServerToAppPurseNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ServerToAppPurseNotification.displayName = 'proto.com.elarian.hera.proto.ServerToAppPurseNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.AppDataUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AppDataUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AppDataUpdate.displayName = 'proto.com.elarian.hera.proto.AppDataUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.ServerToAppNotificationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ServerToAppNotificationReply.displayName = 'proto.com.elarian.hera.proto.ServerToAppNotificationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ReminderNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.ReminderNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ReminderNotification.displayName = 'proto.com.elarian.hera.proto.ReminderNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingSessionStartedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingSessionStartedNotification.displayName = 'proto.com.elarian.hera.proto.MessagingSessionStartedNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingSessionRenewedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.displayName = 'proto.com.elarian.hera.proto.MessagingSessionRenewedNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingSessionEndedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingSessionEndedNotification.displayName = 'proto.com.elarian.hera.proto.MessagingSessionEndedNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingConsentUpdateNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.displayName = 'proto.com.elarian.hera.proto.MessagingConsentUpdateNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.ReceivedMessageNotification.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.ReceivedMessageNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ReceivedMessageNotification.displayName = 'proto.com.elarian.hera.proto.ReceivedMessageNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessageStatusNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessageStatusNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessageStatusNotification.displayName = 'proto.com.elarian.hera.proto.MessageStatusNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SentMessageReactionNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SentMessageReactionNotification.displayName = 'proto.com.elarian.hera.proto.SentMessageReactionNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.ReceivedPaymentNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ReceivedPaymentNotification.displayName = 'proto.com.elarian.hera.proto.ReceivedPaymentNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.PaymentStatusNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentStatusNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentStatusNotification.displayName = 'proto.com.elarian.hera.proto.PaymentStatusNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.WalletPaymentStatusNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.WalletPaymentStatusNotification.displayName = 'proto.com.elarian.hera.proto.WalletPaymentStatusNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.CustomerActivityNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerActivityNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerActivityNotification.displayName = 'proto.com.elarian.hera.proto.CustomerActivityNotification';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AppConnectionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AppConnectionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    apiKey: (f = msg.getApiKey()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    authToken: (f = msg.getAuthToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    simplexMode: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    simulatorMode: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AppConnectionMetadata;
  return proto.com.elarian.hera.proto.AppConnectionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AppConnectionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setApiKey(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAuthToken(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSimplexMode(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSimulatorMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AppConnectionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AppConnectionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApiKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAuthToken();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSimplexMode();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSimulatorMode();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue api_key = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getApiKey = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
*/
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setApiKey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.clearApiKey = function() {
  return this.setApiKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.hasApiKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue auth_token = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getAuthToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
*/
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setAuthToken = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.clearAuthToken = function() {
  return this.setAuthToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.hasAuthToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool simplex_mode = 5;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getSimplexMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setSimplexMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool simulator_mode = 6;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.getSimulatorMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.AppConnectionMetadata} returns this
 */
proto.com.elarian.hera.proto.AppConnectionMetadata.prototype.setSimulatorMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AppToServerCommand.EntryCase = {
  ENTRY_NOT_SET: 0,
  GENERATE_AUTH_TOKEN: 1,
  CREATE_CUSTOMER: 2,
  GET_CUSTOMER_STATE: 3,
  ADOPT_CUSTOMER_STATE: 4,
  ADD_CUSTOMER_REMINDER: 5,
  ADD_CUSTOMER_REMINDER_TAG: 6,
  CANCEL_CUSTOMER_REMINDER: 7,
  CANCEL_CUSTOMER_REMINDER_TAG: 8,
  UPDATE_CUSTOMER_TAG: 9,
  DELETE_CUSTOMER_TAG: 10,
  UPDATE_CUSTOMER_SECONDARY_ID: 11,
  DELETE_CUSTOMER_SECONDARY_ID: 12,
  UPDATE_CUSTOMER_METADATA: 13,
  DELETE_CUSTOMER_METADATA: 14,
  LEASE_CUSTOMER_APP_DATA: 15,
  UPDATE_CUSTOMER_APP_DATA: 16,
  DELETE_CUSTOMER_APP_DATA: 17,
  SEND_MESSAGE: 18,
  SEND_MESSAGE_TAG: 19,
  REPLY_TO_MESSAGE: 20,
  UPDATE_MESSAGING_CONSENT: 21,
  INITIATE_PAYMENT: 22,
  CUSTOMER_ACTIVITY: 23
};

/**
 * @return {proto.com.elarian.hera.proto.AppToServerCommand.EntryCase}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AppToServerCommand.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AppToServerCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AppToServerCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppToServerCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    generateAuthToken: (f = msg.getGenerateAuthToken()) && proto.com.elarian.hera.proto.GenerateAuthTokenCommand.toObject(includeInstance, f),
    createCustomer: (f = msg.getCreateCustomer()) && proto.com.elarian.hera.proto.CreateCustomerCommand.toObject(includeInstance, f),
    getCustomerState: (f = msg.getGetCustomerState()) && proto.com.elarian.hera.proto.GetCustomerStateCommand.toObject(includeInstance, f),
    adoptCustomerState: (f = msg.getAdoptCustomerState()) && proto.com.elarian.hera.proto.AdoptCustomerStateCommand.toObject(includeInstance, f),
    addCustomerReminder: (f = msg.getAddCustomerReminder()) && proto.com.elarian.hera.proto.AddCustomerReminderCommand.toObject(includeInstance, f),
    addCustomerReminderTag: (f = msg.getAddCustomerReminderTag()) && proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.toObject(includeInstance, f),
    cancelCustomerReminder: (f = msg.getCancelCustomerReminder()) && proto.com.elarian.hera.proto.CancelCustomerReminderCommand.toObject(includeInstance, f),
    cancelCustomerReminderTag: (f = msg.getCancelCustomerReminderTag()) && proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.toObject(includeInstance, f),
    updateCustomerTag: (f = msg.getUpdateCustomerTag()) && proto.com.elarian.hera.proto.UpdateCustomerTagCommand.toObject(includeInstance, f),
    deleteCustomerTag: (f = msg.getDeleteCustomerTag()) && proto.com.elarian.hera.proto.DeleteCustomerTagCommand.toObject(includeInstance, f),
    updateCustomerSecondaryId: (f = msg.getUpdateCustomerSecondaryId()) && proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.toObject(includeInstance, f),
    deleteCustomerSecondaryId: (f = msg.getDeleteCustomerSecondaryId()) && proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.toObject(includeInstance, f),
    updateCustomerMetadata: (f = msg.getUpdateCustomerMetadata()) && proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.toObject(includeInstance, f),
    deleteCustomerMetadata: (f = msg.getDeleteCustomerMetadata()) && proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.toObject(includeInstance, f),
    leaseCustomerAppData: (f = msg.getLeaseCustomerAppData()) && proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.toObject(includeInstance, f),
    updateCustomerAppData: (f = msg.getUpdateCustomerAppData()) && proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.toObject(includeInstance, f),
    deleteCustomerAppData: (f = msg.getDeleteCustomerAppData()) && proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.toObject(includeInstance, f),
    sendMessage: (f = msg.getSendMessage()) && proto.com.elarian.hera.proto.SendMessageCommand.toObject(includeInstance, f),
    sendMessageTag: (f = msg.getSendMessageTag()) && proto.com.elarian.hera.proto.SendMessageTagCommand.toObject(includeInstance, f),
    replyToMessage: (f = msg.getReplyToMessage()) && proto.com.elarian.hera.proto.ReplyToMessageCommand.toObject(includeInstance, f),
    updateMessagingConsent: (f = msg.getUpdateMessagingConsent()) && proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.toObject(includeInstance, f),
    initiatePayment: (f = msg.getInitiatePayment()) && proto.com.elarian.hera.proto.InitiatePaymentCommand.toObject(includeInstance, f),
    customerActivity: (f = msg.getCustomerActivity()) && proto.com.elarian.hera.proto.CustomerActivityCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AppToServerCommand;
  return proto.com.elarian.hera.proto.AppToServerCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AppToServerCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.GenerateAuthTokenCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.GenerateAuthTokenCommand.deserializeBinaryFromReader);
      msg.setGenerateAuthToken(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CreateCustomerCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.CreateCustomerCommand.deserializeBinaryFromReader);
      msg.setCreateCustomer(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.GetCustomerStateCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetCustomerStateCommand.deserializeBinaryFromReader);
      msg.setGetCustomerState(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.AdoptCustomerStateCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.AdoptCustomerStateCommand.deserializeBinaryFromReader);
      msg.setAdoptCustomerState(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.AddCustomerReminderCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.AddCustomerReminderCommand.deserializeBinaryFromReader);
      msg.setAddCustomerReminder(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.AddCustomerReminderTagCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.deserializeBinaryFromReader);
      msg.setAddCustomerReminderTag(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.CancelCustomerReminderCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.CancelCustomerReminderCommand.deserializeBinaryFromReader);
      msg.setCancelCustomerReminder(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.deserializeBinaryFromReader);
      msg.setCancelCustomerReminderTag(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerTagCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerTagCommand.deserializeBinaryFromReader);
      msg.setUpdateCustomerTag(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.DeleteCustomerTagCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.DeleteCustomerTagCommand.deserializeBinaryFromReader);
      msg.setDeleteCustomerTag(value);
      break;
    case 11:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.deserializeBinaryFromReader);
      msg.setUpdateCustomerSecondaryId(value);
      break;
    case 12:
      var value = new proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.deserializeBinaryFromReader);
      msg.setDeleteCustomerSecondaryId(value);
      break;
    case 13:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.deserializeBinaryFromReader);
      msg.setUpdateCustomerMetadata(value);
      break;
    case 14:
      var value = new proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.deserializeBinaryFromReader);
      msg.setDeleteCustomerMetadata(value);
      break;
    case 15:
      var value = new proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.deserializeBinaryFromReader);
      msg.setLeaseCustomerAppData(value);
      break;
    case 16:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.deserializeBinaryFromReader);
      msg.setUpdateCustomerAppData(value);
      break;
    case 17:
      var value = new proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.deserializeBinaryFromReader);
      msg.setDeleteCustomerAppData(value);
      break;
    case 18:
      var value = new proto.com.elarian.hera.proto.SendMessageCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.SendMessageCommand.deserializeBinaryFromReader);
      msg.setSendMessage(value);
      break;
    case 19:
      var value = new proto.com.elarian.hera.proto.SendMessageTagCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.SendMessageTagCommand.deserializeBinaryFromReader);
      msg.setSendMessageTag(value);
      break;
    case 20:
      var value = new proto.com.elarian.hera.proto.ReplyToMessageCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReplyToMessageCommand.deserializeBinaryFromReader);
      msg.setReplyToMessage(value);
      break;
    case 21:
      var value = new proto.com.elarian.hera.proto.UpdateMessagingConsentCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.deserializeBinaryFromReader);
      msg.setUpdateMessagingConsent(value);
      break;
    case 22:
      var value = new proto.com.elarian.hera.proto.InitiatePaymentCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.InitiatePaymentCommand.deserializeBinaryFromReader);
      msg.setInitiatePayment(value);
      break;
    case 23:
      var value = new proto.com.elarian.hera.proto.CustomerActivityCommand;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerActivityCommand.deserializeBinaryFromReader);
      msg.setCustomerActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AppToServerCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AppToServerCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppToServerCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateAuthToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.GenerateAuthTokenCommand.serializeBinaryToWriter
    );
  }
  f = message.getCreateCustomer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CreateCustomerCommand.serializeBinaryToWriter
    );
  }
  f = message.getGetCustomerState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.GetCustomerStateCommand.serializeBinaryToWriter
    );
  }
  f = message.getAdoptCustomerState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.AdoptCustomerStateCommand.serializeBinaryToWriter
    );
  }
  f = message.getAddCustomerReminder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.AddCustomerReminderCommand.serializeBinaryToWriter
    );
  }
  f = message.getAddCustomerReminderTag();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.serializeBinaryToWriter
    );
  }
  f = message.getCancelCustomerReminder();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.CancelCustomerReminderCommand.serializeBinaryToWriter
    );
  }
  f = message.getCancelCustomerReminderTag();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerTag();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerTagCommand.serializeBinaryToWriter
    );
  }
  f = message.getDeleteCustomerTag();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.DeleteCustomerTagCommand.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerSecondaryId();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.serializeBinaryToWriter
    );
  }
  f = message.getDeleteCustomerSecondaryId();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerMetadata();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.serializeBinaryToWriter
    );
  }
  f = message.getDeleteCustomerMetadata();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.serializeBinaryToWriter
    );
  }
  f = message.getLeaseCustomerAppData();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerAppData();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.serializeBinaryToWriter
    );
  }
  f = message.getDeleteCustomerAppData();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.serializeBinaryToWriter
    );
  }
  f = message.getSendMessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.com.elarian.hera.proto.SendMessageCommand.serializeBinaryToWriter
    );
  }
  f = message.getSendMessageTag();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.com.elarian.hera.proto.SendMessageTagCommand.serializeBinaryToWriter
    );
  }
  f = message.getReplyToMessage();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.com.elarian.hera.proto.ReplyToMessageCommand.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMessagingConsent();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.serializeBinaryToWriter
    );
  }
  f = message.getInitiatePayment();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.com.elarian.hera.proto.InitiatePaymentCommand.serializeBinaryToWriter
    );
  }
  f = message.getCustomerActivity();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.com.elarian.hera.proto.CustomerActivityCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateAuthTokenCommand generate_auth_token = 1;
 * @return {?proto.com.elarian.hera.proto.GenerateAuthTokenCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getGenerateAuthToken = function() {
  return /** @type{?proto.com.elarian.hera.proto.GenerateAuthTokenCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GenerateAuthTokenCommand, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.GenerateAuthTokenCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setGenerateAuthToken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearGenerateAuthToken = function() {
  return this.setGenerateAuthToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasGenerateAuthToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CreateCustomerCommand create_customer = 2;
 * @return {?proto.com.elarian.hera.proto.CreateCustomerCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getCreateCustomer = function() {
  return /** @type{?proto.com.elarian.hera.proto.CreateCustomerCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CreateCustomerCommand, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CreateCustomerCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setCreateCustomer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearCreateCustomer = function() {
  return this.setCreateCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasCreateCustomer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetCustomerStateCommand get_customer_state = 3;
 * @return {?proto.com.elarian.hera.proto.GetCustomerStateCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getGetCustomerState = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetCustomerStateCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetCustomerStateCommand, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetCustomerStateCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setGetCustomerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearGetCustomerState = function() {
  return this.setGetCustomerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasGetCustomerState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdoptCustomerStateCommand adopt_customer_state = 4;
 * @return {?proto.com.elarian.hera.proto.AdoptCustomerStateCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getAdoptCustomerState = function() {
  return /** @type{?proto.com.elarian.hera.proto.AdoptCustomerStateCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.AdoptCustomerStateCommand, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.AdoptCustomerStateCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setAdoptCustomerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearAdoptCustomerState = function() {
  return this.setAdoptCustomerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasAdoptCustomerState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AddCustomerReminderCommand add_customer_reminder = 5;
 * @return {?proto.com.elarian.hera.proto.AddCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getAddCustomerReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.AddCustomerReminderCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.AddCustomerReminderCommand, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.AddCustomerReminderCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setAddCustomerReminder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearAddCustomerReminder = function() {
  return this.setAddCustomerReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasAddCustomerReminder = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AddCustomerReminderTagCommand add_customer_reminder_tag = 6;
 * @return {?proto.com.elarian.hera.proto.AddCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getAddCustomerReminderTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.AddCustomerReminderTagCommand, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.AddCustomerReminderTagCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setAddCustomerReminderTag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearAddCustomerReminderTag = function() {
  return this.setAddCustomerReminderTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasAddCustomerReminderTag = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CancelCustomerReminderCommand cancel_customer_reminder = 7;
 * @return {?proto.com.elarian.hera.proto.CancelCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getCancelCustomerReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CancelCustomerReminderCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CancelCustomerReminderCommand, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.CancelCustomerReminderCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setCancelCustomerReminder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearCancelCustomerReminder = function() {
  return this.setCancelCustomerReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasCancelCustomerReminder = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CancelCustomerReminderTagCommand cancel_customer_reminder_tag = 8;
 * @return {?proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getCancelCustomerReminderTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setCancelCustomerReminderTag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearCancelCustomerReminderTag = function() {
  return this.setCancelCustomerReminderTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasCancelCustomerReminderTag = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional UpdateCustomerTagCommand update_customer_tag = 9;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerTagCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getUpdateCustomerTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerTagCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerTagCommand, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerTagCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setUpdateCustomerTag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearUpdateCustomerTag = function() {
  return this.setUpdateCustomerTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasUpdateCustomerTag = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DeleteCustomerTagCommand delete_customer_tag = 10;
 * @return {?proto.com.elarian.hera.proto.DeleteCustomerTagCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getDeleteCustomerTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.DeleteCustomerTagCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DeleteCustomerTagCommand, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.DeleteCustomerTagCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setDeleteCustomerTag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearDeleteCustomerTag = function() {
  return this.setDeleteCustomerTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasDeleteCustomerTag = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional UpdateCustomerSecondaryIdCommand update_customer_secondary_id = 11;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getUpdateCustomerSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand, 11));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setUpdateCustomerSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearUpdateCustomerSecondaryId = function() {
  return this.setUpdateCustomerSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasUpdateCustomerSecondaryId = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DeleteCustomerSecondaryIdCommand delete_customer_secondary_id = 12;
 * @return {?proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getDeleteCustomerSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand, 12));
};


/**
 * @param {?proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setDeleteCustomerSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearDeleteCustomerSecondaryId = function() {
  return this.setDeleteCustomerSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasDeleteCustomerSecondaryId = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional UpdateCustomerMetadataCommand update_customer_metadata = 13;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getUpdateCustomerMetadata = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand, 13));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setUpdateCustomerMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearUpdateCustomerMetadata = function() {
  return this.setUpdateCustomerMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasUpdateCustomerMetadata = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional DeleteCustomerMetadataCommand delete_customer_metadata = 14;
 * @return {?proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getDeleteCustomerMetadata = function() {
  return /** @type{?proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand, 14));
};


/**
 * @param {?proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setDeleteCustomerMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearDeleteCustomerMetadata = function() {
  return this.setDeleteCustomerMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasDeleteCustomerMetadata = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional LeaseCustomerAppDataCommand lease_customer_app_data = 15;
 * @return {?proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getLeaseCustomerAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand, 15));
};


/**
 * @param {?proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setLeaseCustomerAppData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearLeaseCustomerAppData = function() {
  return this.setLeaseCustomerAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasLeaseCustomerAppData = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional UpdateCustomerAppDataCommand update_customer_app_data = 16;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getUpdateCustomerAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand, 16));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setUpdateCustomerAppData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearUpdateCustomerAppData = function() {
  return this.setUpdateCustomerAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasUpdateCustomerAppData = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DeleteCustomerAppDataCommand delete_customer_app_data = 17;
 * @return {?proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getDeleteCustomerAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand, 17));
};


/**
 * @param {?proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setDeleteCustomerAppData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearDeleteCustomerAppData = function() {
  return this.setDeleteCustomerAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasDeleteCustomerAppData = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional SendMessageCommand send_message = 18;
 * @return {?proto.com.elarian.hera.proto.SendMessageCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getSendMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.SendMessageCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SendMessageCommand, 18));
};


/**
 * @param {?proto.com.elarian.hera.proto.SendMessageCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setSendMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearSendMessage = function() {
  return this.setSendMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasSendMessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional SendMessageTagCommand send_message_tag = 19;
 * @return {?proto.com.elarian.hera.proto.SendMessageTagCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getSendMessageTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.SendMessageTagCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SendMessageTagCommand, 19));
};


/**
 * @param {?proto.com.elarian.hera.proto.SendMessageTagCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setSendMessageTag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearSendMessageTag = function() {
  return this.setSendMessageTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasSendMessageTag = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ReplyToMessageCommand reply_to_message = 20;
 * @return {?proto.com.elarian.hera.proto.ReplyToMessageCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getReplyToMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReplyToMessageCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReplyToMessageCommand, 20));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReplyToMessageCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setReplyToMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearReplyToMessage = function() {
  return this.setReplyToMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasReplyToMessage = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional UpdateMessagingConsentCommand update_messaging_consent = 21;
 * @return {?proto.com.elarian.hera.proto.UpdateMessagingConsentCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getUpdateMessagingConsent = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateMessagingConsentCommand, 21));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateMessagingConsentCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setUpdateMessagingConsent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearUpdateMessagingConsent = function() {
  return this.setUpdateMessagingConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasUpdateMessagingConsent = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional InitiatePaymentCommand initiate_payment = 22;
 * @return {?proto.com.elarian.hera.proto.InitiatePaymentCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getInitiatePayment = function() {
  return /** @type{?proto.com.elarian.hera.proto.InitiatePaymentCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.InitiatePaymentCommand, 22));
};


/**
 * @param {?proto.com.elarian.hera.proto.InitiatePaymentCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setInitiatePayment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearInitiatePayment = function() {
  return this.setInitiatePayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasInitiatePayment = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional CustomerActivityCommand customer_activity = 23;
 * @return {?proto.com.elarian.hera.proto.CustomerActivityCommand}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.getCustomerActivity = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerActivityCommand} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerActivityCommand, 23));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerActivityCommand|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommand.prototype.setCustomerActivity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.com.elarian.hera.proto.AppToServerCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommand} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.clearCustomerActivity = function() {
  return this.setCustomerActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommand.prototype.hasCustomerActivity = function() {
  return jspb.Message.getField(this, 23) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.EntryCase = {
  ENTRY_NOT_SET: 0,
  GENERATE_AUTH_TOKEN: 1,
  GET_CUSTOMER_STATE: 2,
  UPDATE_CUSTOMER_STATE: 3,
  UPDATE_CUSTOMER_APP_DATA: 4,
  LEASE_CUSTOMER_APP_DATA: 5,
  SEND_MESSAGE: 6,
  UPDATE_MESSAGING_CONSENT: 7,
  INITIATE_PAYMENT: 8,
  TAG_COMMAND: 9,
  CUSTOMER_ACTIVITY: 10
};

/**
 * @return {proto.com.elarian.hera.proto.AppToServerCommandReply.EntryCase}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AppToServerCommandReply.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AppToServerCommandReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AppToServerCommandReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    generateAuthToken: (f = msg.getGenerateAuthToken()) && proto.com.elarian.hera.proto.GenerateAuthTokenReply.toObject(includeInstance, f),
    getCustomerState: (f = msg.getGetCustomerState()) && proto.com.elarian.hera.proto.GetCustomerStateReply.toObject(includeInstance, f),
    updateCustomerState: (f = msg.getUpdateCustomerState()) && proto.com.elarian.hera.proto.UpdateCustomerStateReply.toObject(includeInstance, f),
    updateCustomerAppData: (f = msg.getUpdateCustomerAppData()) && proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.toObject(includeInstance, f),
    leaseCustomerAppData: (f = msg.getLeaseCustomerAppData()) && proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.toObject(includeInstance, f),
    sendMessage: (f = msg.getSendMessage()) && proto.com.elarian.hera.proto.SendMessageReply.toObject(includeInstance, f),
    updateMessagingConsent: (f = msg.getUpdateMessagingConsent()) && proto.com.elarian.hera.proto.UpdateMessagingConsentReply.toObject(includeInstance, f),
    initiatePayment: (f = msg.getInitiatePayment()) && proto.com.elarian.hera.proto.InitiatePaymentReply.toObject(includeInstance, f),
    tagCommand: (f = msg.getTagCommand()) && proto.com.elarian.hera.proto.TagCommandReply.toObject(includeInstance, f),
    customerActivity: (f = msg.getCustomerActivity()) && proto.com.elarian.hera.proto.CustomerActivityReply.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AppToServerCommandReply;
  return proto.com.elarian.hera.proto.AppToServerCommandReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AppToServerCommandReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.GenerateAuthTokenReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.GenerateAuthTokenReply.deserializeBinaryFromReader);
      msg.setGenerateAuthToken(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.GetCustomerStateReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetCustomerStateReply.deserializeBinaryFromReader);
      msg.setGetCustomerState(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerStateReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerStateReply.deserializeBinaryFromReader);
      msg.setUpdateCustomerState(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.UpdateCustomerAppDataReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.deserializeBinaryFromReader);
      msg.setUpdateCustomerAppData(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.LeaseCustomerAppDataReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.deserializeBinaryFromReader);
      msg.setLeaseCustomerAppData(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.SendMessageReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.SendMessageReply.deserializeBinaryFromReader);
      msg.setSendMessage(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.UpdateMessagingConsentReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.UpdateMessagingConsentReply.deserializeBinaryFromReader);
      msg.setUpdateMessagingConsent(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.InitiatePaymentReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.InitiatePaymentReply.deserializeBinaryFromReader);
      msg.setInitiatePayment(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.TagCommandReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.TagCommandReply.deserializeBinaryFromReader);
      msg.setTagCommand(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.CustomerActivityReply;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerActivityReply.deserializeBinaryFromReader);
      msg.setCustomerActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AppToServerCommandReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AppToServerCommandReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateAuthToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.GenerateAuthTokenReply.serializeBinaryToWriter
    );
  }
  f = message.getGetCustomerState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.GetCustomerStateReply.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerStateReply.serializeBinaryToWriter
    );
  }
  f = message.getUpdateCustomerAppData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.serializeBinaryToWriter
    );
  }
  f = message.getLeaseCustomerAppData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.serializeBinaryToWriter
    );
  }
  f = message.getSendMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.SendMessageReply.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMessagingConsent();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.UpdateMessagingConsentReply.serializeBinaryToWriter
    );
  }
  f = message.getInitiatePayment();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.InitiatePaymentReply.serializeBinaryToWriter
    );
  }
  f = message.getTagCommand();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.TagCommandReply.serializeBinaryToWriter
    );
  }
  f = message.getCustomerActivity();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.CustomerActivityReply.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateAuthTokenReply generate_auth_token = 1;
 * @return {?proto.com.elarian.hera.proto.GenerateAuthTokenReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getGenerateAuthToken = function() {
  return /** @type{?proto.com.elarian.hera.proto.GenerateAuthTokenReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GenerateAuthTokenReply, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.GenerateAuthTokenReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setGenerateAuthToken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearGenerateAuthToken = function() {
  return this.setGenerateAuthToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasGenerateAuthToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetCustomerStateReply get_customer_state = 2;
 * @return {?proto.com.elarian.hera.proto.GetCustomerStateReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getGetCustomerState = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetCustomerStateReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetCustomerStateReply, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetCustomerStateReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setGetCustomerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearGetCustomerState = function() {
  return this.setGetCustomerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasGetCustomerState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UpdateCustomerStateReply update_customer_state = 3;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerStateReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getUpdateCustomerState = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerStateReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerStateReply, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerStateReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setUpdateCustomerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearUpdateCustomerState = function() {
  return this.setUpdateCustomerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasUpdateCustomerState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UpdateCustomerAppDataReply update_customer_app_data = 4;
 * @return {?proto.com.elarian.hera.proto.UpdateCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getUpdateCustomerAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateCustomerAppDataReply, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateCustomerAppDataReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setUpdateCustomerAppData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearUpdateCustomerAppData = function() {
  return this.setUpdateCustomerAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasUpdateCustomerAppData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LeaseCustomerAppDataReply lease_customer_app_data = 5;
 * @return {?proto.com.elarian.hera.proto.LeaseCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getLeaseCustomerAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LeaseCustomerAppDataReply, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.LeaseCustomerAppDataReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setLeaseCustomerAppData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearLeaseCustomerAppData = function() {
  return this.setLeaseCustomerAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasLeaseCustomerAppData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SendMessageReply send_message = 6;
 * @return {?proto.com.elarian.hera.proto.SendMessageReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getSendMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.SendMessageReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SendMessageReply, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.SendMessageReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setSendMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearSendMessage = function() {
  return this.setSendMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasSendMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional UpdateMessagingConsentReply update_messaging_consent = 7;
 * @return {?proto.com.elarian.hera.proto.UpdateMessagingConsentReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getUpdateMessagingConsent = function() {
  return /** @type{?proto.com.elarian.hera.proto.UpdateMessagingConsentReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UpdateMessagingConsentReply, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.UpdateMessagingConsentReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setUpdateMessagingConsent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearUpdateMessagingConsent = function() {
  return this.setUpdateMessagingConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasUpdateMessagingConsent = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional InitiatePaymentReply initiate_payment = 8;
 * @return {?proto.com.elarian.hera.proto.InitiatePaymentReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getInitiatePayment = function() {
  return /** @type{?proto.com.elarian.hera.proto.InitiatePaymentReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.InitiatePaymentReply, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.InitiatePaymentReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setInitiatePayment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearInitiatePayment = function() {
  return this.setInitiatePayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasInitiatePayment = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TagCommandReply tag_command = 9;
 * @return {?proto.com.elarian.hera.proto.TagCommandReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getTagCommand = function() {
  return /** @type{?proto.com.elarian.hera.proto.TagCommandReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.TagCommandReply, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.TagCommandReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setTagCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearTagCommand = function() {
  return this.setTagCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasTagCommand = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CustomerActivityReply customer_activity = 10;
 * @return {?proto.com.elarian.hera.proto.CustomerActivityReply}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.getCustomerActivity = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerActivityReply} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerActivityReply, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerActivityReply|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
*/
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.setCustomerActivity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.AppToServerCommandReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppToServerCommandReply} returns this
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.clearCustomerActivity = function() {
  return this.setCustomerActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppToServerCommandReply.prototype.hasCustomerActivity = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GenerateAuthTokenCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenCommand}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GenerateAuthTokenCommand;
  return proto.com.elarian.hera.proto.GenerateAuthTokenCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenCommand}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GenerateAuthTokenCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GenerateAuthTokenCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GenerateAuthTokenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lifetime: (f = msg.getLifetime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenReply}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GenerateAuthTokenReply;
  return proto.com.elarian.hera.proto.GenerateAuthTokenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenReply}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLifetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GenerateAuthTokenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLifetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} returns this
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration lifetime = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.getLifetime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} returns this
*/
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.setLifetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GenerateAuthTokenReply} returns this
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.clearLifetime = function() {
  return this.setLifetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GenerateAuthTokenReply.prototype.hasLifetime = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CreateCustomerCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CreateCustomerCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CreateCustomerCommand}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CreateCustomerCommand;
  return proto.com.elarian.hera.proto.CreateCustomerCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CreateCustomerCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CreateCustomerCommand}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CreateCustomerCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CreateCustomerCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CreateCustomerCommand} returns this
*/
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CreateCustomerCommand} returns this
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CreateCustomerCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.GetCustomerStateCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetCustomerStateCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetCustomerStateCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetCustomerStateCommand;
  return proto.com.elarian.hera.proto.GetCustomerStateCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetCustomerStateCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
*/
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
*/
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.GetCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetCustomerStateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.com.elarian.hera.proto.CustomerStateReplyData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetCustomerStateReply;
  return proto.com.elarian.hera.proto.GetCustomerStateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.CustomerStateReplyData;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerStateReplyData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetCustomerStateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.CustomerStateReplyData.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerStateReplyData data = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerStateReplyData}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.getData = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerStateReplyData} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerStateReplyData, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerStateReplyData|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply} returns this
*/
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerStateReplyData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerStateReplyData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    identityState: (f = msg.getIdentityState()) && identity_state_pb.IdentityState.toObject(includeInstance, f),
    messagingState: (f = msg.getMessagingState()) && messaging_state_pb.MessagingState.toObject(includeInstance, f),
    paymentState: (f = msg.getPaymentState()) && payment_state_pb.PaymentState.toObject(includeInstance, f),
    activityState: (f = msg.getActivityState()) && activity_state_pb.ActivityState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerStateReplyData;
  return proto.com.elarian.hera.proto.CustomerStateReplyData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerStateReplyData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new identity_state_pb.IdentityState;
      reader.readMessage(value,identity_state_pb.IdentityState.deserializeBinaryFromReader);
      msg.setIdentityState(value);
      break;
    case 3:
      var value = new messaging_state_pb.MessagingState;
      reader.readMessage(value,messaging_state_pb.MessagingState.deserializeBinaryFromReader);
      msg.setMessagingState(value);
      break;
    case 4:
      var value = new payment_state_pb.PaymentState;
      reader.readMessage(value,payment_state_pb.PaymentState.deserializeBinaryFromReader);
      msg.setPaymentState(value);
      break;
    case 5:
      var value = new activity_state_pb.ActivityState;
      reader.readMessage(value,activity_state_pb.ActivityState.deserializeBinaryFromReader);
      msg.setActivityState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerStateReplyData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerStateReplyData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdentityState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      identity_state_pb.IdentityState.serializeBinaryToWriter
    );
  }
  f = message.getMessagingState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_state_pb.MessagingState.serializeBinaryToWriter
    );
  }
  f = message.getPaymentState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payment_state_pb.PaymentState.serializeBinaryToWriter
    );
  }
  f = message.getActivityState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      activity_state_pb.ActivityState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IdentityState identity_state = 2;
 * @return {?proto.com.elarian.hera.proto.IdentityState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getIdentityState = function() {
  return /** @type{?proto.com.elarian.hera.proto.IdentityState} */ (
    jspb.Message.getWrapperField(this, identity_state_pb.IdentityState, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.IdentityState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setIdentityState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearIdentityState = function() {
  return this.setIdentityState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasIdentityState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingState messaging_state = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getMessagingState = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingState} */ (
    jspb.Message.getWrapperField(this, messaging_state_pb.MessagingState, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setMessagingState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearMessagingState = function() {
  return this.setMessagingState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasMessagingState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PaymentState payment_state = 4;
 * @return {?proto.com.elarian.hera.proto.PaymentState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getPaymentState = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentState} */ (
    jspb.Message.getWrapperField(this, payment_state_pb.PaymentState, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setPaymentState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearPaymentState = function() {
  return this.setPaymentState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasPaymentState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ActivityState activity_state = 5;
 * @return {?proto.com.elarian.hera.proto.ActivityState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getActivityState = function() {
  return /** @type{?proto.com.elarian.hera.proto.ActivityState} */ (
    jspb.Message.getWrapperField(this, activity_state_pb.ActivityState, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.ActivityState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setActivityState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearActivityState = function() {
  return this.setActivityState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasActivityState = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.OtherCustomerCase = {
  OTHER_CUSTOMER_NOT_SET: 0,
  OTHER_CUSTOMER_ID: 2,
  OTHER_CUSTOMER_NUMBER: 3,
  OTHER_SECONDARY_ID: 4
};

/**
 * @return {proto.com.elarian.hera.proto.AdoptCustomerStateCommand.OtherCustomerCase}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.getOtherCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AdoptCustomerStateCommand.OtherCustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AdoptCustomerStateCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    otherCustomerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    otherCustomerNumber: (f = msg.getOtherCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    otherSecondaryId: (f = msg.getOtherSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AdoptCustomerStateCommand;
  return proto.com.elarian.hera.proto.AdoptCustomerStateCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherCustomerId(value);
      break;
    case 3:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setOtherCustomerNumber(value);
      break;
    case 4:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setOtherSecondaryId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AdoptCustomerStateCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOtherCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getOtherSecondaryId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string other_customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.getOtherCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.setOtherCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.clearOtherCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.hasOtherCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber other_customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.getOtherCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
*/
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.setOtherCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.clearOtherCustomerNumber = function() {
  return this.setOtherCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.hasOtherCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional IndexMapping other_secondary_id = 4;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.getOtherSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
*/
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.setOtherSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.AdoptCustomerStateCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateCommand} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.clearOtherSecondaryId = function() {
  return this.setOtherSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateCommand.prototype.hasOtherSecondaryId = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.AddCustomerReminderCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AddCustomerReminderCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AddCustomerReminderCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && app_model_pb.CustomerReminder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AddCustomerReminderCommand;
  return proto.com.elarian.hera.proto.AddCustomerReminderCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = new app_model_pb.CustomerReminder;
      reader.readMessage(value,app_model_pb.CustomerReminder.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AddCustomerReminderCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      app_model_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.AddCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerReminder reminder = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, app_model_pb.CustomerReminder, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderCommand.prototype.hasReminder = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: (f = msg.getTag()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && app_model_pb.CustomerReminder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AddCustomerReminderTagCommand;
  return proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 2:
      var value = new app_model_pb.CustomerReminder;
      reader.readMessage(value,app_model_pb.CustomerReminder.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      app_model_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexMapping tag = 1;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.hasTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerReminder reminder = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, app_model_pb.CustomerReminder, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagCommand} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagCommand.prototype.hasReminder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.CancelCustomerReminderCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.CancelCustomerReminderCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CancelCustomerReminderCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CancelCustomerReminderCommand;
  return proto.com.elarian.hera.proto.CancelCustomerReminderCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CancelCustomerReminderCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
*/
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
*/
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.CancelCustomerReminderCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderCommand.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: (f = msg.getTag()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand;
  return proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional IndexMapping tag = 1;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} returns this
*/
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.hasTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagCommand.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerTagCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerTagCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerTagCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    common_model_pb.CustomerIndex.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerTagCommand;
  return proto.com.elarian.hera.proto.UpdateCustomerTagCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = new common_model_pb.CustomerIndex;
      reader.readMessage(value,common_model_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerTagCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_model_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CustomerIndex updates = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_model_pb.CustomerIndex, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagCommand.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerTagCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerTagCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerTagCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    deletionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerTagCommand;
  return proto.com.elarian.hera.proto.DeleteCustomerTagCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeletions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerTagCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getDeletionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerTagCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string deletions = 4;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.getDeletionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.setDeletionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.addDeletions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagCommand.prototype.clearDeletionsList = function() {
  return this.setDeletionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    common_model_pb.CustomerIndex.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand;
  return proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = new common_model_pb.CustomerIndex;
      reader.readMessage(value,common_model_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_model_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CustomerIndex updates = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_model_pb.CustomerIndex, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdCommand.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    deletionsList: jspb.Message.toObjectList(msg.getDeletionsList(),
    common_model_pb.IndexMapping.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand;
  return proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.addDeletions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getDeletionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated IndexMapping deletions = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.IndexMapping>}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.getDeletionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.IndexMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_model_pb.IndexMapping, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.IndexMapping>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.setDeletionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.IndexMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.addDeletions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.IndexMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdCommand.prototype.clearDeletionsList = function() {
  return this.setDeletionsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    updatesMap: (f = msg.getUpdatesMap()) ? f.toObject(includeInstance, proto.com.elarian.hera.proto.DataMapValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand;
  return proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = msg.getUpdatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.com.elarian.hera.proto.DataMapValue.deserializeBinaryFromReader, "", new proto.com.elarian.hera.proto.DataMapValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getUpdatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.com.elarian.hera.proto.DataMapValue.serializeBinaryToWriter);
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, DataMapValue> updates = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.com.elarian.hera.proto.DataMapValue>}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.getUpdatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.com.elarian.hera.proto.DataMapValue>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.com.elarian.hera.proto.DataMapValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataCommand.prototype.clearUpdatesMap = function() {
  this.getUpdatesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    deletionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand;
  return proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeletions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getDeletionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string deletions = 4;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.getDeletionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.setDeletionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.addDeletions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataCommand.prototype.clearDeletionsList = function() {
  return this.setDeletionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerStateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerStateReply;
  return proto.com.elarian.hera.proto.UpdateCustomerStateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerStateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerStateReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerStateReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && common_model_pb.DataMapValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand;
  return proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    case 4:
      var value = new common_model_pb.DataMapValue;
      reader.readMessage(value,common_model_pb.DataMapValue.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_model_pb.DataMapValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataMapValue update = 4;
 * @return {?proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.getUpdate = function() {
  return /** @type{?proto.com.elarian.hera.proto.DataMapValue} */ (
    jspb.Message.getWrapperField(this, common_model_pb.DataMapValue, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.DataMapValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataCommand.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand;
  return proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerAppDataCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerAppDataReply;
  return proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerAppDataReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 1,
  CUSTOMER_NUMBER: 2,
  SECONDARY_ID: 3
};

/**
 * @return {proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.CustomerCase}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryId: (f = msg.getSecondaryId()) && common_model_pb.IndexMapping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand;
  return proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setSecondaryId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexMapping secondary_id = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.getSecondaryId = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
*/
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.setSecondaryId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.clearSecondaryId = function() {
  return this.setSecondaryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataCommand.prototype.hasSecondaryId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_model_pb.DataMapValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.LeaseCustomerAppDataReply;
  return proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    case 4:
      var value = new common_model_pb.DataMapValue;
      reader.readMessage(value,common_model_pb.DataMapValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_model_pb.DataMapValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
*/
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataMapValue value = 4;
 * @return {?proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.DataMapValue} */ (
    jspb.Message.getWrapperField(this, common_model_pb.DataMapValue, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.DataMapValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
*/
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LeaseCustomerAppDataReply} returns this
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LeaseCustomerAppDataReply.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendMessageCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendMessageCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && messaging_model_pb.OutboundMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand}
 */
proto.com.elarian.hera.proto.SendMessageCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendMessageCommand;
  return proto.com.elarian.hera.proto.SendMessageCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendMessageCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand}
 */
proto.com.elarian.hera.proto.SendMessageCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = new messaging_model_pb.OutboundMessage;
      reader.readMessage(value,messaging_model_pb.OutboundMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendMessageCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendMessageCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_model_pb.OutboundMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageCommand.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OutboundMessage message = 3;
 * @return {?proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.getMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessage} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.OutboundMessage, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessage|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageCommand.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageCommand.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ReplyToMessageCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: (f = msg.getMessage()) && messaging_model_pb.OutboundMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ReplyToMessageCommand;
  return proto.com.elarian.hera.proto.ReplyToMessageCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 3:
      var value = new messaging_model_pb.OutboundMessage;
      reader.readMessage(value,messaging_model_pb.OutboundMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ReplyToMessageCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_model_pb.OutboundMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OutboundMessage message = 3;
 * @return {?proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.getMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessage} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.OutboundMessage, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessage|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand} returns this
*/
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageCommand} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReplyToMessageCommand.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendMessageTagCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendMessageTagCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: (f = msg.getTag()) && common_model_pb.IndexMapping.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && messaging_model_pb.OutboundMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendMessageTagCommand;
  return proto.com.elarian.hera.proto.SendMessageTagCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendMessageTagCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.IndexMapping;
      reader.readMessage(value,common_model_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = new messaging_model_pb.OutboundMessage;
      reader.readMessage(value,messaging_model_pb.OutboundMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendMessageTagCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendMessageTagCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_model_pb.OutboundMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexMapping tag = 1;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_model_pb.IndexMapping, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.hasTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OutboundMessage message = 3;
 * @return {?proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.getMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessage} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.OutboundMessage, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessage|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagCommand} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagCommand.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messageId: (f = msg.getMessageId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    sessionId: (f = msg.getSessionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.SendMessageReply}
 */
proto.com.elarian.hera.proto.SendMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendMessageReply;
  return proto.com.elarian.hera.proto.SendMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendMessageReply}
 */
proto.com.elarian.hera.proto.SendMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setMessageId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSessionId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageDeliveryStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.MessageDeliveryStatus}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageDeliveryStatus} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue message_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getMessageId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
*/
proto.com.elarian.hera.proto.SendMessageReply.prototype.setMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.clearMessageId = function() {
  return this.setMessageId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue session_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getSessionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
*/
proto.com.elarian.hera.proto.SendMessageReply.prototype.setSessionId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.clearSessionId = function() {
  return this.setSessionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue customer_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
*/
proto.com.elarian.hera.proto.SendMessageReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    update: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateMessagingConsentCommand;
  return proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdate} */ (reader.readEnum());
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} returns this
*/
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingConsentUpdate update = 3;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdate}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.getUpdate = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdate} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdate} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentCommand} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentCommand.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateMessagingConsentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateMessagingConsentReply;
  return proto.com.elarian.hera.proto.UpdateMessagingConsentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateMessagingConsentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessagingConsentUpdateStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} returns this
*/
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateMessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateMessagingConsentReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.InitiatePaymentCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    debitParty: (f = msg.getDebitParty()) && payment_model_pb.PaymentCounterParty.toObject(includeInstance, f),
    creditParty: (f = msg.getCreditParty()) && payment_model_pb.PaymentCounterParty.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_model_pb.Cash.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.InitiatePaymentCommand;
  return proto.com.elarian.hera.proto.InitiatePaymentCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_model_pb.PaymentCounterParty;
      reader.readMessage(value,payment_model_pb.PaymentCounterParty.deserializeBinaryFromReader);
      msg.setDebitParty(value);
      break;
    case 2:
      var value = new payment_model_pb.PaymentCounterParty;
      reader.readMessage(value,payment_model_pb.PaymentCounterParty.deserializeBinaryFromReader);
      msg.setCreditParty(value);
      break;
    case 3:
      var value = new common_model_pb.Cash;
      reader.readMessage(value,common_model_pb.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.InitiatePaymentCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebitParty();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_model_pb.PaymentCounterParty.serializeBinaryToWriter
    );
  }
  f = message.getCreditParty();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payment_model_pb.PaymentCounterParty.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.Cash.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentCounterParty debit_party = 1;
 * @return {?proto.com.elarian.hera.proto.PaymentCounterParty}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.getDebitParty = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentCounterParty} */ (
    jspb.Message.getWrapperField(this, payment_model_pb.PaymentCounterParty, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.setDebitParty = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.clearDebitParty = function() {
  return this.setDebitParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.hasDebitParty = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentCounterParty credit_party = 2;
 * @return {?proto.com.elarian.hera.proto.PaymentCounterParty}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.getCreditParty = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentCounterParty} */ (
    jspb.Message.getWrapperField(this, payment_model_pb.PaymentCounterParty, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.setCreditParty = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.clearCreditParty = function() {
  return this.setCreditParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.hasCreditParty = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Cash value = 3;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_model_pb.Cash, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentCommand} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentCommand.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.InitiatePaymentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: (f = msg.getTransactionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    debitCustomerId: (f = msg.getDebitCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    creditCustomerId: (f = msg.getCreditCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.InitiatePaymentReply;
  return proto.com.elarian.hera.proto.InitiatePaymentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTransactionId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDebitCustomerId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCreditCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.InitiatePaymentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.InitiatePaymentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDebitCustomerId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCreditCustomerId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue transaction_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.getTransactionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.setTransactionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.clearTransactionId = function() {
  return this.setTransactionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue debit_customer_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.getDebitCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.setDebitCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.clearDebitCustomerId = function() {
  return this.setDebitCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.hasDebitCustomerId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue credit_customer_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.getCreditCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
*/
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.setCreditCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InitiatePaymentReply} returns this
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.clearCreditCustomerId = function() {
  return this.setCreditCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InitiatePaymentReply.prototype.hasCreditCustomerId = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.TagCommandReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.TagCommandReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TagCommandReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workId: (f = msg.getWorkId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.TagCommandReply}
 */
proto.com.elarian.hera.proto.TagCommandReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.TagCommandReply;
  return proto.com.elarian.hera.proto.TagCommandReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.TagCommandReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.TagCommandReply}
 */
proto.com.elarian.hera.proto.TagCommandReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWorkId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.TagCommandReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.TagCommandReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TagCommandReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.TagCommandReply} returns this
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.TagCommandReply} returns this
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue work_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.getWorkId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.TagCommandReply} returns this
*/
proto.com.elarian.hera.proto.TagCommandReply.prototype.setWorkId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.TagCommandReply} returns this
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.clearWorkId = function() {
  return this.setWorkId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.TagCommandReply.prototype.hasWorkId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerActivityCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerActivityCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    source: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerActivityCommand;
  return proto.com.elarian.hera.proto.CustomerActivityCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerActivityCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
*/
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string source = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> properties = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityCommand} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityCommand.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerActivityReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerActivityReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: (f = msg.getCustomerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerActivityReply;
  return proto.com.elarian.hera.proto.CustomerActivityReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerActivityReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply} returns this
*/
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityReply} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerActivityReply.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.ServerToAppNotification.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.EntryCase = {
  ENTRY_NOT_SET: 0,
  CUSTOMER: 1,
  PURSE: 2
};

/**
 * @return {proto.com.elarian.hera.proto.ServerToAppNotification.EntryCase}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.ServerToAppNotification.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.ServerToAppNotification.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ServerToAppNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && proto.com.elarian.hera.proto.ServerToAppCustomerNotification.toObject(includeInstance, f),
    purse: (f = msg.getPurse()) && proto.com.elarian.hera.proto.ServerToAppPurseNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ServerToAppNotification;
  return proto.com.elarian.hera.proto.ServerToAppNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.ServerToAppCustomerNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ServerToAppCustomerNotification.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.ServerToAppPurseNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ServerToAppPurseNotification.deserializeBinaryFromReader);
      msg.setPurse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ServerToAppNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.ServerToAppCustomerNotification.serializeBinaryToWriter
    );
  }
  f = message.getPurse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.ServerToAppPurseNotification.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServerToAppCustomerNotification customer = 1;
 * @return {?proto.com.elarian.hera.proto.ServerToAppCustomerNotification}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.getCustomer = function() {
  return /** @type{?proto.com.elarian.hera.proto.ServerToAppCustomerNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ServerToAppCustomerNotification, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.ServerToAppCustomerNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.setCustomer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.ServerToAppNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServerToAppPurseNotification purse = 2;
 * @return {?proto.com.elarian.hera.proto.ServerToAppPurseNotification}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.getPurse = function() {
  return /** @type{?proto.com.elarian.hera.proto.ServerToAppPurseNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ServerToAppPurseNotification, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.ServerToAppPurseNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.setPurse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.ServerToAppNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.clearPurse = function() {
  return this.setPurse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppNotification.prototype.hasPurse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_ = [[6,7,8,9,10,11,12,13,14,15,16,17]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.EntryCase = {
  ENTRY_NOT_SET: 0,
  REMINDER: 6,
  MESSAGING_SESSION_STARTED: 7,
  MESSAGING_SESSION_RENEWED: 8,
  MESSAGING_SESSION_ENDED: 9,
  MESSAGING_CONSENT_UPDATE: 10,
  RECEIVED_MESSAGE: 11,
  MESSAGE_STATUS: 12,
  SENT_MESSAGE_REACTION: 13,
  RECEIVED_PAYMENT: 14,
  PAYMENT_STATUS: 15,
  WALLET_PAYMENT_STATUS: 16,
  CUSTOMER_ACTIVITY: 17
};

/**
 * @return {proto.com.elarian.hera.proto.ServerToAppCustomerNotification.EntryCase}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.ServerToAppCustomerNotification.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ServerToAppCustomerNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    appData: (f = msg.getAppData()) && common_model_pb.DataMapValue.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && proto.com.elarian.hera.proto.ReminderNotification.toObject(includeInstance, f),
    messagingSessionStarted: (f = msg.getMessagingSessionStarted()) && proto.com.elarian.hera.proto.MessagingSessionStartedNotification.toObject(includeInstance, f),
    messagingSessionRenewed: (f = msg.getMessagingSessionRenewed()) && proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.toObject(includeInstance, f),
    messagingSessionEnded: (f = msg.getMessagingSessionEnded()) && proto.com.elarian.hera.proto.MessagingSessionEndedNotification.toObject(includeInstance, f),
    messagingConsentUpdate: (f = msg.getMessagingConsentUpdate()) && proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.toObject(includeInstance, f),
    receivedMessage: (f = msg.getReceivedMessage()) && proto.com.elarian.hera.proto.ReceivedMessageNotification.toObject(includeInstance, f),
    messageStatus: (f = msg.getMessageStatus()) && proto.com.elarian.hera.proto.MessageStatusNotification.toObject(includeInstance, f),
    sentMessageReaction: (f = msg.getSentMessageReaction()) && proto.com.elarian.hera.proto.SentMessageReactionNotification.toObject(includeInstance, f),
    receivedPayment: (f = msg.getReceivedPayment()) && proto.com.elarian.hera.proto.ReceivedPaymentNotification.toObject(includeInstance, f),
    paymentStatus: (f = msg.getPaymentStatus()) && proto.com.elarian.hera.proto.PaymentStatusNotification.toObject(includeInstance, f),
    walletPaymentStatus: (f = msg.getWalletPaymentStatus()) && proto.com.elarian.hera.proto.WalletPaymentStatusNotification.toObject(includeInstance, f),
    customerActivity: (f = msg.getCustomerActivity()) && proto.com.elarian.hera.proto.CustomerActivityNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ServerToAppCustomerNotification;
  return proto.com.elarian.hera.proto.ServerToAppCustomerNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = new common_model_pb.DataMapValue;
      reader.readMessage(value,common_model_pb.DataMapValue.deserializeBinaryFromReader);
      msg.setAppData(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.ReminderNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReminderNotification.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.MessagingSessionStartedNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingSessionStartedNotification.deserializeBinaryFromReader);
      msg.setMessagingSessionStarted(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.MessagingSessionRenewedNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.deserializeBinaryFromReader);
      msg.setMessagingSessionRenewed(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.MessagingSessionEndedNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingSessionEndedNotification.deserializeBinaryFromReader);
      msg.setMessagingSessionEnded(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.MessagingConsentUpdateNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.deserializeBinaryFromReader);
      msg.setMessagingConsentUpdate(value);
      break;
    case 11:
      var value = new proto.com.elarian.hera.proto.ReceivedMessageNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReceivedMessageNotification.deserializeBinaryFromReader);
      msg.setReceivedMessage(value);
      break;
    case 12:
      var value = new proto.com.elarian.hera.proto.MessageStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessageStatusNotification.deserializeBinaryFromReader);
      msg.setMessageStatus(value);
      break;
    case 13:
      var value = new proto.com.elarian.hera.proto.SentMessageReactionNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.SentMessageReactionNotification.deserializeBinaryFromReader);
      msg.setSentMessageReaction(value);
      break;
    case 14:
      var value = new proto.com.elarian.hera.proto.ReceivedPaymentNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReceivedPaymentNotification.deserializeBinaryFromReader);
      msg.setReceivedPayment(value);
      break;
    case 15:
      var value = new proto.com.elarian.hera.proto.PaymentStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentStatusNotification.deserializeBinaryFromReader);
      msg.setPaymentStatus(value);
      break;
    case 16:
      var value = new proto.com.elarian.hera.proto.WalletPaymentStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.WalletPaymentStatusNotification.deserializeBinaryFromReader);
      msg.setWalletPaymentStatus(value);
      break;
    case 17:
      var value = new proto.com.elarian.hera.proto.CustomerActivityNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerActivityNotification.deserializeBinaryFromReader);
      msg.setCustomerActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ServerToAppCustomerNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAppData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_model_pb.DataMapValue.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.ReminderNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessagingSessionStarted();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.MessagingSessionStartedNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessagingSessionRenewed();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessagingSessionEnded();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.MessagingSessionEndedNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessagingConsentUpdate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.serializeBinaryToWriter
    );
  }
  f = message.getReceivedMessage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.com.elarian.hera.proto.ReceivedMessageNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessageStatus();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.com.elarian.hera.proto.MessageStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getSentMessageReaction();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.com.elarian.hera.proto.SentMessageReactionNotification.serializeBinaryToWriter
    );
  }
  f = message.getReceivedPayment();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.com.elarian.hera.proto.ReceivedPaymentNotification.serializeBinaryToWriter
    );
  }
  f = message.getPaymentStatus();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.com.elarian.hera.proto.PaymentStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getWalletPaymentStatus();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.com.elarian.hera.proto.WalletPaymentStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getCustomerActivity();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.com.elarian.hera.proto.CustomerActivityNotification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DataMapValue app_data = 4;
 * @return {?proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getAppData = function() {
  return /** @type{?proto.com.elarian.hera.proto.DataMapValue} */ (
    jspb.Message.getWrapperField(this, common_model_pb.DataMapValue, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.DataMapValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setAppData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearAppData = function() {
  return this.setAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasAppData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ReminderNotification reminder = 6;
 * @return {?proto.com.elarian.hera.proto.ReminderNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReminderNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReminderNotification, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReminderNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setReminder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasReminder = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MessagingSessionStartedNotification messaging_session_started = 7;
 * @return {?proto.com.elarian.hera.proto.MessagingSessionStartedNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getMessagingSessionStarted = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingSessionStartedNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingSessionStartedNotification, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingSessionStartedNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setMessagingSessionStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearMessagingSessionStarted = function() {
  return this.setMessagingSessionStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasMessagingSessionStarted = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MessagingSessionRenewedNotification messaging_session_renewed = 8;
 * @return {?proto.com.elarian.hera.proto.MessagingSessionRenewedNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getMessagingSessionRenewed = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingSessionRenewedNotification, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingSessionRenewedNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setMessagingSessionRenewed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearMessagingSessionRenewed = function() {
  return this.setMessagingSessionRenewed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasMessagingSessionRenewed = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MessagingSessionEndedNotification messaging_session_ended = 9;
 * @return {?proto.com.elarian.hera.proto.MessagingSessionEndedNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getMessagingSessionEnded = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingSessionEndedNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingSessionEndedNotification, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingSessionEndedNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setMessagingSessionEnded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearMessagingSessionEnded = function() {
  return this.setMessagingSessionEnded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasMessagingSessionEnded = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MessagingConsentUpdateNotification messaging_consent_update = 10;
 * @return {?proto.com.elarian.hera.proto.MessagingConsentUpdateNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getMessagingConsentUpdate = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingConsentUpdateNotification, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingConsentUpdateNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setMessagingConsentUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearMessagingConsentUpdate = function() {
  return this.setMessagingConsentUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasMessagingConsentUpdate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ReceivedMessageNotification received_message = 11;
 * @return {?proto.com.elarian.hera.proto.ReceivedMessageNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getReceivedMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReceivedMessageNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReceivedMessageNotification, 11));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReceivedMessageNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setReceivedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearReceivedMessage = function() {
  return this.setReceivedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasReceivedMessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MessageStatusNotification message_status = 12;
 * @return {?proto.com.elarian.hera.proto.MessageStatusNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getMessageStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessageStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessageStatusNotification, 12));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessageStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setMessageStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearMessageStatus = function() {
  return this.setMessageStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasMessageStatus = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SentMessageReactionNotification sent_message_reaction = 13;
 * @return {?proto.com.elarian.hera.proto.SentMessageReactionNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getSentMessageReaction = function() {
  return /** @type{?proto.com.elarian.hera.proto.SentMessageReactionNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SentMessageReactionNotification, 13));
};


/**
 * @param {?proto.com.elarian.hera.proto.SentMessageReactionNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setSentMessageReaction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearSentMessageReaction = function() {
  return this.setSentMessageReaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasSentMessageReaction = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ReceivedPaymentNotification received_payment = 14;
 * @return {?proto.com.elarian.hera.proto.ReceivedPaymentNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getReceivedPayment = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReceivedPaymentNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReceivedPaymentNotification, 14));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReceivedPaymentNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setReceivedPayment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearReceivedPayment = function() {
  return this.setReceivedPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasReceivedPayment = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PaymentStatusNotification payment_status = 15;
 * @return {?proto.com.elarian.hera.proto.PaymentStatusNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getPaymentStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentStatusNotification, 15));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setPaymentStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearPaymentStatus = function() {
  return this.setPaymentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasPaymentStatus = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WalletPaymentStatusNotification wallet_payment_status = 16;
 * @return {?proto.com.elarian.hera.proto.WalletPaymentStatusNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getWalletPaymentStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.WalletPaymentStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.WalletPaymentStatusNotification, 16));
};


/**
 * @param {?proto.com.elarian.hera.proto.WalletPaymentStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setWalletPaymentStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearWalletPaymentStatus = function() {
  return this.setWalletPaymentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasWalletPaymentStatus = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CustomerActivityNotification customer_activity = 17;
 * @return {?proto.com.elarian.hera.proto.CustomerActivityNotification}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.getCustomerActivity = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerActivityNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerActivityNotification, 17));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerActivityNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.setCustomerActivity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.com.elarian.hera.proto.ServerToAppCustomerNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppCustomerNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.clearCustomerActivity = function() {
  return this.setCustomerActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppCustomerNotification.prototype.hasCustomerActivity = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.oneofGroups_ = [[5]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.EntryCase = {
  ENTRY_NOT_SET: 0,
  PAYMENT_STATUS: 5
};

/**
 * @return {proto.com.elarian.hera.proto.ServerToAppPurseNotification.EntryCase}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.ServerToAppPurseNotification.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.ServerToAppPurseNotification.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ServerToAppPurseNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    purseId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    paymentStatus: (f = msg.getPaymentStatus()) && proto.com.elarian.hera.proto.PaymentStatusNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ServerToAppPurseNotification;
  return proto.com.elarian.hera.proto.ServerToAppPurseNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurseId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.PaymentStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentStatusNotification.deserializeBinaryFromReader);
      msg.setPaymentStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ServerToAppPurseNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPurseId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPaymentStatus();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.PaymentStatusNotification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string purse_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getPurseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.setPurseId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PaymentStatusNotification payment_status = 5;
 * @return {?proto.com.elarian.hera.proto.PaymentStatusNotification}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.getPaymentStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentStatusNotification, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
*/
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.setPaymentStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.ServerToAppPurseNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppPurseNotification} returns this
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.clearPaymentStatus = function() {
  return this.setPaymentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppPurseNotification.prototype.hasPaymentStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.AppDataUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AppDataUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AppDataUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppDataUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && common_model_pb.DataMapValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.AppDataUpdate}
 */
proto.com.elarian.hera.proto.AppDataUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AppDataUpdate;
  return proto.com.elarian.hera.proto.AppDataUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AppDataUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AppDataUpdate}
 */
proto.com.elarian.hera.proto.AppDataUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.DataMapValue;
      reader.readMessage(value,common_model_pb.DataMapValue.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.AppDataUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AppDataUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AppDataUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AppDataUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.DataMapValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional DataMapValue data = 1;
 * @return {?proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.AppDataUpdate.prototype.getData = function() {
  return /** @type{?proto.com.elarian.hera.proto.DataMapValue} */ (
    jspb.Message.getWrapperField(this, common_model_pb.DataMapValue, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.DataMapValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.AppDataUpdate} returns this
*/
proto.com.elarian.hera.proto.AppDataUpdate.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AppDataUpdate} returns this
 */
proto.com.elarian.hera.proto.AppDataUpdate.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AppDataUpdate.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ServerToAppNotificationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataUpdate: (f = msg.getDataUpdate()) && proto.com.elarian.hera.proto.AppDataUpdate.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && messaging_model_pb.OutboundMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ServerToAppNotificationReply;
  return proto.com.elarian.hera.proto.ServerToAppNotificationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.AppDataUpdate;
      reader.readMessage(value,proto.com.elarian.hera.proto.AppDataUpdate.deserializeBinaryFromReader);
      msg.setDataUpdate(value);
      break;
    case 2:
      var value = new messaging_model_pb.OutboundMessage;
      reader.readMessage(value,messaging_model_pb.OutboundMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ServerToAppNotificationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.AppDataUpdate.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.OutboundMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppDataUpdate data_update = 1;
 * @return {?proto.com.elarian.hera.proto.AppDataUpdate}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.getDataUpdate = function() {
  return /** @type{?proto.com.elarian.hera.proto.AppDataUpdate} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.AppDataUpdate, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.AppDataUpdate|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} returns this
*/
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.setDataUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} returns this
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.clearDataUpdate = function() {
  return this.setDataUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.hasDataUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OutboundMessage message = 2;
 * @return {?proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.getMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessage} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.OutboundMessage, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessage|undefined} value
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} returns this
*/
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ServerToAppNotificationReply} returns this
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ServerToAppNotificationReply.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ReminderNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ReminderNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReminderNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    reminder: (f = msg.getReminder()) && app_model_pb.CustomerReminder.toObject(includeInstance, f),
    tag: (f = msg.getTag()) && common_model_pb.CustomerIndex.toObject(includeInstance, f),
    workId: (f = msg.getWorkId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ReminderNotification}
 */
proto.com.elarian.hera.proto.ReminderNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ReminderNotification;
  return proto.com.elarian.hera.proto.ReminderNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ReminderNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ReminderNotification}
 */
proto.com.elarian.hera.proto.ReminderNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new app_model_pb.CustomerReminder;
      reader.readMessage(value,app_model_pb.CustomerReminder.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerIndex;
      reader.readMessage(value,common_model_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWorkId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ReminderNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ReminderNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReminderNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      app_model_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
  f = message.getWorkId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerReminder reminder = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, app_model_pb.CustomerReminder, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.hasReminder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerIndex tag = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerIndex} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerIndex, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerIndex|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.hasTag = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue work_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getWorkId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setWorkId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.clearWorkId = function() {
  return this.setWorkId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.hasWorkId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingSessionStartedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingSessionStartedNotification;
  return proto.com.elarian.hera.proto.MessagingSessionStartedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingSessionStartedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp expires_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStartedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStartedNotification.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingSessionRenewedNotification;
  return proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp expires_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionRenewedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionRenewedNotification.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingSessionEndedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingSessionEndedNotification;
  return proto.com.elarian.hera.proto.MessagingSessionEndedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingSessionEndReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingSessionEndedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Duration duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessagingSessionEndReason reason = 5;
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndReason}
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.getReason = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingSessionEndReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingSessionEndReason} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionEndedNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionEndedNotification.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    update: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingConsentUpdateNotification;
  return proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdate} */ (reader.readEnum());
      msg.setUpdate(value);
      break;
    case 4:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingConsentUpdate update = 3;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdate}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.getUpdate = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdate} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdate} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional MessagingConsentUpdateStatus status = 4;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentUpdateStatus} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentUpdateNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ReceivedMessageNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ReceivedMessageNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    messaging_model_pb.InboundMessageBody.toObject, includeInstance),
    sessionId: (f = msg.getSessionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    inReplyTo: (f = msg.getInReplyTo()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ReceivedMessageNotification;
  return proto.com.elarian.hera.proto.ReceivedMessageNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ReceivedMessageNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = new messaging_model_pb.InboundMessageBody;
      reader.readMessage(value,messaging_model_pb.InboundMessageBody.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSessionId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setInReplyTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ReceivedMessageNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ReceivedMessageNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      messaging_model_pb.InboundMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getInReplyTo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated InboundMessageBody parts = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.InboundMessageBody>}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.InboundMessageBody>} */ (
    jspb.Message.getRepeatedWrapperField(this, messaging_model_pb.InboundMessageBody, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.InboundMessageBody>} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.InboundMessageBody=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.InboundMessageBody, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.StringValue session_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getSessionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearSessionId = function() {
  return this.setSessionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue in_reply_to = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getInReplyTo = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setInReplyTo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearInReplyTo = function() {
  return this.setInReplyTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasInReplyTo = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessageStatusNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessageStatusNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessageStatusNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessageStatusNotification;
  return proto.com.elarian.hera.proto.MessageStatusNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessageStatusNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessageStatusNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessageStatusNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessageStatusNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MessageDeliveryStatus status = 2;
 * @return {!proto.com.elarian.hera.proto.MessageDeliveryStatus}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageDeliveryStatus} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SentMessageReactionNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SentMessageReactionNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && messaging_model_pb.MessagingChannelNumber.toObject(includeInstance, f),
    reaction: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SentMessageReactionNotification;
  return proto.com.elarian.hera.proto.SentMessageReactionNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SentMessageReactionNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new messaging_model_pb.MessagingChannelNumber;
      reader.readMessage(value,messaging_model_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.com.elarian.hera.proto.MessageReaction} */ (reader.readEnum());
      msg.setReaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SentMessageReactionNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SentMessageReactionNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      messaging_model_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getReaction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
*/
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, messaging_model_pb.MessagingChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
*/
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessageReaction reaction = 4;
 * @return {!proto.com.elarian.hera.proto.MessageReaction}
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.getReaction = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessageReaction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageReaction} value
 * @return {!proto.com.elarian.hera.proto.SentMessageReactionNotification} returns this
 */
proto.com.elarian.hera.proto.SentMessageReactionNotification.prototype.setReaction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ReceivedPaymentNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    purseId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && payment_model_pb.PaymentChannelNumber.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_model_pb.Cash.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ReceivedPaymentNotification;
  return proto.com.elarian.hera.proto.ReceivedPaymentNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 3:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = new payment_model_pb.PaymentChannelNumber;
      reader.readMessage(value,payment_model_pb.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 5:
      var value = new common_model_pb.Cash;
      reader.readMessage(value,common_model_pb.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ReceivedPaymentNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payment_model_pb.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_model_pb.Cash.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string purse_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getPurseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setPurseId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 4;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, payment_model_pb.PaymentChannelNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Cash value = 5;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_model_pb.Cash, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.hasValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PaymentStatus status = 6;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentStatusNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentStatusNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentStatusNotification;
  return proto.com.elarian.hera.proto.PaymentStatusNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentStatusNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentStatusNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentStatusNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PaymentStatus status = 2;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.WalletPaymentStatusNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.WalletPaymentStatusNotification;
  return proto.com.elarian.hera.proto.WalletPaymentStatusNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 3:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.WalletPaymentStatusNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PaymentStatus status = 3;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.WalletPaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.WalletPaymentStatusNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerActivityNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerActivityNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && common_model_pb.CustomerNumber.toObject(includeInstance, f),
    source: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activity: (f = msg.getActivity()) && activity_model_pb.CustomerActivity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerActivityNotification;
  return proto.com.elarian.hera.proto.CustomerActivityNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new activity_model_pb.CustomerActivity;
      reader.readMessage(value,activity_model_pb.CustomerActivity.deserializeBinaryFromReader);
      msg.setActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerActivityNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerActivityNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActivity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      activity_model_pb.CustomerActivity.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
*/
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string source = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CustomerActivity activity = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerActivity}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.getActivity = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerActivity} */ (
    jspb.Message.getWrapperField(this, activity_model_pb.CustomerActivity, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerActivity|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
*/
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.setActivity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerActivityNotification} returns this
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.clearActivity = function() {
  return this.setActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerActivityNotification.prototype.hasActivity = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.com.elarian.hera.proto);
