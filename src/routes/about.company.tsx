import { createFileRoute } from '@tanstack/react-router';

import { AboutIndex } from '@/page-components/about/AboutIndex';

export const Route = createFileRoute('/about/company')({
  component: AboutIndex,
});
