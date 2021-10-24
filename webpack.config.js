const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const obfuscator = require('webpack-obfuscator');



module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new obfuscator ({
        rotateStringArray: true,
        splitStrings: true,
    })
  ],
};
