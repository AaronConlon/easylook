// localStorage 的简单封装
export const lskv = {
  getItem: (key: string): string | null => {
    return localStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
  key: (index: number): string | null => {
    return localStorage.key(index);
  },
};
