module.exports = {
  entry: "./entry.js",
  output:{
    path: __dirname,
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  }
};
