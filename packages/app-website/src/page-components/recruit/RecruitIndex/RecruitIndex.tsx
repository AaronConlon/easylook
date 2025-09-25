import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import styles from './styles.module.scss';

export const RecruitIndex = () => {
  return (
    <UView className={styles.recruitIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>招贤纳士</UText>
        <UView className={styles.content}>
          <UText className={styles.subtitle}>加入我们，共创未来</UText>
          <UView className={styles.jobSection}>
            <UText className={styles.jobTitle}>我们正在寻找优秀的人才</UText>
            <UText className={styles.jobDesc}>
              我们致力于为员工提供良好的工作环境和发展机会，
              如果您对视力健康行业充满热情，欢迎加入我们的团队。
            </UText>
          </UView>
          <UView className={styles.contactInfo}>
            <UText className={styles.contactTitle}>联系方式</UText>
            <UText className={styles.contactDesc}>
              请将简历发送至：hr@easylook.com
            </UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
