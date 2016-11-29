var path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
}