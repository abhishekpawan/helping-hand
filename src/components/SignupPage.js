import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useCookies } from "react-cookie";
import axios from "axios";

import "./SignupPage.css";
import signin from "../img/signin.png";

const SignupPage = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [signinSuccess, setSigninSuccess] = useState(false);

  const handleFailure = (error) => {
    alert("Login Failed Please Try again");
  };

  const navigate = useNavigate();
  // succes login handle]

  const handleLogin = async (googleData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    const { data } = await axios.post(
      "/google-register",
      {
        token: googleData.tokenId,
        imageURL: googleData.profileObj.imageUrl,
      },
      config
    );

    // setting cookie
    setCookie("Token", data.token, { path: "/" });
    setCookie("User", data.user, { path: "/" });
    

    navigate("/success", { replace: true });
  };

  return (
    <React.Fragment>
      <div className={props.signupPageClass} id="signup-page">
        <div className="row signup-page-inside">
          <div className="col-12 signup-header ">
            <h2>Welcome to Helping Hand</h2>
            <p>
              Join Hands to remove World Hunger with your leftover foods. Which
              will also help in reducing food wastage
            </p>
          </div>

          <div className="col-12 signup-area">
            <div className="" id="user">
              <div className="row col-12 signin-img">
                <div className="col-6 d-none d-md-block">
                  <img src={signin} alt="signin" />
                </div>

                <div className="col-6 googlelogin">
                  <p>
                    Sign in to provide one more helping hand to fight against
                    world hunger. Either you just want to provide the food or
                    want to deliver the food or BOTH!
                  </p>
                  <h4>Sign in Here!</h4>

                  <GoogleLogin
                    clientId={process.env.React_APP_GOOGLE_CLIENT_ID}
                    buttunText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cancel-button">
          <button className="cancel" onClick={props.cancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupPage;
