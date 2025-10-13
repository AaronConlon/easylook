interface IProps {
  title: string;
  subTitle: string;
  bgImage?: string;
}

import { useEffect, useRef, useState } from 'react';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import styles from './styles.module.scss';

export const CommonPageHeader = (props: IProps) => {
  const { title, subTitle, bgImage } = props;

  const [loaded, setLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
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
    return;
    // const currentWrapper = wrapperRef.current;
    // if (!currentWrapper || !titleRef.current || !subtitleRef.current) return;
    //
    // // 创建 Intersection Observer
    // observerRef.current = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting && !hasAnimated) {
    //         setHasAnimated(true);
    //
    //         // Title Mask Reveal 动画
    //         const titleChars = titleRef.current?.querySelectorAll('.char');
    //         if (titleChars) {
    //           gsap.fromTo(
    //             titleChars,
    //             {
    //               yPercent: 100,
    //               opacity: 0,
    //             },
    //             {
    //               yPercent: 0,
    //               opacity: 1,
    //               duration: 0.8,
    //               stagger: 0.03,
    //               ease: 'power3.out',
    //             },
    //           );
    //         }
    //
    //         // Subtitle Mask Reveal 动画（延迟 0.5s）
    //         const subtitleChars =
    //           subtitleRef.current?.querySelectorAll('.char');
    //         if (subtitleChars) {
    //           gsap.fromTo(
    //             subtitleChars,
    //             {
    //               opacity: 0,
    //             },
    //             {
    //               opacity: 1,
    //               duration: 0.8,
    //               stagger: 0.02,
    //               ease: 'power3.out',
    //               delay: 0.5,
    //             },
    //           );
    //         }
    //
    //         // 动画完成后断开观察器
    //         if (observerRef.current) {
    //           observerRef.current.unobserve(entry.target);
    //         }
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.3,
    //     rootMargin: '50px',
    //   },
    // );
    //
    // observerRef.current.observe(currentWrapper);
    //
    // return () => {
    //   if (observerRef.current) {
    //     observerRef.current.disconnect();
    //   }
    // };
  }, [hasAnimated]);

  return (
    <div ref={wrapperRef} className={styles['comp-wrapper']}>
      {/* <div className={styles['comp-mask']}></div> */}
      <div
        className={cx(styles['comp-mask'], {
          [styles['comp-mask--has-image']]: Boolean(bgImage),
        })}
      />
      {bgImage ? (
        <img
          className={styles.bgImage}
          style={{
            opacity: loaded ? 1 : 0,
          }}
          src={bgImage}
          alt={title}
          onLoad={() => setLoaded(true)}
        />
      ) : null}
      <div className={styles['title-wrapper']}>
        <div ref={titleRef} className={styles['title']}>
          {splitText(title)}
        </div>
        {subTitle ? (
          <div ref={subtitleRef} className={styles['subTitle']}>
            {splitText(subTitle)}
          </div>
        ) : null}
      </div>
    </div>
  );
};
