import * as L from './layout.js'
import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom';

const LayoutClient = () => {
  return (
    <L.LayountContainer>
      <Header/>
      <L.main>
        <Sidebar/>
        <Outlet/>
      </L.main>
    </L.LayountContainer>
  )
}

export default LayoutClient