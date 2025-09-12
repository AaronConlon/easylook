const path = require('path');

// @ts-ignore
/* eslint-disable max-len */
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');

const { CRACO_CONSTS } = require('./scripts/craco/_craco-consts');
const cracoConfigSass = require('./scripts/craco/craco-config--sass');
const cracoBabel = require('./scripts/craco/craco-babel');
const cracoOptimization = require('./scripts/craco/craco-optimization');
const cracoPluginHtmlWebpackReplace = require('./scripts/craco/craco-plugin--html-webpack-replace'); // prettier-ignore
const cracoLoaderRaw = require('./scripts/craco/craco-loader--raw');
// for Debug
const cracoPluginDebug = require('./scripts/craco/craco-plugin--debug');
const cracoPluginIncludeMonorepo = require('./scripts/craco/craco-plugin--include-monorepo');
// const cracoPluginDisableLint = require('./scripts/craco/craco-plugin--disable-lint'); // prettier-ignore

const __IS_PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  babel: cracoBabel,
  plugins: [
    // cracoPluginDefine,
    cracoPluginIncludeMonorepo,
    // cracoPluginSw,
    cracoOptimization,
    // cracoPluginLess,
    cracoPluginHtmlWebpackReplace,
    // cracoPluginSentry,
    //
    cracoPluginDebug,
    // cracoPluginDisableLint,
    //
    cracoLoaderRaw,
    // cracoLoaderHtml,
  ],
  style: {
    modules: {
      localIdentName: CRACO_CONSTS.CSS_MODULE_LOCAL_IDENT_NAME,
    },
    sass: cracoConfigSass.style.sass,
    postcss: {
      mode: 'file',
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    configure: (webpackConfig) => {
      // ⚠️ turn off CSS conflicting order warning! (PROD ONLY)
      if (__IS_PROD__) {
        const miniCssExtractPlugin = webpackConfig.plugins.find(
          (plugin) => plugin.options && plugin.options.ignoreOrder === false,
        );
        miniCssExtractPlugin.options.ignoreOrder = true;
        webpackConfig.devtool = false;
      }

      // 重新添加一个自定义配置的 ForkTsCheckerWebpackPlugin

      // 先删除
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => !(plugin instanceof ForkTsCheckerWebpackPlugin),
      );

      // 然后再添加
      // webpackConfig.plugins.push(
      //   new ForkTsCheckerWebpackPlugin({
      //     typescript: {
      //       // ✅ 覆盖 tsconfig.json 中的配置，指定排除 node_modules
      //       configOverwrite: {
      //         exclude: ['node_modules'], // 避免类型检查时扫描 node_modules，提高性能
      //       },
      //     },
      //   }),
      // );

      webpackConfig.resolve.extensions = [
        '.h5.tsx',
        '.h5.ts',
        '.h5.jsx',
        '.h5.js',
        '.tsx',
        '.ts',
        '.js',
        '.json',
      ];

      return webpackConfig;
    },
  },
  devServer: {},
  // jest: {
  //   configure: { moduleNameMapper: { '^@(.*)$': '<rootDir>/src$1' } },
  // },
};
