import { FaUserSlash } from 'react-icons/fa';

export const NoClientsView = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <FaUserSlash style={{width: 50, height:50}}/>
      <h3>No hay clientes cargados</h3>
    </div>
  )
}