import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { getClientByDni } from '../../api/client';
import { ClientsContext } from '../context/ClientsContext';


export const Navbar = () => {

  const { register, handleSubmit, setValue } = useForm();
  const { setSearchedClient, isLoading, setIsLoading } = useContext( ClientsContext );

  const onSubmit = async ( { dni } ) => {
    setIsLoading( true );
    if ( !dni ) {
      setIsLoading( false );
      return setSearchedClient([]);
    }
    const { data } = await getClientByDni( dni );
    if ( data ) {
      setValue('dni', '');
      setSearchedClient(data);
      setIsLoading( false );
    }
    setValue('dni', '');
    setIsLoading(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Clients App</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={`/`}>Listado de clientes</Link>
          </li>
          <li className="nav-item active">
            <Link reloadDocument className="nav-link" to={`/create`}>Agregar cliente</Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex" role="search">
          <input 
            name='dni'
            {...register("dni")} 
            className="form-control me-2" 
            type="number" 
            placeholder="Buscar por DNI"
          />
            { isLoading ? (
            <button class="btn btn-outline-info" disabled>
              {/* <span class="spinner-border spinner-border-sm"></span> */}
              Cargando...
            </button>
            ) : (
              <button className="btn btn-outline-info" type="submit">Buscar</button>
            )}
      </form>
      </div>
      
    </nav>
  )
}
