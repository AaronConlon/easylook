import { __BASE_URL_PATHS_CONST__ } from '----pkg-uni/uni-consts/__base-url-paths';

export type IUniRouterList = Record<
  keyof typeof __BASE_URL_PATHS_CONST__,
  {
    name: string;
    stack?: string;
  }
>;

export const URL_PATHS_CONST = Object.entries(__BASE_URL_PATHS_CONST__).reduce(
  (acc, [key, value]) => {
    // @ts-ignore
    acc[key] = value.h5;
    return acc;
  },
  {},
) as IUniRouterList;
