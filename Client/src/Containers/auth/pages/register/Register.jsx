import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as R from "./register.js"
import { useState, useEffect } from "react";
import axios from "axios";



const Register = () => {
  
  const [ first_name, setFirst_name] = useState('')
  const [ last_name, setLast_name] = useState('')
  const [ email, setEmail] = useState('')
  const [ n_bi, setN_bi] = useState('')
  const [ phone, setPhone] = useState('')
  const [ role, setRole] = useState('')
  const [ departmentId, setDepartmentId] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')  

  const [departments, setDepartments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fecthDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get/departments')
        console.log(response.data)
        setDepartments(response.data)
  
      } catch (error) {
        console.error('Erro ao buscar os Departamentos:', error);
      }
    }
  
    fecthDepartments()
  }, [])

  

  const handleSubmit =  async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:3000/user/create', { first_name, last_name, email, n_bi, phone, role, departmentId, password, confirmPassword})
      console.log(response.data)

      navigate('/', { replace: true });

    } catch (error) {
      console.error('Erro ao enviar formulário:', error.response.data.error);
      alert(error)
    }
  }
  return (
    <R.constainer>      
      <R.formRegister action="" onSubmit={handleSubmit}>
        
        <R.regisrterLeft>
          <R.titleBox>Cadastro de um Novo Usuario</R.titleBox>
          
          <R.princ>
              
              {/* Primeiro Nome */}
            <R.nameContent>
                <input 
                  type="text" 
                  name="first_name" 
                  placeholder="Primeiro Nome"
                  onChange={(e) => setFirst_name(e.target.value)}
                  />
                <input 
                  type="text" 
                  name="last_name" 
                  placeholder="Ultimo Nome"
                  onChange={(e) => setLast_name(e.target.value)}
                  />
            </R.nameContent>

            <R.infoLogin>
              
              <R.groupp>
              {/* Email */}
                <input 
                  className="email" 
                  type="text" 
                  name="email" 
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Bilhete */}
                <input 
                  type="text" 
                  name="BI" 
                  placeholder="Nº Bilhete"
                  onChange={(e) => setN_bi(e.target.value)}
                  />
              </R.groupp>

              <R.inputgroup>
                <R.selectGroup>
                  {/* Telefone */}
                  <input 
                    type="text"
                    placeholder="Nº Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                    />

                  {/* ROle/ funcao */}
                    <R.selectDep 
                    name="role"
                    id=""
                    onChange={(e) => setRole(e.target.value)}
                    >
                    <option value="">Cargo</option>
                    <option value="admin">admin</option>
                    <option value="tecnico">tecnico</option>
                    <option value="usuario">usuario</option>
                    </R.selectDep>
                  
                  {/* Departmento */}
                  <R.selectDep 
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
                  </R.selectDep>
                  
                </R.selectGroup>
              </R.inputgroup>

              <R.inputgroup>
                <input 
                  type="password" 
                  name="passsword" 
                  placeholder="Insira sua Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <input 
                  type="password" 
                  name="confirmPassword" 
                  placeholder="Confirme a sua Senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </R.inputgroup>

            </R.infoLogin>

          </R.princ>

          <R.boxButtonSub>
          <R.btnCanc>Cancelar</R.btnCanc>
          <R.btnSub>Salvar</R.btnSub>
          </R.boxButtonSub>

        </R.regisrterLeft>
        
        <R.registerRight>
          <h2>Entrar na minha conta </h2>
            <button> 
              <Link to='/login'>Entrar </Link>
              </button>
            <p>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Odit consectetur maxime 
                ipsum amet aut dolore, blanditiis illum quidem
                ab dolorum quaerat eum quia et veniam quas omnis
                sint tenetur temporibus.
            </p>
        </R.registerRight>

      </R.formRegister>
    </R.constainer>
  );
};

export default Register;
