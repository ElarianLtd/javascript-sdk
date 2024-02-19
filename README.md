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

const { initializeClient }  = require('elarian');


// ...

const elarian = await initializeClient({
    token: 'YOUR_TOKEN',
    appId: 'YOUR_APP_ID',
});

elarian.on('consentDenied', (userId) => {
    // ...
});

elarian.on('consentGranted', (userId, data) => {
    // ...
});

const { state } = await elarian.fetchAppState();

await elarian.updateAppState(Buffer.from('abc'));

await elarian.sendMessage('Hello test');

await elarian.collectPayment({ amount: 10, currency: 'UGX' });

```

## Documentation

For detailed info on this SDK, see the [reference](https://elarianltd.github.io/javascript-sdk/index.html).

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

- Missing partial state updates
- Missing consent event notifications
- Missing sendMessage() and collectPayment() implementations
