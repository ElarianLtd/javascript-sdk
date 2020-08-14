// source: web.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AddCustomerReminderTagRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AdoptCustomerStateRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AdoptCustomerStateRequest.OtherCustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AuthTokenReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.AuthTokenRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CheckoutPaymentReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CheckoutPaymentRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CheckoutPaymentRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerStateReplyData', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerTagRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DeleteCustomerTagRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetCustomerStateRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MakeVoiceCallReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MakeVoiceCallRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MakeVoiceCallRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentStatusNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReceivedMessageNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReceivedPaymentNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReminderNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.ReplyToMessageRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendMessageTagRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendPaymentReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendPaymentRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SendPaymentRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.StreamNotificationRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TagCommandReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerStateReply', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerTagRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UpdateCustomerTagRequest.CustomerCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdSessionNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallNotification', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.WebhookRequest', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.WebhookRequest.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.WebhookResponse', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.WebhookResponseReply', null, global);
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
proto.com.elarian.hera.proto.AuthTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AuthTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AuthTokenRequest.displayName = 'proto.com.elarian.hera.proto.AuthTokenRequest';
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
proto.com.elarian.hera.proto.AuthTokenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AuthTokenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AuthTokenReply.displayName = 'proto.com.elarian.hera.proto.AuthTokenReply';
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
proto.com.elarian.hera.proto.GetCustomerStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetCustomerStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetCustomerStateRequest.displayName = 'proto.com.elarian.hera.proto.GetCustomerStateRequest';
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.CustomerStateReplyData.repeatedFields_, null);
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
proto.com.elarian.hera.proto.AdoptCustomerStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AdoptCustomerStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AdoptCustomerStateRequest.displayName = 'proto.com.elarian.hera.proto.AdoptCustomerStateRequest';
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
proto.com.elarian.hera.proto.AddCustomerReminderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.AddCustomerReminderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AddCustomerReminderRequest.displayName = 'proto.com.elarian.hera.proto.AddCustomerReminderRequest';
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
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.AddCustomerReminderTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.displayName = 'proto.com.elarian.hera.proto.AddCustomerReminderTagRequest';
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
proto.com.elarian.hera.proto.CancelCustomerReminderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.CancelCustomerReminderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CancelCustomerReminderRequest.displayName = 'proto.com.elarian.hera.proto.CancelCustomerReminderRequest';
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
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.displayName = 'proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest';
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
proto.com.elarian.hera.proto.UpdateCustomerTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.repeatedFields_, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerTagRequest.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerTagRequest';
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
proto.com.elarian.hera.proto.DeleteCustomerTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerTagRequest.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerTagRequest';
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
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.repeatedFields_, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest';
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
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest';
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
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.displayName = 'proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest';
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
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.repeatedFields_, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.displayName = 'proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest';
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
proto.com.elarian.hera.proto.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendMessageRequest.displayName = 'proto.com.elarian.hera.proto.SendMessageRequest';
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
proto.com.elarian.hera.proto.SendMessageTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SendMessageTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendMessageTagRequest.displayName = 'proto.com.elarian.hera.proto.SendMessageTagRequest';
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
proto.com.elarian.hera.proto.ReplyToMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.ReplyToMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.ReplyToMessageRequest.displayName = 'proto.com.elarian.hera.proto.ReplyToMessageRequest';
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
proto.com.elarian.hera.proto.MessagingConsentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingConsentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingConsentRequest.displayName = 'proto.com.elarian.hera.proto.MessagingConsentRequest';
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
proto.com.elarian.hera.proto.MessagingConsentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingConsentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingConsentReply.displayName = 'proto.com.elarian.hera.proto.MessagingConsentReply';
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
proto.com.elarian.hera.proto.SendPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.SendPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendPaymentRequest.displayName = 'proto.com.elarian.hera.proto.SendPaymentRequest';
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
proto.com.elarian.hera.proto.SendPaymentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SendPaymentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SendPaymentReply.displayName = 'proto.com.elarian.hera.proto.SendPaymentReply';
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
proto.com.elarian.hera.proto.CheckoutPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.CheckoutPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CheckoutPaymentRequest.displayName = 'proto.com.elarian.hera.proto.CheckoutPaymentRequest';
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
proto.com.elarian.hera.proto.CheckoutPaymentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CheckoutPaymentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CheckoutPaymentReply.displayName = 'proto.com.elarian.hera.proto.CheckoutPaymentReply';
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
proto.com.elarian.hera.proto.MakeVoiceCallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.MakeVoiceCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MakeVoiceCallRequest.displayName = 'proto.com.elarian.hera.proto.MakeVoiceCallRequest';
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
proto.com.elarian.hera.proto.MakeVoiceCallReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MakeVoiceCallReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MakeVoiceCallReply.displayName = 'proto.com.elarian.hera.proto.MakeVoiceCallReply';
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
proto.com.elarian.hera.proto.StreamNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.StreamNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.StreamNotificationRequest.displayName = 'proto.com.elarian.hera.proto.StreamNotificationRequest';
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
proto.com.elarian.hera.proto.MessagingConsentStatusNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingConsentStatusNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingConsentStatusNotification.displayName = 'proto.com.elarian.hera.proto.MessagingConsentStatusNotification';
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
proto.com.elarian.hera.proto.MessagingSessionStatusNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingSessionStatusNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingSessionStatusNotification.displayName = 'proto.com.elarian.hera.proto.MessagingSessionStatusNotification';
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
proto.com.elarian.hera.proto.UssdSessionNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdSessionNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdSessionNotification.displayName = 'proto.com.elarian.hera.proto.UssdSessionNotification';
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
proto.com.elarian.hera.proto.VoiceCallNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallNotification.displayName = 'proto.com.elarian.hera.proto.VoiceCallNotification';
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
proto.com.elarian.hera.proto.WebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.WebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.WebhookRequest.displayName = 'proto.com.elarian.hera.proto.WebhookRequest';
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
proto.com.elarian.hera.proto.WebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.WebhookResponse.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.WebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.WebhookResponse.displayName = 'proto.com.elarian.hera.proto.WebhookResponse';
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
proto.com.elarian.hera.proto.WebhookResponseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.WebhookResponseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.WebhookResponseReply.displayName = 'proto.com.elarian.hera.proto.WebhookResponseReply';
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
proto.com.elarian.hera.proto.AuthTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AuthTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AuthTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AuthTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.elarian.hera.proto.AuthTokenRequest}
 */
proto.com.elarian.hera.proto.AuthTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AuthTokenRequest;
  return proto.com.elarian.hera.proto.AuthTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AuthTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AuthTokenRequest}
 */
proto.com.elarian.hera.proto.AuthTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
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
proto.com.elarian.hera.proto.AuthTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AuthTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AuthTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AuthTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AuthTokenRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AuthTokenRequest} returns this
 */
proto.com.elarian.hera.proto.AuthTokenRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.com.elarian.hera.proto.AuthTokenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AuthTokenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AuthTokenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AuthTokenReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.com.elarian.hera.proto.AuthTokenReply}
 */
proto.com.elarian.hera.proto.AuthTokenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AuthTokenReply;
  return proto.com.elarian.hera.proto.AuthTokenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AuthTokenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AuthTokenReply}
 */
proto.com.elarian.hera.proto.AuthTokenReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.AuthTokenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AuthTokenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AuthTokenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AuthTokenReply.serializeBinaryToWriter = function(message, writer) {
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
proto.com.elarian.hera.proto.AuthTokenReply.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AuthTokenReply} returns this
 */
proto.com.elarian.hera.proto.AuthTokenReply.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration lifetime = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.AuthTokenReply.prototype.getLifetime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.AuthTokenReply} returns this
*/
proto.com.elarian.hera.proto.AuthTokenReply.prototype.setLifetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AuthTokenReply} returns this
 */
proto.com.elarian.hera.proto.AuthTokenReply.prototype.clearLifetime = function() {
  return this.setLifetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AuthTokenReply.prototype.hasLifetime = function() {
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
proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.GetCustomerStateRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetCustomerStateRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetCustomerStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetCustomerStateRequest;
  return proto.com.elarian.hera.proto.GetCustomerStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetCustomerStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetCustomerStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest} returns this
*/
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.GetCustomerStateRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetCustomerStateRequest.prototype.hasCustomerNumber = function() {
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.repeatedFields_ = [5,7];



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
    messagingState: (f = msg.getMessagingState()) && common_pb.MessagingState.toObject(includeInstance, f),
    ussdState: (f = msg.getUssdState()) && common_pb.UssdState.toObject(includeInstance, f),
    voiceState: (f = msg.getVoiceState()) && common_pb.VoiceState.toObject(includeInstance, f),
    paymentState: (f = msg.getPaymentState()) && common_pb.PaymentState.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    common_pb.CustomerIndex.toObject, includeInstance),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    secondaryIdsList: jspb.Message.toObjectList(msg.getSecondaryIdsList(),
    common_pb.CustomerIndex.toObject, includeInstance)
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
      var value = new common_pb.MessagingState;
      reader.readMessage(value,common_pb.MessagingState.deserializeBinaryFromReader);
      msg.setMessagingState(value);
      break;
    case 2:
      var value = new common_pb.UssdState;
      reader.readMessage(value,common_pb.UssdState.deserializeBinaryFromReader);
      msg.setUssdState(value);
      break;
    case 3:
      var value = new common_pb.VoiceState;
      reader.readMessage(value,common_pb.VoiceState.deserializeBinaryFromReader);
      msg.setVoiceState(value);
      break;
    case 4:
      var value = new common_pb.PaymentState;
      reader.readMessage(value,common_pb.PaymentState.deserializeBinaryFromReader);
      msg.setPaymentState(value);
      break;
    case 5:
      var value = new common_pb.CustomerIndex;
      reader.readMessage(value,common_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 6:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = new common_pb.CustomerIndex;
      reader.readMessage(value,common_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addSecondaryIds(value);
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
  f = message.getMessagingState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.MessagingState.serializeBinaryToWriter
    );
  }
  f = message.getUssdState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.UssdState.serializeBinaryToWriter
    );
  }
  f = message.getVoiceState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.VoiceState.serializeBinaryToWriter
    );
  }
  f = message.getPaymentState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.PaymentState.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecondaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      common_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessagingState messaging_state = 1;
 * @return {?proto.com.elarian.hera.proto.MessagingState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getMessagingState = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingState} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingState, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setMessagingState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
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
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UssdState ussd_state = 2;
 * @return {?proto.com.elarian.hera.proto.UssdState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getUssdState = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdState} */ (
    jspb.Message.getWrapperField(this, common_pb.UssdState, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setUssdState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearUssdState = function() {
  return this.setUssdState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasUssdState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VoiceState voice_state = 3;
 * @return {?proto.com.elarian.hera.proto.VoiceState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getVoiceState = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceState} */ (
    jspb.Message.getWrapperField(this, common_pb.VoiceState, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceState|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setVoiceState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearVoiceState = function() {
  return this.setVoiceState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.hasVoiceState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PaymentState payment_state = 4;
 * @return {?proto.com.elarian.hera.proto.PaymentState}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getPaymentState = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentState} */ (
    jspb.Message.getWrapperField(this, common_pb.PaymentState, 4));
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
 * repeated CustomerIndex tags = 5;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.CustomerIndex, 5));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * map<string, string> metadata = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * repeated CustomerIndex secondary_ids = 7;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.getSecondaryIdsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.CustomerIndex, 7));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
*/
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.setSecondaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.addSecondaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.CustomerStateReplyData} returns this
 */
proto.com.elarian.hera.proto.CustomerStateReplyData.prototype.clearSecondaryIdsList = function() {
  return this.setSecondaryIdsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.OtherCustomerCase = {
  OTHER_CUSTOMER_NOT_SET: 0,
  OTHER_CUSTOMER_ID: 3,
  OTHER_CUSTOMER_NUMBER: 4
};

/**
 * @return {proto.com.elarian.hera.proto.AdoptCustomerStateRequest.OtherCustomerCase}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.getOtherCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AdoptCustomerStateRequest.OtherCustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AdoptCustomerStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    otherCustomerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    otherCustomerNumber: (f = msg.getOtherCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AdoptCustomerStateRequest;
  return proto.com.elarian.hera.proto.AdoptCustomerStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherCustomerId(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setOtherCustomerNumber(value);
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
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AdoptCustomerStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOtherCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string other_customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.getOtherCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.setOtherCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.clearOtherCustomerId = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.hasOtherCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerNumber other_customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.getOtherCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
*/
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.setOtherCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.AdoptCustomerStateRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AdoptCustomerStateRequest} returns this
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.clearOtherCustomerNumber = function() {
  return this.setOtherCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AdoptCustomerStateRequest.prototype.hasOtherCustomerNumber = function() {
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
proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.AddCustomerReminderRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.AddCustomerReminderRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AddCustomerReminderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && common_pb.CustomerReminder.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AddCustomerReminderRequest;
  return proto.com.elarian.hera.proto.AddCustomerReminderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.CustomerReminder;
      reader.readMessage(value,common_pb.CustomerReminder.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AddCustomerReminderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.AddCustomerReminderRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerReminder reminder = 5;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerReminder, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderRequest.prototype.hasReminder = function() {
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
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: (f = msg.getTag()) && common_pb.IndexMapping.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && common_pb.CustomerReminder.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.AddCustomerReminderTagRequest;
  return proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = new common_pb.IndexMapping;
      reader.readMessage(value,common_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 3:
      var value = new common_pb.CustomerReminder;
      reader.readMessage(value,common_pb.CustomerReminder.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IndexMapping tag = 2;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_pb.IndexMapping, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.hasTag = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerReminder reminder = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerReminder, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} returns this
*/
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.AddCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.AddCustomerReminderTagRequest.prototype.hasReminder = function() {
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
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.CancelCustomerReminderRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.CancelCustomerReminderRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CancelCustomerReminderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    productId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    key: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CancelCustomerReminderRequest;
  return proto.com.elarian.hera.proto.CancelCustomerReminderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 5:
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
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CancelCustomerReminderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
*/
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.CancelCustomerReminderRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string product_id = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string key = 5;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: (f = msg.getTag()) && common_pb.IndexMapping.toObject(includeInstance, f),
    productId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest;
  return proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = new common_pb.IndexMapping;
      reader.readMessage(value,common_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
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
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getProductId();
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
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IndexMapping tag = 2;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_pb.IndexMapping, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} returns this
*/
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.hasTag = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string product_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest} returns this
 */
proto.com.elarian.hera.proto.CancelCustomerReminderTagRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerTagRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerTagRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    common_pb.CustomerIndex.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerTagRequest;
  return proto.com.elarian.hera.proto.UpdateCustomerTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = new common_pb.CustomerIndex;
      reader.readMessage(value,common_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addTags(value);
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
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerTagRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CustomerIndex tags = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.CustomerIndex, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerTagRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerTagRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerTagRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerTagRequest;
  return proto.com.elarian.hera.proto.DeleteCustomerTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerTagRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerTagRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerTagRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryIdsList: jspb.Message.toObjectList(msg.getSecondaryIdsList(),
    common_pb.CustomerIndex.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest;
  return proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = new common_pb.CustomerIndex;
      reader.readMessage(value,common_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.addSecondaryIds(value);
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
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppid();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional string appId = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.getAppid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.setAppid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CustomerIndex secondary_ids = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerIndex>}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.getSecondaryIdsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerIndex>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.CustomerIndex, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerIndex>} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.setSecondaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.addSecondaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.CustomerIndex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest.prototype.clearSecondaryIdsList = function() {
  return this.setSecondaryIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    secondaryIdsList: jspb.Message.toObjectList(msg.getSecondaryIdsList(),
    common_pb.IndexMapping.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest;
  return proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = new common_pb.IndexMapping;
      reader.readMessage(value,common_pb.IndexMapping.deserializeBinaryFromReader);
      msg.addSecondaryIds(value);
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
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.IndexMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated IndexMapping secondary_ids = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.IndexMapping>}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.getSecondaryIdsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.IndexMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.IndexMapping, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.IndexMapping>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.setSecondaryIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.IndexMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.addSecondaryIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.IndexMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest.prototype.clearSecondaryIdsList = function() {
  return this.setSecondaryIdsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest;
  return proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = msg.getMetadataMap();
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
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
*/
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.UpdateCustomerMetadataRequest.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    metadataList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest;
  return proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addMetadata(value);
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
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
*/
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string metadata = 4;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.getMetadataList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.addMetadata = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest} returns this
 */
proto.com.elarian.hera.proto.DeleteCustomerMetadataRequest.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.SendMessageRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMERID: 3,
  CUSTOMER_NUMBER: 4
};

/**
 * @return {proto.com.elarian.hera.proto.SendMessageRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.SendMessageRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
    body: (f = msg.getBody()) && common_pb.CustomerMessageBody.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest}
 */
proto.com.elarian.hera.proto.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendMessageRequest;
  return proto.com.elarian.hera.proto.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest}
 */
proto.com.elarian.hera.proto.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 6:
      var value = new common_pb.CustomerMessageBody;
      reader.readMessage(value,common_pb.CustomerMessageBody.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.com.elarian.hera.proto.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_pb.CustomerMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customerId = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setCustomerid = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.clearCustomerid = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.hasCustomerid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerNumber customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.SendMessageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 5;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CustomerMessageBody body = 6;
 * @return {?proto.com.elarian.hera.proto.CustomerMessageBody}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.getBody = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerMessageBody} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerMessageBody, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageRequest.prototype.hasBody = function() {
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
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendMessageTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendMessageTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tag: (f = msg.getTag()) && common_pb.IndexMapping.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
    body: (f = msg.getBody()) && common_pb.CustomerMessageBody.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendMessageTagRequest;
  return proto.com.elarian.hera.proto.SendMessageTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendMessageTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = new common_pb.IndexMapping;
      reader.readMessage(value,common_pb.IndexMapping.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 4:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 5:
      var value = new common_pb.CustomerMessageBody;
      reader.readMessage(value,common_pb.CustomerMessageBody.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendMessageTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendMessageTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.CustomerMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IndexMapping tag = 3;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, common_pb.IndexMapping, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.hasTag = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 4;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomerMessageBody body = 5;
 * @return {?proto.com.elarian.hera.proto.CustomerMessageBody}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.getBody = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerMessageBody} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerMessageBody, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
*/
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendMessageTagRequest} returns this
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendMessageTagRequest.prototype.hasBody = function() {
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
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.ReplyToMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    replyToMessageId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    body: (f = msg.getBody()) && common_pb.CustomerMessageBody.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.ReplyToMessageRequest;
  return proto.com.elarian.hera.proto.ReplyToMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplyToMessageId(value);
      break;
    case 5:
      var value = new common_pb.CustomerMessageBody;
      reader.readMessage(value,common_pb.CustomerMessageBody.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.ReplyToMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.ReplyToMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
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
  f = message.getReplyToMessageId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.CustomerMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reply_to_message_id = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.getReplyToMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.setReplyToMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CustomerMessageBody body = 5;
 * @return {?proto.com.elarian.hera.proto.CustomerMessageBody}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.getBody = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerMessageBody} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerMessageBody, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
*/
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReplyToMessageRequest} returns this
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReplyToMessageRequest.prototype.hasBody = function() {
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
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      4,
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
 * optional google.protobuf.StringValue customer_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendMessageReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendMessageReply} returns this
*/
proto.com.elarian.hera.proto.SendMessageReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 2,
  CUSTOMER_NUMBER: 3
};

/**
 * @return {proto.com.elarian.hera.proto.MessagingConsentRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.MessagingConsentRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingConsentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingConsentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
    action: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingConsentRequest;
  return proto.com.elarian.hera.proto.MessagingConsentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 4:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 5:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentAction} */ (reader.readEnum());
      msg.setAction(value);
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
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingConsentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
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
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerNumber customer_number = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.MessagingConsentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 4;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessagingConsentAction action = 5;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentAction}
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.getAction = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentAction} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentAction} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentRequest} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentRequest.prototype.setAction = function(value) {
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
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingConsentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingConsentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingConsentReply;
  return proto.com.elarian.hera.proto.MessagingConsentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentStatus} */ (reader.readEnum());
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
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingConsentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentReply.serializeBinaryToWriter = function(message, writer) {
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
 * optional MessagingConsentStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatus}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatus} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue customer_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentReply} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentReply.prototype.hasCustomerId = function() {
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
proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 3,
  CUSTOMER_NUMBER: 4
};

/**
 * @return {proto.com.elarian.hera.proto.SendPaymentRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.SendPaymentRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.PaymentChannelNumber.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_pb.Cash.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendPaymentRequest;
  return proto.com.elarian.hera.proto.SendPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.PaymentChannelNumber;
      reader.readMessage(value,common_pb.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 6:
      var value = new common_pb.Cash;
      reader.readMessage(value,common_pb.Cash.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_pb.Cash.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerNumber customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.SendPaymentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 5;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.PaymentChannelNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Cash value = 6;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_pb.Cash, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentRequest.prototype.hasValue = function() {
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
proto.com.elarian.hera.proto.SendPaymentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SendPaymentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SendPaymentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendPaymentReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: (f = msg.getTransactionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
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
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply}
 */
proto.com.elarian.hera.proto.SendPaymentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SendPaymentReply;
  return proto.com.elarian.hera.proto.SendPaymentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SendPaymentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply}
 */
proto.com.elarian.hera.proto.SendPaymentReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.SendPaymentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SendPaymentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SendPaymentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SendPaymentReply.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue transaction_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.getTransactionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
*/
proto.com.elarian.hera.proto.SendPaymentReply.prototype.setTransactionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.clearTransactionId = function() {
  return this.setTransactionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue customer_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
*/
proto.com.elarian.hera.proto.SendPaymentReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.SendPaymentReply} returns this
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SendPaymentReply.prototype.hasCustomerId = function() {
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
proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 3,
  CUSTOMER_NUMBER: 4
};

/**
 * @return {proto.com.elarian.hera.proto.CheckoutPaymentRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.CheckoutPaymentRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CheckoutPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.PaymentChannelNumber.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_pb.Cash.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CheckoutPaymentRequest;
  return proto.com.elarian.hera.proto.CheckoutPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.PaymentChannelNumber;
      reader.readMessage(value,common_pb.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 6:
      var value = new common_pb.Cash;
      reader.readMessage(value,common_pb.Cash.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CheckoutPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_pb.Cash.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerNumber customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.CheckoutPaymentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 5;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.PaymentChannelNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Cash value = 6;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_pb.Cash, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
*/
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentRequest} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentRequest.prototype.hasValue = function() {
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
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CheckoutPaymentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: (f = msg.getTransactionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
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
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CheckoutPaymentReply;
  return proto.com.elarian.hera.proto.CheckoutPaymentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CheckoutPaymentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CheckoutPaymentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue transaction_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.getTransactionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
*/
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.setTransactionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.clearTransactionId = function() {
  return this.setTransactionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue customer_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
*/
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CheckoutPaymentReply} returns this
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CheckoutPaymentReply.prototype.hasCustomerId = function() {
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
proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.CustomerCase = {
  CUSTOMER_NOT_SET: 0,
  CUSTOMER_ID: 3,
  CUSTOMER_NUMBER: 4
};

/**
 * @return {proto.com.elarian.hera.proto.MakeVoiceCallRequest.CustomerCase}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getCustomerCase = function() {
  return /** @type {proto.com.elarian.hera.proto.MakeVoiceCallRequest.CustomerCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MakeVoiceCallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.VoiceChannelNumber.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MakeVoiceCallRequest;
  return proto.com.elarian.hera.proto.MakeVoiceCallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.VoiceChannelNumber;
      reader.readMessage(value,common_pb.VoiceChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
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
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MakeVoiceCallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.VoiceChannelNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.clearCustomerId = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.hasCustomerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerNumber customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
*/
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.MakeVoiceCallRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional VoiceChannelNumber channel_number = 5;
 * @return {?proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.VoiceChannelNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
*/
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallRequest} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MakeVoiceCallRequest.prototype.hasChannelNumber = function() {
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
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MakeVoiceCallReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MakeVoiceCallReply;
  return proto.com.elarian.hera.proto.MakeVoiceCallReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSessionId(value);
      break;
    case 4:
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
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MakeVoiceCallReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MakeVoiceCallReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSessionId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCustomerId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoiceCallStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.VoiceCallStatus}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallStatus} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue session_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.getSessionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
*/
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.setSessionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.clearSessionId = function() {
  return this.setSessionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue customer_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.getCustomerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
*/
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.setCustomerId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MakeVoiceCallReply} returns this
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.clearCustomerId = function() {
  return this.setCustomerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MakeVoiceCallReply.prototype.hasCustomerId = function() {
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
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
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
proto.com.elarian.hera.proto.StreamNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.StreamNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.StreamNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.elarian.hera.proto.StreamNotificationRequest}
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.StreamNotificationRequest;
  return proto.com.elarian.hera.proto.StreamNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.StreamNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.StreamNotificationRequest}
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
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
proto.com.elarian.hera.proto.StreamNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.StreamNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.StreamNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.StreamNotificationRequest} returns this
 */
proto.com.elarian.hera.proto.StreamNotificationRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingConsentStatusNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
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
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingConsentStatusNotification;
  return proto.com.elarian.hera.proto.MessagingConsentStatusNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingConsentStatus} */ (reader.readEnum());
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
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingConsentStatusNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
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
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
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
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessagingConsentStatus status = 4;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatus}
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatus} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStatusNotification.prototype.setStatus = function(value) {
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
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingSessionStatusNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingSessionStatusNotification;
  return proto.com.elarian.hera.proto.MessagingSessionStatusNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 5:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingSessionStatus} */ (reader.readEnum());
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
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingSessionStatusNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
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
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp expiration = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessagingSessionStatus status = 5;
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatus}
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingSessionStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStatus} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStatusNotification.prototype.setStatus = function(value) {
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
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reminder: (f = msg.getReminder()) && common_pb.CustomerReminder.toObject(includeInstance, f),
    tag: (f = msg.getTag()) && common_pb.CustomerIndex.toObject(includeInstance, f),
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
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new common_pb.CustomerReminder;
      reader.readMessage(value,common_pb.CustomerReminder.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    case 4:
      var value = new common_pb.CustomerIndex;
      reader.readMessage(value,common_pb.CustomerIndex.deserializeBinaryFromReader);
      msg.setTag(value);
      break;
    case 5:
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
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.CustomerReminder.serializeBinaryToWriter
    );
  }
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerIndex.serializeBinaryToWriter
    );
  }
  f = message.getWorkId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerReminder reminder = 3;
 * @return {?proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerReminder} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerReminder, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerReminder|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setReminder = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerIndex tag = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getTag = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerIndex} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerIndex, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerIndex|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue work_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.ReminderNotification.prototype.getWorkId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReminderNotification} returns this
*/
proto.com.elarian.hera.proto.ReminderNotification.prototype.setWorkId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.repeatedFields_ = [8];



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
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.MessagingChannelNumber.toObject(includeInstance, f),
    text: (f = msg.getText()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    mediaList: jspb.Message.toObjectList(msg.getMediaList(),
    common_pb.MediaMessageBody.toObject, includeInstance),
    location: (f = msg.getLocation()) && common_pb.LocationMessageBody.toObject(includeInstance, f)
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
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 5:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 6:
      var value = new common_pb.MessagingChannelNumber;
      reader.readMessage(value,common_pb.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 8:
      var value = new common_pb.MediaMessageBody;
      reader.readMessage(value,common_pb.MediaMessageBody.deserializeBinaryFromReader);
      msg.addMedia(value);
      break;
    case 9:
      var value = new common_pb.LocationMessageBody;
      reader.readMessage(value,common_pb.LocationMessageBody.deserializeBinaryFromReader);
      msg.setLocation(value);
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
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_pb.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMediaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      common_pb.MediaMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      common_pb.LocationMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CustomerNumber customer_number = 5;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 6;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.MessagingChannelNumber, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.StringValue text = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getText = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasText = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated MediaMessageBody media = 8;
 * @return {!Array<!proto.com.elarian.hera.proto.MediaMessageBody>}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getMediaList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.MediaMessageBody>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MediaMessageBody, 8));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.MediaMessageBody>} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setMediaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.addMedia = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.com.elarian.hera.proto.MediaMessageBody, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearMediaList = function() {
  return this.setMediaList([]);
};


/**
 * optional LocationMessageBody location = 9;
 * @return {?proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.getLocation = function() {
  return /** @type{?proto.com.elarian.hera.proto.LocationMessageBody} */ (
    jspb.Message.getWrapperField(this, common_pb.LocationMessageBody, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.LocationMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.ReceivedMessageNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.ReceivedMessageNotification.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 9) != null;
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
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 4:
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
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MessageDeliveryStatus status = 4;
 * @return {!proto.com.elarian.hera.proto.MessageDeliveryStatus}
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageDeliveryStatus} value
 * @return {!proto.com.elarian.hera.proto.MessageStatusNotification} returns this
 */
proto.com.elarian.hera.proto.MessageStatusNotification.prototype.setStatus = function(value) {
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
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdSessionNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdSessionNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdSessionNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customerNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    input: (f = msg.getInput()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdSessionNotification;
  return proto.com.elarian.hera.proto.UssdSessionNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdSessionNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerNumber(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setInput(value);
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
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdSessionNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdSessionNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdSessionNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
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
  f = message.getChannelNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string channel_number = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getChannelNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string customer_number = 5;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getCustomerNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue input = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.getInput = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
*/
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionNotification} returns this
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionNotification.prototype.hasInput = function() {
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
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.VoiceChannelNumber.toObject(includeInstance, f),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    direction: jspb.Message.getFieldWithDefault(msg, 6, 0),
    input: (f = msg.getInput()) && common_pb.VoiceCallHopInput.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    cost: (f = msg.getCost()) && common_pb.Cash.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallNotification;
  return proto.com.elarian.hera.proto.VoiceCallNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new common_pb.VoiceChannelNumber;
      reader.readMessage(value,common_pb.VoiceChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 5:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 6:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 7:
      var value = new common_pb.VoiceCallHopInput;
      reader.readMessage(value,common_pb.VoiceCallHopInput.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 9:
      var value = new common_pb.Cash;
      reader.readMessage(value,common_pb.Cash.deserializeBinaryFromReader);
      msg.setCost(value);
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
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
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
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.VoiceChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      common_pb.VoiceCallHopInput.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCost();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      common_pb.Cash.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional VoiceChannelNumber channel_number = 4;
 * @return {?proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.VoiceChannelNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
*/
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomerNumber customer_number = 5;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
*/
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CustomerEventDirection direction = 6;
 * @return {!proto.com.elarian.hera.proto.CustomerEventDirection}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getDirection = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerEventDirection} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional VoiceCallHopInput input = 7;
 * @return {?proto.com.elarian.hera.proto.VoiceCallHopInput}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getInput = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallHopInput} */ (
    jspb.Message.getWrapperField(this, common_pb.VoiceCallHopInput, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallHopInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
*/
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.hasInput = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration duration = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
*/
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Cash cost = 9;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.getCost = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_pb.Cash, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
*/
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.setCost = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallNotification} returns this
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.clearCost = function() {
  return this.setCost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallNotification.prototype.hasCost = function() {
  return jspb.Message.getField(this, 9) != null;
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
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerNumber: (f = msg.getCustomerNumber()) && common_pb.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && common_pb.PaymentChannelNumber.toObject(includeInstance, f),
    value: (f = msg.getValue()) && common_pb.Cash.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 4:
      var value = new common_pb.CustomerNumber;
      reader.readMessage(value,common_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 5:
      var value = new common_pb.PaymentChannelNumber;
      reader.readMessage(value,common_pb.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 6:
      var value = new common_pb.Cash;
      reader.readMessage(value,common_pb.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 7:
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
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_pb.Cash.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CustomerNumber customer_number = 4;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.CustomerNumber, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 5;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, common_pb.PaymentChannelNumber, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Cash value = 6;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, common_pb.Cash, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
*/
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PaymentStatus status = 7;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.ReceivedPaymentNotification} returns this
 */
proto.com.elarian.hera.proto.ReceivedPaymentNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
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
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 4:
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
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string product_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PaymentStatus status = 4;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.PaymentStatusNotification} returns this
 */
proto.com.elarian.hera.proto.PaymentStatusNotification.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_ = [[3,4,5,6,7,8,9,10,11]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.WebhookRequest.EntryCase = {
  ENTRY_NOT_SET: 0,
  MESSAGING_CONSENT_STATUS: 3,
  MESSAGING_SESSION_STATUS: 4,
  REMINDER: 5,
  RECEIVED_MESSAGE: 6,
  MESSAGE_STATUS: 7,
  USSD_SESSION: 8,
  VOICE_CALL: 9,
  RECEIVED_PAYMENT: 10,
  PAYMENT_STATUS: 11
};

/**
 * @return {proto.com.elarian.hera.proto.WebhookRequest.EntryCase}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.WebhookRequest.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.WebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.WebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.WebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    messagingConsentStatus: (f = msg.getMessagingConsentStatus()) && proto.com.elarian.hera.proto.MessagingConsentStatusNotification.toObject(includeInstance, f),
    messagingSessionStatus: (f = msg.getMessagingSessionStatus()) && proto.com.elarian.hera.proto.MessagingSessionStatusNotification.toObject(includeInstance, f),
    reminder: (f = msg.getReminder()) && proto.com.elarian.hera.proto.ReminderNotification.toObject(includeInstance, f),
    receivedMessage: (f = msg.getReceivedMessage()) && proto.com.elarian.hera.proto.ReceivedMessageNotification.toObject(includeInstance, f),
    messageStatus: (f = msg.getMessageStatus()) && proto.com.elarian.hera.proto.MessageStatusNotification.toObject(includeInstance, f),
    ussdSession: (f = msg.getUssdSession()) && proto.com.elarian.hera.proto.UssdSessionNotification.toObject(includeInstance, f),
    voiceCall: (f = msg.getVoiceCall()) && proto.com.elarian.hera.proto.VoiceCallNotification.toObject(includeInstance, f),
    receivedPayment: (f = msg.getReceivedPayment()) && proto.com.elarian.hera.proto.ReceivedPaymentNotification.toObject(includeInstance, f),
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
 * @return {!proto.com.elarian.hera.proto.WebhookRequest}
 */
proto.com.elarian.hera.proto.WebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.WebhookRequest;
  return proto.com.elarian.hera.proto.WebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.WebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest}
 */
proto.com.elarian.hera.proto.WebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.MessagingConsentStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingConsentStatusNotification.deserializeBinaryFromReader);
      msg.setMessagingConsentStatus(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.MessagingSessionStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingSessionStatusNotification.deserializeBinaryFromReader);
      msg.setMessagingSessionStatus(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.ReminderNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReminderNotification.deserializeBinaryFromReader);
      msg.setReminder(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.ReceivedMessageNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReceivedMessageNotification.deserializeBinaryFromReader);
      msg.setReceivedMessage(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.MessageStatusNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessageStatusNotification.deserializeBinaryFromReader);
      msg.setMessageStatus(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.UssdSessionNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdSessionNotification.deserializeBinaryFromReader);
      msg.setUssdSession(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.VoiceCallNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallNotification.deserializeBinaryFromReader);
      msg.setVoiceCall(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.ReceivedPaymentNotification;
      reader.readMessage(value,proto.com.elarian.hera.proto.ReceivedPaymentNotification.deserializeBinaryFromReader);
      msg.setReceivedPayment(value);
      break;
    case 11:
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
proto.com.elarian.hera.proto.WebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.WebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.WebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMessagingConsentStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.MessagingConsentStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessagingSessionStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.MessagingSessionStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.ReminderNotification.serializeBinaryToWriter
    );
  }
  f = message.getReceivedMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.ReceivedMessageNotification.serializeBinaryToWriter
    );
  }
  f = message.getMessageStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.MessageStatusNotification.serializeBinaryToWriter
    );
  }
  f = message.getUssdSession();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.UssdSessionNotification.serializeBinaryToWriter
    );
  }
  f = message.getVoiceCall();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.VoiceCallNotification.serializeBinaryToWriter
    );
  }
  f = message.getReceivedPayment();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.ReceivedPaymentNotification.serializeBinaryToWriter
    );
  }
  f = message.getPaymentStatus();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.com.elarian.hera.proto.PaymentStatusNotification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingConsentStatusNotification messaging_consent_status = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingConsentStatusNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getMessagingConsentStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingConsentStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingConsentStatusNotification, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingConsentStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setMessagingConsentStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearMessagingConsentStatus = function() {
  return this.setMessagingConsentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasMessagingConsentStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessagingSessionStatusNotification messaging_session_status = 4;
 * @return {?proto.com.elarian.hera.proto.MessagingSessionStatusNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getMessagingSessionStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingSessionStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingSessionStatusNotification, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingSessionStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setMessagingSessionStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearMessagingSessionStatus = function() {
  return this.setMessagingSessionStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasMessagingSessionStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReminderNotification reminder = 5;
 * @return {?proto.com.elarian.hera.proto.ReminderNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getReminder = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReminderNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReminderNotification, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReminderNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setReminder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearReminder = function() {
  return this.setReminder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasReminder = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ReceivedMessageNotification received_message = 6;
 * @return {?proto.com.elarian.hera.proto.ReceivedMessageNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getReceivedMessage = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReceivedMessageNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReceivedMessageNotification, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReceivedMessageNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setReceivedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearReceivedMessage = function() {
  return this.setReceivedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasReceivedMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MessageStatusNotification message_status = 7;
 * @return {?proto.com.elarian.hera.proto.MessageStatusNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getMessageStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessageStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessageStatusNotification, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessageStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setMessageStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearMessageStatus = function() {
  return this.setMessageStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasMessageStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UssdSessionNotification ussd_session = 8;
 * @return {?proto.com.elarian.hera.proto.UssdSessionNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getUssdSession = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdSessionNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UssdSessionNotification, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdSessionNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setUssdSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearUssdSession = function() {
  return this.setUssdSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasUssdSession = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VoiceCallNotification voice_call = 9;
 * @return {?proto.com.elarian.hera.proto.VoiceCallNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getVoiceCall = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallNotification, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setVoiceCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearVoiceCall = function() {
  return this.setVoiceCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasVoiceCall = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ReceivedPaymentNotification received_payment = 10;
 * @return {?proto.com.elarian.hera.proto.ReceivedPaymentNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getReceivedPayment = function() {
  return /** @type{?proto.com.elarian.hera.proto.ReceivedPaymentNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.ReceivedPaymentNotification, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.ReceivedPaymentNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setReceivedPayment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearReceivedPayment = function() {
  return this.setReceivedPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasReceivedPayment = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PaymentStatusNotification payment_status = 11;
 * @return {?proto.com.elarian.hera.proto.PaymentStatusNotification}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.getPaymentStatus = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentStatusNotification} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentStatusNotification, 11));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentStatusNotification|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
*/
proto.com.elarian.hera.proto.WebhookRequest.prototype.setPaymentStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.com.elarian.hera.proto.WebhookRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookRequest} returns this
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.clearPaymentStatus = function() {
  return this.setPaymentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookRequest.prototype.hasPaymentStatus = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.WebhookResponse.repeatedFields_ = [4];



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
proto.com.elarian.hera.proto.WebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.WebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.WebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ussdMenu: (f = msg.getUssdMenu()) && common_pb.UssdMenu.toObject(includeInstance, f),
    voiceCallActionsList: jspb.Message.toObjectList(msg.getVoiceCallActionsList(),
    common_pb.VoiceCallAction.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.WebhookResponse}
 */
proto.com.elarian.hera.proto.WebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.WebhookResponse;
  return proto.com.elarian.hera.proto.WebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.WebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.WebhookResponse}
 */
proto.com.elarian.hera.proto.WebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 3:
      var value = new common_pb.UssdMenu;
      reader.readMessage(value,common_pb.UssdMenu.deserializeBinaryFromReader);
      msg.setUssdMenu(value);
      break;
    case 4:
      var value = new common_pb.VoiceCallAction;
      reader.readMessage(value,common_pb.VoiceCallAction.deserializeBinaryFromReader);
      msg.addVoiceCallActions(value);
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
proto.com.elarian.hera.proto.WebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.WebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.WebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUssdMenu();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.UssdMenu.serializeBinaryToWriter
    );
  }
  f = message.getVoiceCallActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.VoiceCallAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UssdMenu ussd_menu = 3;
 * @return {?proto.com.elarian.hera.proto.UssdMenu}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.getUssdMenu = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdMenu} */ (
    jspb.Message.getWrapperField(this, common_pb.UssdMenu, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdMenu|undefined} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
*/
proto.com.elarian.hera.proto.WebhookResponse.prototype.setUssdMenu = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.clearUssdMenu = function() {
  return this.setUssdMenu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.hasUssdMenu = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated VoiceCallAction voice_call_actions = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.getVoiceCallActionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.VoiceCallAction, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
*/
proto.com.elarian.hera.proto.WebhookResponse.prototype.setVoiceCallActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.addVoiceCallActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.VoiceCallAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.WebhookResponse} returns this
 */
proto.com.elarian.hera.proto.WebhookResponse.prototype.clearVoiceCallActionsList = function() {
  return this.setVoiceCallActionsList([]);
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
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.WebhookResponseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.WebhookResponseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookResponseReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.WebhookResponseReply}
 */
proto.com.elarian.hera.proto.WebhookResponseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.WebhookResponseReply;
  return proto.com.elarian.hera.proto.WebhookResponseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.WebhookResponseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.WebhookResponseReply}
 */
proto.com.elarian.hera.proto.WebhookResponseReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.WebhookResponseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.WebhookResponseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.WebhookResponseReply.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponseReply} returns this
 */
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.WebhookResponseReply} returns this
 */
proto.com.elarian.hera.proto.WebhookResponseReply.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.com.elarian.hera.proto);
