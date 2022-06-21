import './global.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TaskCount } from './components/TaskCount'
import { useState } from 'react'
import { NoContent } from './components/NoContent'
import { Todo } from './components/Todo'

export interface Tasks {
  id: string
  text: string
  isComplete?: boolean
}

function App() {
  const [todos, setTodos] = useState<Tasks[]>([])

  const addTodo = (todo: Tasks) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const removeTodo = (id: string) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  const completeTodo = (id: string) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })

    setTodos(updateTodos)
  }

  return (
    <div>
      <Header />
      <div className={'App'}>
        <TodoForm onSubmit={addTodo} />
        <TaskCount
          task={todos.length}
          completeTask={todos.filter((item) => item.isComplete === true).length}
        />
        {todos.length > 0 ? (
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ) : (
          <NoContent />
        )}
      </div>
    </div>
  )
}

export default App
