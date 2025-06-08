import { useEffect, useState } from "react";
import { fetchTopStories } from "../api/nyt";
import NewsCard from "../components/NewsCard";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTopStories();
      setArticles(data);
    };
    getData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "2rem 1rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "2rem", fontSize: "1.8rem" }}>
          📰 Home Page - Notizie NYT
        </h2>

        {articles.length === 0 ? (
          <p>Caricamento notizie...</p>
        ) : (
          articles.map((article) => (
            <NewsCard
              key={article.url}
              title={article.title}
              abstract={article.abstract}
              url={article.url}
              image={article.multimedia?.[0]?.url}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
