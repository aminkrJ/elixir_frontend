module.exports = {
  entry: './app/entry.js',
  output: {
    path: './bin',
    filename: 'bundle.js'
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
