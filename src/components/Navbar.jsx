import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
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
    { path: "/search", label: "🔍 Ricerca" },
    { path: "/favorites", label: "⭐ Favoriti" },
    { path: "/section/world", label: "🌍 World" },
    { path: "/section/technology", label: "💻 Tech" },
    { path: "/section/arts", label: "🎨 Arte" },
   // { path: "/section/sports", label: "🏅 Sports" },
  ];

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#00bfff" : "white",
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
        backgroundColor: "#222",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
          <h1 style={{ color: "white", fontSize: "1.3rem", margin: 0 }}>
            📰 NYT Clone
          </h1>
        </Link>

        {isMobile ? (
          <div
            onClick={toggleMenu}
            style={{
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
                {link.label}
              </Link>
            ))}
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;

