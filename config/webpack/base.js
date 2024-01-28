require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');
const { BUILD_DIR, IS_PROD } = require('./constants');

module.exports = {
  output: {
    path: BUILD_DIR,
    filename: IS_PROD ? '[name].[contenthash].js' : '[name].js',
    publicPath: process.env.PUBLIC_PATH,
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new EnvironmentPlugin(['API_URL', 'AUTH_TOKEN']),
  ],
};
