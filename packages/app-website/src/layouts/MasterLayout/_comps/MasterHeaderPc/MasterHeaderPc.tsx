import { RiArrowDownSLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';

import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';
import {
  MASTER_HEADER_MENUS,
  MASTER_ROUTER_PATHS,
} from '@/consts/master-router-paths';

import { ContextNavItem } from './ContextNavItem';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterHeaderPc = (props: IProps) => {
  const { className } = props;

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterHeaderPc',
      )}
    >
      <ScreenMediaWidthCentered className={cx(styles['comp-inner'])}>
        <div className={cx(styles['header-logo-wrapper'])}>
          <LogoSvg className={cx(styles['header-logo'])} />
        </div>

        <div className={cx(styles['header-nav-wrapper'])}>
          <div className={cx(styles['nav-menu-list'])}>
            {MASTER_HEADER_MENUS?.map((item, index) => (
              <USmartLink
                key={`${item?.path}-${index}`}
                to={item?.path}
                className={cx(styles['nav-menu-item'])}
                data-href={item?.path}
              >
                {item.path === MASTER_ROUTER_PATHS['/contact'] ? (
                  <ContextNavItem />
                ) : (
                  <span>{item?.label}</span>
                )}

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
                        {child?.label}
                      </USmartLink>
                    ))}
                  </div>
                ) : null}
              </USmartLink>
            ))}
          </div>
        </div>
      </ScreenMediaWidthCentered>
    </div>
  );
};
