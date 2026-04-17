import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { TimerIcon } from 'lucide-react'

export function App() {
  return <>
    {/* <Heading > 
      
      Chronos
      <button>
        <TimerIcon/>
      </button>

    </Heading >
   */}

      <Container>
        <Heading>LOGO</Heading>
      </Container>
      
      <Container>
        <Heading>MENU</Heading>
      </Container>

      
      <div className="container">
        <div className="content">
          <section>MENU</section>
        </div>
      </div>
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


