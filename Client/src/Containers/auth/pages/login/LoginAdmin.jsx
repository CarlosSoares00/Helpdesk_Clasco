import * as L from './loginAdmin.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios"

const LoginAdmin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  const handleSubmitLogin = async (e) => {
    e.preventDefault()

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
      <L.formContainer>
      <L.boxText>
            <L.title>Log in  to support Portal</L.title>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          </L.boxText>

          <L.form action="" onSubmit={handleSubmitLogin}>
            <L.input type="email" name='email' placeholder="Insira o seu Email" onChange={(e) => setEmail(e.target.value)}/>
            <L.input type="password" name='senha' placeholder="Insira a sua Senha" onChange={(e) => setPassword(e.target.value)}/>
            <L.buttonLink>Esquece a minha senha</L.buttonLink>
            <L.buttonLogin type='submit'>
              Entrar
            </L.buttonLogin>
          </L.form>
      </L.formContainer>
    </L.loginAdminContainer>
  )
}

export default LoginAdmin
