import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";

import "./styles.css";
import { ClientsListView } from "./routes/ClientsListView";
import { AddEditClientView } from "./routes/AddEditClientView";

import { ClientsProvider } from './context/ClientsContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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

  // <React.StrictMode>
    <ClientsProvider>
      <RouterProvider router={router} />
    </ClientsProvider>
  // </React.StrictMode>
);