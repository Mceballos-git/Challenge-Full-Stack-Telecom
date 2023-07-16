import { useEffect, useState } from 'react';
import { getAllClients } from "../../api/client";
import { Link } from "react-router-dom"

export const ClientsListView = () => {

  const [ clients, setClients ] = useState([]);


  useEffect( () => {
    ( async () => {
      const { data } = await getAllClients();
      setClients( data );
    } )();
  }, [] );


return (   
  <>
      <div className="container mt-5">
          <table className="table table-bordered shadow">
              <thead className="table-light">
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Documento</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Género</th>
                      <th scope="col">Teléfono</th>
                      <th scope="col">Acciones</th>
                  </tr>
              </thead>

              <tbody>
                  {
                      clients.map( (client) =>(
                          <tr key={ client.id }>
                              <td scope="row"> {client.id} </td>
                              <td> {client.dni} </td>
                              <td> {client.name} </td>
                              <td> {client.lastname} </td>
                              <td> {client.gender} </td>
                              <td> {client.phone} </td>
                              <td className="d-flex justify-content-around">
                                  <Link 
                                    to="/create/:id" 
                                    state={{ from: client.id }}
                                  >
                                    <button className="btn btn-primary btn-sm"> Editar </button>
                                  </Link>
                                  <button className="btn btn-danger btn-sm"> Eliminar </button>
                              </td>
                          </tr>

                      ))
                  }
              </tbody>
          </table>
      </div>
  </>
)
}
