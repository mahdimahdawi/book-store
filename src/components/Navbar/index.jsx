import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="flex-start">
      <div className="logo">
        <NavLink to="/">
          Bookstore CMS
        </NavLink>
      </div>
      <ul className="nav-link">
        <li className="nav-link-item-books">
          <NavLink to="/">
            BOOKS
          </NavLink>
        </li>
        <li className="nav-link-item-categories">
          <NavLink to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="flex-end">
      <div className="profile">
        <span className="material-symbols-outlined">
          person
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
