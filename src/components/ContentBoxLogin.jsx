import React from 'react';


const ContentBoxLogin = () => {


  return (
    <div className='box-container-login'>
      <div className='content-box-login'>
        <h1>Login</h1> 
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username or email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
    </div>
  </div>
  );
};

export default ContentBoxLogin;