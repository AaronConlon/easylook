import {
  LuArmchair,
  LuChartColumn,
  LuPackage,
  LuSmartphone,
} from 'react-icons/lu';

import { cx } from '__shared__/utils/cx-util';

import { usePageStore } from '@/stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import { ProductFeaturesSection } from './_comps/ProductFeaturesSection';
import { ProductHeroSection } from './_comps/ProductHeroSection';
import { ProductVideosSection } from './_comps/ProductVideosSection';


import styles from './styles.module.scss';

export const Product2Index = () => {
  const page$_product = usePageStore((s) => s.page$_pageItem.product);

  const featureIconMap = {
    smartInteraction: <LuSmartphone />,
    dataVisualization: <LuChartColumn />,
    portableConvenience: <LuPackage />,
    ergonomicDesign: <LuArmchair />,
  };

  return (
    <div className={cx(styles['comp-wrapper'])}>
      <CommonPageHeader
        title={page$_product.product2.title}
        subTitle={page$_product.product2.subtitle}
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
      />

      <ProductHeroSection
        title={page$_product.product2.title}
        description={page$_product.product2.description}
        imageSrc={page$_product.product2.image}
        imageAlt="集合训练器"
      />

      <ProductFeaturesSection
        title={page$_product.product2.feature.title}
        subtitle={page$_product.product2.feature.subtitle}
        features={page$_product.product2.feature.features.map((i) => ({
          ...i,
          icon: featureIconMap[i.slug as keyof typeof featureIconMap],
        }))}
      />

      <ProductVideosSection videos={page$_product.product2.video.videos} />
    </div>
  );
};
