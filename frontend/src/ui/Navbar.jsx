import { useContext } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getClientByDni } from '../../api/client';
import { ClientsContext } from '../context/ClientsContext';


export const Navbar = () => {

  const { 
  setSearchedClient, 
  isLoading, 
  setIsLoading, 
  isCreatingOrEditingClient } = useContext( ClientsContext );

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const patterns = {
    numbers: /^[0-9]+$/i
  };

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

  const deleteSearchedClients = () => {
    setSearchedClient([]);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Clients App</a>

          <ul className="navbar-nav">
            <li className="btn btn-sm nav-item active">
              <Link 
                onClick={deleteSearchedClients} 
                className="border border-info rounded m-2 nav-link" 
                to={`/`}
              >
                Listado de clientes
              </Link>
            </li>
            <li className="btn btn-sm nav-item active">
              <Link 
                hidden={ isCreatingOrEditingClient } 
                reloadDocument 
                className="border border-info rounded m-2 nav-link" 
                to={`/create`}
              >
                Agregar cliente
              </Link>
            </li>
          </ul>

          <form onSubmit={handleSubmit(onSubmit)} className="d-flex" role="search">
            <input
              disabled={isCreatingOrEditingClient}
              name='dni'
              className={`form-control me-2 ${errors.dni ? "is-invalid" : ""}`} 
              type="text" 
              placeholder={`${isCreatingOrEditingClient ? 'Búsqueda desactivada' : 'Buscar por DNI'}`}
              {...register("dni", { 
                pattern: {
                  value: patterns.numbers
                }
              })}
            />
            <div id="dni" className="invalid-feedback m-2">Sólo números</div>
            { isLoading ? (
              <button disabled={isCreatingOrEditingClient} className="btn btn-outline-info btn-sm">
                Cargando...
              </button>
            ) : (
              <button disabled={isCreatingOrEditingClient} className="btn btn-outline-info btn-sm" type="submit">Buscar</button>
            )}
          </form>
      </div>
    </nav>
  )
}
