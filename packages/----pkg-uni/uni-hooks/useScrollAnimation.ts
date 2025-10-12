import { useEffect } from 'react';

interface UseScrollAnimationOptions {
  /**
   * 监听的类名，默认为 'scroll-animate'
   */
  targetClassName?: string;
  /**
   * 进入视口的阈值（像素），默认为 200px
   */
  threshold?: number;
  /**
   * 激活后的类名，默认为 'scroll-animate-in'
   */
  activeClassName?: string;
  /**
   * 是否只触发一次，默认为 true
   */
  once?: boolean;
  /**
   * 动画延迟（毫秒），可以为每个元素设置不同的延迟
   */
  delay?: number;
}

/**
 * 全局 Intersection Observer Hook
 * 用于监听特定 className 的元素，在进入视口时添加动画效果
 *
 * @example
 * ```tsx
 * // 在 App 组件或布局组件中使用
 * useScrollAnimation({
 *   targetClassName: 'scroll-animate',
 *   threshold: 200,
 *   activeClassName: 'scroll-animate-in',
 *   once: true,
 * });
 *
 * // 在组件中使用
 * <div className="scroll-animate">这个元素会在进入视口时淡入</div>
 * ```
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    targetClassName = 'scroll-animate',
    threshold = 200,
    activeClassName = 'scroll-animate-in',
    once = true,
    delay = 0,
  } = options;

  useEffect(() => {
    // Store all pending timeout IDs for cleanup
    const pendingTimeouts = new Set<number>();

    // 创建 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // 检查元素是否还在 DOM 中（防止已被移除的元素触发回调）
            if (!document.body.contains(target)) {
              observer.unobserve(target);
              return;
            }

            // 如果元素已经有 data-animated 属性且 once 为 true，则跳过
            if (once && target.dataset.animated === 'true') {
              return;
            }

            // 获取元素的自定义延迟
            const elementDelay = parseInt(target.dataset.delay || '0', 10) || delay || index * 100;

            // 设置延迟后添加激活类
            const timeoutId = window.setTimeout(() => {
              // 再次检查元素是否还在 DOM 中
              if (!document.body.contains(target)) {
                pendingTimeouts.delete(timeoutId);
                return;
              }

              target.classList.add(activeClassName);

              // 标记为已动画
              if (once) {
                target.dataset.animated = 'true';
              }

              // 从待执行列表中移除
              pendingTimeouts.delete(timeoutId);
            }, elementDelay);

            // Track timeout ID for cleanup
            pendingTimeouts.add(timeoutId);

            // 如果只触发一次，则停止观察
            if (once) {
              observer.unobserve(target);
            }
          } else {
            // 如果不是 once 模式，当元素离开视口时移除激活类
            if (!once) {
              const target = entry.target as HTMLElement;

              // 检查元素是否还在 DOM 中
              if (document.body.contains(target)) {
                target.classList.remove(activeClassName);
              } else {
                // 元素已被移除，停止观察
                observer.unobserve(target);
              }
            }
          }
        });
      },
      {
        // rootMargin 设置为负值，表示在元素进入视口 threshold 像素时触发
        rootMargin: `0px 0px -${threshold}px 0px`,
        threshold: 0,
      },
    );

    // 查找所有目标元素
    const targets = document.querySelectorAll(`.${targetClassName}`);

    // 观察所有目标元素
    targets.forEach((target) => {
      observer.observe(target);
    });

    // 创建 MutationObserver 来监听新添加的元素
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // 处理新添加的节点
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            const element = node as HTMLElement;

            // 检查元素本身
            if (element.classList?.contains(targetClassName)) {
              observer.observe(element);
            }

            // 检查子元素
            const children = element.querySelectorAll?.(`.${targetClassName}`);
            children?.forEach((child) => {
              observer.observe(child);
            });
          }
        });

        // 处理被移除的节点，确保停止观察并清理资源
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            const element = node as HTMLElement;

            // 检查元素本身
            if (element.classList?.contains(targetClassName)) {
              observer.unobserve(element);
            }

            // 检查子元素
            const children = element.querySelectorAll?.(`.${targetClassName}`);
            children?.forEach((child) => {
              observer.unobserve(child);
            });
          }
        });
      });
    });

    // 开始观察 DOM 变化
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 清理函数
    return () => {
      // 清理所有待执行的定时器
      pendingTimeouts.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      pendingTimeouts.clear();

      // 断开所有观察器
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [targetClassName, threshold, activeClassName, once, delay]);
};
