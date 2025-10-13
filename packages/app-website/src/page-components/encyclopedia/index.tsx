import dayjs from 'dayjs';
import { useQueryState } from 'nuqs';
import { useMemo, useState } from 'react';
import {
  LuArrowDownWideNarrow,
  LuArrowUpNarrowWide,
  LuBookOpen,
  LuGrid3X3,
  LuList,
} from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import { encyclopediaData } from '@/consts/encyclopedia.data';

import styles from './styles.module.scss';

type SortOrder = 'asc' | 'desc';
type LayoutType = 'list' | 'grid';

export default function EncyclopediaIndex() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [layout, setLayout] = useQueryState<LayoutType>('layout', {
    defaultValue: 'list',
    parse: (value) => (value === 'grid' ? 'grid' : 'list'),
  });

  // 排序后的数据
  const sortedData = useMemo(() => {
    const data = [...encyclopediaData];
    return data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }, [sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const toggleLayout = () => {
    setLayout(layout === 'list' ? 'grid' : 'list');
  };

  return (
    <div className={cx(styles['comp-wrapper'])}>
      <CommonPageHeader
        title="眼界百科"
        subTitle="Encyclopedia"
        bgImage="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2074"
      />

      <section className={cx(styles['encyclopedia-section'])}>
        <div className={cx(styles['section-header'])}>
          <div className={cx(styles['section-title'])}>
            <LuBookOpen className={cx(styles['title-icon'])} />
            <h2>所有文章</h2>
          </div>

          <div
            className={cx(styles['section-controls'])}
            // 暂时去掉
            style={{ display: 'none' }}
          >
            {/* 背景 mask */}
            <div className={cx(styles['control-mask'])} />

            {/* 排序按钮 */}
            <button
              className={cx(styles['control-btn'], styles['sort-btn'])}
              onClick={toggleSortOrder}
              title={sortOrder === 'desc' ? '时间倒序' : '时间顺序'}
            >
              {sortOrder === 'desc' ? (
                <LuArrowDownWideNarrow />
              ) : (
                <LuArrowUpNarrowWide />
              )}
            </button>
            {/* 布局切换按钮 */}

            <button
              className={cx(
                styles['control-btn'],
                styles['layout-btn'],
                styles['active'],
              )}
              onClick={toggleLayout}
              title={layout === 'list' ? '列表视图' : '网格视图'}
            >
              {layout === 'list' ? <LuList /> : <LuGrid3X3 />}
            </button>
          </div>
        </div>
      </section>

      <div
        className={cx(
          styles['encyclopedia-list'],
          layout === 'grid' && styles['grid-layout'],
        )}
      >
        {sortedData.map((item, index) => (
          <article
            key={item.id}
            className={cx(
              styles['encyclopedia-item'],
              layout === 'grid' && styles['grid-item'],
            )}
            onClick={() => {
              window.open(item.link, '_blank');
            }}
            data-delay={index * 100}
          >
            {/* 封面图 */}
            <div className={cx(styles['item-cover'])}>
              {item.cover ? (
                <>
                  <img src={item.cover} alt={item.title} loading="lazy" />
                </>
              ) : (
                <div className={cx(styles['cover-placeholder'])}>
                  <span>暂无图片</span>
                </div>
              )}
            </div>

            {/* 内容区 */}
            <div className={cx(styles['item-content'])}>
              {/* 分类标签 */}
              {item.category && (
                <div className={cx(styles['category-badge'])}>
                  {item.category}
                </div>
              )}

              {/* 时间（Grid 布局显示） */}
              {/* <div className={cx(styles['item-date'])}>
                <LuCalendar />
                <time dateTime={item.date.toString()}>{item.date}</time>
              </div> */}

              {/* 标题 */}
              <h3 className={cx(styles['item-title'])}>{item.title}</h3>

              {/* 描述 */}
              <p className={cx(styles['item-description'])}>
                {item.description || '暂无描述'}
              </p>

              {/* 底部信息（List 布局显示） */}
              <div className={cx(styles['item-footer'])}>
                {/* 来源和标签 */}
                <div className={cx(styles['source-and-tags'])}>
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

                {/* 时间（List 布局显示） */}
                <div className={cx(styles['item-time'])}>
                  {dayjs(item.date).format('YYYY-MM-DD')}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
