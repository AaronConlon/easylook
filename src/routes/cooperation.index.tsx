import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cooperation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cooperation/"!</div>
}
