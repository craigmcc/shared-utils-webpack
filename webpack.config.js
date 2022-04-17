const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    mode: 'development', // TODO
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|js)x?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
/*
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
*/
    output: {
        clean: true,
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "package.json",    to: "dist/package.json" },
                { from: "LICENSE",         to: "dist/LICENSE" },
                { from: "README.md",       to: "dist/README.md" },

            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};
