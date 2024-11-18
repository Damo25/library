import React from 'react';

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
  };

  return (
    <div style={navbarStyle}>
      <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Library
      </div>
      <div className="links" style={{ display: "flex", gap: "15px" }}>
        <a href="#Login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </a>
        <a href="#Admin Login" style={{ color: "white", textDecoration: "none" }}>
          Admin Login
        </a>
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;