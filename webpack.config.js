module.exports = {
  entry: './app/main.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
