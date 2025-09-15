import { useEffect, useRef, useState } from 'react';

interface UseScrollInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * 滚动进入视图触发动画的 Hook
 * @param options 配置选项
 * @returns { ref, isInView, hasAnimated }
 */
export const useScrollInView = (options: UseScrollInViewOptions = {}) => {
  const { threshold = 0.2, rootMargin = '50px', triggerOnce = true } = options;

  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // 创建 Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);

            if (triggerOnce) {
              setHasAnimated(true);
              // 单次触发时，动画完成后断开观察器
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          } else if (!triggerOnce) {
            // 多次触发时，元素离开视图时重置状态
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observerRef.current.observe(currentElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    ref: elementRef,
    isInView,
    hasAnimated,
  };
};
