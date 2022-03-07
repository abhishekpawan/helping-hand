import React from "react";
import { useState } from "react";
import dp from "../img/dp.jfif";

import { Link } from "react-router-dom";

import SignupPage from "./SignupPage";
import FoodItems from "./FoodItems";

import "./BeforeLogin.css";

const Login = (props) => {
  const [signupClicked, setSignupClicked] = useState(false);
  const [cookie, setCookie] = useState('') //our cookie data
  const [removeCookie, setRemoveCookie]=useState("Token")

  //signup click handlers
  let signupPageClass = "col-10 signup-page";
  if (signupClicked === false) {
    signupPageClass = "col-10 signup-page hide";
  }
  const signupClick = () => {
    setSignupClicked(true);
  };

  if (signupClicked === true) {
    signupPageClass = "col-10 signup-page show";
  }

  //expand handlers
  let expandClass = "";
  if (signupClicked === false) {
    expandClass = "col-12 login-area";
  }

  if (signupClicked === true) {
    expandClass = "col-12 login-area login-clicked";
  }

  //cancel button click handler
  const cancelClick = () => {
    setSignupClicked(false);
  };

  // getting cookie data from "signuppage.js"
  const cookieData=(cookieData)=>{
    setCookie(cookieData)
  }

  //sending cookie data to app.js
  props.onCookie(cookie)
 
 //loging out user bby clearing cookie.user
 const signout=()=>{
   setRemoveCookie('User')
   window.location.reload(false);
 }

  return (
    <React.Fragment>
      <div className="body">
        <div className={expandClass}>
          <div className="col-12 login-area-inside">
            <div className="col-9 title" id="title">
              <h2>Helping Hand</h2>
            </div>
            {cookie.User ? (
              <div className="row col-3 username-dp d-flex">
                <div className="col-7 username">
                  <h5>{cookie.User.name}</h5>
                </div>
                <div className="col-1 dp">
                  <div className="dp-wrapper">
                    <img src={cookie.User.imageURL} />
                    <div class="dd">
                      <ul>
                        <li>Invisible option</li>
                        <li>
                        {cookie.User.name}<br />
                          <span className="email">{cookie.User.email}</span>
                        </li>
                        <li>
                          RP: 99 <button className="reedem">Reedem</button>
                        </li>
                        <li>Location: unknown</li>
                        <li>
                          <button className="add-location">Add Location</button>
                        </li>
                        <li>
                          <Link to="/profile">View Profile</Link>
                        </li>
                        <li> <button 
                        onClick={signout}
                        > Sign Out</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-3 login-signup ">
                <button className="signup" onClick={signupClick}>
                  Sign in
                </button>
              </div>
            )}
          </div>

          <SignupPage
            signupPageClass={signupPageClass}
            cancelClick={cancelClick}
            onCookie={cookieData}
            removeCookie={removeCookie}
            
            
          />
        </div>

        <FoodItems 
        signupClick={signupClick} 
        cookieData={cookie}
        />
      </div>
    </React.Fragment>
  );
};

export default Login;
