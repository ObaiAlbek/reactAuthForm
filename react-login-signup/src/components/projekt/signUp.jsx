import React from  "react";
import { useState }  from 'react';
import user_icon from "../assests/person.png"
import email_icon from "../assests/email.png"
import password_icon from "../assests/password.png"

const SignUp = () => {

  const [action,setAction] = useState("sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        { action==="Login"
            ?<div></div>:
 <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        
        }
       

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email"/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>click here</span></div>
      <div className="submit-container">
        <div className={action === "Login"? "submit gray":"submit"} onClick={() => {setAction("sign Up")}} >sign Up</div>
        <div className={action === "sign Up"? "submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>
    </div>

  )
}

export default SignUp;
