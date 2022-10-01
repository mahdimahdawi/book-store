import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { MdPerson } from 'react-icons/md';

const Navbar = () => (
  <nav className="header">
    <div className="logo-menu">
      <div className="logo">Bookstore CMS</div>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/" className="item">
            BOOKS
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/categories" className="item">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="profile">
    <MdPerson />
    </div>
  </nav>
);

export default Navbar;
