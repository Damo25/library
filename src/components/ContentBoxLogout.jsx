import React from 'react';
import { Link } from 'react-router-dom';

const ContentBoxLogout = () => {


  return (
    <div className='box-container-logout'>
      <div className='content-box-logout'>
        <h1>Are you sure you want to log out?</h1> 
      <div className='logout-button-spacing'>
        <Link to="/NonRegisteredHome" className="logout-button">
          Log Out
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ContentBoxLogout;