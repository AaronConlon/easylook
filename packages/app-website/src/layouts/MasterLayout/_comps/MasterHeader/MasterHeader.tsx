import React, { useRef, useState } from 'react';
import _ from 'lodash';
import { Menu, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UNbsp } from '----pkg-uni/uni-ui-components/UNbsp';
import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

type IMenuItem = {
  key?: string; // 'home',
  label?: string; // '首页',
  width?: number; //  100,
  tx?: number; //  100,
  children?: IMenuItem[];
  // content: 'Home-content',
};

export const MasterHeader = (props: IProps) => {
  const { className } = props;
  const [curItem, setCurItem] = useState<IMenuItem | null>(null);

  const items: IMenuItem[] = [
    {
      key: 'home',
      label: '首页',
      width: 100,
      tx: 0,
      // content: 'Home-content',
    },
    {
      key: 'about',
      label: '关于我们',
      width: 300,
      tx: -100,
      // children: [
      //   {
      //     key: 'Item 1',
      //     label: 'Item 1',
      //   },
      // ],
      // content: 'Home-content',
    },
    {
      key: 'user',
      label: '用户故事',
      width: 300,
      tx: -1 * (300 + 100),
      // content: 'Home-content',
    },
    {
      key: 'us',
      label: '联系我们',
      width: 500,
      tx: -1 * (300 + 100 + 300),
      // content: 'Home-conte/nt',
    },
  ];

  // 用 debounce 控制延迟隐藏
  const hideContent = _.debounce(() => {
    // setCurItem(null);
    // }, 10);
  }, 100);

  function onEnterButton(item?: IMenuItem) {
    if (!item) return undefined;
    console.log('onEnterButton', item.key);

    hideContent.cancel(); // 取消隐藏
    setCurItem(item);
  }

  function onLeaveButton() {
    console.log('onLeaveButton');
    hideContent();
  }

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterHeader',
      )}
    >
      <div>DEBUG: {JSON.stringify(curItem)}</div>

      <div className={cx(styles['comp-inner'])}>
        <div className={cx(styles['nav-menu-list'])}>
          {items?.map((item, i) => (
            <div
              key={item?.key}
              className={cx(styles['nav-menu-item'], {
                [styles['nav-menu-item--active']]: item?.key === curItem?.key,
              })}
              onMouseEnter={() => onEnterButton(item)}
              onMouseLeave={onLeaveButton}
            >
              {item?.label}
            </div>
          ))}
        </div>

        <div
          className={cx(styles['nav-content-list-wrapper'], {
            [styles['nav-content-list--open']]: curItem,
          })}
          style={
            {
              width: `${curItem?.width || 0}px`,
            } as React.CSSProperties
          }
        >
          <div
            className={cx(styles['nav-content-list-inner'])}
            style={
              {
                '--tx': `${curItem?.tx || 0}px`,
              } as React.CSSProperties
            }
          >
            {items?.map((item, i) => (
              <div
                key={item?.key}
                className={cx(styles['nav-content-item'], {
                  [styles['nav-content-item--active']]: item?.key === curItem,
                  [styles['nav-content-item--home']]: item?.key === 'home',
                  [styles['nav-content-item--about']]: item?.key === 'about',
                  [styles['nav-content-item--user']]: item?.key === 'user',
                })}
                style={
                  {
                    width: item?.width || 50,
                  } as React.CSSProperties
                }
                // onMouseEnter={() => onEnterButton(item?.label)}
                // onMouseLeave={onLeaveButton}
              >
                {item?.label} - CONTENT
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <UView row>
  //     <USmartLink to={URL_PATHS_CONST['/'].name}>
  //       {URL_PATHS_CONST['/'].name}
  //     </USmartLink>
  //     <UNbsp />
  //     <UNbsp />
  //
  //     <USmartLink to={URL_PATHS_CONST['/my'].name}>
  //       {URL_PATHS_CONST['/my'].name}
  //     </USmartLink>
  //     <UNbsp />
  //     <UNbsp />
  //
  //     <USmartLink to={URL_PATHS_CONST['/test/any'].name}>
  //       {URL_PATHS_CONST['/test/any'].name}
  //     </USmartLink>
  //     <UNbsp />
  //     <UNbsp />
  //
  //     <USmartLink to={URL_PATHS_CONST['/test/uni-comp'].name}>
  //       {URL_PATHS_CONST['/test/uni-comp'].name}
  //     </USmartLink>
  //   </UView>
  // );
};
