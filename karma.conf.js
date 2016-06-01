var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    files: [
      'spec.bundle.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-jasmine',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'spec.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
