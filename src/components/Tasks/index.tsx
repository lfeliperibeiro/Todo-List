import styles from './tasks.module.css'
import clipboardImg from '../../assets/Clipboard.svg'

export const Tasks = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <div className={styles.noContent}>
        <span />
        <img src={clipboardImg} alt={'clipboard'} />
        <p className={styles.noContentTitle}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className={styles.noContentSubTitle}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}
