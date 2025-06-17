import { useState } from "react";
import { searchArticles } from "../api/nyt";
import NewsCard from "../components/NewsCard";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);

    const data = await searchArticles(query.trim());
    const filtered = data.filter(article =>
      article.headline.main.toLowerCase().includes(query.toLowerCase()) ||
      article.abstract?.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setLoading(false);
  };

  return (
    <div className="page-content">
      <div className="search-container">
        <h2>🔍 Cerca notizie</h2>

        <form onSubmit={handleSearch} style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            value={query}
            placeholder="Es: boxing, art, politics..."
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "65%",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cerca
          </button>
        </form>

        {loading && <p>Caricamento risultati...</p>}

        {!loading && searched && results.length === 0 && (
          <p>Nessun articolo trovato per "{query}"</p>
        )}

        {!loading &&
          results.map((article) => (
            <NewsCard
              key={article._id}
              title={article.headline.main}
              abstract={article.abstract || article.lead_paragraph}
              url={article.web_url}
              image={
                article.multimedia?.[0]
                  ? `https://www.nytimes.com/${article.multimedia[0].url}`
                  : null
              }
            />
          ))}
      </div>
    </div>
  );
}

export default SearchPage;


