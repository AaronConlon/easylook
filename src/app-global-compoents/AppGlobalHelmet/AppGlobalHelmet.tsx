import { Helmet } from 'react-helmet';

import { useHtmlStore } from '@/stores/useHtmlStore';

export const AppGlobalHelmet = () => {
  // forSTORE
  const html$_title = useHtmlStore((s) => s.html$_title); // prettier-ignore
  // forSTORE

  return (
    <Helmet>
      <title>{html$_title}</title>
    </Helmet>
  );
};
