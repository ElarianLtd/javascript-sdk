## Classes

<dl>
<dt><a href="#Customer">Customer</a></dt>
<dd></dd>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
</dl>

<a name="Customer"></a>

## Customer
**Kind**: global class  

* [Customer](#Customer)
    * [new Customer(params)](#new_Customer_new)
    * [.getState()](#Customer+getState) ⇒
    * [.adoptState(otherCustomer)](#Customer+adoptState)
    * [.updateTag(tags)](#Customer+updateTag)
    * [.deleteTag(tags)](#Customer+deleteTag)
    * [.updateSecondaryId(secondaryIds)](#Customer+updateSecondaryId)
    * [.deleteSecondaryId(secondaryIds)](#Customer+deleteSecondaryId)
    * [.addReminder(reminder)](#Customer+addReminder)
    * [.cancelReminder(key)](#Customer+cancelReminder)
    * [.updateMetadata(metadata)](#Customer+updateMetadata)
    * [.leaseMetadata(key)](#Customer+leaseMetadata)
    * [.deleteMetadata(keys)](#Customer+deleteMetadata)
    * [.sendMessage(channelNumber, body)](#Customer+sendMessage)

<a name="new_Customer_new"></a>

### new Customer(params)
<p>Customer class</p>


| Param | Type |
| --- | --- |
| params | <code>CustomerParams</code> | 

<a name="Customer+getState"></a>

### customer.getState() ⇒
<p>Fetch the customer's state</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+adoptState"></a>

### customer.adoptState(otherCustomer)
<p>Merge otherCustomer's state into this customer's state and discard otherCustomer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Customer+updateTag"></a>

### customer.updateTag(tags)
<p>Update a customer's tag list.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Customer+deleteTag"></a>

### customer.deleteTag(tags)
<p>Remove some tags from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Customer+updateSecondaryId"></a>

### customer.updateSecondaryId(secondaryIds)
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+deleteSecondaryId"></a>

### customer.deleteSecondaryId(secondaryIds)
<p>Remove some secondary Ids from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+addReminder"></a>

### customer.addReminder(reminder)
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| reminder | <code>Reminder</code> | 

<a name="Customer+cancelReminder"></a>

### customer.cancelReminder(key)
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="Customer+updateMetadata"></a>

### customer.updateMetadata(metadata)
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on the set serializer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| metadata | <code>\*</code> | 

<a name="Customer+leaseMetadata"></a>

### customer.leaseMetadata(key)
<p>Fetches the value of <code>key</code> from the customer's metdata
and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="Customer+deleteMetadata"></a>

### customer.deleteMetadata(keys)
<p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Customer+sendMessage"></a>

### customer.sendMessage(channelNumber, body)
<p>Send a message to the customer from the specified channel number.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>ChannelNumber</code> | 
| body | <code>Body</code> | 

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client(params, [configOptions])](#new_Client_new)
    * [.authToken()](#Client+authToken) ⇒ <code>Promise</code>
    * [.getCustomerState(customer)](#Client+getCustomerState) ⇒ <code>Promise</code>
    * [.adoptCustomerState(customer, otherCustomer)](#Client+adoptCustomerState) ⇒ <code>Promise</code>
    * [.updateCustomerTag(customer, tags)](#Client+updateCustomerTag) ⇒ <code>Promise</code>
    * [.deleteCustomerTag(customer, tags)](#Client+deleteCustomerTag) ⇒ <code>Promise</code>
    * [.updateCustomerSecondaryId(customer, secondaryIds)](#Client+updateCustomerSecondaryId) ⇒ <code>Promise</code>
    * [.deleteCustomerSecondaryId(customer, secondaryIds)](#Client+deleteCustomerSecondaryId) ⇒ <code>Promise</code>
    * [.addCustomerReminder(customer, reminder)](#Client+addCustomerReminder) ⇒ <code>Promise</code>
    * [.cancelCustomerReminder(customer, key)](#Client+cancelCustomerReminder) ⇒ <code>Promise</code>
    * [.addCustomerReminderByTag(tag, reminder)](#Client+addCustomerReminderByTag) ⇒ <code>Promise</code>
    * [.cancelCustomerReminderByTag(tag, key)](#Client+cancelCustomerReminderByTag) ⇒ <code>Promise</code>
    * [.updateCustomerMetadata(customer, metadata)](#Client+updateCustomerMetadata) ⇒ <code>Promise</code>
    * [.leaseCustomerMetadata(customer, key)](#Client+leaseCustomerMetadata) ⇒ <code>Promise</code>
    * [.deleteCustomerMetadata(customer, keys)](#Client+deleteCustomerMetadata) ⇒ <code>Promise</code>
    * [.connect()](#Client+connect)
    * [.disconnect()](#Client+disconnect)
    * [.sendMessage(customer, channelNumber, body)](#Client+sendMessage) ⇒ <code>Promise</code>
    * [.sendMessageByTag(tag, channelNumber, body)](#Client+sendMessageByTag) ⇒ <code>Promise</code>
    * [.replyToMessage(customer, replyToMessageId, body)](#Client+replyToMessage) ⇒ <code>Promise</code>
    * [.messagingConsent(customer, channelNumber, action)](#Client+messagingConsent) ⇒ <code>Promise</code>
    * [.registerListerner(event, listener)](#Client+registerListerner)
    * [.on(event, listener)](#Client+on)
    * [.removeListener(event)](#Client+removeListener)
    * [.off(event)](#Client+off)
    * [.initiatePayment(debitParty, creditParty, value)](#Client+initiatePayment) ⇒ <code>Promise</code>
    * [.makeVoiceCall(customer, channelNumber)](#Client+makeVoiceCall) ⇒ <code>Promise</code>

<a name="new_Client_new"></a>

### new Client(params, [configOptions])
<p>Elarian client</p>


| Param | Type |
| --- | --- |
| params | <code>ClientParams</code> | 
| [configOptions] | <code>ConfigOptions</code> | 

<a name="Client+authToken"></a>

### client.authToken() ⇒ <code>Promise</code>
<p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+getCustomerState"></a>

### client.getCustomerState(customer) ⇒ <code>Promise</code>
<p>Get customer state</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Client+adoptCustomerState"></a>

### client.adoptCustomerState(customer, otherCustomer) ⇒ <code>Promise</code>
<p>Adopt another customer's state</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Client+updateCustomerTag"></a>

### client.updateCustomerTag(customer, tags) ⇒ <code>Promise</code>
<p>Update a customer's tag list</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Client+deleteCustomerTag"></a>

### client.deleteCustomerTag(customer, tags) ⇒ <code>Promise</code>
<p>Remove tags from a customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Client+updateCustomerSecondaryId"></a>

### client.updateCustomerSecondaryId(customer, secondaryIds) ⇒ <code>Promise</code>
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Client+deleteCustomerSecondaryId"></a>

### client.deleteCustomerSecondaryId(customer, secondaryIds) ⇒ <code>Promise</code>
<p>Delete a customer's secondary Ids</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Client+addCustomerReminder"></a>

### client.addCustomerReminder(customer, reminder) ⇒ <code>Promise</code>
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| reminder | <code>Reminder</code> | 

<a name="Client+cancelCustomerReminder"></a>

### client.cancelCustomerReminder(customer, key) ⇒ <code>Promise</code>
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| key | <code>string</code> | 

<a name="Client+addCustomerReminderByTag"></a>

### client.addCustomerReminderByTag(tag, reminder) ⇒ <code>Promise</code>
<p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| reminder | <code>Reminder</code> | 

<a name="Client+cancelCustomerReminderByTag"></a>

### client.cancelCustomerReminderByTag(tag, key) ⇒ <code>Promise</code>
<p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| key | <code>string</code> | 

<a name="Client+updateCustomerMetadata"></a>

### client.updateCustomerMetadata(customer, metadata) ⇒ <code>Promise</code>
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on your serializer. @see [Client](#Client)</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| metadata | <code>Object</code> | 

<a name="Client+leaseCustomerMetadata"></a>

### client.leaseCustomerMetadata(customer, key) ⇒ <code>Promise</code>
<p>Fetches the value of <code>key</code> from the customer's metdata
and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| key | <code>string</code> | 

<a name="Client+deleteCustomerMetadata"></a>

### client.deleteCustomerMetadata(customer, keys) ⇒ <code>Promise</code>
<p>Remove some metadata from a customer.</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Client+connect"></a>

### client.connect()
<p>Initialize client connection to the API server</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+disconnect"></a>

### client.disconnect()
<p>Disconnect from the API server</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+sendMessage"></a>

### client.sendMessage(customer, channelNumber, body) ⇒ <code>Promise</code>
<p>Send a message</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>CustomerNumber</code> | 
| body | <code>Body</code> | 

<a name="Client+sendMessageByTag"></a>

### client.sendMessageByTag(tag, channelNumber, body) ⇒ <code>Promise</code>
<p>Send message by tag</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| channelNumber | <code>CustomerNumber</code> | 
| body | <code>Body</code> | 

<a name="Client+replyToMessage"></a>

### client.replyToMessage(customer, replyToMessageId, body) ⇒ <code>Promise</code>
<p>Reply to a received message</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| replyToMessageId | <code>string</code> | 
| body | <code>Body</code> | 

<a name="Client+messagingConsent"></a>

### client.messagingConsent(customer, channelNumber, action) ⇒ <code>Promise</code>
<p>Opt in or out a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| customer | [<code>Customer</code>](#Customer) |  |
| channelNumber | <code>CustomerNumber</code> |  |
| action | <code>opt-in</code> \| <code>opt-out</code> | <p>opt-in or opt-out</p> |

<a name="Client+registerListerner"></a>

### client.registerListerner(event, listener)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| listener | <code>EventListener</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### client.on(event, listener)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| listener | <code>EventListener</code> | <p>A function that reacts to events</p> |

<a name="Client+removeListener"></a>

### client.removeListener(event)
<p>Remove listener registered for event. Can also be called with <code>client.off(event)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to remove</p> |

<a name="Client+off"></a>

### client.off(event)
<p>Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to remove</p> |

<a name="Client+initiatePayment"></a>

### client.initiatePayment(debitParty, creditParty, value) ⇒ <code>Promise</code>
<p>Initiate a payment transaction</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| debitParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| creditParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| value | <code>Cash</code> | 

<a name="Client+makeVoiceCall"></a>

### client.makeVoiceCall(customer, channelNumber) ⇒ <code>Promise</code>
<p>Initiate a voice call to customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>ChannelNumber</code> | 

