import './global.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <div>
      <Header />
      <div className={'App'}>
        <Input />
        <Tasks />
      </div>
    </div>
  )
}

export default App
