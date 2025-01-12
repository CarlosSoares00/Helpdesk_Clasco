import * as L from './loginAdmin.js'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios"


// import dev from '../../../../../src/assets/dev1.svg'
import logo from '/src/assets/logo.png'

import logo1 from '/src/assets/3.svg'

const LoginAdmin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    try {
      const response = await axios.post('http://localhost:4000/user_admin/login', {
        email, password
      })

      const token = response.data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/admin/home', { replace: true });

    } catch (error) {
      console.error(error.response.data.error)
      alert(error.response.data.error)
    }
  }

  return (
    <L.loginAdminContainer>
      <L.Container>
        
      <L.formLogin>
            <L.logo>
              <img src={logo} alt="" />
            </L.logo>

            <L.formSection>
              <L.headerF>
                <h2>Sign In</h2>
                <p>Não possues uma conta?
                  <Link to=''> Registrar-se</Link>
                </p>
              </L.headerF>

              <L.form action="" onSubmit={handleSubmitLogin}>
                <L.inputContent>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" placeholder="Seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                </L.inputContent>
                
                <L.inputContent>
                  <label htmlFor="password">Senha:</label>
                  <input type="password" id="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} />
                </L.inputContent>

                <L.inputExtr>
                  <L.forgetP> <Link to=''>Esqueceu-se da Senha?</Link></L.forgetP>
                </L.inputExtr>

                <L.btnSubmit type='submit'>Entrar</L.btnSubmit>

              </L.form>
            </L.formSection>
      </L.formLogin>

        <L.illustration>
            <L.figure>
              <img src={logo1} alt="" />
            </L.figure>
        </L.illustration>

      </L.Container>
    </L.loginAdminContainer>
  )
}

export default LoginAdmin
