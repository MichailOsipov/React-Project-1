'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
		path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
			/*{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel-loader', 'eslint-loader']
			},*/
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
	devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/public'
	},
	eslint: {
		configFile: './.eslintrc'
	},
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};