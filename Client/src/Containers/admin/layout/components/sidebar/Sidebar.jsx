import * as S from './sidebar'
import { Link } from 'react-router-dom'


import { FaTasks, FaClipboard} from "react-icons/fa";
import { Fa42Group, FaGroupArrowsRotate, FaMoneyBills, FaPeopleGroup, FaUsers } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <S.sidebarContainer>
      <S.icons>

        <S.icon>
          <Link to="/admin/home">
            <i><FaTasks /></i>
            Chamados
          </Link>
        </S.icon>
        
        <S.icon>
          <Link to="/admin/base_conhecimento">
            <i><FaClipboard/></i>
            Solicitações
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/admin/group">
            <i><FaPeopleGroup /></i>
            Group
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/admin/equipa/">
            <i><FaMoneyBills /></i>
            Equipa
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/admin/usuarios/">
            <i><FaUsers /></i>
            Usuarios
          </Link>
        </S.icon>

        <S.icon>
          <Link to="/admin/realtorio/">
            <i><FaClipboard /></i>
            Relatórios
          </Link>
        </S.icon>

        {/* <S.icon>
          <i><TiGroupOutline /></i>
          <a href="">Configuração</a>
        </S.icon> */}

      </S.icons> 
    </S.sidebarContainer>
  )
}

export default Sidebar

