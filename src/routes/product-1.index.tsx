import { createFileRoute } from '@tanstack/react-router';

import { Product1Index } from '@/page-components/product/product1/Product1Index';

export const Route = createFileRoute('/product-1/')({
  component: Product1Index,
});
