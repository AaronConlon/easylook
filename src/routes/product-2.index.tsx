import { createFileRoute } from '@tanstack/react-router';

import { Product2Index } from '@/page-components/product/product2/Product2Index';

export const Route = createFileRoute('/product-2/')({
  component: Product2Index,
});
