import { useEffect, useState } from "react";
import { fetchTopStories } from "../api/nyt";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTopStories();
        setArticles(data);
      } catch (error) {
        console.error("Errore nel caricamento delle notizie:", error);
      }
    };
    getData();
  }, []);

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter((article) => article.section === filter);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="page-content">
      <div className="home-container" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>📰 NYT Top Stories</h2>

        {/* Filtro */}
        <CategoryFilter
          value={filter}
          onChange={(value) => {
            setFilter(value);
            setVisibleCount(6);
          }}
        />

        {/* Articoli */}
        {articles.length === 0 ? (
          <Loader />
        ) : visibleArticles.length === 0 ? (
          <p>No articles found for this category.</p>
        ) : (
          visibleArticles.map((article) => (
            <NewsCard
              key={article.url}
              title={article.title}
              abstract={article.abstract}
              url={article.url}
              image={article.multimedia?.[0]?.url}
            />
          ))
        )}

        {/* Bottone "Load More" */}
        {visibleCount < filteredArticles.length && (
          <button
            onClick={handleLoadMore}
            style={{
              marginTop: "1rem",
              padding: "0.6rem 1.2rem",
              fontSize: "1rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;

