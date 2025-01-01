import * as T from './task.js'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import ListTask from './components/ListTask/ListTask.jsx';


const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <T.taskContainer>

      <T.header>
        <T.headerContent>
          <T.title>Tickets</T.title>
          <T.searchBox>
            <T.searchTask
              type="search" 
              name="" 
              id=""
              placeholder='Procurar Ticket ID' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <T.buttonSearch type="submit"><FaSearch /></T.buttonSearch>
          </T.searchBox>

        </T.headerContent>
      </T.header>

      <T.main>
        <T.resume>
          <T.buttonP>
            <p>Pendente</p>
            <span>27 tarefas 0/0</span>
          </T.buttonP>
          <T.buttonP>
            <p>Em andamento</p>
            <span>27 tarefas 0/0</span>
          </T.buttonP>
          <T.buttonP>
            <p>Precisa de Aprovação</p>
            <span>5 tarefas 0/0</span>
          </T.buttonP>
          <T.buttonP>
            <p>Concluido</p>
            <span>1 tarefa 0/0</span>
          </T.buttonP>
        </T.resume>
        <ListTask/>
      </T.main>

    </T.taskContainer>
  )
}


export default Tasks