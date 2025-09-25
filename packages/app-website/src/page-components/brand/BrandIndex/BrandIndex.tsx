import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import styles from './styles.module.scss';

export const BrandIndex = () => {
  return (
    <UView className={styles.brandIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>品牌产品</UText>
        <UView className={styles.content}>
          <UView className={styles.productSection}>
            <UText className={styles.productTitle}>训练盒</UText>
            <UText className={styles.productDesc}>专业的视力训练设备...</UText>
          </UView>
          <UView className={styles.productSection}>
            <UText className={styles.productTitle}>眼科训练仪</UText>
            <UText className={styles.productDesc}>先进的眼科训练设备...</UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
