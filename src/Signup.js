import logo from './transprent-logo.png';
import './Signup.css';


import React, { useState } from "react";
import OTP from './OTP.js';
function Signup() {
  const [isClicked,setClicked]=useState(false)
  return (
    <section className="App">
        {/* this is header of the app */}
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header >

      <form>
        {!isClicked&&<React.Fragment>
      <div className='inputBox'>
          <button id="codebtn">+91</button>
        <input type="text" maxLength="10" id="mobile" placeholder="Enter Mobile Number"></input>
      </div>
      <button className="continueButton" onClick={()=>{
        let m=document.getElementById("mobile").value;
        console.log(m.length);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "token":"717dc2d82d86be210bef206cf512dba9",
            "mobile":m,
            "action": "Signin_or_Signup",
            "timestamp": 1652446231059
            })
      };
      fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
          .then(response => console.log(response.json()))
          .then(data =>{ console.log(data)
          setClicked(true)});
        }}>Continue</button></React.Fragment>}
        </form>

        {isClicked&&<React.Fragment>
          
        <OTP.js/>
          
        </React.Fragment>}
            
    
    <br></br> <br></br> <br></br>
    {/* here is a footer */}
    <footer className="footer">
        <p className="footerText">By continuing you agree to our</p>
        {/* here it should be a link that inform terms and services */}
        <a href="!#" className="link">
          Terms of Services & Privacy Policy
        </a>

    </footer>
  </section>
   
  );
};

export default Signup;

