var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#context
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname, "app"),
  /*
   https://webpack.js.org/configuration/entry-context/#entry
  
   The point or points to enter the application. At this point the application starts executing. If an array is passed all items will be executed.
  
   A dynamically loaded module is not an entry point.
  
   Simple rule: 
     - one entry point per HTML page. 
     - SPA: one entry point, 
     - MPA: multiple entry points.
  
    Examples:
    
    entry: "./app/entry", // string | object | array
    entry: ["./app/entry1", "./app/entry2"],
    entry: {
      a: "./app/entry-a",
      b: ["./app/entry-b1", "./app/entry-b2"]
    }
  */
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

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9090
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
}

