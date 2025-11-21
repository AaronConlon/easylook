import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { appConfig } from '__shared__/configs/app-config';
import { buildConfig } from '__shared__/configs/build-config';

export function dynamicInsertScript(src: string, cb?: () => void) {
  const s = document.createElement('script');
  s.setAttribute('src', src);

  if (cb) s.onload = cb;

  document.body.appendChild(s);
}

export function insertVConsole(opts?: {
  keepState?: boolean;
  useThemeStore: any;
}) {
  if (window.vConsole) {
    return;
  }

  // vconsole@3.15.0 加入了虚拟滚动，部分旧浏览器打不开暂时不升级，判断一下
  // vconsole@3.14.7 的 update() 有问题
  //
  // ⚠️ 索性全部用 3.14.6
  // const vcVersion = window.ResizeObserver ? '' : '@3.14.7';

  dynamicInsertScript(
    // `https://cdn.jsdelivr.net/npm/vconsole@3.14.6/dist/vconsole.min.js`,
    `//cdn.jsdelivr.net/npm/vconsole@3.15.1/dist/vconsole.min.js`,
    () => {
      if (!window.vConsole) {
        const sysTheme =
          opts?.useThemeStore.getState().theme$_appTheme ||
          opts?.useThemeStore.getState().theme$_sysTheme;

        // @ts-ignore
        window.vConsole = new VConsole({
          theme: sysTheme,
        });
        window.vConsole?.show();
        window.vConsole?.setOption?.('theme', sysTheme);

        // 只有在有 vConsole 之后才打印
        console.info('📐 __CONFIGS__', `v${buildConfig.VERSION}`, appConfig);
      }

      // 初始化的时候 默认 y 是 20，和 Tabbar 粘在一起了，所以看到 20 的 y，要改为 100
      if (localStorage.getItem('vConsole_switch_y') === '20') {
        window.vConsole?.setSwitchPosition(5, 100);
      }

      if (opts?.keepState) {
        localStorage.setItem(LS_CONST_KEYS.__DEBUG__vConsole, '1');
      }
    },
  );
}

export function destroyVConsole(opts?: { keepState?: boolean }) {
  if (window.vConsole) {
    console.log('destroyVConsole()');

    if (opts?.keepState) {
      localStorage.setItem(LS_CONST_KEYS.__DEBUG__vConsole, '');
    }

    setTimeout(() => {
      window.vConsole?.destroy?.();
      window.vConsole = undefined;
    }, 200);
  }
}
