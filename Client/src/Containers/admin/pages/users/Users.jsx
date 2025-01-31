import { BsPlus, BsTrash } from 'react-icons/bs'
import * as U from './users.js'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Imagens

import a from '../../../../assets/P3.png'
import b from '../../../../assets/P4.png'
import c from '../../../../assets/P1.png'



const Users = () => {

  const [departments, setDepartments] = useState([])

  useEffect(() => {
    const fecthDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/get/departments')
        // console.log(response.data)
        setDepartments(response.data)
  
      } catch (error) {
        console.error('Erro ao buscar os Departamentos:', error);
      }
    }
  
    fecthDepartments()
  }, [])

  return (
    <U.usersContainer>
      <U.header>
        
        <U.titleSection>
          <h2>Gerencie os equipamentos cadastrados no sistema</h2>
          <p>Veja informacoes detalhadas sobre os equipamentos, como historico de manuntencao, localizacao, status actual, items ativos, categoria, etc.</p>
        </U.titleSection>

        <U.form>
        <U.label>Selecione o Departamento: </U.label>
        <U.select 
          name="departamento" 
          id="department"
          onChange={(e) => setDepartmentId(e.target.value)}
          >
          <option value="">Selecione o Departamento</option>
                        {departments.map((department) => (
                              <option key={department.id} value={department.id}>
                                {department.nome}
                              </option>
                          )) 
                        } 
        </U.select>

      </U.form>
      </U.header>

      <U.equipContainer>
        <U.equip>
          <U.headerEquip>
            <U.titleEquip>Impressora DELL</U.titleEquip>
            <U.btnHeader>
              <button><BsPlus/></button>
              <button><BsTrash/></button>
            </U.btnHeader>
          </U.headerEquip>
          
          <U.equipDetalhe>

            <U.equipfoto>
               <img src={a} alt="" />
            </U.equipfoto>

            <U.detalhes>
              <U.detalhe>
                <U.span>Status: </U.span>
                <U.dado>Conectado</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Marca: </U.span>
                <U.dado>Dell</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Sistema: </U.span>
                <U.dado>Windows 10</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>N_Serie: </U.span>
                <U.dado>ABC123456789</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Manuntencao: </U.span>
                <U.dado>30/10/2025</U.dado>
              </U.detalhe>
            </U.detalhes>
          </U.equipDetalhe>

          <U.equipFooter>
            <U.btnF>Ver mais</U.btnF>
            <U.btnF>Editar</U.btnF>
            <U.btnF>Historico</U.btnF>
          </U.equipFooter>
        </U.equip>

        <U.equip>
          <U.headerEquip>
            <U.titleEquip>Impressora DELL</U.titleEquip>
            <U.btnHeader>
              <button><BsPlus/></button>
              <button><BsTrash/></button>
            </U.btnHeader>
          </U.headerEquip>
          
          <U.equipDetalhe>

            <U.equipfoto>
               <img src={b} alt="" />
            </U.equipfoto>

            <U.detalhes>
              <U.detalhe>
                <U.span>Status: </U.span>
                <U.dado>Conectado</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Marca: </U.span>
                <U.dado>Dell</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Sistema: </U.span>
                <U.dado>Windows 10</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>N_Serie: </U.span>
                <U.dado>ABC123456789</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Manuntencao: </U.span>
                <U.dado>30/10/2025</U.dado>
              </U.detalhe>
            </U.detalhes>
          </U.equipDetalhe>

          <U.equipFooter>
            <U.btnF>Ver mais</U.btnF>
            <U.btnF>Editar</U.btnF>
            <U.btnF>Historico</U.btnF>
          </U.equipFooter>
        </U.equip>


        <U.equip>
          <U.headerEquip>
            <U.titleEquip>Impressora DELL</U.titleEquip>
            <U.btnHeader>
              <button><BsPlus/></button>
              <button><BsTrash/></button>
            </U.btnHeader>
          </U.headerEquip>
          
          <U.equipDetalhe>

            <U.equipfoto>
               <img src={c} alt="" />
            </U.equipfoto>

            <U.detalhes>
              <U.detalhe>
                <U.span>Status: </U.span>
                <U.dado>Conectado</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Marca: </U.span>
                <U.dado>Dell</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Sistema: </U.span>
                <U.dado>Windows 10</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>N_Serie: </U.span>
                <U.dado>ABC123456789</U.dado>
              </U.detalhe>
              <U.detalhe>
                <U.span>Manuntencao: </U.span>
                <U.dado>30/10/2025</U.dado>
              </U.detalhe>
            </U.detalhes>
          </U.equipDetalhe>

          <U.equipFooter>
            <U.btnF>Ver mais</U.btnF>
            <U.btnF>Editar</U.btnF>
            <U.btnF>Historico</U.btnF>
          </U.equipFooter>
        </U.equip>




      </U.equipContainer>
    </U.usersContainer>
  )
}

export default Users