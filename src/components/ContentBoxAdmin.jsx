import React from 'react';
import ContentBoxAdminResults from './ContentBoxAdminResults';
import NavbarAdmin from './NavbarAdmin';
import SeachbarAdmin from './searchBarAdmin';



const ContentBoxAdmin = () => {


  return (
    <div className='box-container'>
      <div className='content-box align'>
        <div className='results-padding'>
        <NavbarAdmin /> 
        <ContentBoxAdminResults />
        </div>
        <div className='flex pt-1'>
          <div>
          <SeachbarAdmin />
          </div>
        <div className='pl-2 pt-0.5'>
          <button type="submit" className="login-button">Search</button></div>
        </div>
    </div>
  </div>
  );
};

export default ContentBoxAdmin;