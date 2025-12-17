import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { fetchTodos } from '@/server/todos'
import TodoList from '@/components/TodosList'

export const Route = createFileRoute('/todos')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/todos"!
      <TodoList />
    </div>
  )
}
