var webpack = require('webpack');
var AddHeadersGreaseMonkey = require('./plugin/AddHeader');


module.exports = {

    context: __dirname + '/src',
    entry: __dirname + '/src/main.browser.ts',
    output: {
        filename: "script.js"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new AddHeadersGreaseMonkey({}),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: false
        // })
    ],
    module: {
        loaders: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              loaders: [
                  'awesome-typescript-loader'
              ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}