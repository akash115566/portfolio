import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  const messages = [
    "FREE SHIPPING on all orders over Rs 1000/-",
    "FREE DELIVERY on selected orders",
    "SHOP NOW & GET THE BEST SPICES",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Link click hone par mobile menu close
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* ================= TOP ANNOUNCEMENT ================= */}
      <div className="top-slider">

        <button
          className="slider-arrow left-arrow"
          onClick={() =>
            setCurrentMessage(
              (currentMessage - 1 + messages.length) % messages.length
            )
          }
        >
          ‹
        </button>

        <div className="slider-text">
          {messages[currentMessage]}
        </div>

        <button
          className="slider-arrow right-arrow"
          onClick={() =>
            setCurrentMessage(
              (currentMessage + 1) % messages.length
            )
          }
        >
          ›
        </button>

      </div>


      {/* ================= MAIN NAVBAR ================= */}
      <div className="navbar-main">

        {/* SEARCH */}
        <div className="navbar-left">

          <Link
            to="/search"
            className="icon-link"
            aria-label="Search"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <line
                x1="16.5"
                y1="16.5"
                x2="22"
                y2="22"
              />
            </svg>
          </Link>

        </div>


        {/* CENTER LOGO */}
        <div className="navbar-logo">

          <Link to="/" onClick={closeMenu}>
            <img
              src="/Home/logo.jpeg"
              alt="Logo"
            />
          </Link>

        </div>


        {/* RIGHT ICONS */}
        <div className="navbar-right">

          {/* USER */}
          <Link
            to="/account"
            className="icon-link"
            aria-label="Account"
            onClick={closeMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <circle cx="12" cy="8" r="4" />

              <path
                d="M4.5 21c.7-4.2 3.2-6.3 7.5-6.3s6.8 2.1 7.5 6.3"
              />
            </svg>
          </Link>


          {/* CART */}
          <Link
            to="/cart"
            className="icon-link"
            aria-label="Cart"
            onClick={closeMenu}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path
                d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L21 8H6"
              />

              <circle cx="10" cy="20" r="1.2" />
              <circle cx="18" cy="20" r="1.2" />
            </svg>
          </Link>


          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >

            {menuOpen ? (
              /* X ICON */
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              /* HAMBURGER ICON */
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}

          </button>

        </div>

      </div>


      {/* ================= NAVIGATION MENU ================= */}
      <nav className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/grounded-spices"
          onClick={closeMenu}
        >
         About
        </Link>

        <Link
          to="/blended-spices"
          className="active"
          onClick={closeMenu}
        >
          Service
        </Link>

        <Link
          to="/recipes"
          onClick={closeMenu}
        >
         Blog
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          CONTACT
        </Link>

      </nav>

    </header>
  );
};

export default Navbar;