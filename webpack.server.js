const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'react-redux': (process.env.NODE_ENV = 'development'
                ? 'react-redux/lib'
                : 'react-redux'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_moduls/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
};
