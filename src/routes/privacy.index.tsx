import { createFileRoute } from '@tanstack/react-router';

import { PartnersIndex } from '@/page-components/about/PartnersIndex';

export const Route = createFileRoute('/privacy/')({
  component: PartnersIndex,
});
