import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  return (
    <div className="navbarAdmin tranclucent">
      <Link to="/ContentBoxAdminResults" className="navbar-logo">
        Library
      </Link>
      <div className="navbar-links">
      <Link to="/ContentBoxUserAdmin" className="navbar-link">
          Library
        </Link>
        <Link to="/ContentBoxAdminResults" className="navbar-link">
          Users
        </Link>
      </div>
    </div>
  );
};

export default NavbarAdmin;