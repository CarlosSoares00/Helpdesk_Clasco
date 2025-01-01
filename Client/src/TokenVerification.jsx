import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const TokenVerification = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if(token){
      setIsAuthenticated(true)
    } else{ 
      setIsAuthenticated(false)
      navigate('/')
    }


  }, [navigate])
  

  return<>{isAuthenticated && children}</>
}

export default TokenVerification
