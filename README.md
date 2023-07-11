# Elarian

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian)

> A framework that helps you build scalable, personalized customer engagement applications.

## Install

You can install the package from [npm](https://www.npmjs.com/package/elarian) by running: 

```bash
$ npm install elarian@latest
```

## Usage

```javascript

// on node
const { initializeClient }  = require('elarian');
/*
or in the browser
<script src="web.js"></script>
// or import { initializeClient } from 'elarian/web'
*/

// ...

const elarian = await initializeClient({
    apiKey: 'YOUR_API_KEY', // or authToken: 'YOUR_AUTH_TOKEN'
    orgId: 'YOUR_ORG_ID',
    appId: 'YOUR_APP_ID',
});

elarian.on('reminder', (data, customer) => {
    // ...
});

const userId = 'abc...';
const { state } = await elarian.leaseAppState(userId);
const data = JSON.parse(state.stringVal);
await elarian.updateAppState(userId, { stringVal: JSON.stringify({ ...data, status: 'good boy' }) });
await elarian.updateMetadata(userId, { bio: { bytesVal: Buffer.from('age=29;gender=female') }});

```

## Documentation

Take a look at the [product documentation](https://developers.elarian.com/). For detailed info on this SDK, see the [reference](https://elarianltd.github.io/javascript-sdk/index.html).

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

See [SDK Spec](https://github.com/ElarianLtd/sdk-spec) for reference.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Read the [contribution guide](CONTRIBUTING.md) for more information.

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).

## Known Issues

- Missing method to lease/get/fetch user metadata
- `resumable` connection options prevents app from connecting
