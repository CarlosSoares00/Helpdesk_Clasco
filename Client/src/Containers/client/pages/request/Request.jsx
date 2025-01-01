
import ListRequest from './components/ListRequest.jsx'
import * as R from './request.js'


const Request = () => {
  return (
      <R.requestContainer>
        <R.header>
          <R.titleHome>Solicitações</R.titleHome>
        </R.header>
  
        <R.body>  
          <R.resume>
              <R.buttonP>
                <p>Solicitações sem Resposta</p>
                <span>27 Solicitações 0/0</span>
              </R.buttonP>
              <R.buttonP>
                <p>Solicitações Satisfeitas</p>
                <span>27 Solicitações 0/0</span>
              </R.buttonP>
              <R.buttonP>
                <p>Solicitações a Espera</p>
                <span>5 tarefas 0/0</span>
              </R.buttonP>
          </R.resume>
  
          <ListRequest/>

        </R.body>
      </R.requestContainer>
  )
}

export default Request
