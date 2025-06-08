import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import ArticleDetail from "./pages/ArticleDetail";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar"; // 👈 aggiungi questo

function App() {
  return (
    <Router>
      <Navbar /> {/* 👈 qui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/:sectionName" element={<SectionPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
