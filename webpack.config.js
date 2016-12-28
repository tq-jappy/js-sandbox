var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff(\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js'],
    moduleDirectories: [
      'src',
      'node_modules'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "Promise": "es6-promise"
    }),
    new LiveReloadPlugin({ appendScriptTag: true })
  ]
};