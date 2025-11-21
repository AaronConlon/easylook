import _ from 'lodash';
import { defineConfig, loadEnv, mergeRsbuildConfig } from '@rsbuild/core';
// @ts-ignore
import type { ToolsRspackConfig } from '@rsbuild/core/dist-types/types/config';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginSass } from '@rsbuild/plugin-sass';
// import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';
import { codeInspectorPlugin as pluginCodeInspector } from 'code-inspector-plugin';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

import { buildInfo } from './configs/rsbuild-configs/rsbuild-buildinfo';
import { sourceMap } from './configs/rsbuild-configs/rsbuild-output-source-map';

const rspackConfig: ToolsRspackConfig = {
  plugins: [
    pluginCodeInspector({
      bundler: 'rspack',
      hideConsole: true,
      // hotKeys: ['shiftKey', 'altKey'], // alt
      // hotKeys: ['shiftKey', 'ctrlKey'], // opt
      // hotKeys: ['shiftKey', 'metaKey'], // ctrl
      ip: true,
      hideDomPathAttr: true,
    }),
    process.env.RSDOCTOR === 'true'
      ? new RsdoctorRspackPlugin({
          port: 3456,
          output: {
            reportDir: '.rsbuild/rsdoctor/report',
          },
        })
      : undefined,
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      },
      {
        test: /(skeleton|_splash)\.html$/i,
        loader: 'raw-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      // KB
      maxSize: 190 * 1000,
    },
  },
};

const rsbuildConfig = defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        api: 'legacy',
        implementation: require.resolve('sass-embedded'),
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import'],
        },
      },
    }),
    pluginSvgr({ mixedImport: true }),
    pluginEslint({
      enable: true,
      eslintPluginOptions: {
        cwd: __dirname,
        configType: 'flat', // configType: 'flat',
      },
    }),
    process.env.SSL === 'true' ? pluginBasicSsl() : undefined,
  ],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  },
  dev: {
    progressBar: true,
  },
  source: {
    include: [
      /[\\/]node_modules[\\/](uuid|super-regex|immer|react-helmet-async)/,
      /@react-spring/,
    ],
  },
  html: {
    template: './public/index.html',
    templateParameters(defaultValue) {
      return {
        ...defaultValue,
        __AUTHOR_PLACEHOLDER__: buildInfo.AUTHOR,
        __APP_NAME__: process.env['REACT_APP_NAME'],
      };
    },
    tags: (defaultValue) => {
      return [
        ...defaultValue,
        {
          tag: 'script',
          attrs: {
            id: 'buildinfo',
            type: 'application/json',
          },
          children: JSON.stringify(
            _.omit(buildInfo, ['PKG_NAME', 'AUTHOR', 'NODE_ENV']),
          ),
        },
      ];
    },
  },
  output: {
    // minify: false,
    assetPrefix: process.env.PUBLIC_URL,
    polyfill: 'entry',
    distPath: {
      root: 'build',
    },
    cssModules: {
      localIdentName: '[local]--[hash:base64:6]',
    },
    dataUriLimit: 0, // 禁用静态资源内联
    legalComments: 'none', // 不输出 LICENSE.txt
  },
  resolve: {},

  //
  //
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
      // strategy: 'split-by-module',
    },
    removeMomentLocale: true,
  },
  //
  //
  //
  //
  tools: {
    rspack: rspackConfig,
  },
});

const { publicVars, rawPublicVars, filePaths } = loadEnv({
  prefixes: ['REACT_APP_'],
});

// 定义 env 必须存在的 key
const requiredKeys = ['REACT_APP_NAME'];

const publicVarsStr = JSON.stringify(publicVars);
const envFilename = filePaths[filePaths.length - 1];

const missingKeys = requiredKeys.filter(
  (key) => !publicVarsStr.includes(`.${key}"`),
);

if (missingKeys.length > 0) {
  console.error(
    `\n❌ Missing Env Key (envFile: ${envFilename})\n${missingKeys
      .map((k) => `   - ${k}`)
      .join('\n')}\n \n`,
  );

  process.exit(1);
}

const nextPublicVars = {
  ...publicVars,
  // // 避免 PUBLIC_URL 没有值被 CI 吞掉
  'import.meta.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
  'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
};

// console.log('---- nextPublicVars---- ');
// console.log(nextPublicVars);

export default mergeRsbuildConfig(
  {
    output: {
      sourceMap,
    },
    source: {
      define: nextPublicVars,
      transformImport: [
        {
          libraryName: 'lodash',
          customName: 'lodash/{{ member }}',
        },
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ],
    },
  },
  rsbuildConfig,
);
