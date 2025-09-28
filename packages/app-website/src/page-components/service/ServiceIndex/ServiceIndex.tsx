import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import styles from './styles.module.scss';

export const ServiceIndex = () => {
  return (
    <UView className={styles.serviceIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>服务场景</UText>
        <UView className={styles.content}>
          <UView className={styles.serviceSection}>
            <UText className={styles.serviceTitle}>视立优医疗</UText>
            <UText className={styles.serviceDesc}>
              专业的医疗级视力服务...
            </UText>
          </UView>
          <UView className={styles.serviceSection}>
            <UText className={styles.serviceTitle}>视立优健康</UText>
            <UText className={styles.serviceDesc}>全面的健康管理服务...</UText>
          </UView>
          <UView className={styles.serviceSection}>
            <UText className={styles.serviceTitle}>视立优教育</UText>
            <UText className={styles.serviceDesc}>科学的教育训练方案...</UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
