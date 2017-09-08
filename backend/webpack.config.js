var path = require("path");
var webpack = require("webpack");

var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'dist'),
}

var config = {
  entry: {
    'server': PATHS.entryPoint
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      include: /\.js$/,
    })
  ],
  module: {
    exprContextCritical: false,
    loaders: [{
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
      query: {
        declaration: false,
      }
    }]
  }
}

module.exports = config;