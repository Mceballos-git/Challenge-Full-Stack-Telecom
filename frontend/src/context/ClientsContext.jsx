import { createContext, useState, useEffect } from 'react';
import { getAllClients, getClientById, updateClient, deleteClient  } from '../../api/client';


export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {    

  const [ clients, setClients ] = useState([]);
  

  const addClientContext = async (data) => {
    setClients([ ...clients, data]);
  }


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
      addClientContext,
      deleteClientContext,
      editClient
    }}>
      {children}
    </ClientsContext.Provider>
  );
};