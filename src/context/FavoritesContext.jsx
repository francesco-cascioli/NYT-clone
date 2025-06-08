import { createContext, useContext, useState, useEffect } from "react";

// Crea il contesto
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carica i preferiti da localStorage all'avvio
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("nyt-favorites")) || [];
    setFavorites(saved);
  }, []);

  // Salva i preferiti ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("nyt-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (article) => {
    if (!favorites.find((a) => a.url === article.url)) {
      setFavorites([...favorites, article]);
    }
  };

  const removeFavorite = (url) => {
    setFavorites(favorites.filter((a) => a.url !== url));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// ✅ Questa è la riga importante:
export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContext;
