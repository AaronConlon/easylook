export const userLogout = (opts: { logoutCallbackFn: () => void }) => {
  return new Promise((resolve, reject) => {
    try {
      opts?.logoutCallbackFn();

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
