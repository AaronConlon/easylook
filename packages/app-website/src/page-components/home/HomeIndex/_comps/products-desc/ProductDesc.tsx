import { forwardRef } from 'react';
import { RiAlarmWarningFill, RiFileWarningFill } from 'react-icons/ri';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { ProductCard, type ProductItem } from './_comps/ProductCard';

import styles from './styles.module.scss';

interface IProductDescProps extends IUiCompBaseProps {}

export const ProductDesc = forwardRef<HTMLDivElement, IProductDescProps>(
  (props, ref) => {
    const { className } = props;

    const productData: ProductItem[] = [
      {
        id: 'definition',
        title: '定义',

        content:
          '视觉训练盒（Visual Training Box）：一种集成了多种视觉刺激任务的设备或工具，通过规律的光、图案、颜色或图像变化，训练眼睛的调节和协调能力。',
        features: [
          '儿童（预防或改善弱视、斜视）',
          '近视或远视患者（辅助视觉训练）',
          '运动员或电竞玩家（提高反应速度、眼手协调和空间感知）',
        ],
        image:
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      },
      {
        id: 'functions',
        title: '主要功能',
        content: '通过多种训练模式，全面提升视觉能力和眼部健康水平。',
        features: [
          '调节和聚焦训练 - 提高眼睛对远近景物切换的灵活性',
          '双眼协调训练 - 改善斜视或弱视问题',
          '视觉注意力和反应能力训练 - 提升反应速度',
          '色觉和空间感知训练 - 增强视觉识别能力',
        ],
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      },
      {
        id: 'forms',
        title: '使用形式',
        content: '多样化的训练方式，满足不同用户的需求和使用场景。',
        features: [
          '物理盒子设备 - 带有显示屏或光源的实物设备',
          '软件/数字训练盒 - 手机或平板应用程序',
          '混合方式 - 实物训练盒 + 数字屏幕或 VR 技术',
        ],
        image:
          'https://images.unsplash.com/photo-1633114128729-0a8dc13406b9?w=400&h=300&fit=crop',
      },
      {
        id: 'scenarios',
        title: '适用场景',
        content: '针对不同年龄段和需求群体，提供专业的视觉训练解决方案。',
        features: [
          '儿童视力保健 - 预防弱视、改善眼球调节能力',
          '学生用眼疲劳 - 缓解长时间近距离用眼后的视觉疲劳',
          '运动员训练 - 提高视觉反应速度和眼手协调',
          '近视/远视辅助 - 通过训练延缓视力恶化',
        ],
        image:
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop',
      },
    ];

    const subTitle =
      '视觉训练盒通过科学的训练方法，帮助改善视觉能力，不能替代正规医疗，如有视力问题应先咨询眼科医生';

    return (
      <div
        ref={ref}
        id="product-desc"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--ProductDesc',
        )}
      >
        <ContainerTitle title="视觉训练盒介绍" subtitle={subTitle} />

        <br />

        <div className={cx(styles['content-grid'])}>
          {productData.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              index={index}
              styles={styles}
            />
          ))}
        </div>

        <div className={cx(styles['notice-section'])}>
          {/* <div className={cx(styles['notice-image'])}>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
              alt="注意事项"
            />
            <div className={cx(styles['image-overlay'])} />
          </div> */}

          <div className={cx(styles['notice-content-wrapper'])}>
            <div className={cx(styles['notice-content'])}>
              <h3>
                <RiAlarmWarningFill /> 注意事项
              </h3>
              <ul>
                <li>
                  视觉训练盒<strong>不能替代正规医疗</strong>
                  ，如弱视或高度近视应先咨询眼科医生
                </li>
                <li>
                  训练应<strong>循序渐进</strong>，避免过度刺激造成眼疲劳
                </li>
                <li>
                  对儿童使用时，需<strong>家长监督</strong>
                  ，确保训练时间和强度合理
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
