var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['./modules/stock_entry'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;