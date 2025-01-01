import * as L from './listTask.js';
import { Link } from 'react-router-dom';
import { useData } from '../../../../../../context/DataContext.jsx';


const ListTask = () => {
  const { tickets, getTicket } = useData()
  
  const handleGetSetTicket = (id) => {
    getTicket(id)
  }

  return (
    <L.listTaskContainer>  
      <L.table>
        <thead>
          <L.tr>
            <L.th>ID</L.th>
            <L.th>Descrição</L.th>
            <L.th>Departamento</L.th>
            <L.th>Problema</L.th>
            <L.th>Prioridade</L.th>
            <L.th>Status</L.th>
            <L.th>Atualização</L.th>
          </L.tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? tickets.map(ticket => (
            <L.tr key={ticket.id}>
              <L.td>
                <Link to={`/admin/ticket/view`} onClick={() => handleGetSetTicket(ticket.id)}>
                  {ticket.id}
                </Link>
              </L.td>
              <L.td>{ticket.description}</L.td>
              <L.td>{ticket.Department.nome}</L.td>
              <L.td>{ticket.problem}</L.td> {/* Isso aqui depende de como você vai estruturar os problemas */}
              <L.td>{ticket.priority}</L.td>
              <L.td>
              {ticket.status === "Terminado" ? (
                <Link to={`/admin/ticket/views`} onClick={() => handleGetSetTicket(ticket.id)}>
                {ticket.status}
              </Link>
                  ) : (
                  ticket.status
                )}
              </L.td>
              <L.td>{ticket.updatedAt}</L.td>
            </L.tr>
          )) : (
            <L.tr>
              <L.td colSpan="9">Nenhum ticket encontrado</L.td>
            </L.tr>
          )}
        </tbody>
      </L.table>
    </L.listTaskContainer>
  );
}

export default ListTask;




