import dayjs from 'dayjs';
import { forwardRef } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { LuCalendar, LuExternalLink } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UCard } from '----pkg-uni/uni-ui-components/UCard';
import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';
import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';


import styles from './styles.module.scss';

interface IEncyclopediaProps extends IUiCompBaseProps {}

export const Encyclopedia = forwardRef<HTMLDivElement, IEncyclopediaProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const encyclopediaConfig = usePageStore(
      (s) => s.page$_pageItem.home.encyclopedia,
    );

    const articlesData = usePageStore((s) => s.page$_share.articles);

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
          title={encyclopediaConfig.title}
          subtitle={encyclopediaConfig.subtitle}
          styles={{
            p: {
              marginBottom: '36px',
            },
          }}
        />

        {/* 横向滚动的内容区域，采用 Swiper 组件来实现 */}

        <ScreenWidthLimitAndCentered
          className={cx(styles['encyclopedia-container'])}
        >
          {articlesData.slice(0, 4).map((i) => (
            <UCard
              key={i.id}
              className={styles['item']}
              cover={<img src={i.cover} alt={i.title} />}
            >
              {/* <div className={styles['item-cover']}> */}
              {/*   <img src={i.cover} alt={i.title} /> */}
              {/* </div> */}
              {/* date */}
              <div className={styles['item-content']}>
                <div className={styles['item-date']}>
                  <LuCalendar />
                  {dayjs(i.date).format('YYYY-MM-DD')}
                </div>
                {/* title */}
                <div className={styles['item-title']}>{i.title}</div>
                {/* description */}
                {/* <div className={styles['item-description']}> */}
                {/*   {i.description} */}
                {/* </div> */}
                {/* read more button */}
                <USmartLink href={i.link} className={styles['item-read-more']}>
                  <span className={styles['item-read-more-text']}>
                    {encyclopediaConfig.readMoreText}
                    <LuExternalLink />
                  </span>
                </USmartLink>
              </div>
            </UCard>
          ))}

          {/* 导航控制器和查看更多按钮 */}
          <div className={cx(styles['controls-wrapper'])}>
            <UButton
              className={cx(styles['more-button'])}
              icon={<CgDetailsMore />}
              size="large"
              onClick={() => navigate({ to: '/encyclopedia' })}
              style={{
                ['--ant-button-default-hover-color' as any]:
                  'var(--app-brand-color)',
                ['--ant-button-default-hover-border-color' as any]:
                  'var(--app-brand-color)',
              }}
            >
              {encyclopediaConfig.moreButtonText}
            </UButton>
          </div>
        </ScreenWidthLimitAndCentered>
      </div>
    );
  },
);

Encyclopedia.displayName = 'Encyclopedia';
