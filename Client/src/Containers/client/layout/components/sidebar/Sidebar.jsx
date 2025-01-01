import * as S from './sidebar'
import { Link } from 'react-router-dom'
// Icons
import { BsClipboard2 } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";
import { BsTicket } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";


const Sidebar = () => {
  return (
    <S.sidebarContainer>
      <S.icons>

      <S.icon>
          <Link to="/client/profile">
            <i><BsPerson/></i>
            Profile
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/client/home">
            <i><BsTicket /></i>
            Tarefas
          </Link>
        </S.icon>
        
        <S.icon>
          <Link to="/client/request">
            <i><BsClipboard2 /></i>
            Solicitações
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/client/Termo/">
            <i><BsJournalText /></i>
            Entregas
          </Link>
        </S.icon>
      </S.icons> 
    </S.sidebarContainer>
  )
}

export default Sidebar

