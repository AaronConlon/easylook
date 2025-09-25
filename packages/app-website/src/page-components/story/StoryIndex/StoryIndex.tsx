import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import styles from './styles.module.scss';

export const StoryIndex = () => {
  return (
    <UView className={styles.storyIndex}>
      <UView className={styles.container}>
        <UText className={styles.title}>公司动态</UText>
        <UView className={styles.content}>
          <UView className={styles.newsSection}>
            <UText className={styles.newsTitle}>公司新闻</UText>
            <UText className={styles.newsDesc}>
              最新的公司资讯和发展动态...
            </UText>
          </UView>
          <UView className={styles.newsSection}>
            <UText className={styles.newsTitle}>行业资讯</UText>
            <UText className={styles.newsDesc}>
              行业内的最新趋势和技术发展...
            </UText>
          </UView>
        </UView>
      </UView>
    </UView>
  );
};
