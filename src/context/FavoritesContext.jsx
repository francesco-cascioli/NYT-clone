import { createContext, useContext, useState, useEffect } from "react";


const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("nyt-favorites")) || [];
    setFavorites(saved);
  }, []);

 
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


export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContext;
