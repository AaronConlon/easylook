import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import styles from './styles.module.scss';

export const RecruitIndex = () => {
  const page$_share = usePageStore((s) => s.page$_share);
  const recruitConfig = page$_share.recruit;

  return (
    <UView className={styles.recruitIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>{recruitConfig.title}</UText>
        <UView className={styles.content}>
          <UText className={styles.subtitle}>{recruitConfig.subtitle}</UText>
          <UView className={styles.jobSection}>
            <UText className={styles.jobTitle}>
              {recruitConfig.sections.intro.title}
            </UText>
            <UText className={styles.jobDesc}>
              {recruitConfig.sections.intro.description}
            </UText>
          </UView>
          <UView className={styles.contactInfo}>
            <UText className={styles.contactTitle}>
              {recruitConfig.sections.contact.title}
            </UText>
            <UText className={styles.contactDesc}>
              {recruitConfig.sections.contact.description}
            </UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
