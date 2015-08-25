module.exports = {
  entry: :{
   index: './app/index.js',
   list: './app/list.js'
  },
  output:{
    path: './build',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  }
};
