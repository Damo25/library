import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ContentBoxHomeResults from './ContentBoxHomeResults';

const ContentBox = () => {


  return (
    <div className='box-container'>
      <div className='content-box'>
        <h1>Home</h1> 
        <div>
        <SearchBar />
        </div>
      <div className='s-b-padding'>
      <button type="submit" className="login-button" onClick={async()=>{
            const response= await fetch("/itemSearch",
              {method: "POST",
              body: JSON.stringify()});
              if (response.ok) {
                console.log(response);}//this is happening just is normally to quick to console log
            }}>Search</button>
      </div>
      <div className='pt-5'>
      <ContentBoxHomeResults />
      </div>
      
    </div>
  </div>
  );
};

export default ContentBox;