
var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    kyo: './src/kyo.js'
  },
  output:{
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: "kyo.js",
    libraryTarget: 'umd',
    library: 'kyo'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader'}
    ]
  },
  externals: {
    'jquery': 'jQuery'
  }
};
