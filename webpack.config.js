const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');
const path = require('path');
const MINICSSSEXXTRACTPLUGIN = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',
                    
                }
            },

            {
                test: /\.scss$/,
                use: [
                    { loader: MINICSSSEXXTRACTPLUGIN.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'postcss-loader' }
                ]
            },

            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/img/'
                        }
                    }
                ]
            }
            
        ]
    },

    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: './src/index.html'
        }),

        new MINICSSSEXXTRACTPLUGIN({
            filename: 'bundle.css'
        })
    ]
}