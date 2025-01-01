import * as L from './ListTicket.js'
import { Link } from 'react-router-dom'

const ListTicket = () => {
  return (
    <L.listContianer>
      <L.table>
        <thead>
          <L.tr>
            <L.th>ID</L.th>
            <L.th>Problema</L.th>
            <L.th>Status</L.th>
            <L.th>Departamento</L.th>
            <L.th>Visualizar Documento</L.th>
            
          </L.tr>
        </thead>
        <tbody>
          <L.tr>
            <L.td>001</L.td>
            <L.td>Problema com Impressora</L.td>
            <L.td>Fechada</L.td>
            <L.td>Saneamento basico</L.td>
            <L.td>
            <Link to='/client'> Documento_001</Link>
            </L.td>
          </L.tr>
        </tbody>
      </L.table>
    </L.listContianer>
  )
}

export default ListTicket
