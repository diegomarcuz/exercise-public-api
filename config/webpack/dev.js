const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BUILD_DIR } = require('./constants');

module.exports = {
  mode: 'development',
  plugins: [new ReactRefreshPlugin()],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    static: BUILD_DIR,
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 8080,
  },
};
