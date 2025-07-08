import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-content notfound-container">
      <h1>404 - Page not found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/home" className="back-home">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
