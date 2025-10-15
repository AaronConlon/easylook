import type React from 'react';
import { useEffect } from 'react';

import { compareVersion } from '----pkg-uni/uni-utils/version-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';
import { buildConfig } from '----pkg-uni/uni-configs/build-config';

import { axiosInst } from '----pkg-uni/uni-libs/axios-lib';
import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

interface IProps {
  children?: React.ReactNode | any;
}

export const AppGlobalFetch: React.FC<IProps> = (props) => {
  // fetch product info

  const {
    setPage$_pageItem_about,
    setPage$_pageItem_product,
    setPage$_pageItem_home,
    setPage$_share,
  } = usePageStore();

  useEffect(() => {
    (async () => {
      const updateInfoUrl = appConfig.__IS_DEV__
        ? '/__UPDATE_META__.json'
        : 'https://sanlian-server.oss-cn-beijing.aliyuncs.com/easylook/__UPDATE_META__.json';
      const res = await axiosInst.get<{
        version: string;
        update_items: string[];
      }>(updateInfoUrl);

      // 获取当前版本号
      const currentVersion = buildConfig.VERSION;

      console.log('currentVersion', currentVersion);

      if (!currentVersion) return;

      const isUpdate = compareVersion(currentVersion, res.data.version);

      console.log('res.data.version', res.data.version);
      console.log('1: v1 新，-1: v2 新，0: 相同');
      console.log('isUpdate', isUpdate);

      if (isUpdate === -1) {
        // 根据更新项目，拉取对应的 json，更新对应的 store
        for (const item of res.data.update_items) {
          const updateItemUrl = appConfig.__IS_DEV__
            ? `/${item}`
            : `https://sanlian-server.oss-cn-beijing.aliyuncs.com/easylook/${item}?date=${Date.now()}`;

          const updateItemData: any = await axiosInst.get(updateItemUrl);

          let newData = updateItemData.data;

          console.log('newData', newData);
          console.log('new data type:', typeof newData);
          // is json data
          if (typeof newData === 'string') {
            newData = JSON.parse(newData);
          }

          // 更新对应的 store
          switch (item) {
            case 'page-share-mock.json':
              setPage$_share(newData);
              break;
            case 'page-about-mock.json':
              setPage$_pageItem_about(newData);
              break;
            case 'page-product-mock.json':
              setPage$_pageItem_product(newData);
              break;
            case 'page-home-mock.json':
              setPage$_pageItem_home(newData);
              break;
            default:
          }
        }
      }
    })();
  }, []);

  return props.children || null;
};
