import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <div id="error-page" className="card text-center">
      <div className="card-header">
        <h1>Oops!</h1>
      </div>
      <div className="card-body">
        <h5 className="card-title">Error</h5>
        <p className="card-text">Lo sentimos, se ha producido un error inesperado.</p>
        <i>{error.statusText || error.message}</i>
      </div>
      <div className="card-footer text-body-secondary">
        <a href="#" className="btn btn-primary">Regresar al Home</a>
      </div>
    </div>
  );
}

