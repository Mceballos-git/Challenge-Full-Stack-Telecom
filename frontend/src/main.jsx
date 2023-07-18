import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import RootPage from './clients/pages/RootPage';
import ErrorPage from './clients/pages/ErrorPage';
import { ClientsPage } from './clients/pages/ClientsPage';

import './styles.css';

import { ClientsProvider } from './context/ClientsContext';
import { AddEditClientView } from './clients/views/AddEditClientView';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ClientsPage />,
      },
      {
        path: "/create",
        element: <AddEditClientView />
      },
      {
        path: "/edit-client/:id",
        element: <AddEditClientView />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ClientsProvider>
      <RouterProvider router={router} />
    </ClientsProvider>
  </React.StrictMode>
);