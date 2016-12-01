# Output
Webpack configuration with different loaders.

## webpack configuration

### Modules | [doc](https://webpack.js.org/configuration/module/)
These options determine how the different types of modules within a project will be treated.

#### javascript
```js
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
```

#### css
```js
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader' 
        ],
      },
```

#### images
```js
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: 'url-loader',
        options: {
          limit: 10000,
        }
      }
```      

#### eslint
```js
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: 'eslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
```            

### plugins

#### ExtractTextPlugin | [doc](https://github.com/webpack/extract-text-webpack-plugin)

```js
      new ExtractTextPlugin('bundel.css'),
```
```js
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
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
- https://webpack.js.org/concepts/loaders/
- https://webpack.js.org/configuration/module/
- https://webpack.js.org/concepts/modules/
- https://webpack.js.org/concepts/module-resolution/
- http://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader