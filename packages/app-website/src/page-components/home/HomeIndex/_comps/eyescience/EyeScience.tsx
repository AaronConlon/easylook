import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { ScienceCard, type EyeScienceItem } from './_comps/ScienceCard';

import styles from './styles.module.scss';

interface IEyeScienceProps extends IUiCompBaseProps {}

export const EyeScience = forwardRef<HTMLDivElement, IEyeScienceProps>(
  (props, ref) => {
    const { className } = props;

    const eyeScienceData: EyeScienceItem[] = [
      {
        id: 'myopia-population',
        title: '我国屈光不正人群约',
        // 7 亿人
        amount: 700000000,
        startAmount: 10000,
        subTitle: '人',
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
        startAmount: 10000,
        subTitle: '人',
        highlight: '斜视患病率为3%，约51%的近视防控患者存在斜视问题',
        description: '斜视不仅影响外观，更会导致双眼视功能异常',
        image:
          'https://images.unsplash.com/photo-1726551932629-1e269df9e1ff?w=400&h=300&fit=crop',
      },
      {
        id: 'children-amblyopia',
        title: '我国儿童弱视患者预计',
        // 约 487.2 万人
        amount: 4872,
        startAmount: 0,
        subTitle: '万人',
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
        startAmount: 0,
        subTitle: '视功能异常',
        highlight: '视觉相关阅读障碍',
        description: '现代生活中过度用眼导致的各种视觉问题日益严重',
        image:
          'https://i.epochtimes.com/assets/uploads/2022/07/id13785850-shutterstock_2159592847-600x400.jpg',
      },
    ];

    const subTitle =
      '数据来源于《中国儿童斜弱视数字化治疗现状蓝皮书》、《"十四五"全国眼健康规划（2021-2025年）》及截至全国家卫健委2024年公布数据统计';

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--EyeScience',
        )}
      >
        <ContainerTitle title="你知道吗？" subtitle={subTitle} />

        <div className={cx(styles['content-grid'])}>
          {eyeScienceData.map((item, index) => (
            <ScienceCard
              startAmount={item.startAmount}
              key={item.id}
              item={item}
              index={index}
              styles={styles}
            />
          ))}
        </div>
      </div>
    );
  },
);
