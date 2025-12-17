'use client'
import { useState } from 'react'
import { createTodo } from '@/server/todos'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAddTodo = async () => {
    const newTodo = todo.trim()
    if (newTodo) {
      setLoading(true)
      const res = await createTodo({ data: todo })
      if (!res.success) {
        alert('Failed to add todo')
        setLoading(false)
        return console.error('Error adding todo:', res.message)
      }
      console.log('Adding todo:', newTodo)
      setTodo('')
      setLoading(false)
    }
  }
  return (
    <div>
      <input
        placeholder="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} disabled={loading}>
        {loading ? 'Adding...' : 'Add Todo'}
      </button>
    </div>
  )
}

export default TodoForm
