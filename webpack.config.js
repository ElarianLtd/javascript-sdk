const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './lib/index.web.js',
    output: {
        path: path.join(__dirname),
        filename: 'web.js',
        library: {
            type: 'umd',
        },
    },
    resolve: {
        fallback: {
            buffer: false,
        },
    },
};
