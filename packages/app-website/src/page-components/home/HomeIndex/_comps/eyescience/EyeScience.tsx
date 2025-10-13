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
        id: 'refraction-population',
        title: '屈光不正人群',
        enTitle: 'REFRACTIVE ERRORS',
        description:
          '我国屈光不正人群约 7 亿人，儿童青少年总体近视率高达 52.7%，已成为影响国民视觉健康的重大公共卫生问题',
        colorTheme: 'blue',
        // amount: 700000000,
        // unit: '人',
        amount: 7,
        unit: '亿人',
      },
      {
        id: 'strabismus-population',
        title: '斜视患病人群',
        enTitle: 'STRABISMUS PATIENTS',
        description:
          '我国斜视人数约 1.43 亿人，斜视患病率为 3%，约 51% 的近视防控患者存在斜视问题，不仅影响外观，更会导致双眼视功能异常',
        colorTheme: 'purple',
        // amount: 143000000,
        amount: 1.43,
        duration: 5,
        unit: '亿人',
      },
      {
        id: 'amblyopia-children',
        title: '儿童弱视患者',
        enTitle: 'CHILDHOOD AMBLYOPIA',
        description:
          '我国儿童弱视患者预计约 487.2 万人，弱视是儿童常见的视觉发育性疾病，早期发现和治疗是关键，3-12 岁是最佳治疗期',
        colorTheme: 'green',
        // amount: 4872000,
        amount: 4.87,
        unit: '万人',
      },
      // {
      //   id: 'visual-fatigue',
      //   title: '视疲劳患者',
      //   enTitle: 'VISUAL FATIGUE',
      //   description:
      //     '视疲劳、干眼症等视功能异常问题日益严重，视觉相关阅读障碍现象普遍，现代生活中过度用眼导致的各种视觉问题需要重视',
      //   colorTheme: 'orange',
      //   style: 'icon',
      //   icon: LuEye,
      // },
      // {
      //   id: 'prevention-awareness',
      //   title: '预防意识提升',
      //   enTitle: 'PREVENTION AWARENESS',
      //   description:
      //     '随着近视防控政策的推进，公众对眼健康的重视程度不断提高，专业视觉训练逐渐成为近视防控和视功能改善的重要手段',
      //   colorTheme: 'violet',
      //   style: 'icon',
      //   icon: LuShieldCheck,
      // },
      // {
      //   id: 'market-demand',
      //   title: '市场需求增长',
      //   enTitle: 'MARKET GROWTH',
      //   description:
      //     '眼视光训练市场规模持续扩大，专业训练设备和服务需求激增，为眼健康产业带来巨大发展机遇和广阔市场空间',
      //   colorTheme: 'pink',
      //   amount: 320,
      //   unit: '亿元',
      // },
    ];

    const subTitle =
      '数据来源于《中国儿童斜弱视数字化治疗现状蓝皮书》、《"十四五"全国眼健康规划（2021-2025 年）》及截至全国家卫健委 2024 年公布数据统计';

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

        <br />

        <div className={cx(styles['content-grid'])}>
          {eyeScienceData.map((item, index) => (
            <ScienceCard
              duration={item.duration || 5}
              key={item.id}
              item={item}
              index={index}
              // styles={styles}
            />
          ))}
        </div>
      </div>
    );
  },
);
