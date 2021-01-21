## Classes

<dl>
<dt><a href="#Customer">Customer</a></dt>
<dd></dd>
<dt><a href="#Elarian">Elarian</a></dt>
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
    * [.deleteMetadata(keys)](#Customer+deleteMetadata) ⇒ <code>UpdateStatus</code>
    * [.updateAppData(data)](#Customer+updateAppData) ⇒ <code>UpdateStatus</code>
    * [.leaseAppData()](#Customer+leaseAppData) ⇒ <code>LeasedAppData</code>
    * [.deleteAppData()](#Customer+deleteAppData) ⇒ <code>UpdateStatus</code>
    * [.sendMessage(channelNumber, body)](#Customer+sendMessage) ⇒ <code>MessageStatus</code>
    * [.updateActivity()](#Customer+updateActivity)

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

<a name="Customer+updateActivity"></a>

### customer.updateActivity()
<p>Initiate web action?</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Elarian"></a>

## Elarian
**Kind**: global class  

* [Elarian](#Elarian)
    * [new Elarian(config)](#new_Elarian_new)
    * _instance_
        * [.updateCustomerActivity(customerNumber, domain, sessionId, key, properties)](#Elarian+updateCustomerActivity) ⇒ <code>PaymentStatus</code>
        * [.generateAuthToken()](#Elarian+generateAuthToken) ⇒ <code>AuthToken</code>
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

<a name="Elarian+updateCustomerActivity"></a>

### elarian.updateCustomerActivity(customerNumber, domain, sessionId, key, properties) ⇒ <code>PaymentStatus</code>
<p>Initiate a customer activity</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| domain | <code>string</code> | 
| sessionId | <code>string</code> | 
| key | <code>string</code> | 
| properties | <code>Object</code> | 

<a name="Elarian+generateAuthToken"></a>

### elarian.generateAuthToken() ⇒ <code>AuthToken</code>
<p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
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

<a name="Elarian+connect"></a>

### elarian.connect()
<p>Initialize client connection to the API server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+disconnect"></a>

### elarian.disconnect()
<p>Disconnect from the API server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian.newInstance"></a>

### Elarian.newInstance(config)
<p>Instantiate and connect an elarian client</p>

**Kind**: static method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| config | <code>ElarianConfig</code> | 

