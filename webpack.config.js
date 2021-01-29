const path = require('path');

module.exports = {
  entry: './src/bindings/bindings.ts',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bindings.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2",
  },
};
