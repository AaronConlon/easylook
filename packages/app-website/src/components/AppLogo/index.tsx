import type { CSSProperties } from 'react';

import { ReactComponent as LogoSvgFooter } from '@/assets/images/logo-footer.svg';
import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';

interface IProps {
  className?: string;
  styles?: CSSProperties;
  logoType?: 'default' | 'footer';
}

export const AppLogo = (props: IProps) => {
  const { className, styles = {}, logoType = 'default' } = props;

  return (
    <div className={className} style={styles}>
      {logoType === 'default' ? <LogoSvg /> : <LogoSvgFooter />}
    </div>
  );
};
