'use strict';

module.exports = {
  entry: {
    'app.bundle': './app/entry.js',
    'spec.bundle': './spec/entry.js'
  },
  output: {
    path: './bin',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};
