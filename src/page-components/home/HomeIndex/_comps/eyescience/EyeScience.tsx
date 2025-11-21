import { forwardRef } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';


import { usePageStore } from '@/stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';

import { ScienceCard } from './_comps/ScienceCard';

import styles from './styles.module.scss';

interface IEyeScienceProps extends ICompBaseProps {}

export const EyeScience = forwardRef<HTMLDivElement, IEyeScienceProps>(
  (props, ref) => {
    const { className } = props;

    const homeData = usePageStore((s) => s.page$_pageItem.home.eyeScience);

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--EyeScience',
        )}
      >
        <ContainerTitle title={homeData.title} />
        <br />
        <div className={cx(styles['content-grid'])}>
          {homeData.items.map((item, index) => (
            <ScienceCard
              duration={item.duration || 5}
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
        <div style={{ margin: '24px auto' }}>
          <p className={styles['section-subtitle']}>* {homeData.subtitle}</p>
        </div>
      </div>
    );
  },
);
