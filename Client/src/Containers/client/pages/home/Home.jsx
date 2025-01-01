import ListTicket from './components/ListTicket.jsx'
import * as H from './home.js'

const Home = () => {
  return (
    <H.homeContainer>
      <H.header>
        <H.titleHome>Tarefas</H.titleHome>
      </H.header>

      <H.body>  
        <H.resume>
            <H.buttonP>
              <p>Tarefas Em Andamento</p>
              <span>27 tarefas 0/0</span>
            </H.buttonP>
            <H.buttonP>
              <p>Tarefas Concluidas</p>
              <span>27 tarefas 0/0</span>
            </H.buttonP>
            <H.buttonP>
              <p>Tarefas a Espera de Assinatura</p>
              <span>5 tarefas 0/0</span>
            </H.buttonP>
        </H.resume>

        <ListTicket/>
        
      </H.body>
    </H.homeContainer>
  )
}

export default Home
