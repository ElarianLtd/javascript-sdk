const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './lib/index.web.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'elarian.min.js',
        libraryTarget: 'umd',
        library: 'ElarianSDK',
    },
};
