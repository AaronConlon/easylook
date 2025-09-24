import { useRouter } from '@tanstack/react-router';
import _, { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';

import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';
import type { IMenuItem } from '@/consts/master-router-paths';
import { MASTER_HEADER_MENUS } from '@/consts/master-router-paths';

import { ContextNavItem } from './ContextNavItem';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterHeaderPc = (props: IProps) => {
  const { className } = props;

  const router = useRouter();
  const [curItem, setCurItem] = useState<IMenuItem | null>(null);
  const [isOnWrapper, setIsOnWrapper] = useState(false);

  console.log('pathname:', router.latestLocation.pathname);

  const [keepShowHeader, setKeepShowHeader] = useState(
    router.latestLocation.pathname === '/' ? false : true,
  );
  // const [keepShowHeader, setKeepShowHeader] = useState(false);

  // 用 debounce 控制延迟隐藏
  const hideNavItem = _.debounce(() => {
    // 如果有 children 不要关闭
    if (curItem?.children) return;

    setCurItem(null);
  }, 100);

  const onNavItemEnter = (item?: IMenuItem | null) => {
    if (!item) return undefined;

    hideNavItem.cancel(); // 取消隐藏
    setCurItem(item);
  };

  const onNavItemLeave = (item?: IMenuItem | null) => {
    hideNavItem();
  };

  // 用 debounce 控制延迟隐藏
  const hideHeaderWrapper = _.debounce(() => {
    setIsOnWrapper(false);

    // 如果离开了 wrapper，就不要选中任何 item
    setCurItem(null);
  }, 200);

  const onHeaderWrapperEnter = () => {
    hideHeaderWrapper.cancel(); // 取消隐藏
    setIsOnWrapper(true);
  };

  const onHeaderWrapperLeave = () => {
    hideHeaderWrapper();
    // setIsOnWrapper(false);
    //
    // // 如果离开了 wrapper，就不要选中任何 item
    // setCurItem(null);
  };
  const handleScrollRef = useRef(
    debounce(() => {
      // 如果不是首页，则不需要这个机制
      if (router.latestLocation.pathname !== '/') return;

      // 检查当前滚动位置
      const scrollTop = window.scrollY;
      // 窗口高度
      const windowHeight = window.innerHeight;
      if (scrollTop >= windowHeight) {
        setKeepShowHeader(true);
      } else {
        setKeepShowHeader(false);
      }
    }, 100),
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScrollRef.current);

    return () => {
      window.removeEventListener('scroll', handleScrollRef.current);
    };
  }, []);

  useEffect(() => {
    setCurItem(null);
    // setKeepShowHeader(router.latestLocation.pathname === '/' ? false : true);
  }, [router.latestLocation.pathname]);

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isOnWrapper']]: isOnWrapper,
        },
        className,
        'g-uni-comp--MasterHeaderPc',
      )}
      data-keep-show-header={keepShowHeader}
      data-cur-path={curItem?.key}
      onMouseEnter={onHeaderWrapperEnter}
      onMouseLeave={onHeaderWrapperLeave}
    >
      <ScreenMediaWidthCentered className={cx(styles['comp-inner'])}>
        <div className={cx(styles['header-logo-wrapper'])}>
          <LogoSvg className={cx(styles['header-logo'])} />
        </div>

        <div className={cx(styles['header-nav-wrapper'])}>
          <div className={cx(styles['nav-menu-list'])}>
            {MASTER_HEADER_MENUS?.map((item, index) => (
              <USmartLink
                key={`${item?.key}-${index}`}
                to={item?.key}
                className={cx(styles['nav-menu-item'], {
                  [styles['nav-menu-item--isOnWrapper']]: isOnWrapper,

                  [styles['nav-menu-item--active']]: item?.key === curItem?.key,
                })}
                // @ts-ignore
                onMouseEnter={() => onNavItemEnter(item)}
                // @ts-ignore
                onMouseLeave={() => onNavItemLeave(item)}
              >
                {item.key === '/contact' ? (
                  <ContextNavItem />
                ) : (
                  <span>{item?.label}</span>
                )}

                {item?.children ? (
                  <RiArrowDownSLine
                    className={cx(styles['nav-menu-down-icon'])}
                  />
                ) : null}
              </USmartLink>
            ))}
          </div>
          <div
            className={cx(styles['header-nav-popup-wrapper'], {
              [styles['header-nav-popup-wrapper--open']]:
                isOnWrapper && curItem?.children,
            })}
          >
            <div className={cx(styles['header-nav-popup-inner'])}>
              {curItem?.children
                ? curItem?.children.map((item) => (
                    <USmartLink
                      key={item?.key}
                      to={item?.key}
                      className={cx(
                        styles['header-nav-popup-sub-item-link'],
                        'hvr-shutter-out-vertical',
                      )}
                    >
                      {item?.label}
                    </USmartLink>
                  ))
                : null}
            </div>
          </div>
        </div>
      </ScreenMediaWidthCentered>
    </div>
  );
};
