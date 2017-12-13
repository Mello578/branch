/**
 * Created by Mello on 13.07.2017.
 */

let webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /node_modules\/dist\/bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader"
            },
            {
							test: /\.(jpe?g|png|gif|svg)$/i,
							loaders: [
								'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
								'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
							]
            }
        ]
    },
    watch: true
};