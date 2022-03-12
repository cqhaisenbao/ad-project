const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const webpackConfigBase = require('./webpack.base.config.js');

const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  // 热更新插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
            inject: 'body',
            title: 'React App',
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:8080`,
        }),
    ],
    devtool: 'eval-source-map',
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
