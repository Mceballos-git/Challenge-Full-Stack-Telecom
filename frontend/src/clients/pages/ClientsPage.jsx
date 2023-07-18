
import { useContext } from 'react';
import { ClientsContext } from '../../context/ClientsContext';
import { NoClientsView } from '../views/NoClients.View';
import { ClientsListView } from '../views/ClientsListView';
import LoadingSpinner from '../../ui/spinner';


export const ClientsPage = () => {

  const { clients, isLoading } = useContext( ClientsContext );

  return (
    <>
        { (isLoading) 
            ? <LoadingSpinner/>
            : (clients.length === 0 ) 
              ? <NoClientsView/>
              : <ClientsListView clients = { clients }/>
        }        
    </>
  )
}
