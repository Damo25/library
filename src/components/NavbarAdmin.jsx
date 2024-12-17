import React, { useState } from 'react';
import ContentBoxAdminResults from './ContentBoxAdminResults';
import ContentBoxAdminUserResults from './ContentBoxAdminUserResults';

const NavbarAdmin = () => {
  const [activeComponent, setActiveComponent] = useState('Library');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Library':
        return <ContentBoxAdminResults />;
      case 'Users':
        return <ContentBoxAdminUserResults />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div>
      <div className="navbarAdmin tranclucent">
        <div className="navbar-links">
          <div className="navbar-link" onClick={() => setActiveComponent('Library')}>
            Library
          </div>
          <div className="navbar-link" onClick={() => setActiveComponent('Users')}>
            Users
          </div>
        </div>
      </div>
      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default NavbarAdmin;



