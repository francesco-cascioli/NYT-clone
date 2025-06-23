import { useState, useEffect } from "react";
import { toggleFavorite, getFavorites } from "../utils/localStorage";
import { toast } from "react-toastify";


function NewsCard({ title, abstract, url, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((a) => a.url === url));
  }, [url]);

  const handleFavorite = () => {
  const updated = toggleFavorite({ title, abstract, url, image });
  const isNowFavorite = updated.some((a) => a.url === url);
  setIsFavorite(isNowFavorite);

  toast(isNowFavorite ? "⭐ Added to favorites" : "❌ Removed from favorites");
};


  return (
    <div className="news-card">
      {image && (
        <img
          src={image}
          alt={title}
          className="news-image"
        />
      )}
      <h3 className="news-title">{title}</h3>
      <p className="news-abstract">{abstract}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-link"
      >
        Read more →
      </a>
      <button onClick={handleFavorite} className="favorite-button">
        {isFavorite ? "⭐" : "☆"}
      </button>
    </div>
  );
}

export default NewsCard;

