# Output
Webpack configuration with multiple entry points.

## webpack configuration
### `output` | [doc](https://webpack.js.org/configuration/output/)
- Options affecting the output of the compilation.
- Only one output configuration is specified.

Example
```js
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
```

#### `output.path`
The output directory as an absolute path (required).

#### `output.filename`
The filename of each output file on disk.

- `[name]` is replaced by the name of the chunk (or with the id when the chunk has no name).
- `[hash]` is replaced by the hash of the compilation.
- `[chunkhash]` is replaced by the hash of the chunk.

#### `output.chunkFilename`
The filename of non-entry chunks

- `[id]` is replaced by the id of the chunk.
- `[name]` is replaced by the name of the chunk (or with the id when the chunk has no name).
- `[hash]` is replaced by the hash of the compilation.
- `[chunkhash]` is replaced by the hash of the chunk.

#### `output.library`
If set, export the bundle as library. 
Use this if you are writing a library and want to publish it as single file.

#### `output.libraryTarget`
Type of format for export the library (var, this, commonjs, commonjs2, amd, umd).

#### `output.sourceMapFilename`
The filename of the SourceMaps for the JavaScript files.

- `[file]` is replaced by the filename of the JavaScript file.
- `[id]` is replaced by the id of the chunk.
- `[hash]` is replaced by the hash of the compilation.

### plugins

#### CommonsChunkPlugin | [doc](https://webpack.js.org/plugins/commons-chunk-plugin/)
Allows the extraction of all the common modules from different bundles and creation the common bundle. If a common bundle does not exist, then it creates a new one.

Example
```js
    new webpack.lib.optimize.CommonsChunkPlugin({
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
```

#### HtmlWebpackPlugin | [doc](https://github.com/ampedandwired/html-webpack-plugin)
Simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

Example
```js
    new HtmlWebpackPlugin({
      // html template
      template: 'index.html',
      chunks: ['app', 'vendor-one'],
      inject: 'body'
    })
```

#### CleanWebpackPlugin | [doc](https://github.com/johnagan/clean-webpack-plugin)
A webpack plugin to remove/clean your build folder(s) before building.

Example
```js
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true, 
      dry: false
    })
```

## Instalation
```
npm install
```
## Build
```
npm run build
```
## Run
```
npm run start
```

## Links
- https://webpack.js.org/concepts/output/
- https://webpack.js.org/configuration/output/
- https://github.com/ampedandwired/html-webpack-plugin
- https://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html
- http://javascriptplayground.com/blog/2016/07/webpack-html-plugin/
- https://webpack.js.org/plugins/commons-chunk-plugin/
- http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/
- http://stackoverflow.com/questions/30329337/how-to-bundle-vendor-scripts-separately-and-require-them-as-needed-with-webpack
- https://github.com/webpack/docs/wiki/optimization
- https://www.npmjs.com/package/clean-webpack-plugin
- https://github.com/johnagan/clean-webpack-plugin 