import { createFileRoute } from '@tanstack/react-router';

import EncyclopediaIndex from '@/page-components/encyclopedia/index';

export const Route = createFileRoute('/encyclopedia/')({
  component: EncyclopediaIndex,
});
