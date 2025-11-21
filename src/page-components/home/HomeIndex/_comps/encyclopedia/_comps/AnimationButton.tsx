import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

export const AnimationButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={cx(styles['btn2'], className)}>
      <span className={styles['spn2']}>{children}</span>
    </button>
  );
};
