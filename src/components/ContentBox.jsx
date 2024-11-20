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
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '20px',
      border: '10px solid #4d2800',
      padding: '20px',
    },

    searchWrapper: {
      width: '80%',
      maxWidth: '600px',
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
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