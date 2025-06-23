import { useEffect, useState } from "react";
import { fetchTopStories } from "../api/nyt";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTopStories();
        setArticles(data);
      } catch (error) {
        console.error("Errore nel caricamento delle notizie dalla Home:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="page-content">
      <div className="home-container">
        <h2>📰 NYT Top Stories</h2>

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

