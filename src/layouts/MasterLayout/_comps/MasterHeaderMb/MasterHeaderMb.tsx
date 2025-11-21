import { useRouter } from '@tanstack/react-router';
import { Drawer, Menu } from 'antd';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';
import { useNavigate } from '__shared__/hooks/useNavigate';

import { UEventButton } from '__shared__/ui-components/UEventButton';

import LogoSvg from '@/assets/images/logo.svg?react';

import { MASTER_HEADER_MENUS } from '@/consts/master-header-const';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

export const MasterHeaderMb = (props: IProps) => {
  const { className, style, ...restProps } = props;

  const router = useRouter();
  const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(true);
  const [keepShowHeader, setKeepShowHeader] = useState(
    router.latestLocation.pathname !== '/',
  );
  const navigate = useNavigate();

  // 滚动监听逻辑 - 与 PC 端相同
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

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterHeaderMb',
      )}
      data-keep-show-header={keepShowHeader}
    >
      <div className={cx(styles['comp-inner'])}>
        <div className={cx(styles['header-logo-wrapper'])}>
          <LogoSvg className={cx(styles['header-logo'])} />
        </div>

        <UEventButton
          className={cx(styles['header-menu-button'])}
          onClick={() => setOpen((p) => !p)}
        >
          <RiMenuLine className={cx(styles['nav-menu-button-icon'])} />
        </UEventButton>

        <Drawer
          open={open}
          destroyOnHidden={true}
          onClose={() => setOpen(false)}
          width={300}
          placement="right"
          classNames={{
            wrapper: cx(styles['nav-menu-drawer-wrapper']),
            header: cx(styles['nav-menu-drawer-header']),
            body: cx(styles['nav-menu-drawer-body']),
            footer: cx(styles['nav-menu-drawer-footer']),
          }}
        >
          <UEventButton
            className={cx(styles['nav-menu-close-button'])}
            onClick={() => setOpen(false)}
          >
            <RiCloseLine
              className={cx(styles['nav-menu-close-icon'])}
              onClick={() => setOpen(false)}
            />
          </UEventButton>

          <div>
            <Menu
              onClick={(e) => {
                setOpen(false);
                navigate({ to: e?.key });
              }}
              mode="inline"
              items={MASTER_HEADER_MENUS as any}
              className={cx(styles['nav-menu-drawer-menu'])}
            />
          </div>
        </Drawer>
      </div>
    </div>
  );
};
