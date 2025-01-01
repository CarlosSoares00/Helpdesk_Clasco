import user1 from '/user.jpg';
import * as H from './header.js';
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext.jsx';

const Header = () => {
  const { user, logout } = useAuth()
  if (!user) {
    return <div>Carregando...</div>;
  }

  const nome = user.name
  const especializacao = user.especialidade

  return (
    <H.headerContainer>
      <H.logo>Helpdesk</H.logo>
      
      <H.settings>
        <H.btnTicket>
          <Link to='/admin/ticket/add'>Novo Chamado</Link>
        </H.btnTicket>
        <H.btnIcon><FaRegBell/></H.btnIcon>

        <H.account onClick={logout}>
          <H.figureUser>
            <img src={user1} alt="" />
          </H.figureUser>
          <H.userContent>
          <h3>{nome}</h3>
          <p>{especializacao}</p>
          </H.userContent>
        </H.account>

      </H.settings>
            
    </H.headerContainer>
  );
};

export default Header;
