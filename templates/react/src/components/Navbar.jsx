// Navbar.jsx
import React from 'react';
// import { a } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a to="/" className="navbar-logo">
          <h1>E-Commerce</h1>
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a to="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link">Shop</a>
          </li>
          <li className="navbar-item">
            <a to="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a to="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <a to="/login" className="navbar-button">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
