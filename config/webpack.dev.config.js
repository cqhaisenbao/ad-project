const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const mockMiddleware = require('./mock.config');

const smp = new SpeedMeasurePlugin();

const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
            inject: 'body',
            title: 'React App',
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080',
        }),
    ],
    devtool: 'eval-source-map',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4523/mock/724740/',
                changeOrigin: true,
            },
        },
        contentBase: path.join(__dirname, '.'),
        host: '0.0.0.0',
        port: 8080,
        hot: false,
        inline: true,
        historyApiFallback: false,
        before(app) {
            const projectDir = path.resolve();
            const mockDir = './mock';
            app.use(mockMiddleware({ projectDir, mockDir }));
        },
    },
};

module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev));
