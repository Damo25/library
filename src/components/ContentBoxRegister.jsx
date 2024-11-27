import React from 'react';


const ContentBoxRegister = () => {


  return (
    <div className='box-container-register'>
      <div className='content-box-register'>
        <h1>SignUp</h1>  
        <form className="login-form">

        <div className="form-group">
            <label htmlFor="Forename">Forename:</label>
            <input type="text" id="forename" name="username" placeholder="Enter your forename" />
          </div>

        <div className="form-group">
            <label htmlFor="Surname">Surname:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Surename" />
          </div>

          <div className="form-group">
            <label htmlFor="Age">Age:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Age" />
          </div>

          <div className="form-group">
            <label htmlFor="Address">Address:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Surename" />
          </div>

          <div className="form-group">
            <label htmlFor="Postcode">Postcode:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Postcode" />
          </div>

        <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Email" />
          </div>

          <div className="form-group">
            <label htmlFor="Phone number">Phone Number:</label>
            <input type="text" id="username" name="username" placeholder="Enter Phone Number" />
          </div>

          <div className="form-group">
            <label htmlFor="Password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Create password" />
          </div>

          <div className="form-group">
            <label htmlFor="Main Library">Main Library:</label>
            <input type="password" id="password" name="password" placeholder="Add Main Library"/>
          </div>

          <button type="submit" className="login-button">Register</button>
        </form>
    </div>
  </div>
  );
};

export default ContentBoxRegister;