import { createContext, useState, useEffect } from 'react';
import { getAllClients  } from '../../api/client';


export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {    

  const [ clients, setClients ] = useState([]);
  const [ searchedClient, setSearchedClient ] = useState([]);
  const [ isLoading, setIsLoading ] = useState( false );
  

  const addClientContext = async (data) => {
    setClients([ data, ...clients ]);
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
        setIsLoading( true );
        const { data } = await getAllClients(10,0);
        setClients( data?.reverse() );
        setIsLoading( false );
      })();
  }, [])

  return (
    <ClientsContext.Provider value={{
      searchedClient,
      setSearchedClient,
      isLoading, 
      setIsLoading,
      clients,
      addClientContext,
      deleteClientContext,
      editClientContext
    }}>
      {children}
    </ClientsContext.Provider>
  );
};