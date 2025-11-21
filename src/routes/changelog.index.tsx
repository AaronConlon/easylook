import { createFileRoute } from '@tanstack/react-router';

import { HomeIndex } from '@/page-components/home/HomeIndex';

export const Route = createFileRoute('/changelog/')({
  component: HomeIndex,
});
