import { createFileRoute } from '@tanstack/react-router';

import { HonorIndex } from '@/page-components/about/HonorIndex';

export const Route = createFileRoute('/about/honor')({
  component: HonorIndex,
});
