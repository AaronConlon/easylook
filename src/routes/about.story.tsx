import { createFileRoute } from '@tanstack/react-router';

import { StoryIndex } from '@/page-components/about/StoryIndex';

export const Route = createFileRoute('/about/story')({
  component: StoryIndex,
});
