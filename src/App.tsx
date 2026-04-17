import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

export function App() {
  return <div>
    <Heading > 
      
      Chronos
      <button>
        <TimerIcon/>
      </button>

    </Heading >
  

  </div>
}


