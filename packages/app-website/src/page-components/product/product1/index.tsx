import {
  LuBox,
  LuGraduationCap,
  LuSmartphone,
  LuUserCheck,
} from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import {
  type Feature,
  ProductFeaturesSection,
} from '../_comps/ProductFeaturesSection';
import { ProductHeroSection } from '../_comps/ProductHeroSection';
import {
  type Video,
  ProductVideosSection,
} from '../_comps/ProductVideosSection';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

export const Product1Index = () => {
  const features: Feature[] = [
    {
      icon: <LuBox />,
      title: '集成式设计',
      description:
        '一体化的通用视觉训练方案，集成多种训练模式，满足不同场景需求',
    },
    {
      icon: <LuGraduationCap />,
      title: '专家共识',
      description:
        '基于调节滞后引发近视学说，融合专家共识与自主训练体系，科学有效',
    },
    {
      icon: <LuSmartphone />,
      title: '小程序联动',
      description: '智能化小程序联动训练，实现患者自主训练一体化操作管理',
    },
    {
      icon: <LuUserCheck />,
      title: '自主训练',
      description:
        '支持患者在家自主训练，专业指导与便捷操作相结合，提升训练效果',
    },
  ];

  const videos: Video[] = [
    {
      id: '1',
      title: '近视防控训练',
      thumbnail: '/product-box2.jpg',
      duration: '5:12',
    },
    {
      id: '2',
      title: '斜弱视训练',
      thumbnail: '/product-box2.jpg',
      duration: '4:45',
    },
    {
      id: '3',
      title: '眼保健训练',
      thumbnail: '/product-box2.jpg',
      duration: '6:30',
    },
    {
      id: '4',
      title: '学习力提升训练',
      thumbnail: '/product-box2.jpg',
      duration: '4:18',
    },
  ];

  return (
    <div className={cx(styles['comp-wrapper'])}>
      <CommonPageHeader
        title="视觉训练套盒"
        subTitle="Vision Training Kit"
        bgImage="/product-box2.jpg"
      />

      <ProductHeroSection
        title="视觉训练套盒"
        description="视立优·视觉训练套盒是一款集成式一体化的通用视觉训练方案。基于调节滞后引发近视学说，将专家共识与自主训练体系相结合，为近视防控提供新解决方案。"
        imageSrc="/product-box2.jpg"
        imageAlt="视觉训练套盒"
      />

      <ProductFeaturesSection
        title="四大特点"
        subtitle="科学训练 · 专业指导 · 智能管理"
        features={features}
      />

      <ProductVideosSection videos={videos} />
    </div>
  );
};
