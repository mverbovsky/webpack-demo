var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "app"),
  entry: {
    app: './index.js',
    pageOne: './page-1/index.js',
    pageTwo: './page-2/index.js',
    pageThree: './page-3/index.js'
  },
  /*
  https://webpack.js.org/concepts/output/
  https://webpack.js.org/configuration/output/

  - Options affecting the output of the compilation
  - Only one output configuration is specified.

  */
  output: {
    /*
    The filename of non-entry chunks as a relative path inside the output.path directory.
    [id] is replaced by the id of the chunk.
    [name] is replaced by the name of the chunk (or with the id when the chunk has no name).
    [hash] is replaced by the hash of the compilation.
    [chunkhash] is replaced by the hash of the chunk.
    */
    // chunkFilename: string,

    /*
    Specifies the name of each output file on disk
    [name] is replaced by the name of the chunk (or with the id when the chunk has no name).
    [hash] is replaced by the hash of the compilation.
    [chunkhash] is replaced by the hash of the chunk.
    */
    filename: '[chunkhash].[name].js',

    /*
    The output directory as an absolute path (required).
    */
    path: path.resolve(__dirname, "dist")

    /*
    If set, export the bundle as library. 
    Use this if you are writing a library and want to publish it as single file.
    */
    // library: string,

    /*
    Which format to export the library
    */
    // libraryTarget: var|this|commonjs|commonjs2|amd|umd,

    /*
    The filename of the SourceMaps for the JavaScript files. They are inside the output.path directory.
    [file] is replaced by the filename of the JavaScript file.
    [id] is replaced by the id of the chunk.
    [hash] is replaced by the hash of the compilation.
    */
    // sourceMapFilename: string
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9090
  },
  plugins: [
    /*
    https://github.com/ampedandwired/html-webpack-plugin
    https://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html
    http://javascriptplayground.com/blog/2016/07/webpack-html-plugin/

    Simplifies creation of HTML files to serve your webpack bundles. This is especially
    useful for webpack bundles that include a hash in the filename which changes 
    every compilation. You can either let the plugin generate an HTML file for you, 
    supply your own template using lodash templates or use your own loader
    */
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

    // https://webpack.js.org/plugins/commons-chunk-plugin/
    // http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/
    // http://stackoverflow.com/questions/30329337/how-to-bundle-vendor-scripts-separately-and-require-them-as-needed-with-webpack
    // https://github.com/webpack/docs/wiki/optimization
    new CommonsChunkPlugin({
      // The chunk name of the commons chunk
      name: 'vendor-one',
      // The filename template for the commons chunk
      filename: '[chunkhash].vendors.bundle.js',
      // Select the source chunks by chunk names. The chunk must be a child of the commons chunk.
      chunks: ['app', 'pageOne'],

      // The minimum number of chunks which need to contain a module before it's moved into the commons chunk
      // Modules must be shared between 3 entries
      // minChunks: 3,

      // If true all children of the commons chunk are selected
      // children: true|false,


      // async: true|false|string

      // minSize: number
    }),
    new CommonsChunkPlugin({
      name: 'vendor-two',
      chunks: ['pageTwo', 'pageThree']
    }),
    // https://www.npmjs.com/package/clean-webpack-plugin
    // https://github.com/johnagan/clean-webpack-plugin    
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true, 
      dry: false
    })
  ],
}

