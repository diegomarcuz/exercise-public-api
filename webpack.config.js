const { merge } = require('webpack-merge');

const base = require('./config/webpack/base');
const dev = require('./config/webpack/dev');
const prod = require('./config/webpack/prod');

const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd ? merge(base, prod) : merge(base, dev);
