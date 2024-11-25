import React from 'react';
import SearchBar from './SearchBar';

const ContentBox = () => {


  return (
    <div className='box-container'>
      <div className='content-box'>
        <h1>Home</h1> 
        <div className='search-wrapper'>
        <SearchBar />
      </div>
      <div className='s-b-padding'>
      <button type="submit" className="login-button">Search</button>
      </div>
    </div>
  </div>
  );
};

export default ContentBox;