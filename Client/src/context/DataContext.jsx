import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Criação do contexto para Tickets
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ticket, setTicket] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const publicRoutes = ['/', '/register', '/admin/login', '/admin/register']; // Rotas públicas

  useEffect(() => {
    // Recuperar ticket armazenado no localStorage ao carregar a aplicação
    const storedTicket = localStorage.getItem('currentTicket');
    if (storedTicket) {
      setTicket(JSON.parse(storedTicket));
    }

    // Carregar tickets ao iniciar
    const loadTickets = async () => {
      // Ignorar carregamento em rotas públicas
      if (publicRoutes.includes(location.pathname)) return;

      try {
        const response = await axios.get('http://localhost:4000/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Erro ao carregar os tickets:', error);
      }
    };

    loadTickets();
    setLoading(false);
  }, [location.pathname, navigate]);

  const getTicket = async (id) => {
    try {
      console.log('Chamando o ticket com ID:', id);
      const response = await axios.get(`http://localhost:4000/ticket/${id}`);
      setTicket(response.data);

      // Persistir os dados do ticket no localStorage
      localStorage.setItem('currentTicket', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao carregar o Ticket:', error);
    }
  };

  const assumedTicket = async (id) => {
    try {
      const response = await axios.put(`http://localhost:4000/tickets/${id}/assumir`);
      console.log(response.data);
      navigate('/admin/ticket/takeover');
    } catch (error) {
      console.error('Erro ao atualizar o Ticket:', error);
    }
  };

  return (
    <DataContext.Provider value={{ ticket, tickets, getTicket, assumedTicket, loading }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook para acessar os dados do contexto
export const useData = () => {
  return useContext(DataContext); 
};
