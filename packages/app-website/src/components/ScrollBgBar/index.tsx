import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  subtitle?: string;
  backgroundText?: string;
  /**
   * 滚动速度（像素/秒）
   * @default 50
   */
  scrollSpeed?: number;
}

export const ScrollBgBar = (props: IProps) => {
  const { title, subtitle, backgroundText, scrollSpeed = 50 } = props;
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const subtitleWrapperRef = useRef<HTMLDivElement>(null);

  // Marquee 无限滚动动画
  useEffect(() => {
    if (!backgroundText || !marqueeRef.current) return;

    const marqueeElement = marqueeRef.current;
    const items = marqueeElement.querySelectorAll('.scroll-text-item');

    if (items.length === 0) return;

    const itemWidth = items[0].getBoundingClientRect().width;

    // 根据速度计算 duration：duration = 距离 / 速度
    const duration = itemWidth / scrollSpeed;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: 'none',
      },
    });

    tl.to(marqueeElement, {
      x: -itemWidth,
      duration,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, [backgroundText, scrollSpeed]);

  // Title Mask Reveal 动画
  useEffect(() => {
    if (!titleRef.current || !titleWrapperRef.current) return;

    const chars = titleRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
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
  }, [title]);

  // Subtitle Mask Reveal 动画（延迟 0.5s）
  useEffect(() => {
    if (!subtitle || !subtitleRef.current || !subtitleWrapperRef.current)
      return;

    const chars = subtitleRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.5,
      },
    );
  }, [subtitle]);

  // 将文本分割成字符
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className={cx(styles['scroll-bg-bar-wrapper'])}>
      {backgroundText && (
        <div ref={marqueeRef} className={cx(styles['background-scroll-text'])}>
          <span className={cx(styles['scroll-text-item'], 'scroll-text-item')}>
            {backgroundText}
          </span>
          <span className={cx(styles['scroll-text-item'], 'scroll-text-item')}>
            {backgroundText}
          </span>
          <span className={cx(styles['scroll-text-item'], 'scroll-text-item')}>
            {backgroundText}
          </span>
          <span className={cx(styles['scroll-text-item'], 'scroll-text-item')}>
            {backgroundText}
          </span>
        </div>
      )}

      <div className={cx(styles['content-wrapper'])}>
        <div ref={titleWrapperRef} className={cx(styles['title-wrapper'])}>
          <h2 ref={titleRef} className={cx(styles['title'])}>
            {splitText(title)}
          </h2>
        </div>
        {subtitle && (
          <div
            ref={subtitleWrapperRef}
            className={cx(styles['subtitle-wrapper'])}
          >
            <p ref={subtitleRef} className={cx(styles['subtitle'])}>
              {splitText(subtitle)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
