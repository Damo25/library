import React from 'react';
import Seachbar from './SearchBar';
import ContentBoxAdminResults from './ContentBoxAdminResults';


const ContentBoxAdmin = () => {


  return (
    <div className='box-container-register'>
      <div className='content-box-register'>
        <h1>Admin</h1> 
        <div>
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