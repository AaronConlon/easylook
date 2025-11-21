import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export const ProductFeaturesSection = (props: ProductFeaturesSectionProps) => {
  const {
    title = '四大特点',
    subtitle = '科学训练·专业体系·分布教程·方便携带',
    features,
  } = props;

  return (
    <section className={cx(styles['features-section'])}>
      <div className={cx(styles['container'])}>
        <div className={cx(styles['section-header'])}>
          <h2 className={cx(styles['section-title'], 'scroll-animate')}>
            {title}
          </h2>
          <p
            className={cx(styles['section-subtitle'], 'scroll-animate')}
            data-delay="100"
          >
            {subtitle}
          </p>
        </div>
        <div className={cx(styles['features-grid'])}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={cx(styles['feature-card'], 'scroll-animate')}
              data-delay={index * 100}
            >
              <div className={cx(styles['feature-icon-wrapper'])}>
                <div className={cx(styles['feature-icon'])}>{feature.icon}</div>
              </div>
              <div className={cx(styles['feature-content'])}>
                <h3 className={cx(styles['feature-title'])}>{feature.title}</h3>
                <p className={cx(styles['feature-description'])}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
