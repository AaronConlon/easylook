import { createAuthAxiosInst } from '__shared__/utils/axios-util';

import { useUserStore } from '@/stores/useUserStore';

export const axiosAuthInst = createAuthAxiosInst({ useUserStore });
