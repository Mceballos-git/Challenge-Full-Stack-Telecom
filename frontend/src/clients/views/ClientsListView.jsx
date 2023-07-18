
import { Link  } from 'react-router-dom';


export const ClientsListView = ( { clients }) => {  

  return (   
  <>
        <div className="container mt-3">
            <h2>Listado de clientes</h2>
            <hr></hr>
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
                                      to={`/edit-client/${ client.id }`} >
                                      <button className="btn btn-primary btn-sm"> Editar </button>
                                    </Link>
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
