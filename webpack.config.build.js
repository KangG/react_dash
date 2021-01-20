const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        chunkFilename: 'static/js/[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  "css-loader"
                ]
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader"
              ]
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif|otf)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]',
                    publicPath: './dist/',
                    outputPath: './dist/',
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            WEBPACK_CONFIG_API_URL: JSON.stringify("http://api.rtrod.org:5555")
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.json', 'css'],
        alias: {
            components: path.resolve(__dirname, './src/components'),
            views: path.resolve(__dirname, './src/views'),
            containers: path.resolve(__dirname, './src/containers'),
            samples: path.resolve(__dirname, './src/samples'),
            src: path.resolve(__dirname, './src'),
        }
    }
};