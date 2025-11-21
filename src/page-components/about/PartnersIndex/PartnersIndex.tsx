import { forwardRef } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';


import { usePageStore } from '@/stores/usePageStore';

import { Partnership } from '@/page-components/home/HomeIndex/_comps';

import { CommonPageHeader } from '@/components/CommonPageHeader';


import styles from './styles.module.scss';

interface IPartnersIndexProps extends ICompBaseProps {}

export const PartnersIndex = forwardRef<HTMLDivElement, IPartnersIndexProps>(
  (props, ref) => {
    const { className } = props;

    const page$_about = usePageStore((s) => s.page$_pageItem.about);

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--PartnersIndex',
        )}
      >
        <CommonPageHeader
          title={page$_about.partners.title}
          subTitle={page$_about.partners.subtitle}
        />

        {/* 合作伙伴内容 */}
        <Partnership />
      </div>
    );
  },
);

PartnersIndex.displayName = 'PartnersIndex';
