var webpack = require('webpack');

module.exports = {
  entry: {
    index: './app/scripts/index.js'
  },
  output:{
    path: './build',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.hbs$/, loader: 'handlebars-loader'},
      { test: /\.em$/, loader: 'emblem-loader'},
      { test: /\.coffee$/, loader: 'coffee-loader'}
    ]
  }
};
