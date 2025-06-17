import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { path: "/search", label: "🔍 Search" },
    { path: "/favorites", label: "⭐ Favorites" },
    { path: "/section/world", label: "🌍 World" },
    { path: "/section/technology", label: "💻 Tech" },
    { path: "/section/arts", label: "🎨 Arte" },
  ];

  const linkStyle = (path) => ({
    color:
      location.pathname === path
        ? "#00bfff"
        : darkMode
        ? "#eee"
        : "#111",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    display: "block",
    transition: "color 0.3s",
  });

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fff",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: darkMode
          ? "0 2px 5px rgba(255, 255, 255, 0.05)"
          : "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: darkMode ? "#eee" : "#111",
              fontSize: "1.3rem",
              margin: 0,
            }}
          >
            📰 NYT Clone
          </h1>
        </Link>

        {isMobile ? (
          <div
            onClick={toggleMenu}
            style={{
              color: darkMode ? "#eee" : "#111",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              style={{
                marginLeft: "1rem",
                background: "transparent",
                border: `1px solid ${darkMode ? "#eee" : "#111"}`,
                color: darkMode ? "#eee" : "#111",
                borderRadius: "5px",
                padding: "0.4rem 0.8rem",
                cursor: "pointer",
              }}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div style={{ marginTop: "1rem" }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={linkStyle(link.path)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            style={{
              marginTop: "1rem",
              background: "transparent",
              border: `1px solid ${darkMode ? "#eee" : "#111"}`,
              color: darkMode ? "#eee" : "#111",
              borderRadius: "5px",
              padding: "0.4rem 0.8rem",
              width: "100%",
              cursor: "pointer",
            }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

