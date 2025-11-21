import { createFileRoute } from '@tanstack/react-router';

import { ContactIndex } from '@/page-components/contact/ContactIndex';

export const Route = createFileRoute('/contact/')({
  component: ContactIndex,
});
