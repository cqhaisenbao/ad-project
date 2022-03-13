const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigProd = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
            protectWebpackAssets: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:4].css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'React App',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
        }),
    ],
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
