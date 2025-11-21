import { useEffect } from 'react';

export const useDomReadyReCalc = () => {
  if (typeof window === 'undefined') return null;

  // 会随着 resize 改变而改变
  const onResizeChangeReCalc = () => {
    const docElm = document.documentElement;
    docElm.style.setProperty('--ui-app-height', `${window.innerHeight}px`);
    docElm.style.setProperty('--ui-app-width', `${window.innerWidth}px`);

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const vh = window.innerHeight * 0.01;
      docElm.style.setProperty('--ui-app-vh', `${vh}px`);
    }
  };

  // 只在 init 的时候改变
  const onInitChangeReCalc = () => {
    const docElm = document.documentElement;
    docElm.style.setProperty('--ui-app-init-height', `${window.innerHeight}px`);
    docElm.style.setProperty('--ui-app-init-width', `${window.innerWidth}px`);

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const vh = window.innerHeight * 0.01;
      docElm.style.setProperty('--ui-app-init-vh', `${vh}px`);
    }
  };

  // 监听 resize
  useEffect(() => {
    onInitChangeReCalc();
    onResizeChangeReCalc();

    // 创建 ResizeObserver 实例并保存引用
    const resizeObserver = new ResizeObserver(() => {
      try {
        onResizeChangeReCalc();
      } catch (error) {
        console.error('useDomReadyReCalc error:', error);
      }
    });

    // 观察 document.documentElement
    resizeObserver.observe(document.documentElement);

    // 清理函数
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return null;
};
