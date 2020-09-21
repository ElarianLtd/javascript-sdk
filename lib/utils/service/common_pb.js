// source: common.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.com.elarian.hera.proto.Cash', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerEventDirection', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerIndex', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerMessageBody.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerNumberProvider', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerReminder', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.CustomerRequestOrigin', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DataMapValue', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DataMapValue.ValueCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DequeueCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DialCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.EnqueueCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetDigitsCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetRecordingCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.IndexMapping', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.LocationMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MediaMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MediaType', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageDeliveryStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingChannel', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingChannelNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingChannelStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingState', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentAccountType', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentBalance', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentChannel', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentChannelNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentCounterParty', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentCounterParty.PartyCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentCustomerCounterParty', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentPurseCounterParty', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentState', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentTransactionSide', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentTransactionState', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentWalletCounterParty', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentWalletState', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PaymentWalletTransaction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PendingPaymentTransaction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PlayCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RecordSessionCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RedirectCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RejectCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SayCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TextMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TextMessageTemplate', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TextToSpeechVoice', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdChannel', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdChannelNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdHop', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdMenu', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdSessionStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdState', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallAction.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallDialInput', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallHangupCause', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallHop', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallHopInput', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallQueueInput', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallStateEntry', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceChannel', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceChannelNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceState', null, global);
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
proto.com.elarian.hera.proto.Cash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.Cash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.Cash.displayName = 'proto.com.elarian.hera.proto.Cash';
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
proto.com.elarian.hera.proto.CustomerNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerNumber.displayName = 'proto.com.elarian.hera.proto.CustomerNumber';
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
proto.com.elarian.hera.proto.MessagingChannelNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingChannelNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingChannelNumber.displayName = 'proto.com.elarian.hera.proto.MessagingChannelNumber';
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
proto.com.elarian.hera.proto.UssdChannelNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdChannelNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdChannelNumber.displayName = 'proto.com.elarian.hera.proto.UssdChannelNumber';
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
proto.com.elarian.hera.proto.PaymentChannelNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentChannelNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentChannelNumber.displayName = 'proto.com.elarian.hera.proto.PaymentChannelNumber';
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
proto.com.elarian.hera.proto.VoiceChannelNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceChannelNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceChannelNumber.displayName = 'proto.com.elarian.hera.proto.VoiceChannelNumber';
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
proto.com.elarian.hera.proto.TextMessageTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.TextMessageTemplate.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.TextMessageTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.TextMessageTemplate.displayName = 'proto.com.elarian.hera.proto.TextMessageTemplate';
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
proto.com.elarian.hera.proto.TextMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.TextMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.TextMessageBody.displayName = 'proto.com.elarian.hera.proto.TextMessageBody';
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
proto.com.elarian.hera.proto.MediaMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MediaMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MediaMessageBody.displayName = 'proto.com.elarian.hera.proto.MediaMessageBody';
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
proto.com.elarian.hera.proto.LocationMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.LocationMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.LocationMessageBody.displayName = 'proto.com.elarian.hera.proto.LocationMessageBody';
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
proto.com.elarian.hera.proto.CustomerMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerMessageBody.displayName = 'proto.com.elarian.hera.proto.CustomerMessageBody';
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
proto.com.elarian.hera.proto.UssdMenu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdMenu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdMenu.displayName = 'proto.com.elarian.hera.proto.UssdMenu';
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
proto.com.elarian.hera.proto.UssdHop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdHop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdHop.displayName = 'proto.com.elarian.hera.proto.UssdHop';
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
proto.com.elarian.hera.proto.DataMapValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.DataMapValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DataMapValue.displayName = 'proto.com.elarian.hera.proto.DataMapValue';
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
proto.com.elarian.hera.proto.MessagingConsentStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingConsentStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingConsentStateEntry.displayName = 'proto.com.elarian.hera.proto.MessagingConsentStateEntry';
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
proto.com.elarian.hera.proto.MessagingSessionStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingSessionStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingSessionStateEntry.displayName = 'proto.com.elarian.hera.proto.MessagingSessionStateEntry';
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
proto.com.elarian.hera.proto.MessagingChannelStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingChannelStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingChannelStateEntry.displayName = 'proto.com.elarian.hera.proto.MessagingChannelStateEntry';
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
proto.com.elarian.hera.proto.MessageStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.MessageStateEntry.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessageStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessageStateEntry.displayName = 'proto.com.elarian.hera.proto.MessageStateEntry';
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
proto.com.elarian.hera.proto.MessagingState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.MessagingState.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingState.displayName = 'proto.com.elarian.hera.proto.MessagingState';
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
proto.com.elarian.hera.proto.UssdSessionStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UssdSessionStateEntry.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdSessionStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdSessionStateEntry.displayName = 'proto.com.elarian.hera.proto.UssdSessionStateEntry';
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
proto.com.elarian.hera.proto.UssdState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.UssdState.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdState.displayName = 'proto.com.elarian.hera.proto.UssdState';
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
proto.com.elarian.hera.proto.VoiceCallDialInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallDialInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallDialInput.displayName = 'proto.com.elarian.hera.proto.VoiceCallDialInput';
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
proto.com.elarian.hera.proto.VoiceCallQueueInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallQueueInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallQueueInput.displayName = 'proto.com.elarian.hera.proto.VoiceCallQueueInput';
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
proto.com.elarian.hera.proto.VoiceCallHopInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallHopInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallHopInput.displayName = 'proto.com.elarian.hera.proto.VoiceCallHopInput';
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
proto.com.elarian.hera.proto.VoiceCallHop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.VoiceCallHop.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallHop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallHop.displayName = 'proto.com.elarian.hera.proto.VoiceCallHop';
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
proto.com.elarian.hera.proto.VoiceCallStateEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.VoiceCallStateEntry.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallStateEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallStateEntry.displayName = 'proto.com.elarian.hera.proto.VoiceCallStateEntry';
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
proto.com.elarian.hera.proto.VoiceState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.VoiceState.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceState.displayName = 'proto.com.elarian.hera.proto.VoiceState';
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
proto.com.elarian.hera.proto.PaymentTransactionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentTransactionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentTransactionState.displayName = 'proto.com.elarian.hera.proto.PaymentTransactionState';
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
proto.com.elarian.hera.proto.PendingPaymentTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PendingPaymentTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PendingPaymentTransaction.displayName = 'proto.com.elarian.hera.proto.PendingPaymentTransaction';
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
proto.com.elarian.hera.proto.PaymentBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentBalance.displayName = 'proto.com.elarian.hera.proto.PaymentBalance';
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
proto.com.elarian.hera.proto.PaymentPurseCounterParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentPurseCounterParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentPurseCounterParty.displayName = 'proto.com.elarian.hera.proto.PaymentPurseCounterParty';
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
proto.com.elarian.hera.proto.PaymentWalletCounterParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentWalletCounterParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentWalletCounterParty.displayName = 'proto.com.elarian.hera.proto.PaymentWalletCounterParty';
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
proto.com.elarian.hera.proto.PaymentCustomerCounterParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentCustomerCounterParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentCustomerCounterParty.displayName = 'proto.com.elarian.hera.proto.PaymentCustomerCounterParty';
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
proto.com.elarian.hera.proto.PaymentCounterParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentCounterParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentCounterParty.displayName = 'proto.com.elarian.hera.proto.PaymentCounterParty';
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
proto.com.elarian.hera.proto.PaymentWalletTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentWalletTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentWalletTransaction.displayName = 'proto.com.elarian.hera.proto.PaymentWalletTransaction';
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
proto.com.elarian.hera.proto.PaymentWalletState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.PaymentWalletState.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentWalletState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentWalletState.displayName = 'proto.com.elarian.hera.proto.PaymentWalletState';
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
proto.com.elarian.hera.proto.PaymentState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.PaymentState.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.PaymentState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PaymentState.displayName = 'proto.com.elarian.hera.proto.PaymentState';
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
proto.com.elarian.hera.proto.IndexMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.IndexMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.IndexMapping.displayName = 'proto.com.elarian.hera.proto.IndexMapping';
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
proto.com.elarian.hera.proto.CustomerIndex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerIndex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerIndex.displayName = 'proto.com.elarian.hera.proto.CustomerIndex';
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
proto.com.elarian.hera.proto.CustomerReminder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.CustomerReminder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.CustomerReminder.displayName = 'proto.com.elarian.hera.proto.CustomerReminder';
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
proto.com.elarian.hera.proto.SayCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SayCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SayCallAction.displayName = 'proto.com.elarian.hera.proto.SayCallAction';
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
proto.com.elarian.hera.proto.PlayCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PlayCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PlayCallAction.displayName = 'proto.com.elarian.hera.proto.PlayCallAction';
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
proto.com.elarian.hera.proto.GetDigitsCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetDigitsCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetDigitsCallAction.displayName = 'proto.com.elarian.hera.proto.GetDigitsCallAction';
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
proto.com.elarian.hera.proto.GetRecordingCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetRecordingCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetRecordingCallAction.displayName = 'proto.com.elarian.hera.proto.GetRecordingCallAction';
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
proto.com.elarian.hera.proto.RecordSessionCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RecordSessionCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RecordSessionCallAction.displayName = 'proto.com.elarian.hera.proto.RecordSessionCallAction';
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
proto.com.elarian.hera.proto.DialCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DialCallAction.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.DialCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DialCallAction.displayName = 'proto.com.elarian.hera.proto.DialCallAction';
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
proto.com.elarian.hera.proto.EnqueueCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.EnqueueCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.EnqueueCallAction.displayName = 'proto.com.elarian.hera.proto.EnqueueCallAction';
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
proto.com.elarian.hera.proto.DequeueCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.DequeueCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DequeueCallAction.displayName = 'proto.com.elarian.hera.proto.DequeueCallAction';
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
proto.com.elarian.hera.proto.RejectCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RejectCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RejectCallAction.displayName = 'proto.com.elarian.hera.proto.RejectCallAction';
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
proto.com.elarian.hera.proto.RedirectCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RedirectCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RedirectCallAction.displayName = 'proto.com.elarian.hera.proto.RedirectCallAction';
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
proto.com.elarian.hera.proto.VoiceCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallAction.displayName = 'proto.com.elarian.hera.proto.VoiceCallAction';
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
proto.com.elarian.hera.proto.Cash.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.Cash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.Cash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.Cash.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.Cash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.Cash;
  return proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.Cash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
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
proto.com.elarian.hera.proto.Cash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.Cash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.Cash.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.Cash} returns this
 */
proto.com.elarian.hera.proto.Cash.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double amount = 2;
 * @return {number}
 */
proto.com.elarian.hera.proto.Cash.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.elarian.hera.proto.Cash} returns this
 */
proto.com.elarian.hera.proto.Cash.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.com.elarian.hera.proto.CustomerNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    provider: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partition: (f = msg.getPartition()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CustomerNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerNumber;
  return proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerNumberProvider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPartition(value);
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
proto.com.elarian.hera.proto.CustomerNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumberProvider provider = 1;
 * @return {!proto.com.elarian.hera.proto.CustomerNumberProvider}
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.getProvider = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerNumberProvider} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumberProvider} value
 * @return {!proto.com.elarian.hera.proto.CustomerNumber} returns this
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerNumber} returns this
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue partition = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.getPartition = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerNumber} returns this
*/
proto.com.elarian.hera.proto.CustomerNumber.prototype.setPartition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerNumber} returns this
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.clearPartition = function() {
  return this.setPartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerNumber.prototype.hasPartition = function() {
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
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingChannelNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingChannelNumber;
  return proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
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
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional MessagingChannel channel = 1;
 * @return {!proto.com.elarian.hera.proto.MessagingChannel}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.getChannel = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingChannel} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.setNumber = function(value) {
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
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdChannelNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdChannelNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdChannelNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.UssdChannelNumber}
 */
proto.com.elarian.hera.proto.UssdChannelNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdChannelNumber;
  return proto.com.elarian.hera.proto.UssdChannelNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdChannelNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdChannelNumber}
 */
proto.com.elarian.hera.proto.UssdChannelNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.UssdChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
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
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdChannelNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdChannelNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdChannelNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional UssdChannel channel = 1;
 * @return {!proto.com.elarian.hera.proto.UssdChannel}
 */
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.getChannel = function() {
  return /** @type {!proto.com.elarian.hera.proto.UssdChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.UssdChannel} value
 * @return {!proto.com.elarian.hera.proto.UssdChannelNumber} returns this
 */
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdChannelNumber} returns this
 */
proto.com.elarian.hera.proto.UssdChannelNumber.prototype.setNumber = function(value) {
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
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentChannelNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentChannelNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentChannelNumber;
  return proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentChannelNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
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
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentChannelNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentChannelNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PaymentChannel channel = 1;
 * @return {!proto.com.elarian.hera.proto.PaymentChannel}
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.getChannel = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentChannel} value
 * @return {!proto.com.elarian.hera.proto.PaymentChannelNumber} returns this
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentChannelNumber} returns this
 */
proto.com.elarian.hera.proto.PaymentChannelNumber.prototype.setNumber = function(value) {
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
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceChannelNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceChannelNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceChannelNumber;
  return proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceChannelNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
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
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceChannelNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceChannelNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional VoiceChannel channel = 1;
 * @return {!proto.com.elarian.hera.proto.VoiceChannel}
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.getChannel = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceChannel} value
 * @return {!proto.com.elarian.hera.proto.VoiceChannelNumber} returns this
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceChannelNumber} returns this
 */
proto.com.elarian.hera.proto.VoiceChannelNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.TextMessageTemplate.repeatedFields_ = [2];



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
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.TextMessageTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.TextMessageTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TextMessageTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paramsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate}
 */
proto.com.elarian.hera.proto.TextMessageTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.TextMessageTemplate;
  return proto.com.elarian.hera.proto.TextMessageTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.TextMessageTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate}
 */
proto.com.elarian.hera.proto.TextMessageTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addParams(value);
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
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.TextMessageTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.TextMessageTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TextMessageTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate} returns this
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string params = 2;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.getParamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate} returns this
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.setParamsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate} returns this
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.addParams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.TextMessageTemplate} returns this
 */
proto.com.elarian.hera.proto.TextMessageTemplate.prototype.clearParamsList = function() {
  return this.setParamsList([]);
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
proto.com.elarian.hera.proto.TextMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.TextMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.TextMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TextMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && proto.com.elarian.hera.proto.TextMessageTemplate.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.TextMessageBody}
 */
proto.com.elarian.hera.proto.TextMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.TextMessageBody;
  return proto.com.elarian.hera.proto.TextMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.TextMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.TextMessageBody}
 */
proto.com.elarian.hera.proto.TextMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.TextMessageTemplate;
      reader.readMessage(value,proto.com.elarian.hera.proto.TextMessageTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.com.elarian.hera.proto.TextMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.TextMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.TextMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TextMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.TextMessageTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue text = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.getText = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.TextMessageBody} returns this
*/
proto.com.elarian.hera.proto.TextMessageBody.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.TextMessageBody} returns this
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TextMessageTemplate template = 2;
 * @return {?proto.com.elarian.hera.proto.TextMessageTemplate}
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.getTemplate = function() {
  return /** @type{?proto.com.elarian.hera.proto.TextMessageTemplate} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.TextMessageTemplate, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.TextMessageTemplate|undefined} value
 * @return {!proto.com.elarian.hera.proto.TextMessageBody} returns this
*/
proto.com.elarian.hera.proto.TextMessageBody.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.TextMessageBody} returns this
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.TextMessageBody.prototype.hasTemplate = function() {
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
proto.com.elarian.hera.proto.MediaMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MediaMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MediaMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    media: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MediaMessageBody;
  return proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.MediaType} */ (reader.readEnum());
      msg.setMedia(value);
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
proto.com.elarian.hera.proto.MediaMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedia();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody} returns this
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MediaType media = 2;
 * @return {!proto.com.elarian.hera.proto.MediaType}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.getMedia = function() {
  return /** @type {!proto.com.elarian.hera.proto.MediaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MediaType} value
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody} returns this
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.setMedia = function(value) {
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
proto.com.elarian.hera.proto.LocationMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.LocationMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LocationMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.LocationMessageBody;
  return proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
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
proto.com.elarian.hera.proto.LocationMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.EntryCase = {
  ENTRY_NOT_SET: 0,
  TEXT: 1,
  MEDIA: 2,
  LOCATION: 3
};

/**
 * @return {proto.com.elarian.hera.proto.CustomerMessageBody.EntryCase}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.CustomerMessageBody.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && proto.com.elarian.hera.proto.TextMessageBody.toObject(includeInstance, f),
    media: (f = msg.getMedia()) && proto.com.elarian.hera.proto.MediaMessageBody.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.com.elarian.hera.proto.LocationMessageBody.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerMessageBody;
  return proto.com.elarian.hera.proto.CustomerMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.TextMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.TextMessageBody.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.MediaMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.LocationMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.TextMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional TextMessageBody text = 1;
 * @return {?proto.com.elarian.hera.proto.TextMessageBody}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.getText = function() {
  return /** @type{?proto.com.elarian.hera.proto.TextMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.TextMessageBody, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.TextMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
*/
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MediaMessageBody media = 2;
 * @return {?proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.getMedia = function() {
  return /** @type{?proto.com.elarian.hera.proto.MediaMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MediaMessageBody, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MediaMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
*/
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocationMessageBody location = 3;
 * @return {?proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.getLocation = function() {
  return /** @type{?proto.com.elarian.hera.proto.LocationMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LocationMessageBody, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.LocationMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
*/
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.CustomerMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerMessageBody} returns this
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerMessageBody.prototype.hasLocation = function() {
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
proto.com.elarian.hera.proto.UssdMenu.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdMenu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdMenu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdMenu.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isTerminal: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.com.elarian.hera.proto.UssdMenu}
 */
proto.com.elarian.hera.proto.UssdMenu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdMenu;
  return proto.com.elarian.hera.proto.UssdMenu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdMenu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdMenu}
 */
proto.com.elarian.hera.proto.UssdMenu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTerminal(value);
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
proto.com.elarian.hera.proto.UssdMenu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdMenu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdMenu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdMenu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsTerminal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdMenu.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdMenu} returns this
 */
proto.com.elarian.hera.proto.UssdMenu.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_terminal = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdMenu.prototype.getIsTerminal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.UssdMenu} returns this
 */
proto.com.elarian.hera.proto.UssdMenu.prototype.setIsTerminal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.com.elarian.hera.proto.UssdHop.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdHop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdHop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdHop.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: (f = msg.getInput()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    menu: (f = msg.getMenu()) && proto.com.elarian.hera.proto.UssdMenu.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.UssdHop}
 */
proto.com.elarian.hera.proto.UssdHop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdHop;
  return proto.com.elarian.hera.proto.UssdHop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdHop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdHop}
 */
proto.com.elarian.hera.proto.UssdHop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.UssdMenu;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdMenu.deserializeBinaryFromReader);
      msg.setMenu(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.com.elarian.hera.proto.UssdHop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdHop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdHop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdHop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMenu();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.UssdMenu.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue input = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.getInput = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
*/
proto.com.elarian.hera.proto.UssdHop.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
 */
proto.com.elarian.hera.proto.UssdHop.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.hasInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UssdMenu menu = 2;
 * @return {?proto.com.elarian.hera.proto.UssdMenu}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.getMenu = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdMenu} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UssdMenu, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdMenu|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
*/
proto.com.elarian.hera.proto.UssdHop.prototype.setMenu = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
 */
proto.com.elarian.hera.proto.UssdHop.prototype.clearMenu = function() {
  return this.setMenu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.hasMenu = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
*/
proto.com.elarian.hera.proto.UssdHop.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdHop} returns this
 */
proto.com.elarian.hera.proto.UssdHop.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdHop.prototype.hasCreatedAt = function() {
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
proto.com.elarian.hera.proto.DataMapValue.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.DataMapValue.ValueCase = {
  VALUE_NOT_SET: 0,
  STRING_VAL: 2,
  BYTES_VAL: 3
};

/**
 * @return {proto.com.elarian.hera.proto.DataMapValue.ValueCase}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.getValueCase = function() {
  return /** @type {proto.com.elarian.hera.proto.DataMapValue.ValueCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.DataMapValue.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DataMapValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DataMapValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DataMapValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringVal: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bytesVal: msg.getBytesVal_asB64()
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
 * @return {!proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.DataMapValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DataMapValue;
  return proto.com.elarian.hera.proto.DataMapValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DataMapValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DataMapValue}
 */
proto.com.elarian.hera.proto.DataMapValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringVal(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesVal(value);
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
proto.com.elarian.hera.proto.DataMapValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DataMapValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DataMapValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DataMapValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string string_val = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.getStringVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.DataMapValue} returns this
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.setStringVal = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DataMapValue} returns this
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.clearStringVal = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.hasStringVal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes bytes_val = 3;
 * @return {!(string|Uint8Array)}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.getBytesVal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes bytes_val = 3;
 * This is a type-conversion wrapper around `getBytesVal()`
 * @return {string}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.getBytesVal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesVal()));
};


/**
 * optional bytes bytes_val = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesVal()`
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.getBytesVal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesVal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.com.elarian.hera.proto.DataMapValue} returns this
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.setBytesVal = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DataMapValue} returns this
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.clearBytesVal = function() {
  return jspb.Message.setOneofField(this, 3, proto.com.elarian.hera.proto.DataMapValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DataMapValue.prototype.hasBytesVal = function() {
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
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingConsentStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStateEntry}
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingConsentStateEntry;
  return proto.com.elarian.hera.proto.MessagingConsentStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStateEntry}
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingConsentStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessagingConsentStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStatus}
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingConsentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingConsentStatus} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingConsentStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingConsentStateEntry.prototype.hasUpdatedAt = function() {
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
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingSessionStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingSessionStateEntry;
  return proto.com.elarian.hera.proto.MessagingSessionStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
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
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingSessionStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp started_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp expiration = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingSessionStateEntry.prototype.hasExpiration = function() {
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
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingChannelStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.MessagingChannelNumber.toObject(includeInstance, f),
    consentState: (f = msg.getConsentState()) && proto.com.elarian.hera.proto.MessagingConsentStateEntry.toObject(includeInstance, f),
    activeSession: (f = msg.getActiveSession()) && proto.com.elarian.hera.proto.MessagingSessionStateEntry.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingChannelStateEntry;
  return proto.com.elarian.hera.proto.MessagingChannelStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.MessagingChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.MessagingConsentStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingConsentStateEntry.deserializeBinaryFromReader);
      msg.setConsentState(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.MessagingSessionStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingSessionStateEntry.deserializeBinaryFromReader);
      msg.setActiveSession(value);
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
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingChannelStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getConsentState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.MessagingConsentStateEntry.serializeBinaryToWriter
    );
  }
  f = message.getActiveSession();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.MessagingSessionStateEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingConsentStateEntry consent_state = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingConsentStateEntry}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.getConsentState = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingConsentStateEntry} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingConsentStateEntry, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingConsentStateEntry|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.setConsentState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.clearConsentState = function() {
  return this.setConsentState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.hasConsentState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessagingSessionStateEntry active_session = 4;
 * @return {?proto.com.elarian.hera.proto.MessagingSessionStateEntry}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.getActiveSession = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingSessionStateEntry} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingSessionStateEntry, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingSessionStateEntry|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.setActiveSession = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.clearActiveSession = function() {
  return this.setActiveSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessagingChannelStateEntry.prototype.hasActiveSession = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.MessageStateEntry.repeatedFields_ = [8];



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
proto.com.elarian.hera.proto.MessageStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessageStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessageStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessageStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.MessagingChannelNumber.toObject(includeInstance, f),
    messageId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    appId: (f = msg.getAppId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    text: (f = msg.getText()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && proto.com.elarian.hera.proto.TextMessageTemplate.toObject(includeInstance, f),
    mediaList: jspb.Message.toObjectList(msg.getMediaList(),
    proto.com.elarian.hera.proto.MediaMessageBody.toObject, includeInstance),
    location: (f = msg.getLocation()) && proto.com.elarian.hera.proto.LocationMessageBody.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry}
 */
proto.com.elarian.hera.proto.MessageStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessageStateEntry;
  return proto.com.elarian.hera.proto.MessageStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessageStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry}
 */
proto.com.elarian.hera.proto.MessageStateEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.MessagingChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAppId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.TextMessageTemplate;
      reader.readMessage(value,proto.com.elarian.hera.proto.TextMessageTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.MediaMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader);
      msg.addMedia(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.LocationMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 12:
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
proto.com.elarian.hera.proto.MessageStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessageStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessageStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessageStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAppId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.TextMessageTemplate.serializeBinaryToWriter
    );
  }
  f = message.getMediaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional CustomerEventDirection direction = 1;
 * @return {!proto.com.elarian.hera.proto.CustomerEventDirection}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getDirection = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerEventDirection} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessagingChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message_id = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.StringValue app_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getAppId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setAppId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearAppId = function() {
  return this.setAppId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue text = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getText = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasText = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextMessageTemplate template = 7;
 * @return {?proto.com.elarian.hera.proto.TextMessageTemplate}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getTemplate = function() {
  return /** @type{?proto.com.elarian.hera.proto.TextMessageTemplate} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.TextMessageTemplate, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.TextMessageTemplate|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated MediaMessageBody media = 8;
 * @return {!Array<!proto.com.elarian.hera.proto.MediaMessageBody>}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getMediaList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.MediaMessageBody>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.MediaMessageBody, 8));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.MediaMessageBody>} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setMediaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.addMedia = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.com.elarian.hera.proto.MediaMessageBody, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearMediaList = function() {
  return this.setMediaList([]);
};


/**
 * optional LocationMessageBody location = 9;
 * @return {?proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getLocation = function() {
  return /** @type{?proto.com.elarian.hera.proto.LocationMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LocationMessageBody, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.LocationMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
*/
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MessageDeliveryStatus status = 12;
 * @return {!proto.com.elarian.hera.proto.MessageDeliveryStatus}
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessageDeliveryStatus} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageDeliveryStatus} value
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry} returns this
 */
proto.com.elarian.hera.proto.MessageStateEntry.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.MessagingState.repeatedFields_ = [1,2,3,4];



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
proto.com.elarian.hera.proto.MessagingState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingState.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelStateList: jspb.Message.toObjectList(msg.getChannelStateList(),
    proto.com.elarian.hera.proto.MessagingChannelStateEntry.toObject, includeInstance),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.com.elarian.hera.proto.MessageStateEntry.toObject, includeInstance),
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    proto.com.elarian.hera.proto.CustomerNumber.toObject, includeInstance),
    channelNumbersList: jspb.Message.toObjectList(msg.getChannelNumbersList(),
    proto.com.elarian.hera.proto.MessagingChannelNumber.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.MessagingState}
 */
proto.com.elarian.hera.proto.MessagingState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingState;
  return proto.com.elarian.hera.proto.MessagingState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingState}
 */
proto.com.elarian.hera.proto.MessagingState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.MessagingChannelStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingChannelStateEntry.deserializeBinaryFromReader);
      msg.addChannelState(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.MessageStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessageStateEntry.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.MessagingChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.addChannelNumbers(value);
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
proto.com.elarian.hera.proto.MessagingState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.MessagingChannelStateEntry.serializeBinaryToWriter
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.MessageStateEntry.serializeBinaryToWriter
    );
  }
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MessagingChannelStateEntry channel_state = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.MessagingChannelStateEntry>}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.getChannelStateList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.MessagingChannelStateEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.MessagingChannelStateEntry, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.MessagingChannelStateEntry>} value
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
*/
proto.com.elarian.hera.proto.MessagingState.prototype.setChannelStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingChannelStateEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.MessagingChannelStateEntry}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.addChannelState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.MessagingChannelStateEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
 */
proto.com.elarian.hera.proto.MessagingState.prototype.clearChannelStateList = function() {
  return this.setChannelStateList([]);
};


/**
 * repeated MessageStateEntry messages = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.MessageStateEntry>}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.MessageStateEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.MessageStateEntry, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.MessageStateEntry>} value
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
*/
proto.com.elarian.hera.proto.MessagingState.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.MessageStateEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.MessageStateEntry}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.MessageStateEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
 */
proto.com.elarian.hera.proto.MessagingState.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * repeated CustomerNumber customer_numbers = 3;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 3));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
*/
proto.com.elarian.hera.proto.MessagingState.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
 */
proto.com.elarian.hera.proto.MessagingState.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * repeated MessagingChannelNumber channel_numbers = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.MessagingChannelNumber>}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.getChannelNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.MessagingChannelNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.MessagingChannelNumber, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.MessagingChannelNumber>} value
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
*/
proto.com.elarian.hera.proto.MessagingState.prototype.setChannelNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingState.prototype.addChannelNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.MessagingChannelNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.MessagingState} returns this
 */
proto.com.elarian.hera.proto.MessagingState.prototype.clearChannelNumbersList = function() {
  return this.setChannelNumbersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.repeatedFields_ = [5];



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
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdSessionStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdSessionStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.UssdChannelNumber.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    appId: (f = msg.getAppId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hopsList: jspb.Message.toObjectList(msg.getHopsList(),
    proto.com.elarian.hera.proto.UssdHop.toObject, includeInstance),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdSessionStateEntry;
  return proto.com.elarian.hera.proto.UssdSessionStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdSessionStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.UssdChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAppId(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.UssdHop;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdHop.deserializeBinaryFromReader);
      msg.addHops(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdSessionStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdSessionStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.UssdChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.com.elarian.hera.proto.UssdHop.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UssdChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.UssdChannelNumber}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UssdChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue app_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getAppId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setAppId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearAppId = function() {
  return this.setAppId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated UssdHop hops = 5;
 * @return {!Array<!proto.com.elarian.hera.proto.UssdHop>}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getHopsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.UssdHop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.UssdHop, 5));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.UssdHop>} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setHopsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.UssdHop=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.UssdHop}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.addHops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.com.elarian.hera.proto.UssdHop, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearHopsList = function() {
  return this.setHopsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
*/
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry} returns this
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdSessionStateEntry.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.UssdState.repeatedFields_ = [1,2,3];



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
proto.com.elarian.hera.proto.UssdState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdState.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.com.elarian.hera.proto.UssdSessionStateEntry.toObject, includeInstance),
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    proto.com.elarian.hera.proto.CustomerNumber.toObject, includeInstance),
    channelNumbersList: jspb.Message.toObjectList(msg.getChannelNumbersList(),
    proto.com.elarian.hera.proto.UssdChannelNumber.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.UssdState}
 */
proto.com.elarian.hera.proto.UssdState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdState;
  return proto.com.elarian.hera.proto.UssdState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdState}
 */
proto.com.elarian.hera.proto.UssdState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.UssdSessionStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdSessionStateEntry.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.UssdChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdChannelNumber.deserializeBinaryFromReader);
      msg.addChannelNumbers(value);
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
proto.com.elarian.hera.proto.UssdState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.UssdSessionStateEntry.serializeBinaryToWriter
    );
  }
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.com.elarian.hera.proto.UssdChannelNumber.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UssdSessionStateEntry sessions = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.UssdSessionStateEntry>}
 */
proto.com.elarian.hera.proto.UssdState.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.UssdSessionStateEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.UssdSessionStateEntry, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.UssdSessionStateEntry>} value
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
*/
proto.com.elarian.hera.proto.UssdState.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.UssdSessionStateEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.UssdSessionStateEntry}
 */
proto.com.elarian.hera.proto.UssdState.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.UssdSessionStateEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
 */
proto.com.elarian.hera.proto.UssdState.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * repeated CustomerNumber customer_numbers = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.UssdState.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
*/
proto.com.elarian.hera.proto.UssdState.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.UssdState.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
 */
proto.com.elarian.hera.proto.UssdState.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * repeated UssdChannelNumber channel_numbers = 3;
 * @return {!Array<!proto.com.elarian.hera.proto.UssdChannelNumber>}
 */
proto.com.elarian.hera.proto.UssdState.prototype.getChannelNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.UssdChannelNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.UssdChannelNumber, 3));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.UssdChannelNumber>} value
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
*/
proto.com.elarian.hera.proto.UssdState.prototype.setChannelNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.UssdChannelNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.UssdChannelNumber}
 */
proto.com.elarian.hera.proto.UssdState.prototype.addChannelNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.elarian.hera.proto.UssdChannelNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.UssdState} returns this
 */
proto.com.elarian.hera.proto.UssdState.prototype.clearChannelNumbersList = function() {
  return this.setChannelNumbersList([]);
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
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallDialInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallDialInput;
  return proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationNumber(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string destination_number = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getDestinationNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setDestinationNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp started_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.hasDuration = function() {
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
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    enqueuedAt: (f = msg.getEnqueuedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dequeuedAt: (f = msg.getDequeuedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dequeuedToNumber: (f = msg.getDequeuedToNumber()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    dequeuedToSessionid: (f = msg.getDequeuedToSessionid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    queueDuration: (f = msg.getQueueDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallQueueInput;
  return proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnqueuedAt(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDequeuedAt(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDequeuedToNumber(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDequeuedToSessionid(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setQueueDuration(value);
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
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnqueuedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedToNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedToSessionid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getQueueDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp enqueued_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getEnqueuedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setEnqueuedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearEnqueuedAt = function() {
  return this.setEnqueuedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasEnqueuedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp dequeued_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedAt = function() {
  return this.setDequeuedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue dequeued_to_number = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedToNumber = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedToNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedToNumber = function() {
  return this.setDequeuedToNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedToNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue dequeued_to_sessionId = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedToSessionid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedToSessionid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedToSessionid = function() {
  return this.setDequeuedToSessionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedToSessionid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration queue_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getQueueDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setQueueDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearQueueDuration = function() {
  return this.setQueueDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasQueueDuration = function() {
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
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallHopInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallHopInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    hangupCause: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dtmfDigits: (f = msg.getDtmfDigits()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    recordingUrl: (f = msg.getRecordingUrl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    dialData: (f = msg.getDialData()) && proto.com.elarian.hera.proto.VoiceCallDialInput.toObject(includeInstance, f),
    queueData: (f = msg.getQueueData()) && proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallHopInput;
  return proto.com.elarian.hera.proto.VoiceCallHopInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallHopInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 3:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceCallHangupCause} */ (reader.readEnum());
      msg.setHangupCause(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDtmfDigits(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRecordingUrl(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.VoiceCallDialInput;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader);
      msg.setDialData(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.VoiceCallQueueInput;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader);
      msg.setQueueData(value);
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
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallHopInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallHopInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHangupCause();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDtmfDigits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getRecordingUrl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDialData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter
    );
  }
  f = message.getQueueData();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoiceCallStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.VoiceCallStatus}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallStatus} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp started_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VoiceCallHangupCause hangup_cause = 3;
 * @return {!proto.com.elarian.hera.proto.VoiceCallHangupCause}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getHangupCause = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallHangupCause} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallHangupCause} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setHangupCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue dtmf_digits = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getDtmfDigits = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setDtmfDigits = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.clearDtmfDigits = function() {
  return this.setDtmfDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.hasDtmfDigits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue recording_url = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getRecordingUrl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setRecordingUrl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.clearRecordingUrl = function() {
  return this.setRecordingUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.hasRecordingUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VoiceCallDialInput dial_data = 6;
 * @return {?proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getDialData = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallDialInput} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallDialInput, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallDialInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setDialData = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.clearDialData = function() {
  return this.setDialData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.hasDialData = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional VoiceCallQueueInput queue_data = 7;
 * @return {?proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.getQueueData = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallQueueInput} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallQueueInput, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallQueueInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.setQueueData = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHopInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.clearQueueData = function() {
  return this.setQueueData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHopInput.prototype.hasQueueData = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceCallHop.repeatedFields_ = [2];



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
proto.com.elarian.hera.proto.VoiceCallHop.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallHop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallHop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallHop.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: (f = msg.getInput()) && proto.com.elarian.hera.proto.VoiceCallHopInput.toObject(includeInstance, f),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.com.elarian.hera.proto.VoiceCallAction.toObject, includeInstance),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop}
 */
proto.com.elarian.hera.proto.VoiceCallHop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallHop;
  return proto.com.elarian.hera.proto.VoiceCallHop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallHop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop}
 */
proto.com.elarian.hera.proto.VoiceCallHop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.VoiceCallHopInput;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallHopInput.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.VoiceCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.com.elarian.hera.proto.VoiceCallHop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallHop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallHop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallHop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.VoiceCallHopInput.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoiceCallHopInput input = 1;
 * @return {?proto.com.elarian.hera.proto.VoiceCallHopInput}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.getInput = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallHopInput} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallHopInput, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallHopInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHop.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.hasInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VoiceCallAction actions = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.VoiceCallAction, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHop.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.VoiceCallAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
*/
proto.com.elarian.hera.proto.VoiceCallHop.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop} returns this
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallHop.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.repeatedFields_ = [7];



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
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallStateEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallStateEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.VoiceChannelNumber.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    appId: (f = msg.getAppId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hopsList: jspb.Message.toObjectList(msg.getHopsList(),
    proto.com.elarian.hera.proto.VoiceCallHop.toObject, includeInstance),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    cost: (f = msg.getCost()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallStateEntry;
  return proto.com.elarian.hera.proto.VoiceCallStateEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallStateEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.VoiceChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAppId(value);
      break;
    case 6:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.VoiceCallHop;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallHop.deserializeBinaryFromReader);
      msg.addHops(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setCost(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallStateEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallStateEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.VoiceChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAppId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getHopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.com.elarian.hera.proto.VoiceCallHop.serializeBinaryToWriter
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
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerEventDirection direction = 1;
 * @return {!proto.com.elarian.hera.proto.CustomerEventDirection}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getDirection = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerEventDirection} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VoiceChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string session_id = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.StringValue app_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getAppId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setAppId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearAppId = function() {
  return this.setAppId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VoiceCallStatus status = 6;
 * @return {!proto.com.elarian.hera.proto.VoiceCallStatus}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallStatus} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated VoiceCallHop hops = 7;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceCallHop>}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getHopsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceCallHop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.VoiceCallHop, 7));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceCallHop>} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setHopsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallHop=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceCallHop}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.addHops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.com.elarian.hera.proto.VoiceCallHop, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearHopsList = function() {
  return this.setHopsList([]);
};


/**
 * optional google.protobuf.Duration duration = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Cash cost = 9;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getCost = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setCost = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearCost = function() {
  return this.setCost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasCost = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
*/
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry} returns this
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallStateEntry.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceState.repeatedFields_ = [1,2,3];



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
proto.com.elarian.hera.proto.VoiceState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceState.toObject = function(includeInstance, msg) {
  var f, obj = {
    callsList: jspb.Message.toObjectList(msg.getCallsList(),
    proto.com.elarian.hera.proto.VoiceCallStateEntry.toObject, includeInstance),
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    proto.com.elarian.hera.proto.CustomerNumber.toObject, includeInstance),
    channelNumbersList: jspb.Message.toObjectList(msg.getChannelNumbersList(),
    proto.com.elarian.hera.proto.VoiceChannelNumber.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.VoiceState}
 */
proto.com.elarian.hera.proto.VoiceState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceState;
  return proto.com.elarian.hera.proto.VoiceState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceState}
 */
proto.com.elarian.hera.proto.VoiceState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.VoiceCallStateEntry;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallStateEntry.deserializeBinaryFromReader);
      msg.addCalls(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.VoiceChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinaryFromReader);
      msg.addChannelNumbers(value);
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
proto.com.elarian.hera.proto.VoiceState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.VoiceCallStateEntry.serializeBinaryToWriter
    );
  }
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.com.elarian.hera.proto.VoiceChannelNumber.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VoiceCallStateEntry calls = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceCallStateEntry>}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.getCallsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceCallStateEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.VoiceCallStateEntry, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceCallStateEntry>} value
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
*/
proto.com.elarian.hera.proto.VoiceState.prototype.setCallsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallStateEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceCallStateEntry}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.addCalls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.VoiceCallStateEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
 */
proto.com.elarian.hera.proto.VoiceState.prototype.clearCallsList = function() {
  return this.setCallsList([]);
};


/**
 * repeated CustomerNumber customer_numbers = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
*/
proto.com.elarian.hera.proto.VoiceState.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
 */
proto.com.elarian.hera.proto.VoiceState.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * repeated VoiceChannelNumber channel_numbers = 3;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceChannelNumber>}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.getChannelNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceChannelNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.VoiceChannelNumber, 3));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceChannelNumber>} value
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
*/
proto.com.elarian.hera.proto.VoiceState.prototype.setChannelNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceChannelNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.VoiceState.prototype.addChannelNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.elarian.hera.proto.VoiceChannelNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceState} returns this
 */
proto.com.elarian.hera.proto.VoiceState.prototype.clearChannelNumbersList = function() {
  return this.setChannelNumbersList([]);
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
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentTransactionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentTransactionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.PaymentChannelNumber.toObject(includeInstance, f),
    transactionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    appId: (f = msg.getAppId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    purseId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    value: (f = msg.getValue()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentTransactionState;
  return proto.com.elarian.hera.proto.PaymentTransactionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.PaymentChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAppId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurseId(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 10:
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
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentTransactionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentTransactionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAppId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPurseId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional CustomerEventDirection direction = 1;
 * @return {!proto.com.elarian.hera.proto.CustomerEventDirection}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getDirection = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerEventDirection} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CustomerNumber customer_number = 2;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 3;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentChannelNumber, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string transaction_id = 4;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.StringValue app_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getAppId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setAppId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearAppId = function() {
  return this.setAppId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string purse_id = 6;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getPurseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setPurseId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Cash value = 7;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
*/
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PaymentStatus status = 10;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState} returns this
 */
proto.com.elarian.hera.proto.PaymentTransactionState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
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
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PendingPaymentTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PendingPaymentTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    converted: (f = msg.getConverted()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PendingPaymentTransaction;
  return proto.com.elarian.hera.proto.PendingPaymentTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PendingPaymentTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setConverted(value);
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
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PendingPaymentTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PendingPaymentTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getConverted();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp created_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
*/
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Cash value = 2;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
*/
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Cash converted = 3;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.getConverted = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
*/
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.setConverted = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PendingPaymentTransaction} returns this
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.clearConverted = function() {
  return this.setConverted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PendingPaymentTransaction.prototype.hasConverted = function() {
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
proto.com.elarian.hera.proto.PaymentBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    available: (f = msg.getAvailable()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    actual: (f = msg.getActual()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    pendingMap: (f = msg.getPendingMap()) ? f.toObject(includeInstance, proto.com.elarian.hera.proto.PendingPaymentTransaction.toObject) : []
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
 * @return {!proto.com.elarian.hera.proto.PaymentBalance}
 */
proto.com.elarian.hera.proto.PaymentBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentBalance;
  return proto.com.elarian.hera.proto.PaymentBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentBalance}
 */
proto.com.elarian.hera.proto.PaymentBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setAvailable(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setActual(value);
      break;
    case 4:
      var value = msg.getPendingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.com.elarian.hera.proto.PendingPaymentTransaction.deserializeBinaryFromReader, "", new proto.com.elarian.hera.proto.PendingPaymentTransaction());
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
proto.com.elarian.hera.proto.PaymentBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvailable();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getActual();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getPendingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.com.elarian.hera.proto.PendingPaymentTransaction.serializeBinaryToWriter);
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Cash available = 2;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.getAvailable = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
*/
proto.com.elarian.hera.proto.PaymentBalance.prototype.setAvailable = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.clearAvailable = function() {
  return this.setAvailable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.hasAvailable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Cash actual = 3;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.getActual = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
*/
proto.com.elarian.hera.proto.PaymentBalance.prototype.setActual = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.clearActual = function() {
  return this.setActual(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.hasActual = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, PendingPaymentTransaction> pending = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.com.elarian.hera.proto.PendingPaymentTransaction>}
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.getPendingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.com.elarian.hera.proto.PendingPaymentTransaction>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.com.elarian.hera.proto.PendingPaymentTransaction));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentBalance} returns this
 */
proto.com.elarian.hera.proto.PaymentBalance.prototype.clearPendingMap = function() {
  this.getPendingMap().clear();
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
proto.com.elarian.hera.proto.PaymentPurseCounterParty.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentPurseCounterParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentPurseCounterParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    purseId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.elarian.hera.proto.PaymentPurseCounterParty}
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentPurseCounterParty;
  return proto.com.elarian.hera.proto.PaymentPurseCounterParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentPurseCounterParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentPurseCounterParty}
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.PaymentPurseCounterParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentPurseCounterParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentPurseCounterParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string purse_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.prototype.getPurseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentPurseCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentPurseCounterParty.prototype.setPurseId = function(value) {
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
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentWalletCounterParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentWalletCounterParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.com.elarian.hera.proto.PaymentWalletCounterParty}
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentWalletCounterParty;
  return proto.com.elarian.hera.proto.PaymentWalletCounterParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletCounterParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletCounterParty}
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setWalletId(value);
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
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentWalletCounterParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletCounterParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string wallet_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletCounterParty.prototype.setWalletId = function(value) {
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
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentCustomerCounterParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumber: (f = msg.getCustomerNumber()) && proto.com.elarian.hera.proto.CustomerNumber.toObject(includeInstance, f),
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.PaymentChannelNumber.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentCustomerCounterParty;
  return proto.com.elarian.hera.proto.PaymentCustomerCounterParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.setCustomerNumber(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PaymentChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentCustomerCounterParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerNumber customer_number = 1;
 * @return {?proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.getCustomerNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.CustomerNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.CustomerNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} returns this
*/
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.setCustomerNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.clearCustomerNumber = function() {
  return this.setCustomerNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.hasCustomerNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentChannelNumber channel_number = 2;
 * @return {?proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentChannelNumber, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} returns this
*/
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentCustomerCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentCustomerCounterParty.prototype.hasChannelNumber = function() {
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
proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.PartyCase = {
  PARTY_NOT_SET: 0,
  CUSTOMER: 1,
  PURSE: 2,
  WALLET: 3
};

/**
 * @return {proto.com.elarian.hera.proto.PaymentCounterParty.PartyCase}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.getPartyCase = function() {
  return /** @type {proto.com.elarian.hera.proto.PaymentCounterParty.PartyCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentCounterParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentCounterParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentCounterParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && proto.com.elarian.hera.proto.PaymentCustomerCounterParty.toObject(includeInstance, f),
    purse: (f = msg.getPurse()) && proto.com.elarian.hera.proto.PaymentPurseCounterParty.toObject(includeInstance, f),
    wallet: (f = msg.getWallet()) && proto.com.elarian.hera.proto.PaymentWalletCounterParty.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentCounterParty;
  return proto.com.elarian.hera.proto.PaymentCounterParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentCounterParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.PaymentCustomerCounterParty;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentCustomerCounterParty.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PaymentPurseCounterParty;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentPurseCounterParty.deserializeBinaryFromReader);
      msg.setPurse(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.PaymentWalletCounterParty;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentWalletCounterParty.deserializeBinaryFromReader);
      msg.setWallet(value);
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
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentCounterParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentCounterParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentCounterParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.PaymentCustomerCounterParty.serializeBinaryToWriter
    );
  }
  f = message.getPurse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PaymentPurseCounterParty.serializeBinaryToWriter
    );
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.PaymentWalletCounterParty.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentCustomerCounterParty customer = 1;
 * @return {?proto.com.elarian.hera.proto.PaymentCustomerCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.getCustomer = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentCustomerCounterParty} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentCustomerCounterParty, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentCustomerCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
*/
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.setCustomer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentPurseCounterParty purse = 2;
 * @return {?proto.com.elarian.hera.proto.PaymentPurseCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.getPurse = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentPurseCounterParty} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentPurseCounterParty, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentPurseCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
*/
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.setPurse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.clearPurse = function() {
  return this.setPurse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.hasPurse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PaymentWalletCounterParty wallet = 3;
 * @return {?proto.com.elarian.hera.proto.PaymentWalletCounterParty}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.getWallet = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentWalletCounterParty} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentWalletCounterParty, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentWalletCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
*/
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.setWallet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.PaymentCounterParty.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentCounterParty} returns this
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.clearWallet = function() {
  return this.setWallet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentCounterParty.prototype.hasWallet = function() {
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
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentWalletTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentWalletTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    side: jspb.Message.getFieldWithDefault(msg, 3, 0),
    counterParty: (f = msg.getCounterParty()) && proto.com.elarian.hera.proto.PaymentCounterParty.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto.com.elarian.hera.proto.Cash.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentWalletTransaction;
  return proto.com.elarian.hera.proto.PaymentWalletTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentTransactionSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.PaymentCounterParty;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentCounterParty.deserializeBinaryFromReader);
      msg.setCounterParty(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.Cash;
      reader.readMessage(value,proto.com.elarian.hera.proto.Cash.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentWalletTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
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
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCounterParty();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.PaymentCounterParty.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.Cash.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PaymentTransactionSide side = 3;
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionSide}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getSide = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentTransactionSide} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionSide} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional PaymentCounterParty counter_party = 4;
 * @return {?proto.com.elarian.hera.proto.PaymentCounterParty}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getCounterParty = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentCounterParty} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentCounterParty, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentCounterParty|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setCounterParty = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.clearCounterParty = function() {
  return this.setCounterParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.hasCounterParty = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Cash value = 5;
 * @return {?proto.com.elarian.hera.proto.Cash}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getValue = function() {
  return /** @type{?proto.com.elarian.hera.proto.Cash} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.Cash, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.Cash|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.hasValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PaymentStatus status = 6;
 * @return {!proto.com.elarian.hera.proto.PaymentStatus}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.PaymentStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentStatus} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentWalletTransaction.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.PaymentWalletState.repeatedFields_ = [2];



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
proto.com.elarian.hera.proto.PaymentWalletState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentWalletState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentWalletState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletState.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: (f = msg.getBalance()) && proto.com.elarian.hera.proto.PaymentBalance.toObject(includeInstance, f),
    transactionLogList: jspb.Message.toObjectList(msg.getTransactionLogList(),
    proto.com.elarian.hera.proto.PaymentWalletTransaction.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState}
 */
proto.com.elarian.hera.proto.PaymentWalletState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentWalletState;
  return proto.com.elarian.hera.proto.PaymentWalletState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState}
 */
proto.com.elarian.hera.proto.PaymentWalletState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.PaymentBalance;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentBalance.deserializeBinaryFromReader);
      msg.setBalance(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PaymentWalletTransaction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentWalletTransaction.deserializeBinaryFromReader);
      msg.addTransactionLog(value);
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
proto.com.elarian.hera.proto.PaymentWalletState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentWalletState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentWalletState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentWalletState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.PaymentBalance.serializeBinaryToWriter
    );
  }
  f = message.getTransactionLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PaymentWalletTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentBalance balance = 1;
 * @return {?proto.com.elarian.hera.proto.PaymentBalance}
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.getBalance = function() {
  return /** @type{?proto.com.elarian.hera.proto.PaymentBalance} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PaymentBalance, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.PaymentBalance|undefined} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletState.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PaymentWalletTransaction transaction_log = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.PaymentWalletTransaction>}
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.getTransactionLogList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.PaymentWalletTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.PaymentWalletTransaction, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.PaymentWalletTransaction>} value
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState} returns this
*/
proto.com.elarian.hera.proto.PaymentWalletState.prototype.setTransactionLogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentWalletTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.PaymentWalletTransaction}
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.addTransactionLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.PaymentWalletTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentWalletState} returns this
 */
proto.com.elarian.hera.proto.PaymentWalletState.prototype.clearTransactionLogList = function() {
  return this.setTransactionLogList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.PaymentState.repeatedFields_ = [1,2,3,4];



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
proto.com.elarian.hera.proto.PaymentState.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PaymentState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PaymentState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentState.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    proto.com.elarian.hera.proto.CustomerNumber.toObject, includeInstance),
    channelNumbersList: jspb.Message.toObjectList(msg.getChannelNumbersList(),
    proto.com.elarian.hera.proto.PaymentChannelNumber.toObject, includeInstance),
    transactionLogList: jspb.Message.toObjectList(msg.getTransactionLogList(),
    proto.com.elarian.hera.proto.PaymentTransactionState.toObject, includeInstance),
    pendingTransactionsList: jspb.Message.toObjectList(msg.getPendingTransactionsList(),
    proto.com.elarian.hera.proto.PaymentTransactionState.toObject, includeInstance)
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
 * @return {!proto.com.elarian.hera.proto.PaymentState}
 */
proto.com.elarian.hera.proto.PaymentState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PaymentState;
  return proto.com.elarian.hera.proto.PaymentState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PaymentState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PaymentState}
 */
proto.com.elarian.hera.proto.PaymentState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PaymentChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentChannelNumber.deserializeBinaryFromReader);
      msg.addChannelNumbers(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.PaymentTransactionState;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentTransactionState.deserializeBinaryFromReader);
      msg.addTransactionLog(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.PaymentTransactionState;
      reader.readMessage(value,proto.com.elarian.hera.proto.PaymentTransactionState.deserializeBinaryFromReader);
      msg.addPendingTransactions(value);
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
proto.com.elarian.hera.proto.PaymentState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PaymentState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PaymentState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PaymentState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getChannelNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PaymentChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getTransactionLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.com.elarian.hera.proto.PaymentTransactionState.serializeBinaryToWriter
    );
  }
  f = message.getPendingTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.com.elarian.hera.proto.PaymentTransactionState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerNumber customer_numbers = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
*/
proto.com.elarian.hera.proto.PaymentState.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
 */
proto.com.elarian.hera.proto.PaymentState.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * repeated PaymentChannelNumber channel_numbers = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.PaymentChannelNumber>}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.getChannelNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.PaymentChannelNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.PaymentChannelNumber, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.PaymentChannelNumber>} value
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
*/
proto.com.elarian.hera.proto.PaymentState.prototype.setChannelNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentChannelNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.PaymentChannelNumber}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.addChannelNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.PaymentChannelNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
 */
proto.com.elarian.hera.proto.PaymentState.prototype.clearChannelNumbersList = function() {
  return this.setChannelNumbersList([]);
};


/**
 * repeated PaymentTransactionState transaction_log = 3;
 * @return {!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.getTransactionLogList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.PaymentTransactionState, 3));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>} value
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
*/
proto.com.elarian.hera.proto.PaymentState.prototype.setTransactionLogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.addTransactionLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.elarian.hera.proto.PaymentTransactionState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
 */
proto.com.elarian.hera.proto.PaymentState.prototype.clearTransactionLogList = function() {
  return this.setTransactionLogList([]);
};


/**
 * repeated PaymentTransactionState pending_transactions = 4;
 * @return {!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.getPendingTransactionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.PaymentTransactionState, 4));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.PaymentTransactionState>} value
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
*/
proto.com.elarian.hera.proto.PaymentState.prototype.setPendingTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.PaymentTransactionState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.PaymentTransactionState}
 */
proto.com.elarian.hera.proto.PaymentState.prototype.addPendingTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.elarian.hera.proto.PaymentTransactionState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.PaymentState} returns this
 */
proto.com.elarian.hera.proto.PaymentState.prototype.clearPendingTransactionsList = function() {
  return this.setPendingTransactionsList([]);
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
proto.com.elarian.hera.proto.IndexMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.IndexMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.IndexMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.IndexMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.IndexMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.IndexMapping;
  return proto.com.elarian.hera.proto.IndexMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.IndexMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.IndexMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
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
proto.com.elarian.hera.proto.IndexMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.IndexMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.IndexMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.IndexMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.IndexMapping.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.IndexMapping} returns this
 */
proto.com.elarian.hera.proto.IndexMapping.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue value = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.IndexMapping.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.IndexMapping} returns this
*/
proto.com.elarian.hera.proto.IndexMapping.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.IndexMapping} returns this
 */
proto.com.elarian.hera.proto.IndexMapping.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.IndexMapping.prototype.hasValue = function() {
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
proto.com.elarian.hera.proto.CustomerIndex.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerIndex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerIndex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerIndex.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapping: (f = msg.getMapping()) && proto.com.elarian.hera.proto.IndexMapping.toObject(includeInstance, f),
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.CustomerIndex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerIndex;
  return proto.com.elarian.hera.proto.CustomerIndex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerIndex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerIndex}
 */
proto.com.elarian.hera.proto.CustomerIndex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.IndexMapping;
      reader.readMessage(value,proto.com.elarian.hera.proto.IndexMapping.deserializeBinaryFromReader);
      msg.setMapping(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
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
proto.com.elarian.hera.proto.CustomerIndex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerIndex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerIndex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerIndex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapping();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.IndexMapping.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexMapping mapping = 1;
 * @return {?proto.com.elarian.hera.proto.IndexMapping}
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.getMapping = function() {
  return /** @type{?proto.com.elarian.hera.proto.IndexMapping} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.IndexMapping, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.IndexMapping|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerIndex} returns this
*/
proto.com.elarian.hera.proto.CustomerIndex.prototype.setMapping = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerIndex} returns this
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.clearMapping = function() {
  return this.setMapping(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.hasMapping = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp expiration = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerIndex} returns this
*/
proto.com.elarian.hera.proto.CustomerIndex.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerIndex} returns this
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerIndex.prototype.hasExpiration = function() {
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
proto.com.elarian.hera.proto.CustomerReminder.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.CustomerReminder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.CustomerReminder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerReminder.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    interval: (f = msg.getInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.CustomerReminder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.CustomerReminder;
  return proto.com.elarian.hera.proto.CustomerReminder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.CustomerReminder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.CustomerReminder}
 */
proto.com.elarian.hera.proto.CustomerReminder.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKey(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPayload(value);
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
proto.com.elarian.hera.proto.CustomerReminder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.CustomerReminder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.CustomerReminder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.CustomerReminder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expiration = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
*/
proto.com.elarian.hera.proto.CustomerReminder.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration interval = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
*/
proto.com.elarian.hera.proto.CustomerReminder.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue payload = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
*/
proto.com.elarian.hera.proto.CustomerReminder.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.CustomerReminder} returns this
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.CustomerReminder.prototype.hasPayload = function() {
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
proto.com.elarian.hera.proto.SayCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SayCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SayCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SayCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    voice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playBeep: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.SayCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SayCallAction;
  return proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SayCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.TextToSpeechVoice} */ (reader.readEnum());
      msg.setVoice(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayBeep(value);
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
proto.com.elarian.hera.proto.SayCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SayCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoice();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlayBeep();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TextToSpeechVoice voice = 2;
 * @return {!proto.com.elarian.hera.proto.TextToSpeechVoice}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getVoice = function() {
  return /** @type {!proto.com.elarian.hera.proto.TextToSpeechVoice} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.TextToSpeechVoice} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setVoice = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool play_beep = 3;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getPlayBeep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setPlayBeep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.com.elarian.hera.proto.PlayCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PlayCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PlayCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.PlayCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PlayCallAction;
  return proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.com.elarian.hera.proto.PlayCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PlayCallAction} returns this
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase = {
  PROMPT_NOT_SET: 0,
  SAY: 1,
  PLAY: 2
};

/**
 * @return {proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getPromptCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetDigitsCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    finishOnKey: (f = msg.getFinishOnKey()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    numDigits: (f = msg.getNumDigits()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetDigitsCallAction;
  return proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFinishOnKey(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setNumDigits(value);
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
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFinishOnKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getNumDigits();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue finish_on_key = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getFinishOnKey = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setFinishOnKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearFinishOnKey = function() {
  return this.setFinishOnKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasFinishOnKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value num_digits = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getNumDigits = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setNumDigits = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearNumDigits = function() {
  return this.setNumDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasNumDigits = function() {
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
proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase = {
  PROMPT_NOT_SET: 0,
  SAY: 1,
  PLAY: 2
};

/**
 * @return {proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPromptCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetRecordingCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxLength: (f = msg.getMaxLength()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    finishOnKey: (f = msg.getFinishOnKey()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    playBeep: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    trimSilence: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetRecordingCallAction;
  return proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxLength(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFinishOnKey(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayBeep(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrimSilence(value);
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
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxLength();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFinishOnKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPlayBeep();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTrimSilence();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration max_length = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getMaxLength = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setMaxLength = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearMaxLength = function() {
  return this.setMaxLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasMaxLength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue finish_on_key = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getFinishOnKey = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setFinishOnKey = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearFinishOnKey = function() {
  return this.setFinishOnKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasFinishOnKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool play_beep = 6;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPlayBeep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setPlayBeep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool trim_silence = 7;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getTrimSilence = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setTrimSilence = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.com.elarian.hera.proto.RecordSessionCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RecordSessionCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.toObject = function(includeInstance, msg) {
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
 * @return {!proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RecordSessionCallAction;
  return proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.RecordSessionCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DialCallAction.repeatedFields_ = [1];



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
proto.com.elarian.hera.proto.DialCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DialCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DialCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DialCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    proto.com.elarian.hera.proto.CustomerNumber.toObject, includeInstance),
    record: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sequential: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    ringbackTone: (f = msg.getRingbackTone()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    callerId: (f = msg.getCallerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    maxDuration: (f = msg.getMaxDuration()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.DialCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DialCallAction;
  return proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DialCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.CustomerNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecord(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSequential(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRingbackTone(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCallerId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setMaxDuration(value);
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
proto.com.elarian.hera.proto.DialCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DialCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getRecord();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSequential();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRingbackTone();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxDuration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerNumber customer_numbers = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.CustomerNumber, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * optional bool record = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getRecord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.setRecord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool sequential = 3;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getSequential = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.setSequential = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue ringback_tone = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getRingbackTone = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setRingbackTone = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearRingbackTone = function() {
  return this.setRingbackTone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasRingbackTone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue caller_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getCallerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setCallerId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearCallerId = function() {
  return this.setCallerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasCallerId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int32Value max_duration = 6;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getMaxDuration = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setMaxDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearMaxDuration = function() {
  return this.setMaxDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasMaxDuration = function() {
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
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.EnqueueCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EnqueueCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    holdMusic: (f = msg.getHoldMusic()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    queueName: (f = msg.getQueueName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.EnqueueCallAction;
  return proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHoldMusic(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setQueueName(value);
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
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHoldMusic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getQueueName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue hold_music = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.getHoldMusic = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
*/
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.setHoldMusic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.clearHoldMusic = function() {
  return this.setHoldMusic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.hasHoldMusic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue queue_name = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.getQueueName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
*/
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.setQueueName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.clearQueueName = function() {
  return this.setQueueName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.hasQueueName = function() {
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
proto.com.elarian.hera.proto.DequeueCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DequeueCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DequeueCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.VoiceChannelNumber.toObject(includeInstance, f),
    record: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    queueName: (f = msg.getQueueName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DequeueCallAction;
  return proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.VoiceChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecord(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setQueueName(value);
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
proto.com.elarian.hera.proto.DequeueCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.VoiceChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getRecord();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getQueueName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoiceChannelNumber channel_number = 1;
 * @return {?proto.com.elarian.hera.proto.VoiceChannelNumber}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceChannelNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
*/
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool record = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getRecord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setRecord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue queue_name = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getQueueName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
*/
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setQueueName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.clearQueueName = function() {
  return this.setQueueName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.hasQueueName = function() {
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
proto.com.elarian.hera.proto.RejectCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RejectCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RejectCallAction.toObject = function(includeInstance, msg) {
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
 * @return {!proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.RejectCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RejectCallAction;
  return proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader = function(msg, reader) {
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
proto.com.elarian.hera.proto.RejectCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter = function(message, writer) {
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
proto.com.elarian.hera.proto.RedirectCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RedirectCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RedirectCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RedirectCallAction;
  return proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.com.elarian.hera.proto.RedirectCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction} returns this
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallAction.EntryCase = {
  ENTRY_NOT_SET: 0,
  SAY: 1,
  PLAY: 2,
  GET_DIGITS: 3,
  DIAL: 4,
  RECORD_SESSION: 5,
  GET_RECORDING: 6,
  ENQUEUE: 7,
  DEQUEUE: 8,
  REJECT: 9,
  REDIRECT: 10
};

/**
 * @return {proto.com.elarian.hera.proto.VoiceCallAction.EntryCase}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.VoiceCallAction.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0]));
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
proto.com.elarian.hera.proto.VoiceCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    getDigits: (f = msg.getGetDigits()) && proto.com.elarian.hera.proto.GetDigitsCallAction.toObject(includeInstance, f),
    dial: (f = msg.getDial()) && proto.com.elarian.hera.proto.DialCallAction.toObject(includeInstance, f),
    recordSession: (f = msg.getRecordSession()) && proto.com.elarian.hera.proto.RecordSessionCallAction.toObject(includeInstance, f),
    getRecording: (f = msg.getGetRecording()) && proto.com.elarian.hera.proto.GetRecordingCallAction.toObject(includeInstance, f),
    enqueue: (f = msg.getEnqueue()) && proto.com.elarian.hera.proto.EnqueueCallAction.toObject(includeInstance, f),
    dequeue: (f = msg.getDequeue()) && proto.com.elarian.hera.proto.DequeueCallAction.toObject(includeInstance, f),
    reject: (f = msg.getReject()) && proto.com.elarian.hera.proto.RejectCallAction.toObject(includeInstance, f),
    redirect: (f = msg.getRedirect()) && proto.com.elarian.hera.proto.RedirectCallAction.toObject(includeInstance, f)
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
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallAction;
  return proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.GetDigitsCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader);
      msg.setGetDigits(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.DialCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader);
      msg.setDial(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.RecordSessionCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader);
      msg.setRecordSession(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.GetRecordingCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader);
      msg.setGetRecording(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.EnqueueCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader);
      msg.setEnqueue(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.DequeueCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader);
      msg.setDequeue(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.RejectCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader);
      msg.setReject(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.RedirectCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader);
      msg.setRedirect(value);
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
proto.com.elarian.hera.proto.VoiceCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getGetDigits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter
    );
  }
  f = message.getDial();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter
    );
  }
  f = message.getRecordSession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter
    );
  }
  f = message.getGetRecording();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter
    );
  }
  f = message.getEnqueue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter
    );
  }
  f = message.getDequeue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter
    );
  }
  f = message.getReject();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter
    );
  }
  f = message.getRedirect();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetDigitsCallAction get_digits = 3;
 * @return {?proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getGetDigits = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetDigitsCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetDigitsCallAction, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetDigitsCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setGetDigits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearGetDigits = function() {
  return this.setGetDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasGetDigits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DialCallAction dial = 4;
 * @return {?proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getDial = function() {
  return /** @type{?proto.com.elarian.hera.proto.DialCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DialCallAction, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.DialCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setDial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearDial = function() {
  return this.setDial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasDial = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RecordSessionCallAction record_session = 5;
 * @return {?proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getRecordSession = function() {
  return /** @type{?proto.com.elarian.hera.proto.RecordSessionCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RecordSessionCallAction, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.RecordSessionCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setRecordSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearRecordSession = function() {
  return this.setRecordSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasRecordSession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GetRecordingCallAction get_recording = 6;
 * @return {?proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getGetRecording = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetRecordingCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetRecordingCallAction, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetRecordingCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setGetRecording = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearGetRecording = function() {
  return this.setGetRecording(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasGetRecording = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EnqueueCallAction enqueue = 7;
 * @return {?proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getEnqueue = function() {
  return /** @type{?proto.com.elarian.hera.proto.EnqueueCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.EnqueueCallAction, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.EnqueueCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setEnqueue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearEnqueue = function() {
  return this.setEnqueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasEnqueue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DequeueCallAction dequeue = 8;
 * @return {?proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getDequeue = function() {
  return /** @type{?proto.com.elarian.hera.proto.DequeueCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DequeueCallAction, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.DequeueCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setDequeue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearDequeue = function() {
  return this.setDequeue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasDequeue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RejectCallAction reject = 9;
 * @return {?proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getReject = function() {
  return /** @type{?proto.com.elarian.hera.proto.RejectCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RejectCallAction, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.RejectCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setReject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearReject = function() {
  return this.setReject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasReject = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RedirectCallAction redirect = 10;
 * @return {?proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getRedirect = function() {
  return /** @type{?proto.com.elarian.hera.proto.RedirectCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RedirectCallAction, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.RedirectCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setRedirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearRedirect = function() {
  return this.setRedirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasRedirect = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingChannel = {
  MESSAGING_CHANNEL_UNSPECIFIED: 0,
  MESSAGING_CHANNEL_GOOGLE_RCS: 1,
  MESSAGING_CHANNEL_FB_MESSENGER: 2,
  MESSAGING_CHANNEL_SMS: 3,
  MESSAGING_CHANNEL_TELEGRAM: 4,
  MESSAGING_CHANNEL_WHATSAPP: 5
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PaymentChannel = {
  PAYMENT_CHANNEL_UNSPECIFIED: 0,
  PAYMENT_CHANNEL_TELCO: 1
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UssdChannel = {
  USSD_CHANNEL_UNSPECIFIED: 0,
  USSD_CHANNEL_TELCO: 1
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceChannel = {
  VOICE_CHANNEL_UNSPECIFIED: 0,
  VOICE_CHANNEL_TELCO: 1
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CustomerNumberProvider = {
  CUSTOMER_NUMBER_PROVIDER_UNSPECIFIED: 0,
  CUSTOMER_NUMBER_PROVIDER_FACEBOOK: 1,
  CUSTOMER_NUMBER_PROVIDER_TELCO: 2,
  CUSTOMER_NUMBER_PROVIDER_TELEGRAM: 3
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MediaType = {
  MEDIA_TYPE_UNSPECIFIED: 0,
  MEDIA_TYPE_IMAGE: 1,
  MEDIA_TYPE_AUDIO: 2,
  MEDIA_TYPE_VIDEO: 3,
  MEDIA_TYPE_DOCUMENT: 4,
  MEDIA_TYPE_VOICE: 5,
  MEDUA_TYPE_STICKER: 6
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingConsentAction = {
  MESSAGING_CONSENT_ACTION_UNSPECIFIED: 0,
  MESSAGING_CONSENT_ACTION_OPT_IN: 1,
  MESSAGING_CONSENT_ACTION_OPT_OUT: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingConsentStatus = {
  MESSAGING_CONSENT_STATUS_UNSPECIFIED: 0,
  MESSAGING_CONSENT_STATUS_OPT_IN_REQUEST_SENT: 101,
  MESSAGING_CONSENT_STATUS_OPT_IN_COMPLETED: 300,
  MESSAGING_CONSENT_STATUS_OPT_OUT_COMPLETED: 301,
  MESSAGING_CONSENT_STATUS_INVALID_CHANNEL_NUMBER: 401,
  MESSAGING_CONSENT_STATUS_DECOMMISSIONED_CUSTOMER_ID: 402,
  MESSAGING_CONSENT_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingSessionStatus = {
  MESSAGING_SESSION_STATUSN_UNSPECIFIED: 0,
  MESSAGING_SESSION_STATUSN_ACTIVE: 100,
  MESSAGING_SESSION_STATUSN_EXPIRED: 200
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CustomerEventDirection = {
  CUSTOMER_EVENT_DIRECTION_UNSPECIFIED: 0,
  CUSTOMER_EVENT_DIRECTION_INBOUND: 1,
  CUSTOMER_EVENT_DIRECTION_OUTBOUND: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.CustomerRequestOrigin = {
  CUSTOMER_REQUEST_ORIGIN_UNSPECIFIED: 0,
  CUSTOMER_REQUEST_ORIGIN_API_REQUEST: 1,
  CUSTOMER_REQUEST_ORIGIN_CUSTOMER_TAG: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessageDeliveryStatus = {
  MESSAGE_DELIVERY_STATUS_UNSEPCIFIED: 0,
  MESSAGE_DELIVERY_STATUS_SENT: 101,
  MESSAGE_DELIVERY_STATUS_DELIVERED: 300,
  MESSAGE_DELIVERY_STATUS_READ: 301,
  MESSAGE_DELIVERY_STATUS_RECEIVED: 302,
  MESSAGE_DELIVERY_STATUS_FAILED: 400,
  MESSAGE_DELIVERY_STATUS_NO_CONSENT: 401,
  MESSAGE_DELIVERY_STATUS_NO_CAPABILITY: 402,
  MESSAGE_DELIVERY_STATUS_EXPIRED: 403,
  MESSAGE_DELIVERY_STATUS_ONLY_TEMPLATE_ALLOWED: 404,
  MESSAGE_DELIVERY_STATUS_INVALID_CHANNEL_NUMBER: 405,
  MESSAGE_DELIVERY_STATUS_NOT_SUPPORTED: 406,
  MESSAGE_DELIVERY_STATUS_INVALID_REPLY_TO_MESSAGE_ID: 407,
  MESSAGE_DELIVERY_STATUS_INVALID_CUSTOMER_ID: 408,
  MESSAGE_DELIVERY_STATUS_DUPLICATE_REQUEST: 409,
  MESSAGE_DELIVERY_STATUS_TAG_NOT_FOUND: 410,
  MESSAGE_DELIVERY_STATUS_CUSTOMER_NUMBER_NOT_FOUND: 411,
  MESSAGE_DELIVERY_STATUS_DECOMMISSIONED_CUSTOMERID: 412,
  MESSAGE_DELIVERY_STATUS_INVALID_REQUEST: 413,
  MESSAGE_DELIVERY_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallHangupCause = {
  VOICE_CALL_HANGUP_CAUSE_UNSPECIFIED: 0,
  VOICE_CALL_HANGUP_CAUSE_UNALLOCATED_NUMBER: 1,
  VOICE_CALL_HANGUP_CAUSE_USER_BUSY: 17,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_CLEARING: 16,
  VOICE_CALL_HANGUP_CAUSE_NO_USER_RESPONSE: 18,
  VOICE_CALL_HANGUP_CAUSE_NO_ANSWER: 19,
  VOICE_CALL_HANGUP_CAUSE_SUBSCRIBER_ABSENT: 20,
  VOICE_CALL_HANGUP_CAUSE_CALL_REJECTED: 21,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_UNSPECIFIED: 31,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_TEMPORARY_FAILURE: 41,
  VOICE_CALL_HANGUP_CAUSE_SERVICE_UNAVAILABLE: 63,
  VOICE_CALL_HANGUP_CAUSE_RECOVERY_ON_TIMER_EXPIRE: 102,
  VOICE_CALL_HANGUP_CAUSE_ORIGINATOR_CANCEL: 487,
  VOICE_CALL_HANGUP_CAUSE_LOSE_RACE: 502,
  VOICE_CALL_HANGUP_CAUSE_USER_NOT_REGISTERED: 606
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallStatus = {
  VOICE_CALL_STATUS_UNSPECIFIED: 0,
  VOICE_CALL_STATUS_QUEUED: 100,
  VOICE_CALL_STATUS_ANSWERED: 101,
  VOICE_CALL_STATUS_RINGING: 102,
  VOICE_CALL_STATUS_ACTIVE: 200,
  VOICE_CALL_STATUS_DIALING: 201,
  VOICE_CALL_STATUS_DIAL_COMPLETED: 202,
  VOICE_CALL_STATUS_BRIDGED: 203,
  VOICE_CALL_STATUS_ENQUEUED: 204,
  VOICE_CALL_STATUS_DEQUEUED: 205,
  VOICE_CALL_STATUS_TRANSFERRED: 206,
  VOICE_CALL_STATUS_TRANSFER_COMPLETED: 207,
  VOICE_CALL_STATUS_COMPLETED: 300,
  VOICE_CALL_STATUS_INSUFFICIENT_CREDIT: 400,
  VOICE_CALL_STATUS_NOT_ANSWERED: 401,
  VOICE_CALL_STATUS_INVALID_PHONE_NUMBER: 402,
  VOICE_CALL_STATUS_DESTINATION_NOT_SUPPORTED: 403,
  VOICE_CALL_STATUS_DECOMMISSIONED_CUSTOMERID: 404,
  VOICE_CALL_STATUS_EXPIRED: 405,
  VOICE_CALL_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PaymentStatus = {
  PAYMENT_STATUS_UNSPECIFIED: 0,
  PAYMENT_STATUS_QUEUED: 101,
  PAYMENT_STATUS_PENDING_CONFIRMATION: 102,
  PAYMENT_STATUS_PENDING_VALIDATION: 103,
  PAYMENT_STATUS_VALIDATED: 104,
  PAYMENT_STATUS_INVALID_REQUEST: 200,
  PAYMENT_STATUS_NOT_SUPPORTED: 201,
  PAYMENT_STATUS_INSUFFICIENT_FUNDS: 202,
  PAYMENT_STATUS_APPLICATION_ERROR: 203,
  PAYMENT_STATUS_NOT_ALLOWED: 204,
  PAYMENT_STATUS_DUPLICATE_REQUEST: 205,
  PAYMENT_STATUS_INVALID_PURSE: 206,
  PAYMENT_STATUS_INVALID_WALLET: 207,
  PAYMENT_STATUS_DECOMMISSIONED_CUSTOMER_ID: 299,
  PAYMENT_STATUS_SUCCESS: 300,
  PAYMENT_STATUS_PASS_THROUGH: 301,
  PAYMENT_STATUS_FAILED: 400,
  PAYMENT_STATUS_THROTTLED: 401,
  PAYMENT_STATUS_EXPIRED: 402,
  PAYMENT_STATUS_REJECTED: 403,
  PAYMENT_STATUS_REVERSED: 500
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PaymentAccountType = {
  PAYMENT_ACCOUNT_TYPE_UNSPECIFIED: 0,
  PAYMENT_ACCOUNT_TYPE_PURSE: 1,
  PAYMENT_ACCOUNT_TYPE_WALLET: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PaymentTransactionSide = {
  PAYMENT_TRANSACTION_SIDE_UNSPECIFIED: 0,
  PAYMENT_TRANSACTION_SIDE_CREDIT: 1,
  PAYMENT_TRANSACTION_SIDE_DEBIT: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.TextToSpeechVoice = {
  TEXT_TO_SPEECH_VOICE_UNSPECIFIED: 0,
  TEXT_TO_SPEECH_VOICE_MALE: 1,
  TEXT_TO_SPEECH_VOICE_FEMALE: 2
};

goog.object.extend(exports, proto.com.elarian.hera.proto);
