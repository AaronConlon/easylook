/* eslint-disable max-len */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const __ROOT_DIR__ = path.resolve(__dirname, '../..');


const DOTENV_FILE = `${__ROOT_DIR__}/packages/app-website/.env`;
const DOTENV_CONTENT = fs.readFileSync(DOTENV_FILE, 'utf8');

console.log('');
console.log('');
console.log('DOTENV_FILE:', DOTENV_FILE);
console.log('');
console.log('');

let dotenvVariables = '';

const argv = process.argv

console.log('argv:', argv);

const args = process.argv.slice(2); // 移除前两个不相关的参数（node 路径和脚本路径）

let repoName = null;
let secretName = null; // 如果你需要解析更多参数，可以继续添加

for (let i = 0; i < args.length; i++) {
  // 检查是否是 --repo 标志
  if (args[i] === '--repo') {
    // 确保下一个参数存在，并且不是另一个标志
    if (i + 1 < args.length && !args[i + 1].startsWith('-')) {
      repoName = args[i + 1];
      break; // 找到后就可以跳出循环
    }
  }
}

//
//
//
// 01 sync `.env`
DOTENV_CONTENT.split('\n').forEach((line) => {
  if (!line || /^(#|\n\r\s)/.test(line)) return;

  // https://github.com/motdotla/dotenv/blob/83bc88e7d3b48207d005225fbb1f373078a4827b/lib/main.js#L9
  const SPLIT_LINE =
    /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;

  const kv = SPLIT_LINE.exec(line);
  if (!kv) return;

  const k = kv?.[1];
  const v = kv?.[2];

  if (!k || !v) return; // filte empty value

  // e.g. gh secret set PORT -b "8080"
  let execStr = `gh secret set ${k} -b "${v}"`;
  if (repoName) {
    execStr += ` --repo ${repoName}`;
  }

  exec(execStr, (err, stdout) => {
    if (err) console.log('⚠️ ERR', err);

    console.log(execStr);
  });

  // e.g. echo PORT=${{ secrets.PORT }} >> .env
  dotenvVariables += `echo ${k}=\${{ secrets.${k} }} >> .env\n`;
});

//
//
//
// 02 write `.env` to deploy.yml
const DEPLOY_FILE = `${__ROOT_DIR__}/.github/workflows/build-and-deploy.yml`;
const DEPLOY_CONTENT = fs.readFileSync(DEPLOY_FILE, 'utf8');

const REGEX_S = `echo "---- DOTENV-PLACEHOLDER-S ----"`;
const REGEX_E = 'echo "---- DOTENV-PLACEHOLDER-E ----"';

const REGEX = new RegExp(String.raw`${REGEX_S}[\s\S]*?${REGEX_E}`, 'ig');

const REPLACE_CONTENT = `${REGEX_S}\n${dotenvVariables}${REGEX_E}`
  .split('\n')
  .map((line) => {
    // skip 1st line
    if (line === REGEX_S) return line;

    return `${' '.padEnd(10)}${line}`;
  })
  .join('\n');

const NEXT_DEPLOY_CONTENT = DEPLOY_CONTENT.replace(REGEX, REPLACE_CONTENT);

fs.writeFileSync(DEPLOY_FILE, NEXT_DEPLOY_CONTENT, 'utf8');
