import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle.js"

// Container Auth
import LayoutAuth from "./Containers/auth/layoutAuth/LayoutAuth.jsx"
import Register from "./Containers/auth/pages/register/Register.jsx"
import Login from "./Containers/auth/pages/login/Login.jsx"
import LoginAdmin from "./Containers/auth/pages/login/LoginAdmin.jsx"
import RegisterAdmin from "./Containers/auth/pages/register/RegisterAdmin.jsx"


// Container Client
import LayoutClient from "./Containers/client/layout/LayoutClient.jsx"
import Home from "./Containers/client/pages/home/Home.jsx"
import NewTicket from "./Containers/client/pages/newTicket/NewTicket.jsx"
import Request from "./Containers/client/pages/request/Request.jsx"

// Container Admin
import Layout from "./Containers/admin/layout/Layout.jsx"
import Tasks from "./Containers/admin/pages/tasks/Tasks.jsx"
import BD from "./Containers/admin/pages/B.conhecimento/BD.jsx"
import Users from "./Containers/admin/pages/users/Users.jsx"
// import TicketID from "./Containers/admin/pages/tasks/subPages/viewTicket/ticketID.jsx"
import Groups from "./Containers/admin/pages/group/Groups.jsx"
import TicketAdmn from "./Containers/admin/pages/ticketAdm/TicketAdmn.jsx"
import TakeOver from "./Containers/admin/pages/tasks/takeOver/TakeOver.jsx"




// Container 
import axios from "axios"
import TokenVerification from "./TokenVerification.jsx"
import Views from "./Containers/admin/pages/tasks/views/Views.jsx"


import { AuthProvider } from "./context/AuthContext.jsx"
import { DataProvider } from "./context/DataContext.jsx"  
import TicketID from "./Containers/admin/pages/tasks/subPages/viewTicket/ticketID.jsx"
// import Pdf from "./Containers/admin/pages/pdf/Pdf.jsx"

const storedToken = localStorage.getItem('token');
if (storedToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
}

const App = () => {
  

  return (
    
        <Router>
          <AuthProvider>
            <DataProvider>
              <GlobalStyle/>
              <Routes>
              
                {/* Rotas Auth com layout */}
                <Route element={<LayoutAuth/>}>
                  <Route path='/' element={<LoginAdmin/>}/>
                  <Route path='/admin/register' element={<RegisterAdmin/>}/>
                  
                  <Route path='client/' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                </Route>
                
                
                  {/* Rotas Client com layout */}
                  <Route element={<LayoutClient/>}>
                    <Route path="/client/home" element={<Home/>}/>
                    <Route path="/client/newTicket" element={<NewTicket/>}/>
                    <Route path="/client/request" element={<Request/>}/>
                  </Route>

                  {/* Rotas Admin com layout */}
                  <Route element={<Layout/>}>
                    <Route path='/admin/home' element={<TokenVerification> <Tasks/> </TokenVerification>}/>

                    <Route path='/admin/ticket/add' element={<TokenVerification> <TicketAdmn/> </TokenVerification>} />

                    <Route path='/admin/ticket/view' element={ <TokenVerification> <Views/> </TokenVerification>} />
                    
                    <Route path='/admin/ticket/takeover' element={ <TokenVerification> <TakeOver/> </TokenVerification>} />

                    <Route path='/admin/base_conhecimento' element={<TokenVerification> <BD/> </TokenVerification>} />

                    <Route path='/admin/group' element={<TokenVerification> <Groups/> </TokenVerification>}/>
                    
                    <Route path='/admin/ticket/views' element={<TokenVerification> <TicketID/> </TokenVerification>} />
                    {/* <Route path='/admin/ticket/views' element={<TokenVerification> <Pdf/> </TokenVerification>} /> */}

                    <Route path='/admin/users' element={<TokenVerification> <Users/> </TokenVerification>}/>

                  </Route>
                
                

              </Routes>
          </DataProvider>
          </AuthProvider>
        </Router>
  )
}

export default App
