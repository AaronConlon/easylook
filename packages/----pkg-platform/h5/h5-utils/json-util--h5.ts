export function safeParseJsonStr(
  str?: string | null,
  opts: {
    defaultValue: {} | [] | null | undefined | string | number | boolean;
  } = {
    defaultValue: null,
  },
) {
  if (!str) return null;

  try {
    return JSON.parse(str);
  } catch (e) {
    return opts.defaultValue || {};
  }
}
