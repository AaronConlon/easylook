import 'globalthis/auto';

import '@ant-design/v5-patch-for-react-19';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'antd/es/style/reset.css';

// __shared__ scss
import '__shared__/styles/style-app/css-vars-app.gen.scss';

// app scss
import '@/styles/global.scss';
import '@/styles/libs.scss';
import '@/styles/font.scss';
import '@/styles/antd-overwrite.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';
// import { App } from '@/AppEmpty';

//
if (!process.env.REACT_APP_NAME) {
  throw new Error('missing env.REACT_APP_NAME');
}

createRoot(document.getElementById('root')!).render(<App />);
