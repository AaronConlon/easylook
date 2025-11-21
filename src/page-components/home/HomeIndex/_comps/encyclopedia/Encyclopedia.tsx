import dayjs from 'dayjs';
import { forwardRef } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { LuCalendar, LuExternalLink } from 'react-icons/lu';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';
import { useNavigate } from '__shared__/hooks/useNavigate';

import { UButton } from '__shared__/ui-components/UButton';
import { UCard } from '__shared__/ui-components/UCard';
import { URouteLink } from '__shared__/ui-components/URouteLink';

import { usePageStore } from '@/stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';
import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import styles from './styles.module.scss';

interface IEncyclopediaProps extends ICompBaseProps {}

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
                <URouteLink to={i.link} className={styles['item-read-more']}>
                  <span className={styles['item-read-more-text']}>
                    {encyclopediaConfig.readMoreText}
                    <LuExternalLink />
                  </span>
                </URouteLink>
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
