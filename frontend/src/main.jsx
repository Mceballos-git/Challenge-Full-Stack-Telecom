import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from "./views/root";
import ErrorPage from "./views/ErrorPage";

import "./styles.css";
import { ClientsListView } from "./views/ClientsListView";
import { AddEditClientView } from "./views/AddEditClientView";

import { ClientsProvider } from './context/ClientsContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ClientsListView />,
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