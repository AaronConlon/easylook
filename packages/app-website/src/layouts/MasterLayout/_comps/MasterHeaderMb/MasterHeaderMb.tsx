import React, { useState } from 'react';
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiMenu4Line,
  RiMenuLine,
} from 'react-icons/ri';
import { Drawer, Menu } from 'antd';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';
import { USmartLink } from '----pkg-platform/h5/h5-ui-components/USmartLink--h5';

import { UEventButton } from '----pkg-uni/uni-ui-components/UEventButton';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';

import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';
import { MASTER_HEADER_MENUS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterHeaderMb = (props: IProps) => {
  const { className } = props;

  const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={cx(
        styles['comp-wrapper'],

        className,
        'g-uni-comp--MasterHeaderPc',
      )}
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
