import { createContext, useState, useEffect } from 'react';
import { getAllClients, getClientById, updateClient, deleteClient  } from '../../api/client';


export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {    

  const [ clients, setClients ] = useState([]);
  // const [ activeClient, setActiveclient ] = useState([]);

  // const handleGetAllClients = async () => {
  //   const { data } = await getAllClients();
  //   setClients( data );
  // };

  // const handleGetClientById = async ( id ) => {
  //   const { data } = await getClientById( id );
  //   setActiveclient( data );
  // };
  const editClient = async (id, data) => {
      clients.map((client) => {
        if( client.id === id){


        } 
      })
  }

  // const handleUpdate = async ( id, data ) => {
  //   const { affected } = updateClient( id, data )
  // } 

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
      deleteClientContext,
      editClient
    }}>
      {children}
    </ClientsContext.Provider>
  );
};