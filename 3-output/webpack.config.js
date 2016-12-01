// webpack configuration
var path = require('path');

var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    pageOne: './page-1/index.js',
    pageTwo: './page-2/index.js',
    pageThree: './page-3/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['app', 'vendor-one'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-1/index.html',
      filename: 'pageOne.html',
      chunks: ['pageOne', 'vendor-one'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-2/index.html',
      filename: 'pageTwo.html',
      chunks: ['pageTwo', 'vendor-two'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-3/index.html',
      filename: 'pageThree.html',
      chunks: ['pageThree', 'vendor-two'],
      inject: 'body'
    }),
    new CommonsChunkPlugin({
      name: 'vendor-one',
      filename: '[chunkhash].vendors.bundle.js',
      chunks: ['app', 'pageOne'],
    }),
    new CommonsChunkPlugin({
      name: 'vendor-two',
      chunks: ['pageTwo', 'pageThree']
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true, 
      dry: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9090
  }
};

module.exports = config;

