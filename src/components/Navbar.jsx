// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wines">Wines</Link></li>
        <li><Link to="/add-wine">Add Wine</Link></li>
        <li><Link to="/wines/pairing">Wine Pairing</Link></li> {/* New link for Wine Pairing */}
      </ul>
    </nav>
  );
}

export default Navbar;
