import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    width: "100%",
    height: "80px",
    backgroundColor: "#4d2800",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  return (
    <div style={navbarStyle}>
      <Link to="/Home" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", textDecoration: "none" }}>
        Library
      </Link>
      <div className="links" style={{ display: "flex", gap: "15px" }}>

        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
        <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
          Admin Login
        </Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
          Sign Up
        </Link>
        <Link to="/logout" style={{ color: "white", textDecoration: "none" }}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;