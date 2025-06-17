import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import ArticleDetail from "./pages/ArticleDetail";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/section/:sectionName" element={<SectionPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}



export default App;

