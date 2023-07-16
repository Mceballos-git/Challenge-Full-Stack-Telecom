import { FaUserSlash } from 'react-icons/fa';

export const NoClientsView = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

        <FaUserSlash className=''/>
        <h3>No hay clientes cargados</h3>

    </div>
  )
}
