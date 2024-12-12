import React from 'react';
import SearchBar from './SearchBar';
import ContentBoxHomeResults from './ContentBoxHomeResults';

const ContentBox = () => {


  return (
    <div className='box-container'>
      <div className='content-box align'>
        <h1>Home</h1> 
        <div>
        <SearchBar />
        </div>
      <div className='s-b-padding'>
      <button type="submit" className="login-button">Search</button>
      </div>
      <div className='pt-5'>
      <ContentBoxHomeResults />
      </div>
      
    </div>
  </div>
  );
};

export default ContentBox;