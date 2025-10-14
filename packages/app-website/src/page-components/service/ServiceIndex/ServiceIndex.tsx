import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import styles from './styles.module.scss';

export const ServiceIndex = () => {
  const page$_share = usePageStore((s) => s.page$_share);
  const serviceConfig = page$_share.service;

  return (
    <UView className={styles.serviceIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>{serviceConfig.title}</UText>
        <UView className={styles.content}>
          {serviceConfig.sections.map((section, index) => (
            <UView key={index} className={styles.serviceSection}>
              <UText className={styles.serviceTitle}>{section.title}</UText>
              <UText className={styles.serviceDesc}>
                {section.description}
              </UText>
            </UView>
          ))}
        </UView>
      </UView>
    </UView>
  );
};
