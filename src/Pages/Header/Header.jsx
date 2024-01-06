import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Header.css';
import { DarkMode } from '../imports';

const Menu = () => (
  <>
        <p><a href="#home" className="active">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#Experiance">Experiance</a></p>
        <p><a href="#Projects">Projects</a></p>
        <p><a href="#contact">Contact</a></p>
  </>
)

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <a  href="#" className="logo">Shareef Dev</a>
      <DarkMode/>
      <nav className="navbar">
      <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#Experiance">Experiance</a>
        <a href="#Projects">Projects</a>
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