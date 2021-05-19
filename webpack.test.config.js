const path = require('path');

module.exports = {
  entry: './src/test/clean.spec.ts',
  output: {
    filename: 'hello.spec.js',
    path: path.resolve(__dirname, 'browser-test'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
