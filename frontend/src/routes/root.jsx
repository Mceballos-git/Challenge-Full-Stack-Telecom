import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand" href="#">Clients App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={`/`}>Listado de clientes</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to={`/create`}>Agregar cliente</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
}