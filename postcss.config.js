const functions = require('./src/js/functions');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-functions')({ functions }),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-reporter'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano'),
  ],
};
