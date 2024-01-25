const path = require('path');

module.exports = {
  BUILD_DIR: path.resolve(__dirname, '../../build'),
  IS_PROD: process.env.NODE_ENV === 'production',
};
