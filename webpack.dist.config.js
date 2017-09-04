module.exports = {
  context: __dirname + '/src',
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
  devtool: 'source-map',
  module: {
    loaders: {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }
  }
}