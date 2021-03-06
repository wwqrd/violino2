module.exports = {
  entry: './app/main.js',
  output: {
    path: './public',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
