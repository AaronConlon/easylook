module.exports = {
  plugins: [
    require('postcss-viewport-unit-fallback'),
    require('postcss-color-hex-alpha'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {},
    }),
  ],
};
