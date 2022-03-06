import React from "react";
import { useState } from "react";
import dp from "../img/dp.jfif";

import SignupPage from "./SignupPage";
import FoodItems from "./FoodItems";

import "./BeforeLogin.css";

const Login = (props) => {
  const [signupClicked, setSignupClicked] = useState(false);

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

  return (
    <React.Fragment>
      <div className="body">
        <div className={expandClass}>
          <div className="col-12 login-area-inside">
            <div className="col-9 title" id="title">
              <h2>Helping Hand</h2>
            </div>

            <div className="col-3 login-signup ">
              <button className="signup" onClick={signupClick}>
                Sign in
              </button>
            </div>

            {/* <div className="row col-3 username-dp d-flex">
              <div className="col-7 username">
                <h5>Username</h5>
              </div>
              <div className="col-1 dp">
                <div className="dp-wrapper">
                  <img src={dp} />
                  <div class="dd">
                    <ul>
                      <li>Invisible option</li>
                      <li>Jhon doe <br/><span className="email">jhondoe@email.com</span></li>
                      <li>RP: 99 <button className="reedem">Reedem</button></li>
                      <li>Location: unknown</li>
                      <li><button className="add-location">Add Location</button></li>
                      <li>View Profile</li>
                      <li>Sign Out</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          
          </div>

          <SignupPage
            signupPageClass={signupPageClass}
            cancelClick={cancelClick}
          />
        </div>

        <FoodItems signupClick={signupClick} />
      </div>
    </React.Fragment>
  );
};

export default Login;
