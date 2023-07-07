## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
<dt><a href="#Elarian">Elarian</a> ⇐ <code><a href="#Client">Client</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#initializeClient">initializeClient(config)</a> ⇒ <code><a href="#Elarian">Elarian</a></code></dt>
<dd><p>Initialize a client</p></dd>
</dl>

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client(config)](#new_Client_new)
    * [.connect()](#Client+connect) ⇒ [<code>Elarian</code>](#Elarian)
    * [.isConnected()](#Client+isConnected) ⇒ <code>boolean</code>
    * [.disconnect()](#Client+disconnect)
    * [.registerNotificationHandler(event, handler)](#Client+registerNotificationHandler) ⇒ [<code>Client</code>](#Client)
    * [.on(event, handler)](#Client+on) ⇒ [<code>Client</code>](#Client)

<a name="new_Client_new"></a>

### new Client(config)
<p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="Client+connect"></a>

### client.connect() ⇒ [<code>Elarian</code>](#Elarian)
<p>Connecto to elarian servers</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Elarian</code>](#Elarian) - <p>this instance</p>  
<a name="Client+isConnected"></a>

### client.isConnected() ⇒ <code>boolean</code>
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+disconnect"></a>

### client.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+registerNotificationHandler"></a>

### client.registerNotificationHandler(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### client.on(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Elarian"></a>

## Elarian ⇐ [<code>Client</code>](#Client)
**Kind**: global class  
**Extends**: [<code>Client</code>](#Client)  

* [Elarian](#Elarian) ⇐ [<code>Client</code>](#Client)
    * [new Elarian(config)](#new_Elarian_new)
    * [.generateAuthToken()](#Elarian+generateAuthToken) ⇒ <code>AuthToken</code>
    * [.createHuman(id)](#Elarian+createHuman) ⇒ <code>Reply</code>
    * [.addReminder(id, reminder)](#Elarian+addReminder) ⇒ <code>Reply</code>
    * [.addGroupReminder(group, reminder)](#Elarian+addGroupReminder) ⇒ <code>Reply</code>
    * [.cancelReminder(id, reminder)](#Elarian+cancelReminder) ⇒ <code>Reply</code>
    * [.cancelGroupReminder(group, reminder)](#Elarian+cancelGroupReminder) ⇒ <code>Reply</code>
    * [.updateGroups(id, groups)](#Elarian+updateGroups) ⇒ <code>Reply</code>
    * [.deleteGroups(id, groups)](#Elarian+deleteGroups) ⇒ <code>Reply</code>
    * [.updateMetadata(id, updates)](#Elarian+updateMetadata) ⇒ <code>Reply</code>
    * [.deleteMetadata(id, keys)](#Elarian+deleteMetadata) ⇒ <code>Reply</code>
    * [.leaseAppState(id)](#Elarian+leaseAppState) ⇒ <code>StateReply</code>
    * [.updateAppState(id, state)](#Elarian+updateAppState) ⇒ <code>StateReply</code>
    * [.deleteAppState(id)](#Elarian+deleteAppState) ⇒ <code>StateReply</code>
    * [.connect()](#Client+connect) ⇒ [<code>Elarian</code>](#Elarian)
    * [.isConnected()](#Client+isConnected) ⇒ <code>boolean</code>
    * [.disconnect()](#Client+disconnect)
    * [.registerNotificationHandler(event, handler)](#Client+registerNotificationHandler) ⇒ [<code>Client</code>](#Client)
    * [.on(event, handler)](#Client+on) ⇒ [<code>Client</code>](#Client)

<a name="new_Elarian_new"></a>

### new Elarian(config)
<p>Instantiate an elarian client. You have to call connect() on the client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="Elarian+generateAuthToken"></a>

### elarian.generateAuthToken() ⇒ <code>AuthToken</code>
<p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+createHuman"></a>

### elarian.createHuman(id) ⇒ <code>Reply</code>
<p>Create a human</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>human id</p> |

<a name="Elarian+addReminder"></a>

### elarian.addReminder(id, reminder) ⇒ <code>Reply</code>
<p>Add a reminder</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>human id</p> |
| reminder | <code>Reminder</code> | <p>a reminder</p> |

<a name="Elarian+addGroupReminder"></a>

### elarian.addGroupReminder(group, reminder) ⇒ <code>Reply</code>
<p>Add a group reminder</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>IndexMapping</code> |  |
| reminder | <code>Reminder</code> | <p>a reminder</p> |

<a name="Elarian+cancelReminder"></a>

### elarian.cancelReminder(id, reminder) ⇒ <code>Reply</code>
<p>Cancel a reminder</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>human id</p> |
| reminder | <code>string</code> | <p>a reminder key</p> |

<a name="Elarian+cancelGroupReminder"></a>

### elarian.cancelGroupReminder(group, reminder) ⇒ <code>Reply</code>
<p>Cancel a group reminder</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>IndexMapping</code> |  |
| reminder | <code>string</code> | <p>a reminder key</p> |

<a name="Elarian+updateGroups"></a>

### elarian.updateGroups(id, groups) ⇒ <code>Reply</code>
<p>Update a human's groups</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |
| groups | <code>Array.&lt;GroupIndex&gt;</code> |  |

<a name="Elarian+deleteGroups"></a>

### elarian.deleteGroups(id, groups) ⇒ <code>Reply</code>
<p>Delete a human's groups</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |
| groups | <code>Array.&lt;string&gt;</code> |  |

<a name="Elarian+updateMetadata"></a>

### elarian.updateMetadata(id, updates) ⇒ <code>Reply</code>
<p>Update a human's metadata</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |
| updates | <code>map.&lt;string, DataMapValue&gt;</code> |  |

<a name="Elarian+deleteMetadata"></a>

### elarian.deleteMetadata(id, keys) ⇒ <code>Reply</code>
<p>Delete a human's metadata</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |
| keys | <code>Array.&lt;string&gt;</code> |  |

<a name="Elarian+leaseAppState"></a>

### elarian.leaseAppState(id) ⇒ <code>StateReply</code>
<p>Lease app state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |

<a name="Elarian+updateAppState"></a>

### elarian.updateAppState(id, state) ⇒ <code>StateReply</code>
<p>Update app state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |
| state | <code>DataMapValue</code> |  |

<a name="Elarian+deleteAppState"></a>

### elarian.deleteAppState(id) ⇒ <code>StateReply</code>
<p>Delete app state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>a human id</p> |

<a name="Client+connect"></a>

### elarian.connect() ⇒ [<code>Elarian</code>](#Elarian)
<p>Connecto to elarian servers</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Elarian</code>](#Elarian) - <p>this instance</p>  
<a name="Client+isConnected"></a>

### elarian.isConnected() ⇒ <code>boolean</code>
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Client+disconnect"></a>

### elarian.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Client+registerNotificationHandler"></a>

### elarian.registerNotificationHandler(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### elarian.on(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="initializeClient"></a>

## initializeClient(config) ⇒ [<code>Elarian</code>](#Elarian)
<p>Initialize a client</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

