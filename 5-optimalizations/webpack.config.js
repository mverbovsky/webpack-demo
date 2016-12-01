/*global require, module, __dirname:true*/
/*eslint no-undef: "error"*/

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app/index.js',
    pageOne: './app/page-1/index.js',
    pageTwo: './app/page-2/index.js',
    pageThree: './app/page-3/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['app', 'vendors'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './app/page-1/index.html',
      filename: 'pageOne.html',
      chunks: ['pageOne', 'vendors'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './app/page-2/index.html',
      filename: 'pageTwo.html',
      chunks: ['pageTwo', 'vendors'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './app/page-3/index.html',
      filename: 'pageThree.html',
      chunks: ['pageThree', 'vendors'],
      inject: 'body'
    }),
    new CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.bundle.[chunkhash].js',
      chunks: ['app', 'pageOne', 'pageTwo', 'pageThree'],
      minChunks: 2,
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin('bundel.css'),
    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    // new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    // new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    // new webpack.optimize.MinChunkSizePlugin({
    //   minChunkSize: 51200, // ~50kb
    // }),

    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      minimize: false,
      debug: false,
      mangle: false,
      options: {
        // pass stuff to the loader
      }
    }),

    // This plugin minifies all the Javascript code of the final bundle
    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // Suppress uglification warnings
      },
      sourceMap: true
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      /*
      // http://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: false } }
        ],
      },
      */
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: 'url-loader',
        query: {
          limit: 10000,
        }
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: 'eslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9090
  },
  devtool: 'source-map',
}

