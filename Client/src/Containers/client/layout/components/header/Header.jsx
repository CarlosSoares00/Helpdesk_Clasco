import user from '/user.jpg';
import * as H from './header.js';
import { useState } from 'react';
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

  const [showTicketModal, setShowTicketModal] = useState(false)

  const [ equipamento, setEquipamento ] = useState('')
  const [ problem, setProblem ] = useState('')
  const [ departamentoId, setDepartamentoId ] = useState('')
  const [ role, setRole ] = useState('')
  const [ priority, setPriority ] = useState('')

  const handleModal = () => {
    setShowTicketModal(!showTicketModal)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault()

    console.log(equipamento)
    console.log(problem)
    console.log(departamentoId)
    console.log(role)
    console.log(priority)

  } 

  return (
    <H.headerContainer>
      <H.logo>Helpdesk</H.logo>
      
      <H.settings>
        <Link to='/client/newTicket'>
          <H.btnTicket to>
          Novo Chamado
        </H.btnTicket>
        </Link>
        <H.btnIcon><FaRegBell/></H.btnIcon>
        <H.account>
          <H.figureUser>
            <img src={user} alt="" />
          </H.figureUser>
          <H.userContent>
            <h3>Carlos Soares</h3>
            <p>Administrador</p>
          </H.userContent>
        </H.account>
      </H.settings>
      
    </H.headerContainer>
  );
};

export default Header;
