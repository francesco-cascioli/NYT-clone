import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-content notfound-container">
      <h1>404 - Pagina non trovata</h1>
      <p>Oops! La pagina che stai cercando non esiste.</p>
      <Link to="/home" className="back-home">
        ⬅ Torna alla Home
      </Link>
    </div>
  );
}

export default NotFound;
