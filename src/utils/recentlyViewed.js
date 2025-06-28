const KEY = "recently_viewed";

export function getRecentlyViewed() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function addToRecentlyViewed(article) {
  const current = getRecentlyViewed();
  const filtered = current.filter((a) => a.url !== article.url);
  const updated = [article, ...filtered].slice(0, 5);
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function clearRecentlyViewed() {
  localStorage.removeItem(KEY);
}
