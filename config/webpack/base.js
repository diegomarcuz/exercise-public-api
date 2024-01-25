require('dotenv').config();

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { BUILD_DIR, IS_PROD } = require('./constants');

module.exports = {
  output: {
    path: BUILD_DIR,
    filename: IS_PROD ? '[name].[contenthash].js' : '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  
};
