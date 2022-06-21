import React from 'react'
import { Tasks } from '../../App'
import { AiFillCheckCircle, ImRadioUnchecked } from 'react-icons/all'
import trashIcon from '../../assets/trash.svg'
import styles from './Todo.module.css'

interface TodoProps {
  todos: Tasks[]
  completeTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export function Todo({
  todos,
  completeTodo,
  removeTodo,
}: TodoProps): JSX.Element[] {
  return todos.map((todo) => (
    <div
      className={todo.isComplete ? styles.containerComplete : styles.container}
      key={todo.id}
    >
      <div>
        {todo.isComplete ? (
          <AiFillCheckCircle className={styles.complete} />
        ) : (
          <ImRadioUnchecked
            className={styles.dontComplete}
            onClick={() => completeTodo(todo.id)}
          />
        )}
      </div>
      <div key={todo.id}>{todo.text}</div>
      <div>
        <img
          src={trashIcon}
          alt={'excluir'}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ))
}
