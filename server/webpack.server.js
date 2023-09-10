const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require("nodemon-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
    entry: './index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new ProvidePlugin({
            React: "react",
        }),
        new NodemonPlugin({
            script: "./server-build/index.js",
        }),
    ],
    watch: true
};