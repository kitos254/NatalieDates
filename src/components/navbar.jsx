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
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "80px",
              height: "80px",
              marginTop: "10px",
              zIndex:1000,
            }}
          >
            <img
              src="/logo.jpeg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
                  to="/updates"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/SignIn"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  Contact
                </Link>
                
              </li>
              <li>
              <Link
                  to="https://forms.gle/eR1Body1XMVwWkvv7"
                  className="nav-item"
                  onClick={handleMenuItemClick}
                >
                  HookUp
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
