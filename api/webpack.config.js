const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['npm run:dev']
    })
  ],
  module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};