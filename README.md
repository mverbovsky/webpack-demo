## Table of Contents

- [webpack](#webpack)
  - [entry](#entry)
  - [output](#output)
  - [loaders](#loaders)
  - [plugins](#plugins)
- [Tutorial](#tutorial)
- [Alternatives](#alternatives)
    - [Task runners](#task-runners)
    - [Module bundlers](#module-bundlers)
- [Links](#links)

## webpack
- Module bundler / build system
- Configuration-based (webpack.config.js)
- It considers your assets (styles, images) to be modules themselves, that can be imported, modified, manipulated, and that ultimately can be packed into your final bundle.
- four core concepts 
  - entry
  - output
  - loaders
  - plugins
- other features
  - hot module replacement
  - bundle splitting
  - asset hashing

### entry
- entry point - starting point for creating a graph of all application's dependencies

Example
```js
module.exports = {
  entry: './app/index.js'
}
```

### output
- describes how to treat bundled code

Example
```js
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
}
```

### loaders
- loaders in webpack transform files such as .css, .html, .scss, .jpg, etc. into modules as they are added to your dependency graph
- Two main purposes.
  - Identify what files should be transformed by a certain loader. (`test` property)
  - Transform that file so that it can be added to your dependency graph (and eventually your bundle). (`use` property)

Example
```js
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
  module: {
    rules: [
        {
        test: /\.js/,
        use: 'babel-loader'
       }
    ]
  }
}
```

### plugins
-  loaders only execute transforms on a per-file basis, `plugins` are most commonly used (but not limited to) performing actions and custom functionality on "compilations" or "chunks" of your bundled modules


Example
```js
const webpack = require('webpack'); // to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
        {
        test: /\.js/,
        use: 'babel-loader'
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}
``` 

## Tutorial
1. [Getting started](1-getting-started)
2. [Entry points](2-entry-points)
3. [Output](3-output)
4. [Loaders](4-loaders)
5. [Optimalizations](5-optimalizations)

## Alternatives
#### Task runners
- [Gulp](http://gulpjs.com/)
- [Grunt](http://gruntjs.com/)
- [npm](https://www.npmjs.com/)

#### Module bundlers
- [Browserify](http://browserify.org/)
- [rollup.js](http://rollupjs.org/)
- [lasso.js](https://github.com/lasso-js/lasso)
- [jspm](http://jspm.io/)
- [Brunch](http://brunch.io/) (module bundler / task runner)

## Links
- [official site](https://webpack.js.org/)

