/** @type {import('./lib/types').Configuration} */
module.exports = {
  // 类型检查 + 自动修复 TS/JS 文件
  '*.{ts,tsx,js,jsx}': [
    () => 'tsc --project tsconfig.json --noEmit --strict',
    'eslint --fix', // 自动修复 ESLint 问题
    'prettier --write', // 格式化
  ],

  // 其他格式化文件
  '*.{json,md,less,sass,scss,css}': ['prettier --write'],
};
