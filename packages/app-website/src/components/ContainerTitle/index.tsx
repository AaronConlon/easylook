import gsap from 'gsap';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import stylesModule from './styles.module.scss';

interface IContainerTitleProps {
  title: string;
  styles?: {
    h2?: CSSProperties;
    p?: CSSProperties;
  };
  className?: string;
}

export const ContainerTitle = ({
  title,
  styles = {},
  className,
}: IContainerTitleProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 将文本分割成字符
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    const currentWrapper = wrapperRef.current;
    if (!currentWrapper || !titleRef.current || !subtitleRef.current) return;

    // 创建 Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Title Mask Reveal 动画
            const titleChars = titleRef.current?.querySelectorAll('.char');
            if (titleChars) {
              gsap.fromTo(
                titleChars,
                {
                  yPercent: 100,
                  opacity: 0,
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.03,
                  ease: 'power3.out',
                },
              );
            }

            // Subtitle Mask Reveal 动画（延迟 0.5s）
            const subtitleChars =
              subtitleRef.current?.querySelectorAll('.char');
            if (subtitleChars) {
              gsap.fromTo(
                subtitleChars,
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.02,
                  ease: 'power3.out',
                  delay: 0.5,
                },
              );
            }

            // 动画完成后断开观察器
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px',
      },
    );

    observerRef.current.observe(currentWrapper);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={wrapperRef}
      className={cx(stylesModule['comp-wrapper'], className)}
    >
      <div className={cx(stylesModule['title-wrapper'])}>
        <h2 ref={titleRef} style={styles?.h2}>
          {splitText(title)}
        </h2>
      </div>
    </div>
  );
};
