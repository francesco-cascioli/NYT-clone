export const getFavorites = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const toggleFavorite = (article) => {
  const current = getFavorites();
  const exists = current.find((a) => a.url === article.url);
  let updated;
  if (exists) {
    updated = current.filter((a) => a.url !== article.url);
  } else {
    updated = [...current, article];
  }
  saveFavorites(updated);
  return updated;
};
