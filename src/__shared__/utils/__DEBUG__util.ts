// @ts-ignore
import md5 from 'crypto-js/md5';

import { LS_CONST_KEYS } from '__shared__/consts/ls-const';

export const checktDebugBarPasswordHash = (inputPassword?: string | null) => {
  // MD5_TIMES 次 md5 密码的 hash
  const __P_A_S_S_W_O_R_D_H_A_S_H__ = '3d459da5af079e2f5ec5ae7f99193446';
  const MD5_TIMES = 9;

  if (!inputPassword)
    return {
      inputPassword: '',
      passwordHash: '',
      isMatch: false,
    };

  let passwordHash = md5(inputPassword).toString();

  // 😂😂😂
  [...Array(MD5_TIMES).keys()].forEach(() => {
    passwordHash = md5(
      `${passwordHash}-😂😂😂`.replaceAll('a', '😂😂😂'),
    ).toString();
  });

  const isMatch = passwordHash === __P_A_S_S_W_O_R_D_H_A_S_H__;

  if (!isMatch) {
    // 如果发现不匹配，清理掉 hash，避免之后都对比，浪费性能
    localStorage.removeItem(LS_CONST_KEYS.appDebugMode);
  }

  return {
    inputPassword,
    passwordHash,
    isMatch: passwordHash === __P_A_S_S_W_O_R_D_H_A_S_H__,
  };
};
