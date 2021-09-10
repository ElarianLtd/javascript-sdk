# Elarian

[![NPM](https://nodei.co/npm/elarian.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/elarian)

> A framework that helps you build scalable, personalized customer engagement applications.

## Install

You can install the package from [npm](https://www.npmjs.com/package/elarian) by running: 

```bash
$ npm install elarian
```

## Usage

```javascript

// on node
const { Elarian }  = require('elarian');
/*
or in the browser
<script src="web.js"></script>
// or import { Elarian } from 'elarian/web'
*/

// ...

const elarian = new Elarian({
    apiKey: 'YOUR_API_KEY', // or authToken: 'YOUR_AUTH_TOKEN'
    orgId: 'YOUR_ORG_ID',
    appId: 'YOUR_APP_ID',
});

elarian.on('ussdSession', async (notification, customer, appData, callback) => {
    const {
        input,
        sessionId,
    } = notification;

    let {
        name,
        state = 'newbie',
    } = appData || {};

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
            name = input.text;
            menu.text = `Thank you for trying Elarian, ${name}!`;
            menu.isTerminal = true;
            await customer.sendMessage(
                { number: 'Elarian', provider: 'telco' },
                { body: { text: `Hey ${name}! Thank you for trying out Elarian` } },
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
    callback(menu, { state, name });
});

elarian
    .on('connected', () => {
        console.log('App is running!')
    })
    .on('error', (error) => {
        console.error(error);
    })
    .connect();
```

See [example](example/) for a full sample app.

## Documentation

Take a look at the [product documentation](https://developers.elarian.com/). For detailed info on this SDK, see the [reference](https://elarianltd.github.io/javascript-sdk/index.html).

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

See [SDK Spec](https://github.com/ElarianLtd/sdk-spec) for reference.

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).

## Known Issues

- `resumable` connection options prevents app from connecting
