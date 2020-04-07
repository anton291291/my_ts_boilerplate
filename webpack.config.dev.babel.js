import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        sourceMapFilename: 'bandle.js.map'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
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

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true
                }
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader'
                    /*   'sass-loader', // compiles Sass to CSS, using Node Sass by default
                    'postcss-loader' */
                ],
                sideEffects: true
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new ErrorOverlayPlugin(),
        new CleanWebpackPlugin()
    ]
};
