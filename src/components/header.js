import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <div className="header-1">
      <h1 className="logo">Bookstore CMS</h1>
    </div>
    <div className="menu">
      <Link className="menu-link" to="/">
        Books
      </Link>
      <Link className="menu-link" to="/categories">
        Categories
      </Link>
    </div>
    {/* <div>
      <img src="../images/profile.jpg" alt="Profile Icon" />
    </div> */}
  </nav>
);

export default Header;
