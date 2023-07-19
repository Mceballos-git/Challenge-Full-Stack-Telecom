
import { useEffect, useContext, useState } from 'react';
import { ClientsContext } from '../../context/ClientsContext';
import { getAllClients } from '../../../api/client'

import { Link  } from 'react-router-dom';


export const ClientsListView = () => {  

  const { searchedClient, clients } = useContext( ClientsContext );
  const [ renderedClients, setRenderedClients ] = useState([]);
  const [ disablePrevButton, setDisablePrevButton ] = useState( false );
  const [ disableNextButton, setDisableNextButton ] = useState( false );
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ offset, setOffset ] = useState(0);


  useEffect(() => {
      ( searchedClient.length === 0 ) ? setRenderedClients(clients) : setRenderedClients(searchedClient);
  }, [searchedClient])

  useEffect(() => {
    // Si estamos la pagina 0, desactivo el boton PrevPage
    ( currentPage < 1 ) ? setDisablePrevButton( true ) : setDisablePrevButton( false );

    // Si estamos en otra pagina que no sea la primera y se muestran menos de 10 clientes
    // desactivo el boton NextPage
    ( currentPage !== 0 && renderedClients.length < 10 ) ? setDisableNextButton( true ) : setDisableNextButton( false );

    // Si estamos en la primer pagina y se muestran menos de 10 clientes
    // desactivo el boton NextPage
    ( currentPage === 0 && renderedClients.length < 10 ) ? setDisableNextButton( true ) : null;
    // console.log('currentPage', currentPage);
    // console.log('clients.length', clients.length);
    // console.log('offset', offset);
    // console.log('renderedClients', renderedClients);
  }, [renderedClients])

  
  const handlePrevPage = async () => {
    const { data } = await getAllClients( 10, offset - 10 );
    if ( currentPage >= 1 ) setCurrentPage( currentPage - 1 );
    if ( offset !== 0 ) setOffset( offset - 10 );
    setRenderedClients( data.reverse() );
  }

  const handleNextPage = async () => {
    setCurrentPage( currentPage + 1 );
    const { data } = await getAllClients( 10, offset + 10 );
    setOffset( offset + 10 );
    setRenderedClients( data.reverse() );
  }

  return (   

   <>
    <div className="container mt-3">
      
      <h2>Listado de clientes</h2>
      <button className='btn btn-primary m-2' onClick={ handlePrevPage } disabled={disablePrevButton}>Página anterior</button>
      <button className='btn btn-primary m-2' onClick={ handleNextPage } disabled={disableNextButton}>Página siguiente</button>
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
          renderedClients.map( (client) =>(
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
