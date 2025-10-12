import { forwardRef, useEffect, useRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import ProductStack from './_comps/ProductStack';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const AboutIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

    // Refs for sections
    const introRef = useRef<HTMLElement>(null);
    const missionRef = useRef<HTMLElement>(null);
    const advantagesRef = useRef<HTMLElement>(null);
    const teamRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);

    const cardsData = [
      {
        id: 3,
        img: '/product-box1.jpg',
      },
      {
        id: 2,
        img: '/product-box6.jpg',
      },
      {
        id: 1,
        img: '/product-box2.jpg',
      },
      {
        id: 4,
        img: '/product-box6.jpg',
      },
    ];

    // Intersection Observer for scroll animations
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles['animate-in']);
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the element is visible
          rootMargin: '0px 0px -10% 0px', // Slight offset for better UX
        },
      );

      // Observe all sections
      const sections = [
        introRef.current,
        missionRef.current,
        advantagesRef.current,
        teamRef.current,
        ctaRef.current,
      ];

      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      // Cleanup
      return () => {
        sections.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    }, []);

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--AboutIndex',
        )}
      >
        {/* Company Introduction */}
        <section
          ref={introRef}
          className={cx(styles.introduction, styles['section-animate'])}
        >
          <div className={styles.container}>
            <div className={styles['intro-content']}>
              <div className={styles['intro-text']}>
                <h2>公司简介</h2>
                <p className={styles.lead}>
                  EasyLook（视立优）是一家专注于视力保护和视觉训练技术的创新型科技公司。
                  我们致力于通过先进的技术手段，为用户提供科学、有效的视力改善解决方案。
                </p>
                <p>
                  自成立以来，我们始终坚持"科技护眼，健康生活"的理念，
                  不断研发和优化视觉训练产品，帮助千万用户改善视力健康，
                  提升生活质量。我们的产品涵盖了视力训练设备、
                  智能检测系统以及个性化训练方案等多个领域。
                </p>
              </div>
              <div className={styles['intro-image']}>
                <ProductStack cardsData={cardsData} />
                {/* <img src="product-box2.jpg" alt="EasyLook 产品" /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          ref={missionRef}
          className={cx(styles['mission-vision'], styles['section-animate'])}
        >
          <div className={styles.container}>
            <div className={styles['mv-grid']}>
              <div className={styles['mv-item']}>
                <div className={styles['mv-icon']}>🎯</div>
                <h3>我们的使命</h3>
                <p>
                  通过创新的视觉训练技术，帮助每个人拥有更清晰的视力，
                  享受更美好的视觉世界，让科技真正服务于人类健康。
                </p>
              </div>
              <div className={styles['mv-item']}>
                <div className={styles['mv-icon']}>🌟</div>
                <h3>我们的愿景</h3>
                <p>
                  成为全球领先的视力健康科技公司，
                  让每个家庭都能享受到专业、便捷的视力保护服务。
                </p>
              </div>
              <div className={styles['mv-item']}>
                <div className={styles['mv-icon']}>💡</div>
                <h3>核心价值观</h3>
                <p>
                  创新驱动、用户至上、科学严谨、持续改进，
                  以专业的态度为用户创造真正有价值的产品。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Advantages */}
        <section
          ref={advantagesRef}
          className={cx(styles.advantages, styles['section-animate'])}
        >
          <div className={styles.container}>
            <h2 className={styles['section-title']}>我们的优势</h2>
            <div className={styles['advantages-grid']}>
              <div className={styles['advantage-item']}>
                <div className={styles['advantage-number']}>01</div>
                <h4>专业技术团队</h4>
                <p>
                  拥有多年视觉科学研究经验的专业团队，确保产品的科学性和有效性
                </p>
              </div>
              <div className={styles['advantage-item']}>
                <div className={styles['advantage-number']}>02</div>
                <h4>先进设备工艺</h4>
                <p>
                  采用最新的视觉训练技术，结合人工智能算法，提供个性化训练方案
                </p>
              </div>
              <div className={styles['advantage-item']}>
                <div className={styles['advantage-number']}>03</div>
                <h4>临床验证效果</h4>
                <p>
                  经过大量临床试验验证，产品效果显著，获得用户和专家的一致认可
                </p>
              </div>
              <div className={styles['advantage-item']}>
                <div className={styles['advantage-number']}>04</div>
                <h4>贴心服务支持</h4>
                <p>提供全方位的售前咨询和售后服务，确保用户获得最佳使用体验</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={teamRef}
          className={cx(styles.team, styles['section-animate'])}
        >
          <div className={styles.container}>
            <h2 className={styles['section-title']}>核心团队</h2>
            <p className={styles['team-intro']}>
              我们的团队由视觉科学、医学、工程技术等多个领域的专家组成，
              共同致力于为用户提供最优质的视力健康解决方案。
            </p>
            <div className={styles['team-image']}>
              <img src="/teammates.jpg" alt="EasyLook 团队" />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          ref={ctaRef}
          className={cx(styles.cta, styles['section-animate'])}
        >
          <div className={styles.container}>
            <div className={styles['cta-content']}>
              <h2>期待与您合作</h2>
              <p>如果您对我们的产品感兴趣，或有任何疑问，欢迎随时联系我们</p>
              <div className={styles['cta-buttons']}>
                <button className={styles['btn-primary']}>联系我们</button>
                <button className={styles['btn-secondary']}>了解产品</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
);
