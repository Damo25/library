import React from 'react';
import SearchBar from '../components/SearchBar';

const ContentBox = () => {


  return (
    <div className='box-container'>
      <div className='content-box'>
        <h1>Home</h1> 
        <div className='search-wrapper'>
        <SearchBar />
      </div>
    </div>
  </div>
  );
};

export default ContentBox;