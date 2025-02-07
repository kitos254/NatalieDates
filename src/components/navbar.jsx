import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src="/aegis.png" className="logo-img" />
          </div>
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <button className="close-btn" onClick={toggleMenu}>
              ×
            </button>
            <ul>
              <li>
                <Link to="/" className="nav-item" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/involve"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Apply for Aid
                </Link>
              </li>
            </ul>
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
