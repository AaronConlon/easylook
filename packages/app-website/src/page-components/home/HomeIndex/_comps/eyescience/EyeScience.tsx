import { forwardRef, useEffect, useRef, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IEyeScienceProps extends IUiCompBaseProps {}

interface EyeScienceItem {
  id: string;
  title: string;
  amount: number;
  highlight: string;
  description: string;
  image: string;
}

export const EyeScience = forwardRef<HTMLDivElement, IEyeScienceProps>(
  (props, ref) => {
    const { className } = props;
    const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    const eyeScienceData: EyeScienceItem[] = [
      {
        id: 'myopia-population',
        title: '我国屈光不正人群约',
        // 7 亿人
        amount: 700000000,
        highlight: '儿童青少年总体近视率高达52.7%',
        description: '屈光不正已成为影响我国国民视觉健康的重大公共卫生问题',
        image:
          'https://images.unsplash.com/photo-1639094441424-ff7c1db6c322?fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=400&h=300&fit=crop',
      },
      {
        id: 'myopia-patients',
        title: '我国斜视人数约',
        // 1.43 亿人
        amount: 143000000,
        highlight: '斜视患病率为3%，约51%的近视防控患者存在斜视问题',
        description: '斜视不仅影响外观，更会导致双眼视功能异常',
        image:
          'https://images.unsplash.com/photo-1726551932629-1e269df9e1ff?w=400&h=300&fit=crop',
      },
      {
        id: 'children-amblyopia',
        title: '我国儿童弱视患者预计',
        // 约 487.2 万人
        amount: 48720000,
        highlight: '弱视是儿童常见的视觉发育性疾病',
        description: '早期发现和治疗是关键，3-12岁是最佳治疗期',
        image:
          'https://images.unsplash.com/photo-1517948430535-1e2469d314fe?w=400&h=300&fit=crop',
      },
      {
        id: 'vision-fatigue',
        title: '视疲劳、干眼症',
        // 视功能异常
        amount: 0,
        highlight: '视觉相关阅读障碍',
        description: '现代生活中过度用眼导致的各种视觉问题日益严重',
        image:
          'https://i.epochtimes.com/assets/uploads/2022/07/id13785850-shutterstock_2159592847-600x400.jpg',
      },
    ];

    const subTitle =
      '数据来源于《中国儿童斜弱视数字化治疗现状蓝皮书》、《"十四五"全国眼健康规划（2021-2025年）》及截至全国家卫健委2024年公布数据统计';

    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, entry.target.id]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        },
      );

      const items = document.querySelectorAll('[data-animate]');
      items.forEach((item) => {
        if (observerRef.current) {
          observerRef.current.observe(item);
        }
      });

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--EyeScience',
        )}
      >
        <div className={cx(styles['section-header'])}>
          <h2 className={cx(styles['section-title'])}>你知道吗？</h2>
          <p className={cx(styles['section-subtitle'])}>{subTitle}</p>
        </div>

        <div className={cx(styles['content-grid'])}>
          {eyeScienceData.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              data-animate
              className={cx(
                styles['science-card'],
                styles[`science-card--${item.id}`],
                visibleItems.has(item.id) && styles['science-card--visible'],
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={cx(styles['card-image'])}>
                <img src={item.image} alt={item.title} />
                <div className={cx(styles['image-overlay'])} />
              </div>

              <div className={cx(styles['card-content'])}>
                <div className={cx(styles['card-header'])}>
                  <h3 className={cx(styles['card-title'])}>
                    <RoughNotation type="underline" show={true}>
                      {item.title}
                    </RoughNotation>
                  </h3>
                  <br />
                  <div className={cx(styles['card-subtitle'])}>
                    {item.amount}
                  </div>
                </div>

                <div className={cx(styles['card-highlight'])}>
                  {item.highlight}
                </div>

                <p className={cx(styles['card-description'])}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
