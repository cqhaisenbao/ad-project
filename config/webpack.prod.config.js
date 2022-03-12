const path = require('path');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config.js');

const webpackConfigProd={
    mode:'production',
    plugins:[
        new CleanWebpackPlugin({
            protectWebpackAssets:true
        }),
        new HtmlWebpackPlugin({
            inject:'body',
            title:'React App',
            filename:'index.html',
            template:path.resolve(__dirname,'../src/index.html')
        })
    ]
}

module.exports = merge(webpackConfigBase,webpackConfigProd);
