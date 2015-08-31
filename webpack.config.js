var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    index: './app/scripts/index.js'
  },
  output:{
    path: path.join(__dirname, 'app/lib'),
    publicPath: 'app/',
    filename: "bundle.js"
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
