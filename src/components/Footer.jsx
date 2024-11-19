import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: "100%",
    height: "80px",
    backgroundColor: "#4d2800",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 1000,
  };

  return (
    <div style={footerStyle}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Library | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
