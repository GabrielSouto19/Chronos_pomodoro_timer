import './styles/theme.css'
import './styles/global.css'

import { TimerIcon } from 'lucide-react'

import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

export function App() {
  return <>
      <Container>
        <Logo/>
      </Container>
      
      <Container>
        <Menu/>
      </Container>

      
      <Container>
        <CountDown/>
      </Container>
      
      <div className="container">
        <div className="content">
          <section>FORM</section>
        </div>
      </div>
      
      <div className="container">
        <div className="content">
          <section>FOOTER</section>
        </div>
      </div>



  </>
}


