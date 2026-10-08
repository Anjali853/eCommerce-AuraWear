import { useEffect, useState } from "react";
import { searchProducts } from "../services/productService";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collections", path: "/collections" },
  { label: "Aura Match", path: "/aura-match" },
  { label: "Try-On Studio", path: "/try-on" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  const delaySearch = setTimeout(async () => {
    if (!search.trim()) {
      setSearchResults([]);
      setSearchOpen(false);
      return;
    }

    try {
      const data = await searchProducts(search.trim());

      setSearchResults(data.products || []);
      setSearchOpen(true);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
      setSearchOpen(true);
    }
  }, 300);

  return () => clearTimeout(delaySearch);
}, [search]);

  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(7,7,10,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 900,
              letterSpacing: "0.05em",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            AURA
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WEAR
            </span>
          </h1>
        </Link>

        {/* Search */}
<div
  style={{
    position: "relative",
    width: "260px",
    marginLeft: "20px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      height: "42px",
      padding: "0 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "all 0.2s",
    }}
  >
    <span style={{ fontSize: "16px", opacity: 0.6 }}>⌕</span>

    <input
      type="text"
      placeholder="Search your vibe..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onFocus={() => {
        if (search.trim()) setSearchOpen(true);
      }}
      style={{
        width: "100%",
        border: "none",
        outline: "none",
        background: "transparent",
        color: "#fff",
        fontSize: "13px",
      }}
    />

    {search && (
      <button
        onClick={() => {
          setSearch("");
          setSearchResults([]);
          setSearchOpen(false);
        }}
        style={{
          border: "none",
          background: "transparent",
          color: "rgba(255,255,255,0.5)",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ×
      </button>
    )}
  </div>

  {/* Search Results */}
  {searchOpen && (
    <div
      style={{
        position: "absolute",
        top: "50px",
        left: 0,
        right: 0,
        background: "#111116",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        zIndex: 200,
      }}
    >
      {searchResults.length > 0 ? (
        searchResults.slice(0, 5).map((product) => (
          <div
            key={product._id}
            onClick={() => {
              navigate(`/product/${product._id}`);
              setSearch("");
              setSearchOpen(false);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 12px",
              cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "42px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {product.name}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#ec4899",
                  marginTop: "3px",
                }}
              >
                ₹{product.price}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            padding: "18px",
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          No fits found ✨
        </div>
      )}
    </div>
  )}
</div>



        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  style={{
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: "none",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {link.label}
                  {/* Active underline */}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #a855f7, #ec4899)",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* XP Badge */}
          <div
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              LVL 01 ELITE
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              12,450 XP
            </span>
          </div>

          {/* Avatar */}
         <div
  onClick={() => navigate("/profile")}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.6)";
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#A855F7,#EC4899)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    border: "2px solid rgba(168,85,247,0.4)",
    transition: "all 0.2s",
    flexShrink: 0,
  }}
>
  A
</div>
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  borderRadius: "2px",
                  background: "#ffffff",
                  transition: "all 0.25s",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "opacity(0) scale(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(7,7,10,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            zIndex: 99,
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            fontFamily: "sans-serif",
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "18px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
