const STORAGE_KEY = "favorites";

export const getFavorites = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load favorites from localStorage", error);
    return [];
  }
};

export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Failed to save favorites to localStorage", error);
  }
};

export const toggleFavorite = (article) => {
  const current = getFavorites();
  const exists = current.some((a) => a.url === article.url);

  const updated = exists
    ? current.filter((a) => a.url !== article.url)
    : [...current, article];

  saveFavorites(updated);
  return updated;
};
