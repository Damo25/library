import React from 'react';
import Seachbar from './SearchBar';
import ContentBoxAdminResults from './ContentBoxAdminResults';
import NavbarAdmin from './NavbarAdmin';


const ContentBoxAdmin = () => {


  return (
    <div className='box-container'>
      <div className='content-box'>
        <div>
        <NavbarAdmin /> 
        <Seachbar />
        </div>
        <div className='s-b-padding'>
        <button type="submit" className="login-button">Search</button>
        </div>
        <div className='results-padding'>
        <ContentBoxAdminResults />
        </div>
    </div>
  </div>
  );
};

export default ContentBoxAdmin;