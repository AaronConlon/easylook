import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IEncyclopediaProps extends IUiCompBaseProps {}

interface EncyclopediaItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description?: string;
  link?: string;
}

export const Encyclopedia = forwardRef<HTMLDivElement, IEncyclopediaProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const encyclopediaData: EncyclopediaItem[] = [
      {
        id: 'milk-tea-eye-health',
        title: '奶茶喝多影响眼健康？教你科学地喝',
        category: '科普',
        date: '2025/09/17',
        description:
          '高考结束后，暑期"摘镜高峰"也即将到来。不少高三毕业生中在高考后的暑假好了接受近视手术...',
        link: '/news-kepu',
      },
      {
        id: 'baby-vision-growth',
        title: '守护那颗"小树苗"：宝宝的视力成长，每一步都珍贵',
        category: '科普',
        date: '2025/08/15',
        link: '/news-kepu',
      },
      {
        id: 'myopia-surgery-peak',
        title: '想摘镜又担心风险？高考后将迎近视手术高峰，专家提醒',
        category: '羊城晚报',
        date: '2025/06/10',
        description:
          '高考结束后，暑期"摘镜高峰"也即将到来。不少高三毕业生中在高考后的暑假好了接受近视手术...',
        link: '/news',
      },
    ];

    const handleItemClick = (item: EncyclopediaItem) => {
      if (item.link) {
        navigate({ to: item.link });
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
        />

        <br />
        <br />

        <div className={cx(styles['encyclopedia-list'])}>
          {encyclopediaData.map((item, index) => (
            <div
              key={item.id}
              className={cx(styles['encyclopedia-item'])}
              onClick={() => handleItemClick(item)}
            >
              <div className={cx(styles['item-content'])}>
                <div className={cx(styles['item-header'])}>
                  <span className={cx(styles['item-category'])}>
                    【{item.category}】
                  </span>
                  <h3 className={cx(styles['item-title'])}>{item.title}</h3>
                </div>

                {item.description && (
                  <p className={cx(styles['item-description'])}>
                    {item.description}
                  </p>
                )}
              </div>

              <div className={cx(styles['item-date'])}>
                <div className={cx(styles['date-year'])}>
                  {item.date.split('/')[0]}
                </div>
                <div className={cx(styles['date-month-day'])}>
                  {item.date.split('/')[1]} / {item.date.split('/')[2]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

Encyclopedia.displayName = 'Encyclopedia';
