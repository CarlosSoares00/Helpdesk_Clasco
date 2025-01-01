import * as L from './layountAuth.js'
import { Outlet } from 'react-router-dom';

const LayoutAuth = () => {
  return (
    <L.layountAuthContainer>
      <L.header>
        <L.logo>Helpdesk</L.logo>
        <L.auth>
          <L.button>Login</L.button>
          <L.button>Register</L.button>
        </L.auth>
      </L.header>
      <Outlet/>
    </L.layountAuthContainer>
  )
}

export default LayoutAuth
