import './global.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskCount } from './components/TaskCount'
import { useState } from 'react'
import { NoContent } from './components/NoContent'

function App() {
  const [task, setTask] = useState(0)
  return (
    <div>
      <Header />
      <div className={'App'}>
        <Input />
        <TaskCount task={task} completeTask={0} />
        <NoContent />
      </div>
    </div>
  )
}

export default App
