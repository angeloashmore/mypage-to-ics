var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: './src/index.js',

  output: {
    path: 'dist',
    filename: 'mypage-to-ics.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      }
    })
  ]
}
