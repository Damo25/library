import React from 'react';


const ContentBoxRegister = () => {


  return (
    <div className='box-container-register'>
      <div className='content-box-register'>
        <h1>SignUp</h1>  
        <form className="login-form">
        <div className="form-group">
            <label htmlFor="Email">Forename:</label>
            <input type="text" id="forename" name="username" placeholder="Enter your forename" />
          </div>

        <div className="form-group">
            <label htmlFor="Email">Surename:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Surename" />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Age:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Age" />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Adress:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Surename" />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Postcode:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Postcode" />
          </div>

        <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Email" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Phone Number:</label>
            <input type="text" id="username" name="username" placeholder="Enter Phone Number" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Create password" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Main Library:</label>
            <input type="password" id="password" name="password" placeholder="Add Main Library"/>
          </div>

          <button type="submit" className="login-button">Register</button>
        </form>
    </div>
  </div>
  );
};

export default ContentBoxRegister;