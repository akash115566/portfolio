import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  const messages = [
    "FREE SHIPPING on all orders over Rs 1000/-",
    "FREE DELIVERY on selected orders",
    "SHOP NOW & GET THE BEST SPICES"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar">

      {/* Top Announcement Slider */}
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
            setCurrentMessage((currentMessage + 1) % messages.length)
          }
        >
          ›
        </button>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">

        {/* Search */}
        <div className="navbar-left">
          <Link to="/search" className="icon-link" aria-label="Search">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </Link>
        </div>

        {/* Center Logo */}
        <div className="navbar-logo">
          <Link to="/">
           <img src="/Home/logo.jpeg" alt="Logo" />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="navbar-right">

          {/* User */}
          <Link to="/account" className="icon-link" aria-label="Account">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4.5 21c.7-4.2 3.2-6.3 7.5-6.3s6.8 2.1 7.5 6.3" />
            </svg>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="icon-link" aria-label="Cart">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L21 8H6" />
              <circle cx="10" cy="20" r="1.2" />
              <circle cx="18" cy="20" r="1.2" />
            </svg>
          </Link>

        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar-menu">

        <Link to="/whole-spices">
          WHOLE SPICES
        </Link>

        <Link to="/grounded-spices">
          GROUNDED SPICES
        </Link>

        <Link to="/blended-spices" className="active">
          BLENDED SPICES
        </Link>

        <Link to="/recipes">
          RECIPES
        </Link>

        <Link to="/contact">
          CONTACT
        </Link>

      </nav>

    </header>
  );
};

export default Navbar;