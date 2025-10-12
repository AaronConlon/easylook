import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import { ExpertTestimonials } from './_comps/ExpertTestimonials';
import { PartnersSlider } from './_comps/PartnersSlider';

import styles from './styles.module.scss';

interface IPartnersProps extends IUiCompBaseProps {}

export const Partners = forwardRef<HTMLDivElement, IPartnersProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Partners',
        )}
      >
        <CommonPageHeader
          title="合作伙伴"
          subTitle="Partners & Cooperation"
          bgImage="https://images.unsplash.com/photo-1624555130296-e551faf8969b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2842"
        />

        {/* 合作伙伴滚动展示 */}
        <PartnersSlider />

        {/* 专家寄语 */}
        <ExpertTestimonials />
      </div>
    );
  },
);

Partners.displayName = 'Partners';
