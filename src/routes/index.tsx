import { createFileRoute } from '@tanstack/react-router'
import { fetchTodos } from '@/server/todos/index'

export const Route = createFileRoute('/')({
  loader: async () => {
    const res = await fetchTodos()
    console.log('Fetched todos in loader:', res)
    return res
  },
  component: App,
})

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
    </div>
  )
}
