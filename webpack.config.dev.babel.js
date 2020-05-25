import path from 'path';

import { SourceMapDevToolPlugin } from 'webpack';
import merge from 'webpack-merge';

import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';

const CommonConfig = require('./webpack.config.common.babel');

const DevConfig = merge(CommonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true,
        progress: true,
        hot: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: true,
            modules: true,
            reasons: false,
            children: false,
            errors: true,
            errorDetails: true,
            warnings: false,
            publicPath: false
        }
    },
    plugins: [new ErrorOverlayPlugin()]
});

module.exports = new Promise((resolve, reject) => {
    resolve(DevConfig);
});
