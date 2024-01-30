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
    * [.fetchAppState()](#Elarian+fetchAppState) ⇒ <code>AppState</code>
    * [.updateAppState(data)](#Elarian+updateAppState) ⇒ <code>AppState</code>
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

<a name="Elarian+fetchAppState"></a>

### elarian.fetchAppState() ⇒ <code>AppState</code>
<p>Lease app state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+updateAppState"></a>

### elarian.updateAppState(data) ⇒ <code>AppState</code>
<p>Update app state</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| data | <code>Buffer</code> | 

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

