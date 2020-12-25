var path = require('path');

module.exports = {
  mode: 'none',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'pretty_module.js',
    path: path.resolve(__dirname, 'dist'),
    library: "pretty_module",
    libraryTarget: "umd",
    environment: {
      arrowFunction: false,
      const: false,
    }
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          }
      ]
  },
};