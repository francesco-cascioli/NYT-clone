import { useEffect, useState } from "react";
import { getRecentlyViewed, clearRecentlyViewed } from "../utils/recentlyViewed";
import NewsCard from "../components/NewsCard";

function RecentlyViewedPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const recent = getRecentlyViewed();
    setArticles(recent);
  }, []);

  const handleClear = () => {
    clearRecentlyViewed();
    setArticles([]);
  };

  return (
    <div className="page-content">
      <div className="home-container" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>🕒 Recently Viewed Articles</h2>

        {articles.length > 0 && (
          <button
            onClick={handleClear}
            style={{
              marginBottom: "1.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🗑 Clear Recently Viewed
          </button>
        )}

        {articles.length === 0 ? (
          <p>No articles viewed recently.</p>
        ) : (
          articles.map((article) => (
            <NewsCard
              key={article.url}
              title={article.title}
              abstract={article.abstract}
              url={article.url}
              image={article.image}
              article={article}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RecentlyViewedPage;

