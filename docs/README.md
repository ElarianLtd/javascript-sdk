## Classes

<dl>
<dt><a href="#Elarian">Elarian</a></dt>
<dd></dd>
<dt><a href="#Customer">Customer</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#Simulator">Simulator(config)</a></dt>
<dd><p>Instantiate an elarian simulator client</p></dd>
</dl>

<a name="Elarian"></a>

## Elarian
**Kind**: global class  

* [Elarian](#Elarian)
    * [new Elarian(config)](#new_Elarian_new)
    * _instance_
        * [.connect()](#Elarian+connect)
        * [.disconnect()](#Elarian+disconnect)
    * _static_
        * [.newInstance(config)](#Elarian.newInstance)

<a name="new_Elarian_new"></a>

### new Elarian(config)
<p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

<a name="Elarian+connect"></a>

### elarian.connect()
<p>Initialize client connection to the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+disconnect"></a>

### elarian.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
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
    * [.updateMessagingConsent(customer, channelNumber, action)](#Customer+updateMessagingConsent) ⇒ <code>ConsentStatus</code>
    * [.updateActivity(channelNumber, sessionId)](#Customer+updateActivity) ⇒ <code>UpdateStatus</code>

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

### customer.updateMessagingConsent(customer, channelNumber, action) ⇒ <code>ConsentStatus</code>
<p>Allow or block a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type | Description |
| --- | --- | --- |
| customer | [<code>Customer</code>](#Customer) |  |
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

<a name="Simulator"></a>

## Simulator(config)
<p>Instantiate an elarian simulator client</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

<a name="Simulator.newInstance"></a>

### Simulator.newInstance(config)
<p>Instantiate and connect an elarian simulator client</p>

**Kind**: static method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

