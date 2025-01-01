import { useState, useEffect } from 'react'
import * as N from './newTicket.js'
import axios from 'axios'

const NewTicket = () => {

  const [department, setDepartment] = useState([])

  const [equipamentos, setEquipamentos] = useState([])
  const [problemas, setProblemas] = useState([]);
  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    const fetchEquipamentos = () => {
      const equipamentosMock = [
        { id: 1, nome: "Impressora HP 1020" },
        { id: 2, nome: "Roteador Cisco" },
        { id: 3, nome: "Switch D-Link" },
        { id: 4, nome: "Monitor Dell 24'" },
      ];
      setEquipamentos(equipamentosMock);
    };

    fetchEquipamentos();
  }, []);

  useEffect(() => {
    const fetchProblemas = () => {
      const problemasMock = [
        { id: 1, descricao: "Não imprime" },
        { id: 2, descricao: "Erro de conexão" },
        { id: 3, descricao: "Sinal fraco" },
        { id: 4, descricao: "Configuração perdida" },
        { id: 5, descricao: "Portas não funcionam" },
        { id: 6, descricao: "Tela piscando" },
      ];
      setProblemas(problemasMock);
    };

    fetchProblemas();
  }, []);

  useEffect(() => {
    const fetchCategorias = () => {
      const categoriaMock = [
        {id: 1, nome: "Chamado" },
        {id: 2, nome: "Solicitação" },
        {id: 3, nome: "Termo de Entrega" }
      ]
      setCategorias(categoriaMock)
    }
    
    fetchCategorias()

  }, [])


const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    
    const response = await axios.post('http://localhost:3000/user/create', { first_name, last_name, email, n_bi, phone, role, departmentId, password, confirmPassword})
      console.log(response.data)


  } catch (error) {
    console.error('Erro ao enviar formulário:', error.response.data.error);
      alert(error)
  }
}


  return (
    <N.ticketContainer>
      
      <N.headerForm>
          <N.title>Preencha todos os campos</N.title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, deleniti? Cupiditate nisi obcaecati eligendi eos ipsum ea quia! Suscipit officiis rem nam dolore quas sint et, error aut esse quisquam autem velit culpa possimus laudantium!</p>
      </N.headerForm>

      <N.formTicket>

        {/* Nome Completo */}
        <N.formGroup>
          <N.label htmlFor="nome">Nome:</N.label>
          <input type="text" name="nome" id="nome" />
        </N.formGroup>

        {/* Assunto */}
        <N.formGroup>
          <N.label htmlFor="nome">Assunto:</N.label>
          <input type="text" name="nome" id="nome" />
        </N.formGroup>

        {/* Equipamentos */}
        <N.formGroup1>
          <N.boxEqui>
            <N.label htmlFor="equipamento">Equipamento:</N.label>
            <N.select name="equipamento" id="equipamento">
                <option value="">Selecione o Equipamento</option>
                {equipamentos.map((equipamento) => (
                  <option key={equipamento.id} value={equipamento.id}>
                    {equipamento.nome}
                  </option>
                ))
                }
            </N.select>
          </N.boxEqui>

          <N.boxPro>
            <N.label htmlFor="problema">Problema:</N.label>
            <N.select name="problema" id="problema">
                <option value="">Selecione o problema</option>
                {problemas.map((problema) => (
                  <option key={problema.id} value={problema.id}>
                    {problema.descricao}
                  </option>
                ))
                }
            </N.select>
          </N.boxPro>
          
        </N.formGroup1>
        
        {/* Descricao */}
        <N.formGroup>
          <N.label htmlFor="descricao">Descrição</N.label>
          <N.textarea name="descricao" id="descricao" placeholder='Escreva aqui...'></N.textarea>
        </N.formGroup>

        {/* Butoes */}
        <N.btnGroup>
          <N.btnSalve>Salvar</N.btnSalve>
          <N.btnClose>Cancelar</N.btnClose>
        </N.btnGroup>

      </N.formTicket>
    </N.ticketContainer>
  )
}

export default NewTicket
