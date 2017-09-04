var path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: ['', '.js', 'jsx', 'json'],
    alias: {
      lib: path.resolve(__dirname, 'client/src/lib'),
      actions: path.resolve(__dirname, 'client/src/actions'),
      constants: path.resolve(__dirname, 'client/src/constants')
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}