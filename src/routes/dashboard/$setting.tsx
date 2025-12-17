import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$setting')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/setting"!</div>
}
