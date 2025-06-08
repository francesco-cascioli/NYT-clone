import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SectionPage from "../pages/SectionPage";
import ArticleDetail from "../pages/ArticleDetail";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/section/:sectionName" element={<SectionPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} /> {/* opzionale */}
      </Routes>
    </BrowserRouter>
  );
}
