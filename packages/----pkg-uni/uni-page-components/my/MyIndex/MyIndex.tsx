import _ from 'lodash';
import React, { useRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UInput } from '----pkg-uni/uni-ui-components/UInput';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UCheckbox } from '----pkg-uni/uni-ui-components/UCheckbox';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { USwitch } from '----pkg-uni/uni-ui-components/USwitch';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UNbsp } from '----pkg-uni/uni-ui-components/UNbsp';
import { UStrong } from '----pkg-uni/uni-ui-components/UStrong';
import { UDnDItem, UDnDWrapper } from '----pkg-uni/uni-ui-components/UDnD';
import { UCode } from '----pkg-uni/uni-ui-components/UCode';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';
import { useMessage } from '----pkg-uni/uni-hooks/useMessage';

import IconFont from '----pkg-uni/uni-assets/iconfont';

import { URL_PATHS_CONST } from '----pkg-uni/uni-routers/uni-router';

import styles from './styles.module.scss';

export const MyIndex = () => {
  const navigate = useNavigate();
  const { message } = useMessage();

  const [items, setItems] = useState([
    { id: '1', bgColor: '#ff1414', x: 10, y: 40, label: '苹果 A' },
    { id: '2', bgColor: '#d5e100', x: 140, y: 80, label: '香蕉 B' },
    { id: '3', bgColor: '#ff9100', x: 183, y: 50, label: '橙子 O' },
  ]);

  // const draggingRef = useRef<any>({ tx: 0, ty: 0 });
  const itemsParentRef = useRef<any>(null);

  const onDragEnd = (e?: any) => {
    console.log('onDragEnd', e);

    setItems((prev) =>
      prev.map((item) =>
        item.id === e?.active.id
          ? {
              ...item,
              // x: item.x + (draggingRef.current?.tx || 0),
              // y: item.y + (draggingRef.current?.ty || 0),
              x: item.x + (e.delta.x || 0),
              y: item.y + (e.delta.y || 0),
            }
          : item,
      ),
    );
  };

  return (
    <UPageWrapper className={styles['comp-wrapper']} edges={['left', 'right']}>
      <UView className={styles['icon-test-block']} row>
        <UText>MyIndex</UText>
        <UStrong>AAAAAAAAAAa</UStrong>
        <IconFont name="i-test-tube-line" />
        <IconFont name="i-user-smile-line" />
      </UView>

      {/* <KKK /> */}

      <UView row>
        <IconFont name="i-checkbox-blank-circle-fill" />
        <UText>中文输入法2</UText>
      </UView>

      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />

      <UHr />
      <UHr />

      <UView ref={itemsParentRef} className={cx(styles['dnd-wrapper'])}>
        <UDnDWrapper
          onDragEnd={onDragEnd}
          snapGrid={5}
          parentElementRef={itemsParentRef}
        >
          {items.map((item) => (
            <UDnDItem
              key={item.id}
              item={item}
              className={cx(styles['dnd-item'])}
              style={{
                backgroundColor: item.bgColor,
              }}
              classNames={{
                textClassName: styles['dnd-item-text'],
              }}
            />
          ))}
        </UDnDWrapper>
      </UView>

      <UHr />
      <UHr />

      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />
      <UHr />

      <UView row>
        <UButton
          size="small"
          onClick={() => {
            message.open({
              type: 'success',
              // eslint-disable-next-line @typescript-eslint/no-deprecated
              content: `${_.random(5, 34532423324245).toString().substr?.(0, _.random(1, 34))} is a Number?`,
              duration: 33333,
            });
          }}
        >
          success
        </UButton>

        <UButton
          size="small"
          onClick={() => {
            message.open({
              type: 'error',
              // eslint-disable-next-line @typescript-eslint/no-deprecated
              content: `${_.random(5, 34532423324245).toString().substr?.(0, _.random(1, 34))} is a Number?`,
              duration: 33333,
            });
          }}
        >
          error
        </UButton>

        <UButton
          size="small"
          onClick={() => {
            message.open({
              type: 'info',
              // eslint-disable-next-line @typescript-eslint/no-deprecated
              content: `${_.random(5, 34532423324245).toString().substr?.(0, _.random(1, 34))} is a Number?`,
              duration: 33333,
            });
          }}
        >
          info
        </UButton>
      </UView>

      <UView row>
        <UText>我的两边</UText>
        <IconFont name="i-close-circle-line" />
        <UText>是图标可以吗？</UText>
      </UView>

      <UView row>
        <IconFont
          name="i-checkbox-blank-circle-line"
          size={40}
          // color="yellow"
        />
        <UText>Eng Text 英文文字</UText>
      </UView>

      <UView row>
        <IconFont name="i-close-circle-line" />
        <UText>如果是中文呢</UText>
      </UView>

      <UView row>
        <IconFont name="i-close-line" />
        <IconFont name="i-search-2-line" />
        <IconFont name="i-syringe-line" />
      </UView>

      <UHr />

      <UView row>
        <UText>
          <UStrong>
            Admin Layout and here is <UCode>CODE STYLE</UCode>
          </UStrong>
        </UText>
      </UView>

      <UView row className={styles['demo-admin-layout']}>
        <UView className={styles['da-sidebar']}>
          <UText>Sidebar</UText>
          {/* <UButton variant="solid" color="pink" className={styles['but-pink']}> */}
          <UButton className={styles['but-pink']}>AAAAA</UButton>
        </UView>

        <UView className={styles['da-main']}>
          <UView row>
            <UText>
              [Button]
              <UNbsp />
            </UText>
            <UButton
              onClick={() => {
                navigate({ to: URL_PATHS_CONST['/test/any'].name });
              }}
            >
              Button
            </UButton>
          </UView>

          <UView row>
            <UText>[Switch]</UText>
            <USwitch />
          </UView>

          <UView row>
            <UText>[Checkbox]</UText>
            <UCheckbox />
          </UView>

          <UView row>
            <UText>
              [Input]
              <UNbsp />
            </UText>

            <UInput />
          </UView>

          {_.range(1, 38)?.map((n) => (
            <UView key={n}>
              <UText>Main.{n}</UText>
            </UView>
          ))}
        </UView>
      </UView>

      <UView className={styles['input-test-block']} row>
        <UText>
          [Input]
          <UNbsp />
        </UText>
        <UInput />
      </UView>
    </UPageWrapper>
  );
};
