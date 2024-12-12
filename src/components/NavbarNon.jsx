import React from 'react';
import { Link } from 'react-router-dom';

const NavbarNon = () => {
  return (
    <div className="navbar tranclucent">
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
      </div>
  );
};

export default NavbarNon;