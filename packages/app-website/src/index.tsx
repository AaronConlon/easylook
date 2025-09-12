/* eslint-disable max-len */
// for RN
import 'globalthis/auto';

// // polyfill
// import 'regenerator-runtime/runtime';
// import 'core-js/stable';
// //
// import 'core-js/proposals/string-replace-all';
// import 'core-js/proposals/string-match-all';
// import 'core-js/proposals/observable';
// //
// import 'core-js/es/object/has-own';
// import 'intersection-observer';
// import 'scroll-polyfill/auto';

// libs
import '@ant-design/v5-patch-for-react-19';

// css vars (once ONLY, ⚠️ 为了兼容跨平台，后缀都是 scss，但这里只导入 css-vars)
import 'antd/es/style/reset.css';
import '----pkg-uni/uni-styles/uni-style-antd-media/by-gen-uni-style-css-vars-antd-media.scss';
import '----pkg-uni/uni-styles/uni-style-antd-token/by-gen-uni-style-css-vars-antd-token.scss';
import '----pkg-uni/uni-styles/uni-style-app/by-gen-uni-css-vars-app.scss';

// scss
import '@/styles/global.scss';
import '@/styles/libs.scss';
import '@/styles/antd-overwrite.scss';
import '@/styles/font.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';
// import { App } from '@/AppEmpty';

createRoot(document.getElementById('root')!).render(<App />);
