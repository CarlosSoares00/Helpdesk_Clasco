import React, { useState } from 'react'
import * as T from './takeOver.js'
import { FaReply } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


import { useData } from '../../../../../context/DataContext.jsx'

const takeOver = () => {
  const navigate = useNavigate()
  const {ticket} = useData()
  if(!ticket){
    return <div>Carregando...</div>;
  }

  const ticketId = ticket.id
  const nomeFunc = ticket.nomeFunc
  const departamento = ticket.Department.nome
  const nomeTec = ticket.UserTec.full_name
  const prioridade = ticket.priority
  const problema = ticket.problem
  const descricao = ticket.description
  // const data_criacao = ticket.createdAt

  const [tec_description, setTec_description] = useState()
  const [tec_notes, setTec_notes] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:4000/tickets/${ticketId}/terminar`, {tec_description, tec_notes})
      console.log(response.data)
      navigate('/admin/ticket/views');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error.response.data.error);
      alert(error) 
    }
  }
  

  return (
    <T.takeOverContainer>
      
      <T.boxSoluction>      
        <T.problem>
        <T.headerProblem>
          <T.btns>
            <button><FaReply/></button>
            <Link to='/admin/ticket/takeover'>
              <button>Fechar Chamado</button>
            </Link>
          </T.btns>

          <T.btnPlus>Mais...</T.btnPlus>
        </T.headerProblem>

        <T.containerProblem>
          <T.titleProblem>{problema}</T.titleProblem>
          <T.descriptionProblem>{descricao}</T.descriptionProblem>
        </T.containerProblem>
        </T.problem>

        <T.formTicketUpdate onSubmit={handleSubmit}>
        {/* <T.boxInput>
          <T.label htmlFor="">Status:</T.label>
          <T.select
          name='status'
          id='status'
          onChange={(e)=> console.log(e.target.value)}
          >
            <option value="">Selecione o Status</option>
            <option value="Em Pausa">Em Andamento</option>
            <option value="Terminado">Aberto</option>
          </T.select>
          
        </T.boxInput> */}

        <T.boxInput>
          <T.label>Descriçaõ da Solucção: </T.label>
          <T.textarea 
            name="tec_description" 
            id="tec_description" 
            placeholder='Escreva aqui...'
            onChange={(e) => setTec_description(e.target.value)}>
          </T.textarea>
        </T.boxInput>

        <T.boxInput>
          <T.label>Observações: </T.label>
          <T.textareaObs 
            name="tec_notes" 
            id="tec_notes" 
            placeholder='Escreva aqui...'
            onChange={(e) => setTec_notes(e.target.value)}>
          </T.textareaObs>
        </T.boxInput>

        <T.boxInput>
          <T.label>Adicionar</T.label>
          <input type="file" name="file" id="file" />
        </T.boxInput>

          <T.btnGroup>
            <T.btn>Salvar</T.btn>
            <T.btnClose>Cancelar</T.btnClose>
          </T.btnGroup>

        </T.formTicketUpdate>


      </T.boxSoluction>

      <T.boxSolic>
        <T.headerSolic>
          <T.titleSolic>Detalhes do Ticket</T.titleSolic>
        </T.headerSolic>

        <T.listDetails>
          <T.details>
            {/* <span>TicketId:</span> */}
            <T.id>{ticketId}</T.id>
          </T.details>

          <T.details>
            <span>Prioridade:</span>
            <p>{prioridade}</p>
          </T.details>

          <T.details>
            <span>Departamento:</span>
            <p>{departamento}</p>
          </T.details>

          <T.details>
            <span>De:</span>
            <p>{nomeFunc}</p>
          </T.details>

          <T.details>
            <span>Via:</span>
            <p>ADMIN</p>
          </T.details>

          <T.details>
            <span>Tecnico Responsavel: </span>
            <p>{nomeTec}</p>
          </T.details>

          <T.details>
            <span>Data de Abertura:</span>
            <p>15/12/2024</p>
          </T.details>

        </T.listDetails>
      </T.boxSolic>

    </T.takeOverContainer>
  )
}

export default takeOver


