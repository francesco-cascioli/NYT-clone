import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToRecentlyViewed } from "../utils/recentlyViewed";


function ArticleDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  useEffect(() => {
  if (article) {
    addToRecentlyViewed(article);
  }
}, [article]);

  if (!article) {
    return (
      <div className="page-content">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2>Article not found</h2>
          <p>The requested article is missing or was not passed correctly.</p>
          <button onClick={() => navigate(-1)} style={{ marginTop: "1rem" }}>
            ⬅ Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>{article.title}</h2>
        <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>{article.byline}</p>
        <p style={{ color: "#666", marginBottom: "1rem" }}>{new Date(article.published_date).toLocaleString()}</p>
        
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "100%", borderRadius: "10px", marginBottom: "1.5rem" }}
          />
        )}

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{article.abstract}</p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            color: "#007BFF",
            fontWeight: "bold",
          }}
        >
          Read full article →
        </a>
      </div>
    </div>
  );
}

export default ArticleDetail;
