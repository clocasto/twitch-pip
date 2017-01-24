const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');

const PROD = process.env.NODE_ENV === 'production';
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const APP_DIR = path.resolve(__dirname, 'browser');

console.log(chalk.red('process.env.NODE_ENV'), process.env.NODE_ENV);

const config = {
  devtool: PROD ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  cache: true,
  entry: path.join(APP_DIR, '/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.DedupePlugin(),
  ] : [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['latest', 'react', 'stage-2'],
      },
    }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
    }, {
      test: /\.css/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
};

module.exports = config;

