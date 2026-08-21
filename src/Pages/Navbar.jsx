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
    <>
     {/* TOP BAR */}
      <div className="top-bar">
        <div>
          🌿 100% PURE SPICES
        </div>

        <div className="top-message">
          Premium Quality • Freshly Packed • Rich Flavour
        </div>

        <div>
          🚚 Fast Delivery
        </div>
      </div>

      {/* HEADER */}
      <header className="header">

        <div className="header-container">

          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for spices, herbs & more..."
            />
            <button>🔍</button>
          </div>

          {/* LOGO */}
          <div className="logo">
            <span className="logo-leaf">🌿</span>

            <div>
              <h1>SPICE<span>CRAFT</span></h1>
              <p>PURE • FRESH • AUTHENTIC</p>
            </div>

            <span className="logo-leaf">🌿</span>
          </div>

          {/* ACTIONS */}
          <div className="header-actions">
            <div className="header-action">
              <span>♡</span>
              <small>Wishlist</small>
            </div>

            <div className="header-action">
              <span>🛒</span>
              <small>Cart</small>
            </div>
          </div>

        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home">HOME</a>
          <a href="#products">SPICES</a>
          <a href="#categories">MASALA BLENDS</a>
          <a href="#products">HERBS</a>
          <a href="#categories">WHOLE SPICES</a>
          <a href="#categories">DRY FRUITS</a>
          <a href="#new">NEW ARRIVALS</a>
          <a href="#offers">OFFERS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      </>
  );
};

export default Navbar;