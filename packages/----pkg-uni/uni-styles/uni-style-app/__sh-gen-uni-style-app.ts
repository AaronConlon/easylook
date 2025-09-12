import fs from 'fs';
import path from 'path';

const SOURCE_FILE = path.resolve(__dirname, '__raw__uni-css-vars-app.ts');
const TARGET_FILE = path.resolve(__dirname, 'by-gen-uni-css-vars-app.scss');

const raw = fs.readFileSync(SOURCE_FILE, 'utf-8');
const lines = raw.split(/\r?\n/);

const results: {
  key: string;
  value: string;
  comment?: string;
}[] = [];

let collecting = false;
let currentKey = '';
let currentValueLines: string[] = [];
let currentComment: string | undefined = undefined;

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('//')) continue;

  if (!collecting) {
    const match = trimmed.match(
      /^['"]([^'"]+)['"]\s*:\s*(.+?)(,?)\s*(\/\/(.*))?$/,
    );
    if (match) {
      const [, key, valueStartRaw, hasComma, , comment] = match;
      const valueStart = valueStartRaw.trim();
      const isMultiLine =
        valueStart.startsWith('`') && !valueStart.endsWith('`');

      if (!isMultiLine) {
        results.push({
          key,
          value: stripQuotes(valueStart.replace(/,$/, '')),
          comment: comment?.trim(),
        });
      } else {
        collecting = true;
        currentKey = key;
        currentValueLines = [valueStart];
        currentComment = comment?.trim();
      }
    }
  } else {
    currentValueLines.push(trimmed);
    const joined = currentValueLines.join('\n');
    const ends = joined.trimEnd();
    const isFinished = ends.endsWith('`,') || ends.endsWith('`');

    if (isFinished) {
      collecting = false;
      const clean = joined.replace(/,\s*$/, '').trim();
      results.push({
        key: currentKey,
        value: stripQuotes(clean),
        comment: currentComment,
      });
      currentKey = '';
      currentValueLines = [];
      currentComment = undefined;
    }
  }
}

function stripQuotes(input: string): string {
  const hasWrap =
    (input.startsWith('`') && input.endsWith('`')) ||
    (input.startsWith("'") && input.endsWith("'")) ||
    (input.startsWith('"') && input.endsWith('"'));
  return hasWrap ? input.slice(1, -1) : input;
}

function isNumeric(val: string): boolean {
  return /^[-+]?\d+(\.\d+)?$/.test(val);
}

const outputLines = [
  '/* ',
  '|',
  '| code by gen',
  '| prettier-ignore',
  '|',
  '|*/',
  ':root {',
];

for (const item of results) {
  const { key, value, comment } = item;

  const needsPx = comment?.includes('gen-unit-px');
  const nddesAddPrettier = comment?.includes('add-prettier-ignore');

  //
  const cssValue = isNumeric(value) && needsPx ? `${value}px` : value;

  const prettierStr = nddesAddPrettier ? `  /* prettier-ignore */\n` : '';

  outputLines.push(`${prettierStr}  --${key}: ${cssValue};`);
}

outputLines.push('}');

fs.writeFileSync(TARGET_FILE, outputLines.join('\n'), 'utf-8');
console.log(`✅ Wrote ${results.length} vars to`, TARGET_FILE);
