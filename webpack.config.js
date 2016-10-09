const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './scripts/app'
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  output: {
    filename: './build.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
        exclude: '/node_modules$/'
      }
    ],
  }
}