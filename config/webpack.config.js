const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('Building the app...');

const BUILD_DIR = path.resolve(__dirname, '../dist');
const APP_DIR = path.resolve(__dirname, '../src');
const NODE_MODULES_DIR = path.join(__dirname, '../node_modules');

const config = {
  entry: {
    portfolio: `${APP_DIR}/app`
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules')
    ],
    // Automatically resolve certain extensions which is what enables user sto leave
    // off the extension when importing.
    extensions: ['.js', '.jsx', '.json', '.post.css'],
    alias: {
      'react/lib/DOMProperty': 'react-dom/lib/DOMProperty'
    }
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: NODE_MODULES_DIR,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.post.css$/,
        exclude: [NODE_MODULES_DIR],
        loader: ExtractTextPlugin.extract({
          // loader should be used when the CSS is not extracted.
          fallback: 'style-loader',
          // Loaders that should be used for converting the resource to a CSS exporting modules
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './config/postcss.config.js'
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
}

module.exports = config;
