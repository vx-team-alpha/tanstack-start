import { useServerFn } from '@tanstack/react-start'

import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '@/server/todos'

const TodoList = () => {
  const getPosts = useServerFn(fetchTodos)

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => getPosts(),
  })
  return <div>todos: {JSON.stringify(data)}</div>
}

export default TodoList
