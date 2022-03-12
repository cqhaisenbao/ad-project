const path = require('path');

const webpackBaseConfig = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[fullhase:4].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.js[x]/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts[x]/,
                use: 'ts-loader',
            },
            {
                test: /\.(sc|c)ss/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

module.exports = webpackBaseConfig;
