import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Cria o contexto
const AuthContext = createContext();

// Provider que envolve a aplicação e fornece o contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate()
  const publicRoutes = ['/','/register', '/admin/login', '/admin/register']; // Lista de rotas públicas (não exigem autenticação)
  
  
  useEffect(() => {
    const userMe = async () => {
      
      // Se a rota for pública, não realiza a verificação de autenticação
      if (publicRoutes.includes(location.pathname)) {
        return;
      }

      // Verifica se os dados do usuário estão no localStorage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Carrega os dados do usuário armazenados
        return;
      }


      try {      
        
        const userResponse = await axios.get('http://localhost:4000/user/me');
        setUser(userResponse.data);
        localStorage.setItem('user', JSON.stringify(userResponse.data)); // Armazena os dados no localStorage

      } catch (error) {

        console.error('Erro ao verificar usuário:', error);
        navigate('/'); // Redireciona para login se falhar
      }
    };
    userMe()

  }, [location.pathname, navigate]);


  // Função de logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Remove os dados do usuário ao sair
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};