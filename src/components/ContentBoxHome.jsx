import React from 'react';
import SearchBar from './SearchBar';
import ContentBoxHomeResults from './ContentBoxHomeResults';
import NavbarHome from './NavbarHome';

const ContentBox = () => {


  return (
    <div className='box-container'>
    <div className='content-box align'>
      <div className='results-padding'>
      <NavbarHome /> 
      </div> 
      <ContentBoxHomeResults />
      <div className='flex pt-1'>
        <div>
        <SearchBar />
        </div>
      <div className='pl-2 pt-0.5'>
        <button type="submit" className="login-button">Search</button></div>
      </div>
  </div>
</div>
  );
};

export default ContentBox;
