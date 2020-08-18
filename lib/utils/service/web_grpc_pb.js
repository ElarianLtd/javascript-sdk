// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var web_pb = require('./web_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_pb = require('./common_pb.js');

function serialize_com_elarian_hera_proto_AddCustomerReminderRequest(arg) {
  if (!(arg instanceof web_pb.AddCustomerReminderRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.AddCustomerReminderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_AddCustomerReminderRequest(buffer_arg) {
  return web_pb.AddCustomerReminderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_AddCustomerReminderTagRequest(arg) {
  if (!(arg instanceof web_pb.AddCustomerReminderTagRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.AddCustomerReminderTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_AddCustomerReminderTagRequest(buffer_arg) {
  return web_pb.AddCustomerReminderTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_AdoptCustomerStateRequest(arg) {
  if (!(arg instanceof web_pb.AdoptCustomerStateRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.AdoptCustomerStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_AdoptCustomerStateRequest(buffer_arg) {
  return web_pb.AdoptCustomerStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_AuthTokenReply(arg) {
  if (!(arg instanceof web_pb.AuthTokenReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.AuthTokenReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_AuthTokenReply(buffer_arg) {
  return web_pb.AuthTokenReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_AuthTokenRequest(arg) {
  if (!(arg instanceof web_pb.AuthTokenRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.AuthTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_AuthTokenRequest(buffer_arg) {
  return web_pb.AuthTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_CancelCustomerReminderRequest(arg) {
  if (!(arg instanceof web_pb.CancelCustomerReminderRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.CancelCustomerReminderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_CancelCustomerReminderRequest(buffer_arg) {
  return web_pb.CancelCustomerReminderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_CancelCustomerReminderTagRequest(arg) {
  if (!(arg instanceof web_pb.CancelCustomerReminderTagRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.CancelCustomerReminderTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_CancelCustomerReminderTagRequest(buffer_arg) {
  return web_pb.CancelCustomerReminderTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_CheckoutPaymentReply(arg) {
  if (!(arg instanceof web_pb.CheckoutPaymentReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.CheckoutPaymentReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_CheckoutPaymentReply(buffer_arg) {
  return web_pb.CheckoutPaymentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_CheckoutPaymentRequest(arg) {
  if (!(arg instanceof web_pb.CheckoutPaymentRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.CheckoutPaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_CheckoutPaymentRequest(buffer_arg) {
  return web_pb.CheckoutPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_DeleteCustomerMetadataRequest(arg) {
  if (!(arg instanceof web_pb.DeleteCustomerMetadataRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.DeleteCustomerMetadataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_DeleteCustomerMetadataRequest(buffer_arg) {
  return web_pb.DeleteCustomerMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_DeleteCustomerSecondaryIdRequest(arg) {
  if (!(arg instanceof web_pb.DeleteCustomerSecondaryIdRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.DeleteCustomerSecondaryIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_DeleteCustomerSecondaryIdRequest(buffer_arg) {
  return web_pb.DeleteCustomerSecondaryIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_DeleteCustomerTagRequest(arg) {
  if (!(arg instanceof web_pb.DeleteCustomerTagRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.DeleteCustomerTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_DeleteCustomerTagRequest(buffer_arg) {
  return web_pb.DeleteCustomerTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_GetCustomerStateReply(arg) {
  if (!(arg instanceof web_pb.GetCustomerStateReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.GetCustomerStateReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_GetCustomerStateReply(buffer_arg) {
  return web_pb.GetCustomerStateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_GetCustomerStateRequest(arg) {
  if (!(arg instanceof web_pb.GetCustomerStateRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.GetCustomerStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_GetCustomerStateRequest(buffer_arg) {
  return web_pb.GetCustomerStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_MakeVoiceCallReply(arg) {
  if (!(arg instanceof web_pb.MakeVoiceCallReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.MakeVoiceCallReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_MakeVoiceCallReply(buffer_arg) {
  return web_pb.MakeVoiceCallReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_MakeVoiceCallRequest(arg) {
  if (!(arg instanceof web_pb.MakeVoiceCallRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.MakeVoiceCallRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_MakeVoiceCallRequest(buffer_arg) {
  return web_pb.MakeVoiceCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_MessagingConsentReply(arg) {
  if (!(arg instanceof web_pb.MessagingConsentReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.MessagingConsentReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_MessagingConsentReply(buffer_arg) {
  return web_pb.MessagingConsentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_MessagingConsentRequest(arg) {
  if (!(arg instanceof web_pb.MessagingConsentRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.MessagingConsentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_MessagingConsentRequest(buffer_arg) {
  return web_pb.MessagingConsentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_ReplyToMessageRequest(arg) {
  if (!(arg instanceof web_pb.ReplyToMessageRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.ReplyToMessageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_ReplyToMessageRequest(buffer_arg) {
  return web_pb.ReplyToMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_SendMessageReply(arg) {
  if (!(arg instanceof web_pb.SendMessageReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.SendMessageReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_SendMessageReply(buffer_arg) {
  return web_pb.SendMessageReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_SendMessageRequest(arg) {
  if (!(arg instanceof web_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.SendMessageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_SendMessageRequest(buffer_arg) {
  return web_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_SendMessageTagRequest(arg) {
  if (!(arg instanceof web_pb.SendMessageTagRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.SendMessageTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_SendMessageTagRequest(buffer_arg) {
  return web_pb.SendMessageTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_SendPaymentReply(arg) {
  if (!(arg instanceof web_pb.SendPaymentReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.SendPaymentReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_SendPaymentReply(buffer_arg) {
  return web_pb.SendPaymentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_SendPaymentRequest(arg) {
  if (!(arg instanceof web_pb.SendPaymentRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.SendPaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_SendPaymentRequest(buffer_arg) {
  return web_pb.SendPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_StreamNotificationRequest(arg) {
  if (!(arg instanceof web_pb.StreamNotificationRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.StreamNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_StreamNotificationRequest(buffer_arg) {
  return web_pb.StreamNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_TagCommandReply(arg) {
  if (!(arg instanceof web_pb.TagCommandReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.TagCommandReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_TagCommandReply(buffer_arg) {
  return web_pb.TagCommandReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_UpdateCustomerMetadataRequest(arg) {
  if (!(arg instanceof web_pb.UpdateCustomerMetadataRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.UpdateCustomerMetadataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_UpdateCustomerMetadataRequest(buffer_arg) {
  return web_pb.UpdateCustomerMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_UpdateCustomerSecondaryIdRequest(arg) {
  if (!(arg instanceof web_pb.UpdateCustomerSecondaryIdRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.UpdateCustomerSecondaryIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_UpdateCustomerSecondaryIdRequest(buffer_arg) {
  return web_pb.UpdateCustomerSecondaryIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_UpdateCustomerStateReply(arg) {
  if (!(arg instanceof web_pb.UpdateCustomerStateReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.UpdateCustomerStateReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_UpdateCustomerStateReply(buffer_arg) {
  return web_pb.UpdateCustomerStateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_UpdateCustomerTagRequest(arg) {
  if (!(arg instanceof web_pb.UpdateCustomerTagRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.UpdateCustomerTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_UpdateCustomerTagRequest(buffer_arg) {
  return web_pb.UpdateCustomerTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_WebhookRequest(arg) {
  if (!(arg instanceof web_pb.WebhookRequest)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.WebhookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_WebhookRequest(buffer_arg) {
  return web_pb.WebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_WebhookResponse(arg) {
  if (!(arg instanceof web_pb.WebhookResponse)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.WebhookResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_WebhookResponse(buffer_arg) {
  return web_pb.WebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_elarian_hera_proto_WebhookResponseReply(arg) {
  if (!(arg instanceof web_pb.WebhookResponseReply)) {
    throw new Error('Expected argument of type com.elarian.hera.proto.WebhookResponseReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_elarian_hera_proto_WebhookResponseReply(buffer_arg) {
  return web_pb.WebhookResponseReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrpcWebServiceService = exports.GrpcWebServiceService = {
  authToken: {
    path: '/com.elarian.hera.proto.GrpcWebService/AuthToken',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.AuthTokenRequest,
    responseType: web_pb.AuthTokenReply,
    requestSerialize: serialize_com_elarian_hera_proto_AuthTokenRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_AuthTokenRequest,
    responseSerialize: serialize_com_elarian_hera_proto_AuthTokenReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_AuthTokenReply,
  },
  getCustomerState: {
    path: '/com.elarian.hera.proto.GrpcWebService/GetCustomerState',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.GetCustomerStateRequest,
    responseType: web_pb.GetCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_GetCustomerStateRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_GetCustomerStateRequest,
    responseSerialize: serialize_com_elarian_hera_proto_GetCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_GetCustomerStateReply,
  },
  adoptCustomerState: {
    path: '/com.elarian.hera.proto.GrpcWebService/AdoptCustomerState',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.AdoptCustomerStateRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_AdoptCustomerStateRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_AdoptCustomerStateRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  addCustomerReminder: {
    path: '/com.elarian.hera.proto.GrpcWebService/AddCustomerReminder',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.AddCustomerReminderRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_AddCustomerReminderRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_AddCustomerReminderRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  addCustomerReminderByTag: {
    path: '/com.elarian.hera.proto.GrpcWebService/AddCustomerReminderByTag',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.AddCustomerReminderTagRequest,
    responseType: web_pb.TagCommandReply,
    requestSerialize: serialize_com_elarian_hera_proto_AddCustomerReminderTagRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_AddCustomerReminderTagRequest,
    responseSerialize: serialize_com_elarian_hera_proto_TagCommandReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_TagCommandReply,
  },
  cancelCustomerReminder: {
    path: '/com.elarian.hera.proto.GrpcWebService/CancelCustomerReminder',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.CancelCustomerReminderRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_CancelCustomerReminderRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_CancelCustomerReminderRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  cancelCustomerReminderByTag: {
    path: '/com.elarian.hera.proto.GrpcWebService/CancelCustomerReminderByTag',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.CancelCustomerReminderTagRequest,
    responseType: web_pb.TagCommandReply,
    requestSerialize: serialize_com_elarian_hera_proto_CancelCustomerReminderTagRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_CancelCustomerReminderTagRequest,
    responseSerialize: serialize_com_elarian_hera_proto_TagCommandReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_TagCommandReply,
  },
  updateCustomerTag: {
    path: '/com.elarian.hera.proto.GrpcWebService/UpdateCustomerTag',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.UpdateCustomerTagRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_UpdateCustomerTagRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerTagRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  deleteCustomerTag: {
    path: '/com.elarian.hera.proto.GrpcWebService/DeleteCustomerTag',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.DeleteCustomerTagRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_DeleteCustomerTagRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_DeleteCustomerTagRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  updateCustomerSecondaryId: {
    path: '/com.elarian.hera.proto.GrpcWebService/UpdateCustomerSecondaryId',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.UpdateCustomerSecondaryIdRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_UpdateCustomerSecondaryIdRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerSecondaryIdRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  deleteCustomerSecondaryId: {
    path: '/com.elarian.hera.proto.GrpcWebService/DeleteCustomerSecondaryId',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.DeleteCustomerSecondaryIdRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_DeleteCustomerSecondaryIdRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_DeleteCustomerSecondaryIdRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  updateCustomerMetadata: {
    path: '/com.elarian.hera.proto.GrpcWebService/UpdateCustomerMetadata',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.UpdateCustomerMetadataRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_UpdateCustomerMetadataRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerMetadataRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  deleteCustomerMetadata: {
    path: '/com.elarian.hera.proto.GrpcWebService/DeleteCustomerMetadata',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.DeleteCustomerMetadataRequest,
    responseType: web_pb.UpdateCustomerStateReply,
    requestSerialize: serialize_com_elarian_hera_proto_DeleteCustomerMetadataRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_DeleteCustomerMetadataRequest,
    responseSerialize: serialize_com_elarian_hera_proto_UpdateCustomerStateReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_UpdateCustomerStateReply,
  },
  sendMessage: {
    path: '/com.elarian.hera.proto.GrpcWebService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.SendMessageRequest,
    responseType: web_pb.SendMessageReply,
    requestSerialize: serialize_com_elarian_hera_proto_SendMessageRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_SendMessageRequest,
    responseSerialize: serialize_com_elarian_hera_proto_SendMessageReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_SendMessageReply,
  },
  sendMessageByTag: {
    path: '/com.elarian.hera.proto.GrpcWebService/SendMessageByTag',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.SendMessageTagRequest,
    responseType: web_pb.TagCommandReply,
    requestSerialize: serialize_com_elarian_hera_proto_SendMessageTagRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_SendMessageTagRequest,
    responseSerialize: serialize_com_elarian_hera_proto_TagCommandReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_TagCommandReply,
  },
  replyToMessage: {
    path: '/com.elarian.hera.proto.GrpcWebService/ReplyToMessage',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.ReplyToMessageRequest,
    responseType: web_pb.SendMessageReply,
    requestSerialize: serialize_com_elarian_hera_proto_ReplyToMessageRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_ReplyToMessageRequest,
    responseSerialize: serialize_com_elarian_hera_proto_SendMessageReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_SendMessageReply,
  },
  messagingConsent: {
    path: '/com.elarian.hera.proto.GrpcWebService/MessagingConsent',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.MessagingConsentRequest,
    responseType: web_pb.MessagingConsentReply,
    requestSerialize: serialize_com_elarian_hera_proto_MessagingConsentRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_MessagingConsentRequest,
    responseSerialize: serialize_com_elarian_hera_proto_MessagingConsentReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_MessagingConsentReply,
  },
  sendPayment: {
    path: '/com.elarian.hera.proto.GrpcWebService/SendPayment',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.SendPaymentRequest,
    responseType: web_pb.SendPaymentReply,
    requestSerialize: serialize_com_elarian_hera_proto_SendPaymentRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_SendPaymentRequest,
    responseSerialize: serialize_com_elarian_hera_proto_SendPaymentReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_SendPaymentReply,
  },
  checkoutPayment: {
    path: '/com.elarian.hera.proto.GrpcWebService/CheckoutPayment',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.CheckoutPaymentRequest,
    responseType: web_pb.CheckoutPaymentReply,
    requestSerialize: serialize_com_elarian_hera_proto_CheckoutPaymentRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_CheckoutPaymentRequest,
    responseSerialize: serialize_com_elarian_hera_proto_CheckoutPaymentReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_CheckoutPaymentReply,
  },
  makeVoiceCall: {
    path: '/com.elarian.hera.proto.GrpcWebService/MakeVoiceCall',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.MakeVoiceCallRequest,
    responseType: web_pb.MakeVoiceCallReply,
    requestSerialize: serialize_com_elarian_hera_proto_MakeVoiceCallRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_MakeVoiceCallRequest,
    responseSerialize: serialize_com_elarian_hera_proto_MakeVoiceCallReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_MakeVoiceCallReply,
  },
  streamNotifications: {
    path: '/com.elarian.hera.proto.GrpcWebService/StreamNotifications',
    requestStream: false,
    responseStream: true,
    requestType: web_pb.StreamNotificationRequest,
    responseType: web_pb.WebhookRequest,
    requestSerialize: serialize_com_elarian_hera_proto_StreamNotificationRequest,
    requestDeserialize: deserialize_com_elarian_hera_proto_StreamNotificationRequest,
    responseSerialize: serialize_com_elarian_hera_proto_WebhookRequest,
    responseDeserialize: deserialize_com_elarian_hera_proto_WebhookRequest,
  },
  sendWebhookResponse: {
    path: '/com.elarian.hera.proto.GrpcWebService/SendWebhookResponse',
    requestStream: false,
    responseStream: false,
    requestType: web_pb.WebhookResponse,
    responseType: web_pb.WebhookResponseReply,
    requestSerialize: serialize_com_elarian_hera_proto_WebhookResponse,
    requestDeserialize: deserialize_com_elarian_hera_proto_WebhookResponse,
    responseSerialize: serialize_com_elarian_hera_proto_WebhookResponseReply,
    responseDeserialize: deserialize_com_elarian_hera_proto_WebhookResponseReply,
  },
};

exports.GrpcWebServiceClient = grpc.makeGenericClientConstructor(GrpcWebServiceService);
