# Javascript SDK

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian)

> A convenient way to interact with the Elarian APIs.



## Install

You can install the package from [npm](https://www.npmjs.com/package/elarian) by running: 

```bash
$ npm install elarian
```

## Usage

```javascript

// on node
const { Elarian, Customer }  = require('elarian');
// or in the browser
<script src="dist/elarian.min.js"></script>
// ...
const { Elarian, Customer }  = ElarianSDK;

// ...

const client = await Elarian.newInstance({
    apiKey: 'efg', // or authToken: 'abc'
    orgId: 'test_org_id',
    appId: 'test_app_id',
});

client.on('ussdSession', async ({ data, customer}, callback) => {
    const {
        input,
        sessionId,
    } = data;

    const appData = await customer.leaseAppData();
    let {
        name,
        state = 'newbie',
    } = appData;

    const menu = {
        text: null,
        isTerminal: true,
    };

    switch (state) {
    case 'veteran':
        if (name) {
            menu.text = `Welcome back ${name}! What is your new name?`;
            menu.isTerminal = false;
        } else {
            name = input.value;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
            await customer.sendMessage(
                { number: 'Elarian', provider: 'telco' },
                { text: `Hey ${name}! Thank you for trying out Elarian` },
            );
        }
        break;
    case 'newbie':
    default:
        menu.text = 'Hey there, welcome to Elarian! What\'s your name?';
        menu.isTerminal = false;
        state = 'veteran';
        break;
    }

    await customer.updateAppData({ state, name });
    callback(null, menu);
});

```

## Documentation

Take a look at the [API docs here](http://docs.elarian.com). For detailed info on this SDK, see the [documentation](https://elarianltd.github.io/javascript-sdk/Elarian.html).

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).
