import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';
import { UniversalImage } from '@/components/UniversalImage';

import styles from './styles.module.scss';

interface IntellectualPropertyItem {
  id: string;
  image: string;
  title: string;
  uniqueKey?: string;
}

interface IIntellectualPropertyProps extends IUiCompBaseProps {}

export const IntellectualProperty = forwardRef<
  HTMLDivElement,
  IIntellectualPropertyProps
>((props, ref) => {
  const { className } = props;
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState<{
    item: IntellectualPropertyItem;
  } | null>(null);
  const [countdown, setCountdown] = useState(20); // 倒计时秒数

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 知识产权数据
  const ipData: IntellectualPropertyItem[] = [
    {
      id: 'ip-1',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/一种视觉训练救生圈卡_00-1086x1536.png',
      title: '一种视觉训练救生圈卡',
    },
    {
      id: 'ip-2',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/20240903102156401_00-1086x1536.png',
      title: '视觉训练专利证书',
    },
    {
      id: 'ip-3',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/一种用于视觉功能训练的产品套盒20241029102327201_00-1086x1536.png',
      title: '一种用于视觉功能训练的产品套盒',
    },
    {
      id: 'ip-4',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/证书-上海惟爱医疗科技有限公司2023232084861一种基于视力矫正的视力检测器_00-1086x1536.png',
      title: '一种基于视力矫正的视力检测器',
    },
    {
      id: 'ip-5',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/证书-上海惟爱医疗科技有限公司2023233528291一种视觉采集用校准用定位装置_00-1086x1536.png',
      title: '一种视觉采集用校准用定位装置',
    },
    {
      id: 'ip-6',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/VI-Chat-惟爱智能问答平台V1.0_00-1085x1536.png',
      title: 'VI-Chat 惟爱智能问答平台V1.0',
    },
    {
      id: 'ip-7',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱AI玩眼轴估算软件V1.0_00-1085x1536.png',
      title: '惟爱AI玩眼轴估算软件V1.0',
    },
    {
      id: 'ip-8',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉病历管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉病历管理系统V1.0',
    },
    {
      id: 'ip-9',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉后台用户管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉后台用户管理系统V1.0',
    },
    {
      id: 'ip-10',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉客户关系管理系统【简称：惟爱视觉CRM系统】V1.0_00-1085x1536.png',
      title: '惟爱视觉CRM系统V1.0',
    },
    {
      id: 'ip-11',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉门店管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉门店管理系统V1.0',
    },
    {
      id: 'ip-12',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉配镜管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉配镜管理系统V1.0',
    },
    {
      id: 'ip-13',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉套餐管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉套餐管理系统V1.0',
    },
    {
      id: 'ip-14',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉微商城软件V1.0_00-1085x1536.png',
      title: '惟爱视觉微商城软件V1.0',
    },
    {
      id: 'ip-15',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉用户小程序V1.0_00-1085x1536.png',
      title: '惟爱视觉用户小程序V1.0',
    },
    {
      id: 'ip-16',
      image:
        'https://www.easylook.com.cn/wp-content/uploads/2025/01/惟爱视觉预约管理系统V1.0_00-1085x1536.png',
      title: '惟爱视觉预约管理系统V1.0',
    },
  ];

  // 计算每组的项目数：桌面端5个，移动端2个
  const getItemsPerGroup = () => {
    return window.innerWidth <= 768 ? 2 : 5;
  };

  const [itemsPerGroup, setItemsPerGroup] = useState(getItemsPerGroup());

  // 响应式更新每组项目数
  useEffect(() => {
    const handleResize = () => {
      setItemsPerGroup(getItemsPerGroup());
      setCurrentGroup(0); // 重置到第一组
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 计算总组数（基于实际数据长度，每组固定5个或2个）
  const getTotalGroups = () => {
    const currentItemsPerGroup = window.innerWidth <= 768 ? 2 : 5;
    return Math.ceil(ipData.length / currentItemsPerGroup);
  };

  const totalGroups = getTotalGroups();

  // 获取当前组的数据（动态循环分组）
  const getCurrentGroupData = () => {
    const currentItemsPerGroup = window.innerWidth <= 768 ? 2 : 5;
    const result = [];
    const startIndex = currentGroup * currentItemsPerGroup;

    for (let i = 0; i < currentItemsPerGroup; i++) {
      const index = (startIndex + i) % ipData.length;
      result.push({
        ...ipData[index],
        // 添加一个唯一标识符以避免重复key的问题
        uniqueKey: `${currentGroup}-${index}-${i}`,
      });
    }

    return result;
  };

  // 自动轮播和倒计时
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            setCurrentGroup((prevGroup) => {
              const currentTotalGroups = getTotalGroups();
              return (prevGroup + 1) % currentTotalGroups;
            });
            return 20; // 重置倒计时
          }
          return prevCountdown - 1;
        });
      }, 1000); // 每秒更新一次
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  // 处理点击专利项
  const handleItemClick = (item: IntellectualPropertyItem) => {
    setModal({ item });
  };

  // 处理模态框关闭
  const handleModalClose = () => {
    setModal(null);
    setCountdown(20); // 重置倒计时，确保轮播继续正常运行
  };

  // 手动切换组
  const goToPreviousGroup = () => {
    setCurrentGroup((prev) => {
      const currentTotalGroups = getTotalGroups();
      return (prev - 1 + currentTotalGroups) % currentTotalGroups;
    });
    setCountdown(20); // 重置倒计时
  };

  const goToNextGroup = () => {
    setCurrentGroup((prev) => {
      const currentTotalGroups = getTotalGroups();
      return (prev + 1) % currentTotalGroups;
    });
    setCountdown(20); // 重置倒计时
  };

  const subTitle =
    '我们的知识产权组合涵盖视觉训练技术、智能软件系统和创新产品设计，为行业发展提供强有力的技术支撑';

  return (
    <div
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--IntellectualProperty',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContainerTitle title="知识产权" subtitle={subTitle} />

      <div ref={containerRef} className={cx(styles['ip-container'])}>
        <div className={cx(styles['ip-grid'])}>
          {getCurrentGroupData().map((item) => (
            <div
              key={item.uniqueKey}
              className={cx(styles['ip-item'])}
              onClick={() => handleItemClick(item)}
            >
              <UniversalImage
                src={item.image}
                alt={item.title}
                className={cx(styles['ip-image'])}
                skeletonHeight="100%"
              />
            </div>
          ))}
        </div>

        {/* 轮播控制器 */}
        <div className={cx(styles['carousel-controls'])}>
          {/* 左侧箭头按钮 */}
          <div className={cx(styles['control-buttons'])}>
            <button
              className={cx(styles['control-button'])}
              onClick={goToPreviousGroup}
              aria-label="上一组"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={cx(styles['control-button'])}
              onClick={goToNextGroup}
              aria-label="下一组"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* 右侧倒计时圆圈 */}
          <div className={cx(styles['countdown-circle'])}>
            <svg className={cx(styles['countdown-svg'])} viewBox="0 0 60 60">
              <circle
                className={cx(styles['countdown-background'])}
                cx="30"
                cy="30"
                r="26"
              />
              <circle
                className={cx(styles['countdown-progress'])}
                cx="30"
                cy="30"
                r="26"
                style={{
                  strokeDasharray: `${(countdown / 20) * 163.36} 163.36`,
                }}
              />
            </svg>
            <div className={cx(styles['countdown-text'])}>{countdown}</div>
          </div>
        </div>
      </div>

      {/* Portal渲染模态框到body */}
      {modal &&
        createPortal(
          <>
            {/* 背景遮罩，点击关闭 */}
            <div
              className={cx(styles['modal-backdrop'])}
              onClick={handleModalClose}
            />
            {/* 模态框内容 */}
            <div className={cx(styles['modal-container'])}>
              <div className={cx(styles['modal-content'])}>
                <div className={cx(styles['modal-image-wrapper'])}>
                  <UniversalImage
                    src={modal.item.image}
                    alt={modal.item.title}
                    className={cx(styles['modal-image'])}
                    skeletonHeight="400px"
                    objectFit="contain"
                  />
                </div>
                <div className={cx(styles['modal-title'])}>
                  {modal.item.title}
                </div>
                <button
                  className={cx(styles['modal-close'])}
                  onClick={handleModalClose}
                  aria-label="关闭"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>,
          document.body,
        )}
    </div>
  );
});

IntellectualProperty.displayName = 'IntellectualProperty';
