const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({})],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
