import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import prettier from 'prettier';
import React from 'react';
import { extractStyle as antdExtractStyle } from '@ant-design/static-style-extract';
//
import type { ThemeConfig } from 'antd';
import {
  Col,
  Flex,
  Row,
  Button,
  Checkbox,
  Input,
  InputNumber,
  Divider,
  Menu,
  Modal,
  ConfigProvider as AntdConfigProvider,
} from 'antd';

import {
  ANTD_CONST_PROVIDER_THEME_DARK,
  ANTD_CONST_PROVIDER_THEME_LIGHT,
} from '../../uni-consts/antd-const';

// 兼容 CJS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//
//
//
//
//
//
// 自定义长量

const ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX = 'antd-for-gen';
const ANT_PROVIDER_GLOBAL_THEME_CSSVAR_REPLACE = 'uni';
const ANT_PROVIDER_GLOBAL_THEME_CSSVAR_KEY = 'global-for-gen';
const __ENTERS__ = `\n\n\n\n`;

const UNI_STYLE_CSS_VARS_ANTD_TOKEN_FILENAME =
  'by-gen-uni-style-css-vars-antd-token.scss';

const UNI_STYLE_JS_VARS_ANTD_TOKEN_FILENAME =
  'by-gen-uni-style-js-vars-antd-token.ts';

// ⚠️ 这些是要丢弃的 BLOCK，会让 var 重复
const DROP_BLOCK = [
  '.ant-input', // 和 .ant-input-css-var 重复
];

//
//
//
//
//
//
//
//
//
//
//

const prettierOptions = {
  printWidth: 80,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  semi: true,
} as any;

// 拿到所有 antd token
const extractAntdCssStr = (opts?: { isDark?: boolean }) => {
  return antdExtractStyle((node: any) => {
    return (
      <AntdConfigProvider
        theme={
          {
            ...(opts?.isDark
              ? ANTD_CONST_PROVIDER_THEME_DARK
              : ANTD_CONST_PROVIDER_THEME_LIGHT),
            cssVar: {
              // prefix: ANT_PROVIDER_GLOBAL.theme.cssVar.prefix,
              prefix: ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX,
              // key: ANT_PROVIDER_GLOBAL.theme.cssVar.key,
              key: ANT_PROVIDER_GLOBAL_THEME_CSSVAR_KEY,
            },
            hashed: false,
          } as ThemeConfig
        }
      >
        {node}
        <Modal />
        <Divider />
        <Menu />

        <Flex />
        <Flex gap="small" />
        <Flex gap="large" />
        <Flex gap="middle" />
        <Flex gap={6} />

        <Col>
          <Row />
        </Col>

        <Button />

        <Button type="primary" shape="circle" />

        <Button type="primary" shape="round">
          circle text
        </Button>

        <Button
          // type="primary"
          shape="round"
          size="small"
        >
          Small
        </Button>

        <Button
          type="primary"
          // shape="round"
          size="large"
        >
          Large
        </Button>

        <Button type="primary" shape="round" iconPosition="end">
          确定
        </Button>

        <Button color="default" variant="solid">
          Solid
        </Button>

        <Button color="default" variant="outlined">
          Outlined
        </Button>

        <Button color="default" variant="dashed">
          Dashed
        </Button>

        <Button color="default" variant="filled">
          Filled
        </Button>

        <Button color="default" variant="text">
          Text
        </Button>

        <Button color="default" variant="link">
          Link
        </Button>

        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
        <Button color="primary" variant="dashed">
          Dashed
        </Button>
        <Button color="primary" variant="filled">
          Filled
        </Button>
        <Button color="primary" variant="text">
          Text
        </Button>
        <Button color="primary" variant="link">
          Link
        </Button>

        <Button color="danger" variant="solid">
          Solid
        </Button>
        <Button color="danger" variant="outlined">
          Outlined
        </Button>
        <Button color="danger" variant="dashed">
          Dashed
        </Button>
        <Button color="danger" variant="filled">
          Filled
        </Button>
        <Button color="danger" variant="text">
          Text
        </Button>
        <Button color="danger" variant="link">
          Link
        </Button>

        <Button color="pink" variant="solid">
          Solid
        </Button>
        <Button color="pink" variant="outlined">
          Outlined
        </Button>
        <Button color="pink" variant="dashed">
          Dashed
        </Button>
        <Button color="pink" variant="filled">
          Filled
        </Button>
        <Button color="pink" variant="text">
          Text
        </Button>
        <Button color="pink" variant="link">
          Link
        </Button>

        <Button color="purple" variant="solid">
          Solid
        </Button>
        <Button color="purple" variant="outlined">
          Outlined
        </Button>
        <Button color="purple" variant="dashed">
          Dashed
        </Button>
        <Button color="purple" variant="filled">
          Filled
        </Button>
        <Button color="purple" variant="text">
          Text
        </Button>
        <Button color="purple" variant="link">
          Link
        </Button>

        <Input />
        <InputNumber />
        <Checkbox />
      </AntdConfigProvider>
    );
  });
};

const LIGHT_CSS_STR = extractAntdCssStr({});
const DARK_CSS_STR = extractAntdCssStr({ isDark: true });

// 分解 css 行
const splitCssLine = (line?: string) => {
  if (!line) return {};
  const lineKv = line.split(':');
  const k = lineKv[0]?.trim();
  const v = lineKv[1]?.trim();

  return {
    k,
    v,
  };
};

/**
 * 为 CSS 值添加特征性注释，标记其是否为纯数字或包含 px 单位，
 * 用于后续将 CSS 变量转换为 TypeScript 时进行类型分析。
 *
 * @param v - CSS 值字符串，例如 "16px"
 * @returns 加注释的字符串，例如 `"16px; // isNumber isPx"`
 *
 * @example "16px; --> "16px; // isNumber isPx"
 */
const addUnitCommentToValue = (v: string) => {
  let comment = '';

  // 要没有括号的
  const isNumber = !Number.isNaN(parseInt(v, 10)) && !v.includes('(');
  const isPx = v.includes('px') && !v.includes('(');

  if (isNumber) comment += `isNumber`;
  if (isPx) comment += ` isPx`;

  // for SCSS
  // const netxComment = comment ? ` // ${comment}` : '';
  // return v?.includes(';') ? `${v}${netxComment}` : `${v};${netxComment}`;

  // for CSS
  const netxComment = comment ? `/* ${comment} */` : '';
  return v?.includes(';') ? `${v}${netxComment}` : `${v};${netxComment}`;
};

// 输出参数，只需要 LIGHT 一次就行
const fmtToNormalCssVar = (opts: { cssStr: string }) => {
  let NORMAL_CSS_VARS = '';

  Array.from(
    opts.cssStr.matchAll(/\.global-for-gen(\.ant-.*?)?\{([^}]*)}/g),
  ).map((item) => {
    const BLOCK_NAME = item[1] ?? '__global__';
    const CLASS_NAME = ':root, page';
    const CSS_CONTENT = item[2]?.replaceAll('--antd-for', '\n  --antd-for');

    if (DROP_BLOCK.includes(BLOCK_NAME)) {
      console.log('NORMAL_CSS_VARS BLOCK_NAME', BLOCK_NAME);
      return;
    }

    // 拿到这样的东西
    // console.log('CSS_CONTENT', CSS_CONTENT);
    // --antd-for-gen-transfer-list-width:180px;
    // --antd-for-gen-transfer-list-height:200px;
    // --antd-for-gen-transfer-list-width-lg:250px;

    let NEXT_CONTENT = '';

    CSS_CONTENT.split('\n')?.forEach((line) => {
      const { k, v } = splitCssLine(line);

      // 不要重复 k, 要拿替换过的 k 对比，不然永远找不到的
      // if (k && NORMAL_CSS_VARS.includes(k)) {
      //   console.log('k -------------------');
      //   console.log(k);
      //
      //   return;
      // }

      // 不要拿任何颜色
      if (v && !(v?.startsWith('#') || v?.startsWith('rgb'))) {
        // js css 共用
        NEXT_CONTENT += `\n${k}: ${addUnitCommentToValue(v)}`;
      }
    });

    NORMAL_CSS_VARS += `/* ---- ${BLOCK_NAME} (NORMAL) ---- */${CLASS_NAME} {${NEXT_CONTENT}\n}\n\n`;
  });

  NORMAL_CSS_VARS = NORMAL_CSS_VARS.replaceAll(
    ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX,
    ANT_PROVIDER_GLOBAL_THEME_CSSVAR_REPLACE,
  );

  return NORMAL_CSS_VARS;
};

/**
 * 将传入的 CSS 字符串中 `.global-for-gen` 块内的颜色类 CSS 变量提取并格式化，
 * 可选输出暗色模式和绝对颜色变量，最终返回结构化 CSS 内容字符串。
 *
 * 支持的颜色值：以 `#` 或 `rgb` 开头的变量值。
 *
 * @param opts - 配置项
 * @param opts.cssStr - 输入的原始 CSS 字符串，包含 `.global-for-gen{}` 区块
 * @param opts.isDark - 是否为暗色主题，默认为 false。若为 true，则输出 `:root.theme-dark` 样式块
 * @param opts.isAbs - 是否输出绝对颜色变量，变量名将添加 `-abs-for-light` / `-abs-for-dark` 后缀
 *
 * @returns 格式化后的 CSS 字符串，包含可选注释信息。
 *
 * @example
 * const css = `
 *   .global-for-gen {
 *     --antd-for-gen-bg-color: #ffffff;
 *     --antd-for-gen-border-color: rgb(0, 0, 0);
 *   }
 * `;
 *
 * const result = fmtColorToAbsColor({ cssStr: css, isDark: true, isAbs: true });
 * console.log(result);
 * // 输出：
 * // /*__global__*\/:root.theme-dark, page.theme-dark {
 * //   --antd-for-gen-abs-for-dark-bg-color: #ffffff; // isNumber isHex
 * //   --antd-for-gen-abs-for-dark-border-color: rgb(0, 0, 0); // isRgb
 * // }
 */
const fmtColorToAbsColor = (opts: {
  cssStr: string;
  isDark?: boolean;
  isAbs?: boolean;
}) => {
  let ABS_CSS_VARS = '';

  Array.from(
    opts.cssStr.matchAll(/\.global-for-gen(\.ant-.*?)?\{([^}]*)}/g),
  ).map((item) => {
    const BLOCK_NAME = item[1] ?? '__global__';
    const CLASS_NAME = ':root, page';
    const CSS_CONTENT = item[2]?.replaceAll('--antd-for', '\n  --antd-for');

    if (DROP_BLOCK.includes(BLOCK_NAME)) {
      console.log('ABS_CSS_VARS BLOCK_NAME', BLOCK_NAME);
      return;
    }

    // 拿到这样的东西
    // console.log('CSS_CONTENT', CSS_CONTENT);
    // --antd-for-gen-transfer-list-width:180px;
    // --antd-for-gen-transfer-list-height:200px;
    // --antd-for-gen-transfer-list-width-lg:250px;

    let NEXT_CONTENT = '';

    CSS_CONTENT.split('\n')?.forEach((line) => {
      const { k = '', v = '' } = splitCssLine(line);

      const absK = `${k?.replace(
        ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX,
        `${ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX}-abs`,
      )}-for-${opts.isDark ? 'dark' : 'light'}`;

      // 只处理任何颜色

      if (v && Boolean(v?.startsWith('#') || v?.startsWith('rgb'))) {
        if (opts.isAbs) {
          // 插入 abs 颜色
          // if(!opts.isDark)
          NEXT_CONTENT += `${absK}: ${addUnitCommentToValue(v)}`;
        } else {
          // NEXT_CONTENT += `\n${k}: ${v};`;
          NEXT_CONTENT += `\n${k}: ${addUnitCommentToValue(v)}`;
        }
      }
    });

    ABS_CSS_VARS += `/* ---- ${BLOCK_NAME} (ABS) ---- */${CLASS_NAME} {${NEXT_CONTENT}\n}\n\n`;
  });

  ABS_CSS_VARS = ABS_CSS_VARS.replaceAll(
    ANT_PROVIDER_GLOBAL_THEME_CSSVAR_PREFIX,
    ANT_PROVIDER_GLOBAL_THEME_CSSVAR_REPLACE,
  );

  return ABS_CSS_VARS;
};

const normalCssStr = fmtToNormalCssVar({ cssStr: LIGHT_CSS_STR });

// 停用 Auto
// const colorAuto__LightCssStr = fmtColorToAbsColor({ cssStr: LIGHT_CSS_STR });
// const colorAuto__LightCssStr = '';
// const colorAuto__DarkCssStr = fmtColorToAbsColor({
//   cssStr: DARK_CSS_STR,
//   isDark: true,
// });
// const colorAuto__DarkCssStr = '';

const colorAbs__LightCssStr = fmtColorToAbsColor({
  cssStr: LIGHT_CSS_STR,
  isAbs: true,
});

const colorAbs__DarkCssStr = fmtColorToAbsColor({
  cssStr: DARK_CSS_STR,
  isDark: true,
  isAbs: true,
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 开始处理 fs 写入

(async () => {
  const ALL_CSS_STR =
    normalCssStr +
    __ENTERS__ +
    Array.from({ length: 100 }, () => `/* 🔆️ LIGHT */\n`).join('') +
    __ENTERS__ +
    colorAbs__LightCssStr +
    __ENTERS__ +
    Array.from({ length: 100 }, () => `/* 🌙 DARK */\n`).join('') +
    __ENTERS__ +
    colorAbs__DarkCssStr;

  fs.writeFileSync(
    path.resolve(__dirname, UNI_STYLE_CSS_VARS_ANTD_TOKEN_FILENAME),
    // ALL_CSS_STR,
    // @ts-ignore
    await new Promise((resolve) => {
      resolve(
        prettier.format(ALL_CSS_STR, {
          ...prettierOptions,
          parser: 'css',
        }),
      );
    }),
  );
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // TS

  // 不要重复 key
  // const LIGHT_TS_STR = `${normalCssStr}${
  //   __ENTERS__
  //   //
  //   // }${colorAuto__LightCssStr}${
  //   //   __ENTERS__
  //   //
  //   // `${colorAuto__DarkCssStr}` +
  //   // __ENTERS__ +
  //   //
  // }${colorAbs__LightCssStr}${
  //   __ENTERS__
  //   //
  // }${colorAbs__DarkCssStr}`;

  // const DARK_TS_STR = colorAuto__DarkCssStr;
  // const DARK_TS_STR = '';
  const fmtCssToJs = (str: string) => {
    return (
      str
        .replaceAll(':root,', '')
        .replaceAll('page {', '')
        .replaceAll(':root.theme-dark,', '')
        .replaceAll('page.theme-dark {', '')
        .replaceAll('\\', '\\u')
        .replaceAll('(ABS) ---- */', '(ABS) ---- */\n') // 只有 abs 需要换行
        // .replaceAll('*/', '*/\n') // 如果 for css 就关闭
        // .replaceAll('\\/*', '\n\\/*')
        .replaceAll('}', '')
        .replaceAll(
          `--${ANT_PROVIDER_GLOBAL_THEME_CSSVAR_REPLACE}`,
          `'--${ANT_PROVIDER_GLOBAL_THEME_CSSVAR_REPLACE}`,
        )
        .replaceAll(': ', `': \``)
        .replaceAll(';', `\`,`)
    );
  };

  // 只保留一个 var 不区分 LIGHT 和 DARK
  const ALL_TS_STR =
    // `export const UNI_STYLE_TOKEN = {${fmtCssToJs(LIGHT_TS_STR)}}` + `\n\n`;
    `export const UNI_STYLE_CSS_VARS_ANTD_TOKEN = {${fmtCssToJs(ALL_CSS_STR)}}` +
    `\n\n`;

  // 这里检查是否有注释 // isNumber isPx 并做对应替换
  const FMT_TS_STR = await new Promise((resolve) => {
    resolve(
      prettier
        .format(ALL_TS_STR, {
          ...prettierOptions,
          parser: 'typescript',
        })
        .then((data) => {
          return data
            ?.split('\n')
            ?.map((line?: string): string => {
              if (!line) return '';
              if (!line?.includes('--')) return line;

              const lineArr = line?.split(':');
              if (!lineArr) return line;

              const v = lineArr?.[1]?.trim();

              // for SCSS
              // const vArr = v?.split(', //');

              // for CSS
              // [
              //   "  '--uni-tabs-title-font-size'",
              //   ' `14px` /* isNumber isPx */,'
              // ]
              const vArr = v?.match(/^(.*?)\/\*\s*(.*?)\s*\*\//);

              if (!vArr) return line;

              const vValue = vArr?.[1]?.trim();
              const vComment = vArr?.[2]?.trim();

              if (line && vComment && vValue) {
                if (vComment.includes('isNumber')) {
                  // @ts-ignore

                  // 拿到 number
                  const numValue = parseInt(
                    vValue?.replaceAll('`', ''),
                    10,
                  ).toString();

                  // 把 css 注释转成 js 注释,并且去掉 `
                  const lineToJsComment = line
                    ?.replace('` /*', '`, //')
                    ?.replace('*/,', '');

                  // console.log('        line:', JSON.stringify(line));
                  // console.log('      vValue:', JSON.stringify(vValue));
                  // console.log('    numValue:', JSON.stringify(numValue));
                  // console.log('lineToNumber:', JSON.stringify(lineToNumber));
                  // console.log(' ');
                  // console.log(' ');

                  return lineToJsComment?.replace(vValue, numValue);
                }
              }

              return line;
            })
            .join('\n');
        }),
    );
  });

  //
  // // LIGHT/DARK 同在一个文件内
  fs.writeFileSync(
    path.resolve(__dirname, UNI_STYLE_JS_VARS_ANTD_TOKEN_FILENAME),
    await new Promise((resolve) => {
      resolve(
        prettier.format(FMT_TS_STR as string, {
          ...prettierOptions,
          parser: 'typescript',
        }),
      );
    }),
  );

  //
  // // RAW CSS
  // fs.writeFileSync(
  //   path.resolve(__dirname, 'by-gen-uni-raw-antd-token.css'),
  //   `
  //   ${LIGHT_CSS_STR}
  //    `,
  // );
})();
