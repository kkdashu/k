
var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    kyo: './app/scripts/kyo.js'
  },
  output:{
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: "kyo.js",
    libraryTarget: 'umd',
    library: 'K'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.hbs$/, loader: 'handlebars-loader'},
      { test: /\.em$/, loader: 'emblem-loader'},
      { test: /\.coffee$/, loader: 'coffee-loader'}
    ]
  },
  externals: {
    'jquery': 'jQuery'
  }
};
