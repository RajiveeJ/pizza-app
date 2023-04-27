import React, { useState } from "react";



import "../styles.css";


function Signup(){

     // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
//   const database = [
//     {
//       username: "admin@gmail.com",
//       password: "admin123"
//     }
//   ];

  const errors = {
    // uname: "invalid username",
    pass: "password does not match"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { pass , cpass} = document.forms[0];

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    // if (userData) {
      if (cpass.value !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="cpass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="SignUp" />
        </div>
          </form>
        
       
        
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
       
        {isSubmitted ? <div>Account created successfully!!!!<br />
        Back to <a className="login" href="/">Login</a> Page
        </div> : renderForm}
      </div>
    </div>
  );
}

export default  Signup;