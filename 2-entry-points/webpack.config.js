// Webpack configuration
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  // https://webpack.js.org/configuration/entry-context/#context
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname, "src"),
  // https://webpack.js.org/configuration/entry-context/#entry
  // The point or points to enter the application. At this point the application starts executing. If an array is passed all items will be executed.
  entry: {
    app: './index.js',
    pageOne: './page-1/index.js',
    pageTwo: './page-2/index.js',
    pageThree: './page-3/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['app'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-1/index.html',
      filename: 'pageOne.html',
      chunks: ['pageOne'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-2/index.html',
      filename: 'pageTwo.html',
      chunks: ['pageTwo'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './page-3/index.html',
      filename: 'pageThree.html',
      chunks: ['pageThree'],
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9090
  }
};

module.exports = config;