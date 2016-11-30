// Basic webpack configuration
 
var path = require('path');

var config = {
  // one entry point
  entry: './index.js',
  // one output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
};

module.exports = config;