import { createContext, useState, useEffect } from 'react';
import { getAllClients  } from '../../api/client';


export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {    

  const [ clients, setClients ] = useState([]);
  

  const addClientContext = async (data) => {
    setClients([ ...clients, data]);
  }

  const editClientContext = async (id, data) => {
      data = {...data, id};
      setClients(clients => clients.map((client) => (client.id === id ? data : client)));           
  }
  
  const deleteClientContext = ( id ) => {
    setClients( clients.filter( client => client.id !== id ) );
  };

  useEffect(() => {
    ( async () => {
        const { data } = await getAllClients();
        setClients( data );        
      })();
  }, [])
  

  

  return (
    <ClientsContext.Provider value={{
      clients,
      addClientContext,
      deleteClientContext,
      editClientContext
    }}>
      {children}
    </ClientsContext.Provider>
  );
};