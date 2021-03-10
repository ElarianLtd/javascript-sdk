# Elarian

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
const { Elarian }  = require('elarian');
/*
or in the browser
<script src="dist/elarian.min.js"></script>
const { Elarian } = ElarianSDK;
*/

// ...

const client = new Elarian({
    apiKey: 'YOUR_API_KEY', // or authToken: 'YOUR_AUTH_TOKEN'
    orgId: 'YOUR_ORG_ID',
    appId: 'YOUR_APP_ID',
});

client.on('ussdSession', async ({ notification, customer }, callback) => {
    const {
        input,
        appData,
        sessionId,
    } = notification;

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

client
    .connect()
    .on('connected', () => {
        console.log('App is running!')
    })
    .on('error', (error) => {
        console.error(error);
    });
```

See [example](example/) for a full sample app.

## Documentation

Take a look at the [API docs here](http://docs.elarian.com). For detailed info on this SDK, see the [documentation](https://elarianltd.github.io/javascript-sdk/Elarian.html).

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

See [SDK Spec](https://github.com/ElarianLtd/sdk-spec) for reference.

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ElarianLtd/javascript-sdk/issues).
