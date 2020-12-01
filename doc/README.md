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
    * [.getState()](#Customer+getState) ⇒ <code>CustomerState</code>
    * [.adoptState(otherCustomer)](#Customer+adoptState) ⇒ <code>UpdateStatus</code>
    * [.updateTag(tags)](#Customer+updateTag) ⇒ <code>UpdateStatus</code>
    * [.deleteTag(tags)](#Customer+deleteTag) ⇒ <code>UpdateStatus</code>
    * [.updateSecondaryId(secondaryIds)](#Customer+updateSecondaryId) ⇒ <code>UpdateStatus</code>
    * [.deleteSecondaryId(secondaryIds)](#Customer+deleteSecondaryId) ⇒ <code>UpdateStatus</code>
    * [.addReminder(reminder)](#Customer+addReminder) ⇒ <code>UpdateStatus</code>
    * [.cancelReminder(key)](#Customer+cancelReminder) ⇒ <code>UpdateStatus</code>
    * [.updateMetadata(metadata)](#Customer+updateMetadata) ⇒ <code>UpdateStatus</code>
    * [.leaseMetadata(key)](#Customer+leaseMetadata) ⇒ <code>LeasedMetadata</code>
    * [.deleteMetadata(keys)](#Customer+deleteMetadata) ⇒ <code>UpdateStatus</code>
    * [.sendMessage(channelNumber, body)](#Customer+sendMessage) ⇒ <code>MessageStatus</code>

<a name="new_Customer_new"></a>

### new Customer(params)
<p>A customer is your end-user, represented by a number (from a telco, facebook or telegram)</p>


| Param | Type |
| --- | --- |
| params | <code>CustomerParams</code> | 

<a name="Customer+getState"></a>

### customer.getState() ⇒ <code>CustomerState</code>
<p>Fetch the customer's current state.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+adoptState"></a>

### customer.adoptState(otherCustomer) ⇒ <code>UpdateStatus</code>
<p>Merge otherCustomer's state into this customer's state and discard otherCustomer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Customer+updateTag"></a>

### customer.updateTag(tags) ⇒ <code>UpdateStatus</code>
<p>Update a customer's tag list.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Customer+deleteTag"></a>

### customer.deleteTag(tags) ⇒ <code>UpdateStatus</code>
<p>Remove some tags from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Customer+updateSecondaryId"></a>

### customer.updateSecondaryId(secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+deleteSecondaryId"></a>

### customer.deleteSecondaryId(secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Remove some secondary Ids from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+addReminder"></a>

### customer.addReminder(reminder) ⇒ <code>UpdateStatus</code>
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| reminder | <code>Reminder</code> | 

<a name="Customer+cancelReminder"></a>

### customer.cancelReminder(key) ⇒ <code>UpdateStatus</code>
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="Customer+updateMetadata"></a>

### customer.updateMetadata(metadata) ⇒ <code>UpdateStatus</code>
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on the set serializer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| metadata | <code>Object</code> | 

<a name="Customer+leaseMetadata"></a>

### customer.leaseMetadata(key) ⇒ <code>LeasedMetadata</code>
<p>Fetches the value of <code>key</code> from the customer's metdata
and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="Customer+deleteMetadata"></a>

### customer.deleteMetadata(keys) ⇒ <code>UpdateStatus</code>
<p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Customer+sendMessage"></a>

### customer.sendMessage(channelNumber, body) ⇒ <code>MessageStatus</code>
<p>Send a message to the customer from the specified channel number.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>MessagingChannelNumber</code> | 
| body | <code>Body</code> | 

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client(params, [configOptions])](#new_Client_new)
    * _instance_
        * [.getCustomerState(customer)](#Client+getCustomerState) ⇒ <code>CustomerState</code>
        * [.adoptCustomerState(customer, otherCustomer)](#Client+adoptCustomerState) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerTag(customer, tags)](#Client+updateCustomerTag) ⇒ <code>UpdateStatus</code>
        * [.deleteCustomerTag(customer, tags)](#Client+deleteCustomerTag) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerSecondaryId(customer, secondaryIds)](#Client+updateCustomerSecondaryId) ⇒ <code>UpdateStatus</code>
        * [.deleteCustomerSecondaryId(customer, secondaryIds)](#Client+deleteCustomerSecondaryId) ⇒ <code>UpdateStatus</code>
        * [.addCustomerReminder(customer, reminder)](#Client+addCustomerReminder) ⇒ <code>UpdateStatus</code>
        * [.cancelCustomerReminder(customer, key)](#Client+cancelCustomerReminder) ⇒ <code>UpdateStatus</code>
        * [.addCustomerReminderByTag(tag, reminder)](#Client+addCustomerReminderByTag) ⇒ <code>WorkStatus</code>
        * [.cancelCustomerReminderByTag(tag, key)](#Client+cancelCustomerReminderByTag) ⇒ <code>WorkStatus</code>
        * [.updateCustomerMetadata(customer, metadata)](#Client+updateCustomerMetadata) ⇒ <code>UpdateStatus</code>
        * [.leaseCustomerMetadata(customer, key)](#Client+leaseCustomerMetadata) ⇒ <code>LeasedMetadata</code>
        * [.deleteCustomerMetadata(customer, keys)](#Client+deleteCustomerMetadata) ⇒ <code>UpdateStatus</code>
        * [.connect()](#Client+connect)
        * [.disconnect()](#Client+disconnect)
        * [.sendMessage(customer, channelNumber, body)](#Client+sendMessage) ⇒ <code>MessageStatus</code>
        * [.sendMessageByTag(tag, channelNumber, body)](#Client+sendMessageByTag) ⇒ <code>WorkStatus</code>
        * [.replyToMessage(customer, replyToMessageId, body)](#Client+replyToMessage) ⇒ <code>MessageStatus</code>
        * [.messagingConsent(customer, channelNumber, action)](#Client+messagingConsent) ⇒ <code>ConsentStatus</code>
        * [.registerListerner(event, listener)](#Client+registerListerner)
        * [.on(event, listener)](#Client+on)
        * [.removeListener(event)](#Client+removeListener)
        * [.off(event)](#Client+off)
        * [.initiatePayment(debitParty, creditParty, value)](#Client+initiatePayment) ⇒ <code>PaymentStatus</code>
        * [.makeVoiceCall(customer, channelNumber)](#Client+makeVoiceCall) ⇒ <code>VoiceStatus</code>
    * _static_
        * [.newInstance(params, [configOptions])](#Client.newInstance)

<a name="new_Client_new"></a>

### new Client(params, [configOptions])
<p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>


| Param | Type |
| --- | --- |
| params | <code>ClientParams</code> | 
| [configOptions] | <code>ConfigOptions</code> | 

<a name="Client+getCustomerState"></a>

### client.getCustomerState(customer) ⇒ <code>CustomerState</code>
<p>Fetch the customer's current state.</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Client+adoptCustomerState"></a>

### client.adoptCustomerState(customer, otherCustomer) ⇒ <code>UpdateStatus</code>
<p>Adopt another customer's state</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Client+updateCustomerTag"></a>

### client.updateCustomerTag(customer, tags) ⇒ <code>UpdateStatus</code>
<p>Update a customer's tag list</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Client+deleteCustomerTag"></a>

### client.deleteCustomerTag(customer, tags) ⇒ <code>UpdateStatus</code>
<p>Remove tags from a customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Client+updateCustomerSecondaryId"></a>

### client.updateCustomerSecondaryId(customer, secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Client+deleteCustomerSecondaryId"></a>

### client.deleteCustomerSecondaryId(customer, secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Delete a customer's secondary Ids</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Client+addCustomerReminder"></a>

### client.addCustomerReminder(customer, reminder) ⇒ <code>UpdateStatus</code>
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| reminder | <code>Reminder</code> | 

<a name="Client+cancelCustomerReminder"></a>

### client.cancelCustomerReminder(customer, key) ⇒ <code>UpdateStatus</code>
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| key | <code>string</code> | 

<a name="Client+addCustomerReminderByTag"></a>

### client.addCustomerReminderByTag(tag, reminder) ⇒ <code>WorkStatus</code>
<p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| reminder | <code>Reminder</code> | 

<a name="Client+cancelCustomerReminderByTag"></a>

### client.cancelCustomerReminderByTag(tag, key) ⇒ <code>WorkStatus</code>
<p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| key | <code>string</code> | 

<a name="Client+updateCustomerMetadata"></a>

### client.updateCustomerMetadata(customer, metadata) ⇒ <code>UpdateStatus</code>
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on your serializer. @see [Client](#Client)</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| metadata | <code>Object</code> | 

<a name="Client+leaseCustomerMetadata"></a>

### client.leaseCustomerMetadata(customer, key) ⇒ <code>LeasedMetadata</code>
<p>Fetches the value of <code>key</code> from the customer's metdata
and locks metadata fetching(for up to <b>90s</b>) until next call to update metadata.</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| key | <code>string</code> | 

<a name="Client+deleteCustomerMetadata"></a>

### client.deleteCustomerMetadata(customer, keys) ⇒ <code>UpdateStatus</code>
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

### client.sendMessage(customer, channelNumber, body) ⇒ <code>MessageStatus</code>
<p>Send a message</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| body | <code>Body</code> | 

<a name="Client+sendMessageByTag"></a>

### client.sendMessageByTag(tag, channelNumber, body) ⇒ <code>WorkStatus</code>
<p>Send message by tag</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| body | <code>Body</code> | 

<a name="Client+replyToMessage"></a>

### client.replyToMessage(customer, replyToMessageId, body) ⇒ <code>MessageStatus</code>
<p>Reply to a received message</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| replyToMessageId | <code>string</code> | 
| body | <code>Body</code> | 

<a name="Client+messagingConsent"></a>

### client.messagingConsent(customer, channelNumber, action) ⇒ <code>ConsentStatus</code>
<p>Opt in or out a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| customer | [<code>Customer</code>](#Customer) |  |
| channelNumber | <code>MessagingChannelNumber</code> |  |
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

### client.initiatePayment(debitParty, creditParty, value) ⇒ <code>PaymentStatus</code>
<p>Initiate a payment transaction</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| debitParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| creditParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| value | <code>Cash</code> | 

<a name="Client+makeVoiceCall"></a>

### client.makeVoiceCall(customer, channelNumber) ⇒ <code>VoiceStatus</code>
<p>Initiate a voice call to customer</p>

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>VoiceChannelNumber</code> | 

<a name="Client.newInstance"></a>

### Client.newInstance(params, [configOptions])
<p>Instantiate and connect an elarian client</p>

**Kind**: static method of [<code>Client</code>](#Client)  

| Param | Type |
| --- | --- |
| params | <code>ClientParams</code> | 
| [configOptions] | <code>ConfigOptions</code> | 

