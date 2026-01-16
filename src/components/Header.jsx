import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="brand">LAMA</span>
        <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  );
};

export default Header;
