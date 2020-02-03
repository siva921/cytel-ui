const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ['url-loader?limit=10000', 'img-loader'],
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            inject: false,
            appMountId: 'app',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
}

module.exports = (env, argv) => {
    if (!argv.hot && argv.mode === 'developement') {
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
        }
    }
    if (argv.mode === 'production') {
        config.output = {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
        }
    }
    if (argv.hot) {
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
        }
    }

    return config
}
