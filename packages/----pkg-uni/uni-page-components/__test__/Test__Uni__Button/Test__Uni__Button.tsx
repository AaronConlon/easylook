import React, { useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UText } from '----pkg-uni/uni-ui-components/UText';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import UIcon from '----pkg-uni/uni-assets/iconfont';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

export interface IProps extends IUiCompBaseProps {}

export const Test__Uni__Button = (props: IProps) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, ...restProps } = props;

  // const [loading1, setLoading1] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  return (
    <UView
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
        'g-comp--Test__Uni__Button',
      )}
      key="p1"
      // style={{ height: 500 }}
      {...restProps}
    >
      {/* <UView c<>lassName={cx(styles['solid1-box'], '__DEBUG__STYLES__')} key="a2"> */}
      {/*   <UButton color="default" variant="solid"> */}
      {/*     Solid13 */}
      {/*   </UButton> */}

      {/*   <UButton color="default" variant="outlined"> */}
      {/*     Outlined */}
      {/*   </UButton> */}

      {/*   <UButton color="default" variant="dashed"> */}
      {/*     Dashed */}
      {/*   </UButton> */}

      {/*   <UButton color="default" variant="filled"> */}
      {/*     Filled */}
      {/*   </UButton> */}

      {/*   <UButton color="default" variant="text"> */}
      {/*     Text */}
      {/*   </UButton> */}

      {/*   <UButton color="default" variant="link"> */}
      {/*     Link */}
      {/*   </UButton> */}
      {/* </UView></> */}

      <UView row wrap>
        <UButton type="default">default</UButton>
        <UButton type="default" size="large">
          default-large
        </UButton>
        <UButton type="dashed" size="small">
          dashed
        </UButton>
        <UButton type="link">link2</UButton>
        <UButton type="text">text3</UButton>
        <UButton
          loading={loading1}
          onClick={() => {
            // setLoading1(false);
            setLoading1(true);

            setTimeout(() => {
              setLoading1(false);
            }, 3000);
          }}
        >
          text4
        </UButton>

        <UButton
          type="primary"
          loading={loadingSearch}
          // loading
          onClick={() => {
            // setLoading1(false);
            setLoadingSearch(true);

            setTimeout(() => {
              setLoadingSearch(false);
            }, 2000);
          }}
          icon={<UIcon name="i-search-line" color="deeppink" />}
        >
          搜索2
        </UButton>
        <UButton type="default" ghost>
          default-ghost
        </UButton>
        <UButton type="default" danger>
          default-danger
        </UButton>
        <UButton type="default" danger ghost>
          default-danger-ghost
        </UButton>

        <UButton type="primary" danger ghost>
          default-danger-ghost
        </UButton>

        <UButton type="primary" disabled>
          primary-disabled
        </UButton>

        <UButton type="default" disabled>
          default-disabled
        </UButton>

        <UButton disabled>disabled</UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap>
        <UButton
          type="primary"
          shape="circle"
          icon={<UIcon name="i-test-tube-fill" color="#e5ff00" />}
        />

        <UButton
          type="primary"
          shape="round"
          icon={<UIcon name="i-home-6-fill" color="#e5ff00" />}
          iconPosition="end"
        >
          CIRCLE2
        </UButton>

        <UButton
          // type="primary"
          shape="round"
          size="small"
          icon={<UIcon name="i-user-smile-line" />}
        >
          Small
        </UButton>

        <UButton
          type="primary"
          // shape="round"
          size="large"
          loading
          // icon={<UIcon name="i-codepen" />}
          // loading={{
          //   icon: <UIcon name="i-codepen" />,
          // }}
        >
          Large
        </UButton>

        <UButton
          type="primary"
          shape="round"
          iconPosition="end"
          icon={<UIcon name="i-user-smile-line" />}
        >
          确定
        </UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap className={cx(styles['solid1-box'])} gap={30}>
        <UButton color="default" variant="solid">
          Solid13
        </UButton>

        <UButton color="default" variant="outlined">
          Outlined
        </UButton>

        <UButton color="default" variant="dashed">
          Dashed
        </UButton>

        <UButton color="default" variant="filled">
          Filled
        </UButton>

        <UButton color="default" variant="text">
          Text
        </UButton>

        <UButton color="default" variant="link">
          Link
        </UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap gap={5}>
        <UButton color="primary" variant="solid">
          Solid2
        </UButton>
        <UButton color="primary" variant="outlined">
          Outlined
        </UButton>
        <UButton color="primary" variant="dashed">
          Dashed11
        </UButton>
        <UButton color="primary" variant="filled">
          Filled3
        </UButton>
        <UButton color="primary" variant="text">
          Text
        </UButton>
        <UButton color="primary" variant="link">
          Link
        </UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap gap="large">
        <UButton
          color="danger"
          variant="solid"
          icon={<UIcon name="i-syringe-line" />}
        >
          Solid3
        </UButton>
        <UButton color="danger" variant="outlined">
          Outlined
        </UButton>
        <UButton color="danger" variant="dashed">
          Dashed
        </UButton>
        <UButton color="danger" variant="filled">
          Filled
        </UButton>
        <UButton color="danger" variant="text">
          Text
        </UButton>
        <UButton color="danger" variant="link">
          Link
        </UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap>
        <UButton color="pink" variant="solid">
          Solid4
        </UButton>
        <UButton
          color="pink"
          variant="outlined"
          icon={<UIcon name="i-codepen" />}
        >
          Outlined
        </UButton>
        <UButton color="pink" variant="dashed">
          Dashed
        </UButton>
        <UButton color="pink" variant="filled">
          <UView className={cx(styles['solid4-filled-view'])} row wrap>
            <UIcon
              name="i-codepen"
              className={cx(styles['solid4-filled-view-icon'])}
            />
            <UText>EXT</UText>
          </UView>
        </UButton>
        <UButton color="pink" variant="text" icon={<UIcon name="i-codepen" />}>
          Text
        </UButton>
        <UButton color="pink" variant="link">
          Link
        </UButton>
      </UView>

      <UView row wrap>
        <UButton variant="solid">Solid4</UButton>
        <UButton variant="outlined">Outlined</UButton>
        <UButton variant="dashed">Dashed</UButton>
        <UButton variant="filled">Filled</UButton>
        <UButton variant="text">Text</UButton>
        <UButton variant="link">Link</UButton>
      </UView>

      <UHr />
      <UHr />

      <UView row wrap>
        <UButton color="purple" variant="solid" disabled>
          Solid
        </UButton>
        <UButton color="purple" variant="outlined">
          Outlined
        </UButton>
        <UButton color="purple" variant="dashed">
          Dashed
        </UButton>
        <UButton color="purple" variant="filled">
          Filled
        </UButton>
        <UButton color="purple" variant="text" disabled>
          Text
        </UButton>
        <UButton color="purple" variant="link">
          Link
        </UButton>
      </UView>

      {/* <UView> */}
      {/*   <UText>A-TEXT</UText> */}
      {/*   <UText>B-TEXT</UText> */}
      {/* </UView> */}

      {/* <UView> */}
      {/*   <UView> */}
      {/*     <UText>A-TEXT2</UText> */}
      {/*   </UView> */}
      {/*   <UView> */}
      {/*     <UText>B-TEXT2</UText> */}
      {/*   </UView> */}
      {/* </UView> */}
    </UView>
  );
};
