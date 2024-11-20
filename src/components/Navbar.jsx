import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Home" className="navbar-logo">
        Library
      </Link>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/admin" className="navbar-link">
          Admin
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
        <Link to="/logout" className="navbar-link">
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;