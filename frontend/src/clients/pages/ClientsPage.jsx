
import { useContext } from 'react';
import { ClientsContext } from '../../context/ClientsContext';
import { NoClientsView } from '../views/NoClients.View';
import { ClientsListView } from '../views/ClientsListView';


export const ClientsPage = () => {

  const { clients } = useContext( ClientsContext );

  return (
    
    <>
      {(clients.length === 0 ) 
        ? <NoClientsView/>
        : <ClientsListView clients = { clients } />}
    </>
  )
}
