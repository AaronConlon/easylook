import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IStoryIndexProps extends IUiCompBaseProps {}

export const StoryIndex = forwardRef<HTMLDivElement, IStoryIndexProps>(
  (props, ref) => {
    const { className } = props;

    const page$_about = usePageStore((s) => s.page$_pageItem.about);

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--StoryIndex',
        )}
      >
        <CommonPageHeader
          title={page$_about.story.title}
          subTitle={page$_about.story.subtitle}
        />

        {/* 发展历程内容 */}
        <section className={cx(styles['story-section'])}>
          <div className={cx(styles['story-container'])}>
            <div className={cx(styles['story-header'], 'scroll-animate')}>
              <p className={cx(styles['story-description'])}>
                {page$_about.story.description}
              </p>
            </div>

            <div className={cx(styles['timeline'])}>
              {page$_about.story.timeline.map((item, index) => (
                <div
                  key={index}
                  className={cx(styles['timeline-item'], 'scroll-animate')}
                  data-delay={`${index * 100}`}
                >
                  <div className={cx(styles['timeline-year'])}>{item.year}</div>
                  <div className={cx(styles['timeline-content'])}>
                    <h3 className={cx(styles['timeline-title'])}>
                      {item.title}
                    </h3>
                    <p className={cx(styles['timeline-description'])}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  },
);

StoryIndex.displayName = 'StoryIndex';
