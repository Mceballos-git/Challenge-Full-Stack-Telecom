import { ClientsLayout } from '../ClientsLayout';
import { ClientsListView } from '../views/ClientsListView';
import { NoClientsView } from '../views/NoClientsView';


export const ClientsListPage = () => {
  return (
   <ClientsLayout>

        {/* <NoClientsView/> */}

        <ClientsListView/>

   </ClientsLayout>
  )
}
