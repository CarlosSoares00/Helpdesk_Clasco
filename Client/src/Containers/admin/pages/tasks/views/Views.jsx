import { Link } from 'react-router-dom'
import { useData } from '../../../../../context/DataContext.jsx'
import * as V from './views.js'
import { FaReply } from 'react-icons/fa'

const Views = () => {
  const { ticket, assumedTicket } = useData()
  if(!ticket){
    return <div>Carregando...</div>;
  }

  const ticketId = ticket.id
  const nomeFunc = ticket.nomeFunc
  const cargo = ticket.cargo
  const data = ticket.createdAt
  const departamento = ticket.Department.nome
  const prioridade = ticket.priority
  const problema = ticket.problem
  const descricao = ticket.description

  const handleAssumedTicket = id => {
    assumedTicket(id)
  }

  return (
    <V.viewsContainer>
      <V.viewDoc>

        <V.headerDoc>
          <V.groupButtons>
            <button><FaReply/></button>
            
            <button onClick={() => handleAssumedTicket(ticketId)}>
              Assumir
            </button>
          </V.groupButtons>

          <V.btnPlus>Mais...</V.btnPlus>
        </V.headerDoc>
        
        <V.content>

          <V.from>
            <V.listContent>
            <li> Ticket ID: </li>
            <li>De: </li>
            <li>Cargo: </li>
            <li>Data: </li>
            <li>Departamento: </li>
            <li>Prioridade: </li>
            </V.listContent>

            <V.listContent>
              <V.list>{ticketId}</V.list>
              <V.list>{nomeFunc}</V.list>
              <V.list>{cargo}</V.list>
              <V.list>{data}</V.list>
              <V.list>{departamento}</V.list>
              <V.list>{prioridade}</V.list>
            </V.listContent>

          </V.from>

          <V.detalhes>
              <V.titleTicket>{problema}</V.titleTicket>
              <V.description>{descricao}</V.description>
          </V.detalhes>
        </V.content>

      </V.viewDoc>

      <V.viewDetalhes>
      </V.viewDetalhes>
    </V.viewsContainer>
  )
}

export default Views
