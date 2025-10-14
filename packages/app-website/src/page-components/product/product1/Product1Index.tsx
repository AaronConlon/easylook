import {
  LuBox,
  LuGraduationCap,
  LuSmartphone,
  LuUserCheck,
} from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ProductFeaturesSection } from '../_comps/ProductFeaturesSection';
import { ProductHeroSection } from '../_comps/ProductHeroSection';
import { ProductVideosSection } from '../_comps/ProductVideosSection';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

export const Product1Index = () => {
  const page$_product = usePageStore((s) => s.page$_pageItem.product);

  const featureIconMap = {
    integrationDesign: <LuBox />,
    expertConsensus: <LuGraduationCap />,
    smartManagement: <LuSmartphone />,
    independentTraining: <LuUserCheck />,
  };

  return (
    <div className={cx(styles['comp-wrapper'])}>
      <CommonPageHeader
        title={page$_product.product1.title}
        subTitle={page$_product.product1.subtitle}
        bgImage="/product-box2.jpg"
      />

      <ProductHeroSection
        title={page$_product.product1.title}
        description={page$_product.product1.description}
        imageSrc={page$_product.product1.image}
        imageAlt="视觉训练套盒"
      />

      <ProductFeaturesSection
        title={page$_product.product1.feature.title}
        subtitle={page$_product.product1.feature.subtitle}
        features={page$_product.product1.feature.features.map((i) => ({
          ...i,
          icon: featureIconMap[i.slug as keyof typeof featureIconMap],
        }))}
      />

      <ProductVideosSection videos={page$_product.product1.video.videos} />
    </div>
  );
};
