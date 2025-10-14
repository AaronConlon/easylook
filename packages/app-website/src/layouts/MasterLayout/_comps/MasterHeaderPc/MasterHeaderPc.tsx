import { RiArrowDownSLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';
import { MASTER_HEADER_MENUS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterHeaderPc = (props: IProps) => {
  const { className } = props;

  const page$_share = usePageStore((s) => s.page$_share);

  const renderIcon = (icon?: React.ComponentType | React.ReactNode) => {
    if (!icon) return null;

    // 如果是函数组件，则渲染它
    if (typeof icon === 'function') {
      const IconComponent = icon as React.ComponentType;
      return <IconComponent />;
    }

    // 否则直接返回（已经是 ReactNode）
    return icon;
  };

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterHeaderPc',
      )}
    >
      <ScreenWidthLimitAndCentered className={cx(styles['comp-inner'])}>
        <USmartLink to="/" className={cx(styles['header-logo-wrapper'])}>
          <LogoSvg className={cx(styles['header-logo'])} />
        </USmartLink>

        <div className={cx(styles['header-nav-wrapper'])}>
          <div className={cx(styles['nav-menu-list'])}>
            {MASTER_HEADER_MENUS?.map((item, index) => (
              <USmartLink
                key={`${item?.path}-${index}`}
                to={item?.path}
                className={cx(styles['nav-menu-item'])}
                data-href={item?.path}
              >
                {/* 主菜单 Icon */}
                {renderIcon(item?.icon)}
                <span>{item?.label}</span>

                {item?.children ? (
                  <RiArrowDownSLine
                    className={cx(styles['nav-menu-down-icon'])}
                  />
                ) : null}

                {/* Children Navigation */}
                {item?.children?.length ? (
                  <div className={cx(styles['nav-menu-children-wrapper'])}>
                    {item?.children?.map((child, idx) => (
                      <USmartLink
                        key={`${child?.path}-${idx}`}
                        to={child?.path}
                      >
                        {/* 子菜单 Icon */}
                        {renderIcon(child?.icon)}
                        {child?.label}
                      </USmartLink>
                    ))}
                  </div>
                ) : null}
              </USmartLink>
            ))}
          </div>
        </div>
      </ScreenWidthLimitAndCentered>
    </div>
  );
};
