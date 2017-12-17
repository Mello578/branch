/**
 * Created by Mello on 13.07.2017.
 */

let webpack = require('webpack');

module.exports = {
	  resolve: {
			extensions: ['.js', '.jsx']
		},
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
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
							loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
								loader: 'image-webpack-loader',
								query: {
									mozjpeg: {
										progressive: true,
									},
									gifsicle: {
										interlaced: false,
									},
									optipng: {
										optimizationLevel: 7,
									},
									pngquant: {
										quality: '75-90',
										speed: 3,
									},
								},
							}],
							exclude: /node_modules/,
							include: __dirname,
            }
        ]
    },
    watch: true
};