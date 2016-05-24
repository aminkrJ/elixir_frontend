module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};