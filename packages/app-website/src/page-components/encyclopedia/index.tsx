import { cx } from '----pkg-uni/uni-utils/cx-util';

import { encyclopediaData } from '@/consts/encyclopedia.data';

import styles from './styles.module.scss';

export default function Encyclopedia() {
  return (
    <div>
      <div className={cx(styles['encyclopedia-list'])}>
        {encyclopediaData.map((item, index) => (
          <div key={item.id} className={cx(styles['encyclopedia-item'])}>
            {/* 左侧封面图 */}
            <div className={cx(styles['item-cover'])}>
              {item.cover ? (
                <img src={item.cover} alt={item.title} />
              ) : (
                <div className={cx(styles['cover-placeholder'])}>
                  <span>暂无图片</span>
                </div>
              )}
            </div>

            {/* 右侧内容区 */}
            <div className={cx(styles['item-content'])}>
              {/* 顶部分类标签 */}
              {item.category && (
                <div className={cx(styles['category-badge'])}>
                  {item.category}
                </div>
              )}

              {/* 标题 */}
              <h3 className={cx(styles['item-title'])}>{item.title}</h3>

              {/* 描述 */}
              {item.description && (
                <p className={cx(styles['item-description'])}>
                  {item.description}
                </p>
              )}

              {/* 底部信息 */}
              <div className={cx(styles['item-footer'])}>
                {/* 来源和标签 */}
                <div className={cx(styles['source-and-tags'])}>
                  {item.source && (
                    <span className={cx(styles['source'])}>{item.source}</span>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div className={cx(styles['tags'])}>
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={cx(styles['tag'])}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 时间 */}
                <div className={cx(styles['item-time'])}>{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
