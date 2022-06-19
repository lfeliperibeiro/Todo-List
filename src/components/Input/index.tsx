import styles from './Input.module.css'
import PlusIcon from '../../assets/plus.svg'

export const Input = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={'Adicione uma nova tarefa'} />
      <button>
        <p>Criar</p> <img src={PlusIcon} alt={'Criar'} />
      </button>
    </div>
  )
}
