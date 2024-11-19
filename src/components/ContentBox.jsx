import React from 'react';
import SearchBar from '../components/SearchBar';

const ContentBox = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
    },
    box: {
      backgroundColor: '#c68c53',
      width: '1200px',
      height: '600px',
      //display: 'flex',
      //flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '20px',
      border: '10px solid #4d2800',
      padding: '20px',
    },

    searchWrapper: {
      width: '80%',  // Set the width of the div around the SearchBar
      maxWidth: '600px',  // Maximum width for the div
      marginTop: '20px',  // Margin above the search bar
      display: 'flex',
      justifyContent: 'center', // Center the search bar inside the div
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Home</h1> 
        
        <div style={styles.searchWrapper}>
        <SearchBar />
      </div>
    </div>
  </div>
  );
};

export default ContentBox;