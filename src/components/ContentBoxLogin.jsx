import React,{useState} from 'react';


const ContentBoxLogin = () => {

  const [username,setUsername]=useState("");//stores the inputed username
  const [password,setPassword]=useState("");


  return (
    <div className='box-container-login'>
      <div className='content-box-login'>
        <h1>Login</h1> 
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" name="username" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter your username or email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" />
          </div>


          <button type="submit" className="login-button" onClick={async()=>{//this should be sending it across
            const logInput={username,password};
            const response= await fetch("/login",
              {method: "POST"
              ,
              body: JSON.stringify(logInput)});
              if (response.ok) {
                console.log("test123");}//this is happening just is normally to quick to console log
            }}>Log In</button>
            
        </form>
    </div>
  </div>
  );
};

export default ContentBoxLogin;