import * as T from './TicketAdm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TicketAdmn = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const fecthDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/get/departments')
        // console.log(response.data)
        setDepartments(response.data)
  
      } catch (error) {
        console.error('Erro ao buscar os Departamentos:', error);
      }
    }
  
    fecthDepartments()
  }, [])

  const [departments, setDepartments] = useState([])
  const [departmentId, setDepartmentId] = useState('')
  const [cargo, setCargo] = useState('')
  const [nomeFunc, setNomeFunc] = useState('')
  const [priority, setPriority ] = useState('')
  const [equip, setEquip] = useState('')
  const [problem, setProblem ] = useState('')
  const [description, setDescription] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:4000/ticket/create', { departmentId, nomeFunc, cargo, description, equip, problem, priority })
      console.log(response.data)
      
      navigate('/admin/home', { replace: true });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error.response.data.error);
      alert(error)
    }
  }


  return (
    <T.ticketAdmContainer>
      <T.headerForm>
        <T.title>Criar / Criando Ticket</T.title>
        Certifique-se que todos os campos estao preenchidos ...
      </T.headerForm>

      <T.formTicket onSubmit={handleSubmit}>

        <T.formGroup>
          {/* Departamento  */}
          <T.box>
            <T.label>Departamento:</T.label>
            <T.select 
              type="text" 
              name="departamento" 
              id="departamento"
              onChange={(e) => setDepartmentId(e.target.value)}
              >
            <option value="">Selecione o Departamento</option>
              {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.nome}
                    </option>
                )) 
              }
            </T.select>
          </T.box>
            
          {/* Cargo  */}
          <T.box2>
          <T.label>Cargo:</T.label>
          <T.select 
            name="cargo" 
            id="cargo"
            onChange={(e) => setCargo(e.target.value)}  
          >
              <option value="">Selecione o cargo</option>
              <option value="direitor">Direitor</option>
              <option value="chefe_seccao">Chefe de Secção</option>
              <option value="tecnico">Tecnico</option>
          </T.select>
          </T.box2>
        </T.formGroup>

        <T.formGroup>
         {/* Nome Funcionario  */}
          <T.box>
            <T.label>Nome do Funcionario:</T.label>
            <input 
              type="text" 
              name="nome" 
              id="nome"
              onChange={(e) => setNomeFunc(e.target.value)}
              />
          </T.box>
            
            {/* Prioridade  */}
          <T.box2>
          <T.label>Prioridade:</T.label>
          <T.select 
            name="prioridade" 
            id="prioridade"
            onChange={(e) => setPriority(e.target.value)}
            >
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
              <option value="alta">Alta</option>
              <option value="urgente">Urgente</option>
          </T.select>
          </T.box2>

        </T.formGroup>

        <T.formGroup>
          {/* Equipamento  */}
          <T.box3>
            <T.label>Equipamento:</T.label>
            <input 
              type="text" 
              name="equipamento" 
              id="equipamento" 
              onChange={(e) => setEquip(e.target.value)}
              />
          </T.box3>
            
          <T.box4>
          <T.label>Problema:</T.label>
          <input 
            type="text" 
            name="Problema" 
            id="Problema"
            onChange={(e) => setProblem(e.target.value)}
            />
              
          </T.box4>
        </T.formGroup>

        <T.formTextearea>
          <T.label>Descricao do Problema:</T.label>
          <T.textarea 
            name="descricao" 
            id="descricao" 
            placeholder='Escreva aqui...'
            onChange={(e) => setDescription(e.target.value)}
            ></T.textarea>
        </T.formTextearea>

        <T.formFile>
          <T.label>Adicionar</T.label>
          <input type="file" name="file" id="file" />
        </T.formFile>

        <T.btnGroup>
          <T.btnSalve>
            <T.btn>Salvar</T.btn>
            <T.btn1>Salvar e Criar Outro</T.btn1>
          </T.btnSalve>

          <T.btnClose>Cancelar</T.btnClose>
        </T.btnGroup>

      </T.formTicket>



    </T.ticketAdmContainer>
  )
}

export default TicketAdmn
