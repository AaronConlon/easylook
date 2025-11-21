import { RiArrowDownSLine } from 'react-icons/ri';
import React from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

import { URouteLink } from '__shared__/ui-components/URouteLink';

import LogoSvg from '@/assets/images/logo.svg?react';

import { MASTER_HEADER_MENUS } from '@/consts/master-header-const';

import { usePageStore } from '@/stores/usePageStore';

import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

export const MasterHeaderPc = (props: IProps) => {
  const { className, style, ...restProps } = props;

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
        <URouteLink to="/" className={cx(styles['header-logo-wrapper'])}>
          <LogoSvg className={cx(styles['header-logo'])} />
        </URouteLink>

        <div className={cx(styles['header-nav-wrapper'])}>
          <div className={cx(styles['nav-menu-list'])}>
            {MASTER_HEADER_MENUS?.map((item, index) => (
              <URouteLink
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
                      <URouteLink
                        key={`${child?.path}-${idx}`}
                        to={child?.path}
                      >
                        {/* 子菜单 Icon */}
                        {renderIcon(child?.icon)}
                        {child?.label}
                      </URouteLink>
                    ))}
                  </div>
                ) : null}
              </URouteLink>
            ))}
          </div>
        </div>
      </ScreenWidthLimitAndCentered>
    </div>
  );
};
