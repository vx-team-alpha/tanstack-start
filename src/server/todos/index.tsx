import { createServerFn } from '@tanstack/react-start'

import { getSupabaseServerClient } from '@/lib/supabase/server'

export const fetchTodos = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase.from('todos').select('*')
  console.log('Fetched todos:', data, error)
  if (error) {
    return { data: null, success: false, message: error.message }
  }
  return { data: data, success: true, message: 'Todos fetched successfully' }
})

export const createTodo = createServerFn()
  .inputValidator((d: string) => d)
  .handler(async ({ data: todo }) => {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.from('todos').insert({
      id: Math.floor(Math.random() * 1000000),
      todo: todo,
      created_at: new Date().toISOString(),
    })
    console.log('Fetched todos:', data, error)
    if (error) {
      return { data: null, success: false, message: error.message }
    }
    return { data: data, success: true, message: 'Todos fetched successfully' }
  })
