import { useState, useEffect } from "react";
import { toggleFavorite, getFavorites } from "../utils/localStorage";

function NewsCard({ title, abstract, url, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((a) => a.url === url));
  }, [url]);

  const handleFavorite = () => {
    const updated = toggleFavorite({ title, abstract, url, image });
    setIsFavorite(updated.some((a) => a.url === url));
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "1.5rem",
        marginBottom: "2rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            borderRadius: "8px",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
      )}
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "1rem", color: "#444" }}>{abstract}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#0077cc",
          fontWeight: "bold",
        }}
      >
        Leggi di più →
      </a>
      <button
        onClick={handleFavorite}
        style={{
          marginLeft: "1rem",
          background: "none",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "⭐" : "☆"}
      </button>
    </div>
  );
}

export default NewsCard;

