import { SlScreenSmartphone } from "react-icons/sl";

import styles from './styles.module.scss';

export const ContextNavItem = () => {
  // hover 之后展示 transform 动画，展示切换文字和联系电话效果
  return <div className={styles['context-nav-item']}>
    <section>
      {/* contact 联系我们 */}
      <div className={styles['contact-phone-wrapper']}>
        <span>联系我们</span>
      </div>
      {/* 联系电话 */}
      <div className={styles['contact-phone-wrapper']}>
        <SlScreenSmartphone />
        <strong>
          400-901-83138
        </strong>
      </div>
    </section>
  </div>;
};