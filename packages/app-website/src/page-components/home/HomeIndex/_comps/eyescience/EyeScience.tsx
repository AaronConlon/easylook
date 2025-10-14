import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';

import { ScienceCard } from './_comps/ScienceCard';

import styles from './styles.module.scss';

interface IEyeScienceProps extends IUiCompBaseProps {}

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
        <ContainerTitle title={homeData.title} subtitle={homeData.subtitle} />

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
      </div>
    );
  },
);
