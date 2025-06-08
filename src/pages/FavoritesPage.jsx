import { useEffect, useState } from "react";
import { getFavorites } from "../utils/localStorage";
import NewsCard from "../components/NewsCard";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h2>⭐ I tuoi articoli preferiti</h2>
      {favorites.length === 0 ? (
        <p>Nessun preferito ancora.</p>
      ) : (
        favorites.map((article) => (
          <NewsCard
            key={article.url}
            title={article.title}
            abstract={article.abstract}
            url={article.url}
            image={article.image}
          />
        ))
      )}
    </div>
  );
}

export default FavoritesPage;

