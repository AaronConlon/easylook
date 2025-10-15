import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import { Partnership } from '@/page-components/home/HomeIndex/_comps';

import styles from './styles.module.scss';

interface IPartnersIndexProps extends IUiCompBaseProps {}

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
