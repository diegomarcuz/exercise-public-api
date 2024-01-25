const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BUILD_DIR } = require('./constants');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main']
    })
  ],
};
