## Classes

<dl>
<dt><a href="#Elarian">Elarian</a></dt>
<dd></dd>
<dt><a href="#Customer">Customer</a></dt>
<dd></dd>
<dt><a href="#Simulator">Simulator</a></dt>
<dd></dd>
</dl>

<a name="Elarian"></a>

## Elarian
**Kind**: global class  

* [Elarian](#Elarian)
    * [new Elarian(config)](#new_Elarian_new)
    * _instance_
        * [.Customer](#Elarian+Customer)
            * [new this.Customer()](#new_Elarian+Customer_new)
        * [.generateAuthToken()](#Elarian+generateAuthToken) ⇒ <code>AuthToken</code>
        * [.connect()](#Elarian+connect)
        * [.isConnected()](#Elarian+isConnected)
        * [.disconnect()](#Elarian+disconnect)
        * [.sendMessage(customer, channelNumber, message)](#Elarian+sendMessage) ⇒ <code>MessageStatus</code>
        * [.sendMessageByTag(tag, channelNumber, body)](#Elarian+sendMessageByTag) ⇒ <code>WorkStatus</code>
        * [.replyToMessage(customer, replyToMessageId, body)](#Elarian+replyToMessage) ⇒ <code>MessageStatus</code>
        * [.updateMessagingConsent(customer, channelNumber, action)](#Elarian+updateMessagingConsent) ⇒ <code>ConsentStatus</code>
        * [.registerListerner(event, listener)](#Elarian+registerListerner)
        * [.on(event, listener)](#Elarian+on)
        * [.removeListener(event)](#Elarian+removeListener)
        * [.off(event)](#Elarian+off)
        * [.initiatePayment(debitParty, creditParty, value)](#Elarian+initiatePayment) ⇒ <code>PaymentStatus</code>
        * [.getCustomerState(customer)](#Elarian+getCustomerState) ⇒ <code>CustomerState</code>
        * [.adoptCustomerState(customer, otherCustomer)](#Elarian+adoptCustomerState) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerTag(customer, tags)](#Elarian+updateCustomerTag) ⇒ <code>UpdateStatus</code>
        * [.deleteCustomerTag(customer, tags)](#Elarian+deleteCustomerTag) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerSecondaryId(customer, secondaryIds)](#Elarian+updateCustomerSecondaryId) ⇒ <code>UpdateStatus</code>
        * [.deleteCustomerSecondaryId(customer, secondaryIds)](#Elarian+deleteCustomerSecondaryId) ⇒ <code>UpdateStatus</code>
        * [.addCustomerReminder(customer, reminder)](#Elarian+addCustomerReminder) ⇒ <code>UpdateStatus</code>
        * [.cancelCustomerReminder(customer, key)](#Elarian+cancelCustomerReminder) ⇒ <code>UpdateStatus</code>
        * [.addCustomerReminderByTag(tag, reminder)](#Elarian+addCustomerReminderByTag) ⇒ <code>WorkStatus</code>
        * [.cancelCustomerReminderByTag(tag, key)](#Elarian+cancelCustomerReminderByTag) ⇒ <code>WorkStatus</code>
        * [.updateCustomerMetadata(customer, metadata)](#Elarian+updateCustomerMetadata) ⇒ <code>UpdateStatus</code>
        * [.deleteCustomerMetadata(customer, keys)](#Elarian+deleteCustomerMetadata) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerAppData(customer, data)](#Elarian+updateCustomerAppData) ⇒ <code>UpdateStatus</code>
        * [.leaseCustomerAppData(customer)](#Elarian+leaseCustomerAppData) ⇒ <code>LeasedAppData</code>
        * [.deleteCustomerAppData(customer)](#Elarian+deleteCustomerAppData) ⇒ <code>UpdateStatus</code>
        * [.updateCustomerActivity(customerNumber, channelNumber, activity)](#Elarian+updateCustomerActivity) ⇒ <code>UpdateStatus</code>
        * [.makeVoiceCall(customer, channelNumber, actions)](#Elarian+makeVoiceCall) ⇒ <code>VoiceStatus</code>
    * _static_
        * [.newInstance(config)](#Elarian.newInstance)

<a name="new_Elarian_new"></a>

### new Elarian(config)
<p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

<a name="Elarian+Customer"></a>

### elarian.Customer
**Kind**: instance class of [<code>Elarian</code>](#Elarian)  
<a name="new_Elarian+Customer_new"></a>

#### new this.Customer()
<p>A customer object. @see [Customer](#Customer)</p>

<a name="Elarian+generateAuthToken"></a>

### elarian.generateAuthToken() ⇒ <code>AuthToken</code>
<p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+connect"></a>

### elarian.connect()
<p>Connect to the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+isConnected"></a>

### elarian.isConnected()
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+disconnect"></a>

### elarian.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+sendMessage"></a>

### elarian.sendMessage(customer, channelNumber, message) ⇒ <code>MessageStatus</code>
<p>Send a message</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| message | <code>Message</code> | 

<a name="Elarian+sendMessageByTag"></a>

### elarian.sendMessageByTag(tag, channelNumber, body) ⇒ <code>WorkStatus</code>
<p>Send message by tag</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| body | <code>Message</code> | 

<a name="Elarian+replyToMessage"></a>

### elarian.replyToMessage(customer, replyToMessageId, body) ⇒ <code>MessageStatus</code>
<p>Reply to a received message</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| replyToMessageId | <code>string</code> | 
| body | <code>Message</code> | 

<a name="Elarian+updateMessagingConsent"></a>

### elarian.updateMessagingConsent(customer, channelNumber, action) ⇒ <code>ConsentStatus</code>
<p>Allow or block a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| customer | [<code>Customer</code>](#Customer) |  |
| channelNumber | <code>MessagingChannelNumber</code> |  |
| action | <code>string</code> | <p>allow or block</p> |

<a name="Elarian+registerListerner"></a>

### elarian.registerListerner(event, listener)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| listener | <code>EventListener</code> | <p>A function that reacts to events</p> |

<a name="Elarian+on"></a>

### elarian.on(event, listener)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| listener | <code>EventListener</code> | <p>A function that reacts to events</p> |

<a name="Elarian+removeListener"></a>

### elarian.removeListener(event)
<p>Remove listener registered for event. Can also be called with <code>client.off(event)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to remove</p> |

<a name="Elarian+off"></a>

### elarian.off(event)
<p>Remove listener registered for event. Can also be called with <code>client.removeListener(event)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to remove</p> |

<a name="Elarian+initiatePayment"></a>

### elarian.initiatePayment(debitParty, creditParty, value) ⇒ <code>PaymentStatus</code>
<p>Initiate a payment transaction</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| debitParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| creditParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| value | <code>Cash</code> | 

<a name="Elarian+getCustomerState"></a>

### elarian.getCustomerState(customer) ⇒ <code>CustomerState</code>
<p>Fetch the customer's current state.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Elarian+adoptCustomerState"></a>

### elarian.adoptCustomerState(customer, otherCustomer) ⇒ <code>UpdateStatus</code>
<p>Adopt another customer's state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Elarian+updateCustomerTag"></a>

### elarian.updateCustomerTag(customer, tags) ⇒ <code>UpdateStatus</code>
<p>Update a customer's tag list</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Elarian+deleteCustomerTag"></a>

### elarian.deleteCustomerTag(customer, tags) ⇒ <code>UpdateStatus</code>
<p>Remove tags from a customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| tags | <code>Array.&lt;string&gt;</code> | 

<a name="Elarian+updateCustomerSecondaryId"></a>

### elarian.updateCustomerSecondaryId(customer, secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Elarian+deleteCustomerSecondaryId"></a>

### elarian.deleteCustomerSecondaryId(customer, secondaryIds) ⇒ <code>UpdateStatus</code>
<p>Delete a customer's secondary Ids</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Elarian+addCustomerReminder"></a>

### elarian.addCustomerReminder(customer, reminder) ⇒ <code>UpdateStatus</code>
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| reminder | <code>Reminder</code> | 

<a name="Elarian+cancelCustomerReminder"></a>

### elarian.cancelCustomerReminder(customer, key) ⇒ <code>UpdateStatus</code>
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| key | <code>string</code> | 

<a name="Elarian+addCustomerReminderByTag"></a>

### elarian.addCustomerReminderByTag(tag, reminder) ⇒ <code>WorkStatus</code>
<p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| reminder | <code>Reminder</code> | 

<a name="Elarian+cancelCustomerReminderByTag"></a>

### elarian.cancelCustomerReminderByTag(tag, key) ⇒ <code>WorkStatus</code>
<p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| key | <code>string</code> | 

<a name="Elarian+updateCustomerMetadata"></a>

### elarian.updateCustomerMetadata(customer, metadata) ⇒ <code>UpdateStatus</code>
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on your serializer. @see [Client](Client)</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| metadata | <code>Object</code> | 

<a name="Elarian+deleteCustomerMetadata"></a>

### elarian.deleteCustomerMetadata(customer, keys) ⇒ <code>UpdateStatus</code>
<p>Remove some metadata from a customer.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Elarian+updateCustomerAppData"></a>

### elarian.updateCustomerAppData(customer, data) ⇒ <code>UpdateStatus</code>
<p>Sets some app data on the customer.
Value of the data object can either be a string or a buffer,
depending on your serializer. @see [Client](Client)</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| data | <code>Object</code> | 

<a name="Elarian+leaseCustomerAppData"></a>

### elarian.leaseCustomerAppData(customer) ⇒ <code>LeasedAppData</code>
<p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
until next call to update app data.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Elarian+deleteCustomerAppData"></a>

### elarian.deleteCustomerAppData(customer) ⇒ <code>UpdateStatus</code>
<p>Remove customer's app data.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Elarian+updateCustomerActivity"></a>

### elarian.updateCustomerActivity(customerNumber, channelNumber, activity) ⇒ <code>UpdateStatus</code>
<p>Initiate a customer activity</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>ActivityChannelNumber</code> | 
| activity | <code>Activity</code> | 

<a name="Elarian+makeVoiceCall"></a>

### elarian.makeVoiceCall(customer, channelNumber, actions) ⇒ <code>VoiceStatus</code>
<p>Initiate a voice call to customer from channelNumber</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 
| channelNumber | <code>string</code> | 
| actions | <code>Array.&lt;VoiceAction&gt;</code> | 

<a name="Elarian.newInstance"></a>

### Elarian.newInstance(config)
<p>Instantiate and connect an elarian client</p>

**Kind**: static method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

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
    * [.deleteMetadata(keys)](#Customer+deleteMetadata) ⇒ <code>UpdateStatus</code>
    * [.updateAppData(data)](#Customer+updateAppData) ⇒ <code>UpdateStatus</code>
    * [.leaseAppData()](#Customer+leaseAppData) ⇒ <code>LeasedAppData</code>
    * [.deleteAppData()](#Customer+deleteAppData) ⇒ <code>UpdateStatus</code>
    * [.sendMessage(channelNumber, body)](#Customer+sendMessage) ⇒ <code>MessageStatus</code>
    * [.makeVoiceCall(channelNumber, actions)](#Customer+makeVoiceCall) ⇒ <code>MessageStatus</code>
    * [.updateMessagingConsent(channelNumber, action)](#Customer+updateMessagingConsent) ⇒ <code>ConsentStatus</code>
    * [.updateActivity(channelNumber, sessionId)](#Customer+updateActivity) ⇒ <code>UpdateStatus</code>
    * [.requestPayment(source, destination, value)](#Customer+requestPayment) ⇒ <code>PaymentStatus</code>

<a name="new_Customer_new"></a>

### new Customer(params)
<p>A customer is your end-user, represented by a number (from a cellular, facebook or telegram)</p>


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

<a name="Customer+deleteMetadata"></a>

### customer.deleteMetadata(keys) ⇒ <code>UpdateStatus</code>
<p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Customer+updateAppData"></a>

### customer.updateAppData(data) ⇒ <code>UpdateStatus</code>
<p>Sets some app data on the customer.
Values in the data object can either be strings or buffers,
depending on the set serializer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Customer+leaseAppData"></a>

### customer.leaseAppData() ⇒ <code>LeasedAppData</code>
<p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
until next call to update app data.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+deleteAppData"></a>

### customer.deleteAppData() ⇒ <code>UpdateStatus</code>
<p>Remove customer's app data</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+sendMessage"></a>

### customer.sendMessage(channelNumber, body) ⇒ <code>MessageStatus</code>
<p>Send a message to the customer from the specified channel number.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>MessagingChannelNumber</code> | 
| body | <code>Body</code> | 

<a name="Customer+makeVoiceCall"></a>

### customer.makeVoiceCall(channelNumber, actions) ⇒ <code>MessageStatus</code>
<p>Initiate a voice call to the customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>string</code> | 
| actions | <code>Array.&lt;VoiceAction&gt;</code> | 

<a name="Customer+updateMessagingConsent"></a>

### customer.updateMessagingConsent(channelNumber, action) ⇒ <code>ConsentStatus</code>
<p>Allow or block a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type | Description |
| --- | --- | --- |
| channelNumber | <code>MessagingChannelNumber</code> |  |
| action | <code>string</code> | <p>allow or block</p> |

<a name="Customer+updateActivity"></a>

### customer.updateActivity(channelNumber, sessionId) ⇒ <code>UpdateStatus</code>
<p>Initiate a customer activity</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>ActivityChannelNumber</code> | 
| sessionId | <code>Activity</code> | 

<a name="Customer+requestPayment"></a>

### customer.requestPayment(source, destination, value) ⇒ <code>PaymentStatus</code>
<p>Initiate a payment transaction</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| source | <code>PaymentChannelNumber</code> \| <code>Wallet</code> | 
| destination | <code>Wallet</code> \| <code>Purse</code> | 
| value | <code>Cash</code> | 

<a name="Simulator"></a>

## Simulator
**Kind**: global class  

* [Simulator](#Simulator)
    * [new Simulator(config)](#new_Simulator_new)
    * _instance_
        * [.receiveMessage(customerNumber, channelNumber, sessionId, messageParts)](#Simulator+receiveMessage)
        * [.receivePayment(transactionId, customerNumber, channelNumber, value, status)](#Simulator+receivePayment)
        * [.updatePaymentStatus(transactionId, status)](#Simulator+updatePaymentStatus)
    * _static_
        * [.newInstance(config)](#Simulator.newInstance)

<a name="new_Simulator_new"></a>

### new Simulator(config)
<p>Instantiate an elarian simulator client</p>


| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

<a name="Simulator+receiveMessage"></a>

### simulator.receiveMessage(customerNumber, channelNumber, sessionId, messageParts)
<p>Initiate a message request</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| customerNumber | <code>string</code> | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| sessionId | <code>string</code> | 
| messageParts | <code>Array.&lt;SimulatorMessageBody&gt;</code> | 

<a name="Simulator+receivePayment"></a>

### simulator.receivePayment(transactionId, customerNumber, channelNumber, value, status)
<p>Initiate payment request</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| transactionId | <code>string</code> | 
| customerNumber | <code>string</code> | 
| channelNumber | <code>PaymentChannelNumber</code> | 
| value | <code>Cash</code> | 
| status | <code>string</code> | 

<a name="Simulator+updatePaymentStatus"></a>

### simulator.updatePaymentStatus(transactionId, status)
<p>Update payment status</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| transactionId | <code>string</code> | 
| status | <code>string</code> | 

<a name="Simulator.newInstance"></a>

### Simulator.newInstance(config)
<p>Instantiate and connect an elarian simulator client</p>

**Kind**: static method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

