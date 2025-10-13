import { Button } from 'antd';
import dayjs from 'dayjs';
import { forwardRef, useRef, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { LuCalendar, LuExternalLink } from 'react-icons/lu';
import type { Swiper as SwiperType } from 'swiper';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { encyclopediaData } from '@/consts/encyclopedia.data';

import styles from './styles.module.scss';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

interface IEncyclopediaProps extends IUiCompBaseProps {}

export const Encyclopedia = forwardRef<HTMLDivElement, IEncyclopediaProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNavClick = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };

    return (
      <div
        ref={ref}
        id="encyclopedia"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Encyclopedia',
        )}
      >
        <ContainerTitle
          title="眼界百科"
          subtitle="专业眼科知识，科学护眼指南"
          styles={{
            p: {
              marginBottom: '36px',
            },
          }}
        />

        {/* 横向滚动的内容区域，采用 Swiper 组件来实现 */}
        <div className={cx(styles['encyclopedia-container'])}>
          {encyclopediaData.slice(0, 4).map((i) => (
            <div key={i.id} className={styles['item']}>
              <div className={styles['item-cover']}>
                <img src={i.cover} alt={i.title} />
              </div>
              {/* date */}
              <div className={styles['item-content']}>
                <div className={styles['item-date']}>
                  <LuCalendar />
                  {dayjs(i.date).format('YYYY-MM-DD')}
                </div>
                {/* title */}
                <div className={styles['item-title']}>{i.title}</div>
                {/* description */}
                <div className={styles['item-description']}>
                  {i.description}
                </div>
                {/* read more button */}
                <button className={styles['item-read-more']}>
                  <div className={styles['item-read-more-text']}>
                    阅读更多
                    <LuExternalLink />
                  </div>
                </button>
              </div>
            </div>
          ))}

          {/* 导航控制器和查看更多按钮 */}
          <div className={cx(styles['controls-wrapper'])}>
            {/* 左侧导航按钮 */}
            {/* <div className={cx(styles['nav-buttons'])}>
              {encyclopediaData.map((item, index) => (
                <div
                  key={item.id}
                  data-active={index === activeIndex}
                  className={cx(styles['nav-button'])}
                  onClick={() => handleNavClick(index)}
                ></div>
              ))}
            </div> */}

            {/* 右侧查看更多按钮 */}
            {/* <button
              className={cx(styles['more-button'])}
              onClick={() => navigate({ to: '/encyclopedia' })}
            >
              <CgDetailsMore className={cx(styles['more-button-icon'])} />
              查看更多
            </button> */}
            <Button
              className={cx(styles['more-button'])}
              icon={<CgDetailsMore />}
              onClick={() => navigate({ to: '/encyclopedia' })}
            >
              查看更多
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

Encyclopedia.displayName = 'Encyclopedia';
