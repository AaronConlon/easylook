import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import styles from './styles.module.scss';

export const ContactIndex = () => {
  return (
    <UView className={styles.contactIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>联系我们</UText>
        <UView className={styles.content}>
          <UView className={styles.contactSection}>
            <UText className={styles.sectionTitle}>公司地址</UText>
            <UText className={styles.sectionContent}>
              北京市朝阳区XXX大厦XX层
            </UText>
          </UView>
          <UView className={styles.contactSection}>
            <UText className={styles.sectionTitle}>联系电话</UText>
            <UText className={styles.sectionContent}>400-XXX-XXXX</UText>
          </UView>
          <UView className={styles.contactSection}>
            <UText className={styles.sectionTitle}>邮箱地址</UText>
            <UText className={styles.sectionContent}>info@easylook.com</UText>
          </UView>
          <UView className={styles.contactSection}>
            <UText className={styles.sectionTitle}>工作时间</UText>
            <UText className={styles.sectionContent}>
              周一至周五 9:00-18:00
            </UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
