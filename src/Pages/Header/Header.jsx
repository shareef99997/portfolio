import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Header.css';

const Menu = () => (
  <>
        <p><a href="#home" className="active">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#services">Services</a></p>
        <p><a href="#portfolio">Portfolio</a></p>
        <p><a href="#contact">Contact</a></p>
  </>
)

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="navbar-menu">
        {
        toggleMenu?
           <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
        toggleMenu && (
        <div className="navbar-menu_container">
          <div className="navbar-menu_container-links">
          <Menu/>
          </div>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;