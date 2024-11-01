const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        output:
        {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, '../dist')
        },
        plugins:
        [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'static' }
                ]
            }),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: true
            })
        ]
    }
)