import {
  LuArmchair,
  LuChartColumn,
  LuPackage,
  LuSmartphone,
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

export const Product2Index = () => {
  const features: Feature[] = [
    {
      icon: <LuSmartphone />,
      title: '智能化交互',
      description: '集成显示屏、摄像头与多功能按键，支持实时视觉引导与反馈',
    },
    {
      icon: <LuChartColumn />,
      title: '数据可视化',
      description:
        '可通过 APP 或云平台同步训练数据，便于家长与专业人员跟踪训练效果',
    },
    {
      icon: <LuPackage />,
      title: '便携易用',
      description: '体积小巧，便于收纳，于家庭及校内外随时随地使用',
    },
    {
      icon: <LuArmchair />,
      title: '人体工学设计',
      description:
        '符合儿童手型及使用习惯，结构紧凑，重量轻便，提升操作舒适性和安全性',
    },
  ];

  const videos: Video[] = [
    {
      id: '1',
      title: '基础训练教程',
      thumbnail: '/product-box6.jpg',
      duration: '4:32',
    },
    {
      id: '2',
      title: '进阶训练技巧',
      thumbnail: '/product-box6.jpg',
      duration: '6:15',
    },
    {
      id: '3',
      title: '儿童训练指南',
      thumbnail: '/product-box6.jpg',
      duration: '5:48',
    },
    {
      id: '4',
      title: '日常保健训练',
      thumbnail: '/product-box6.jpg',
      duration: '3:20',
    },
  ];

  return (
    <div className={cx(styles['comp-wrapper'])}>
      <CommonPageHeader
        title="集合训练器"
        subTitle="Convergence Trainer"
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
      />

      <ProductHeroSection
        title="集合训练器"
        description="视立优·集合训练器是一类专为视力保护与改善设计的智能硬件设备，广泛应用于近视防控、弱视训练、视功能提升等场景，尤其适合儿童和青少年用户。"
        imageSrc="/product-box6.jpg"
        imageAlt="集合训练器"
      />

      <ProductFeaturesSection
        title="四大特点"
        subtitle="智能科技赋能视力健康"
        features={features}
      />

      <ProductVideosSection videos={videos} />
    </div>
  );
};
