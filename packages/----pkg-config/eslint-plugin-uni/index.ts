import NoRawText from './rules/no-raw-text';

export default {
  meta: { name: 'eslint-plugin-uni' },
  rules: {
    // @ts-ignore
    'no-raw-text': NoRawText,
  },
};
