import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './TodoForm.module.css'
import PlusIcon from '../../assets/plus.svg'
import { Tasks } from '../../App'

interface Props {
  onSubmit: (todo: Tasks) => void
}

export function TodoForm({ onSubmit }: Props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus()
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit({
      id: uuidv4(),
      text: input,
    })
    setInput('')
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        />
        <button>
          {' '}
          <p>Criar</p> <img src={PlusIcon} alt={'Criar'} />
        </button>
      </>
    </form>
  )
}
