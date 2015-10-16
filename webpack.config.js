var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var customMarkerWithLabelPath = path.join(__dirname,
  'node_modules',
  'marker-animate-unobtrusive',
  'vendor',
  'markerwithlabel.terikon.js');

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
      { test: /\.css$/, loader: 'style!css' },
      // webfont
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff(\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
      // custom markerwithlabel
      { test: customMarkerWithLabelPath, loader: 'exports?MarkerWithLabel' }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      MarkerWithLabel: customMarkerWithLabelPath
    },
    extensions: ['', '.js', '.jsx', 'es6'],
    moduleDirectories: [
      'src',
      'node_modules'
    ]
  },
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true })
  ]
};