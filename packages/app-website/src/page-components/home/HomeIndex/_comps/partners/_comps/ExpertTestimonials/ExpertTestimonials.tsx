import { forwardRef } from 'react';
import { LuQuote } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

interface Expert {
  name: string;
  title: string;
  hospital: string;
  avatar: string;
  testimonial: string;
}

export const ExpertTestimonials = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

    const experts: Expert[] = [
      {
        name: '张明教授',
        title: '北京协和医院眼科主任',
        hospital: '北京协和医院',
        avatar:
          'https://de4965e.webp.li/blog-images/2025/10/ae36e788e9bdbfb050a82eb475001ee6.png',
        testimonial:
          '惟爱医疗的视觉训练产品在临床应用中表现出色，为患者带来了显著的治疗效果。',
      },
      {
        name: '李华医生',
        title: '上海交通大学附属医院眼科专家',
        hospital: '上海交通大学附属医院',
        avatar:
          'https://de4965e.webp.li/blog-images/2025/10/ae36e788e9bdbfb050a82eb475001ee6.png',
        testimonial:
          '视立优的专业化产品和服务体系，为眼视光行业树立了新的标杆。',
      },
      {
        name: '王芳主任',
        title: '复旦大学附属眼耳鼻喉科医院主任医师',
        hospital: '复旦大学附属眼耳鼻喉科医院',
        avatar:
          'https://de4965e.webp.li/blog-images/2025/10/ae36e788e9bdbfb050a82eb475001ee6.png',
        testimonial:
          '惟爱医疗在斜弱视治疗领域的创新成果，为更多患者带来了康复的希望。',
      },
      {
        name: '陈刚教授',
        title: '中山大学中山眼科中心教授',
        hospital: '中山大学中山眼科中心',
        avatar:
          'https://de4965e.webp.li/blog-images/2025/10/ae36e788e9bdbfb050a82eb475001ee6.png',
        testimonial: '与惟爱医疗的合作让我们看到了眼健康事业的美好未来。',
      },
    ];

    return (
      <section
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--ExpertTestimonials',
        )}
      >
        <div className={cx(styles['container'])}>
          {/* 标题区域 */}
          <div className={cx(styles['header'], 'scroll-animate')}>
            <ContainerTitle
              title="专家寄语123"
              subtitle="来自行业专家的认可与支持"
            />
          </div>

          {/* 专家卡片网格 */}
          <div className={cx(styles['experts-grid'])}>
            {experts.map((expert, index) => (
              <div
                key={index}
                className={cx(styles['expert-card'], 'scroll-animate')}
                data-delay={index * 100}
              >
                <div className={cx(styles['card-header'])}>
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className={cx(styles['avatar'])}
                  />
                  <div className={cx(styles['expert-info'])}>
                    <h3 className={cx(styles['expert-name'])}>{expert.name}</h3>
                    <p className={cx(styles['expert-title'])}>{expert.title}</p>
                  </div>
                  <LuQuote className={cx(styles['quote-icon'])} />
                </div>
                <p className={cx(styles['testimonial'])}>
                  {expert.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
