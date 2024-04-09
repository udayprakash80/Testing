module.exports = function (config){
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {
      '*.js': 'coverage'
    },
    files: ['*.js', '*.spec.js'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
    reporters: ['dots', 'coverage'],
    colors: true,
    singleRun: true,
    browsers: ['ChromeHeadless'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  })
}
