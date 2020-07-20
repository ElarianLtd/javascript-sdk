# Elarian JavaScript SDK

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian/sdk)

> The wrapper provides convenient access to the Elarian API from applications written in JavaScript.

## Documentation

Take a look at the [API docs here](http://docs.elarian.com).


## Install

You can install the package from [npm](npmjs.com/package/elarian/sdk) by running: 

```bash
$ npm install @elarian/sdk
$ bower install @elarian/sdk
```

## Usage


```javascript
const elarian = require('@elarian/sdk');
await elarian.initialize({...});
const customerState = await elarian.GetCustomerState({...});
// ...
```

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).