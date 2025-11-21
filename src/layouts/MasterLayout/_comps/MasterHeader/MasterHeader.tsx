import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { useScreenMedia } from '__shared__/hooks/useScreenMedia';

import { STYLE_SCREENS_CONST } from '@/consts/style-media-const';

import { MasterHeaderPc } from '@/layouts/MasterLayout/_comps/MasterHeaderPc';
import { MasterHeaderMb } from '@/layouts/MasterLayout/_comps/MasterHeaderMb';

interface IProps extends ICompBaseProps {}

export const MasterHeader = (props: IProps) => {
  const { screenMedia, windowSize } = useScreenMedia({
    screens: STYLE_SCREENS_CONST,
  });

  const { className } = props;

  return screenMedia['>md'] ? <MasterHeaderPc /> : <MasterHeaderMb />;
};
