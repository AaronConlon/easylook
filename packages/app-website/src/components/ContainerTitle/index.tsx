import { useEffect, useRef, useState, type CSSProperties } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import stylesModule from './styles.module.scss';

interface IContainerTitleProps {
  title: string;
  subtitle: string;
  styles?: {
    h2?: CSSProperties;
    p?: CSSProperties;
  };
  className?: string;
}

export const ContainerTitle = ({
  title,
  subtitle,
  styles = {},
  className,
}: IContainerTitleProps) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentTitle = titleRef.current;
    if (!currentTitle) return;

    // 创建 Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true);

            // 动画完成后断开观察器
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.3, // 当标题30%可见时触发
        rootMargin: '50px', // 提前50px触发
      },
    );

    observerRef.current.observe(currentTitle);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={titleRef}
      data-in-view={isInView}
      className={cx(stylesModule['comp-wrapper'], className)}
    >
      <h2 style={styles?.h2}>{title}</h2>
      <p style={styles?.p}>{subtitle}</p>
    </div>
  );
};
