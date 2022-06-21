import styles from './tasks.module.css'
interface TaskCountProps {
  task: number
  completeTask: number
}
export const TaskCount = ({ task, completeTask }: TaskCountProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>
          <span>{task}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          {task > 0 ? (
            <span
              className={styles.doneTaskCount}
            >{`${completeTask} de ${task}`}</span>
          ) : (
            <span className={styles.createTasksCount}>{task}</span>
          )}
        </div>
      </header>
    </div>
  )
}
