import styles from './NoContent.module.css'
import clipboardImg from '../../assets/Clipboard.svg'

export const NoContent = () => {
  return (
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
  )
}
