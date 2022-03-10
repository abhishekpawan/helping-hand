import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import SignupPage from "./SignupPage";
import FoodItems from "./FoodItems";
// import hhlogo from "../img/hhlogo.png"
import hhlogogreen from "../img/hhlogogreen.png";
import "./BeforeLogin.css";

const Login = (props) => {
  const [signupClicked, setSignupClicked] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

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

  //loging out user by clearing all cookies
  const signout = () => {
    removeCookie("User");
    removeCookie("Token");
    removeCookie("G_AUTHUSER_H");
    removeCookie("Location");
    removeCookie("place_id");

    window.location.reload(false);
  };

  //getting location of user
  const [address, setAddress] = useState();
  const [placeId, setPlaceId] = useState();

  //  const location = navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // });

  // console.log(location)

  var locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;

    // console.log(crd);
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);

    const MAP_API = process.env.GOOGLE_MAP_API_KEY;

    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=AIzaSyAsqOL3Md_68A2OfEsMJbSVWYNt5sPpoRI`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0]);
        setAddress(data.results[0].formatted_address);
        setPlaceId(data.results[0].place_id);
      });

    setCookie("place_id", placeId, { path: "/" });
    setCookie("Location", address, { path: "/" });
  }

  function error(err) {
    console.warn(
      `ERROR(${err.code}): ${err.message}, Unable to retrieve your location`
    );
    // alert(`ERROR(${err.code}): ${err.message}`)
  }

  navigator.geolocation.getCurrentPosition(success, error, locationOptions);

  return (
    <React.Fragment>
      <div className="body">
        <div className={expandClass}>
          <div className="row col-12 login-area-inside">
            <div className="col-9 title" id="title">
              <img src={hhlogogreen} alt="logo" />
            </div>
            {cookies.User ? (
              <div className="row col-3 username-dp d-flex">
                <div className="col-5 col-sm-7 username d-none d-md-block">
                  <h5>{cookies.User.name}</h5>
                </div>
                <div className="col-1 dp">
                  <div className="dp-wrapper">
                    <img src={cookies.User.imageURL} alt="user_image" />
                    <div className="dd">
                      <ul>
                        <li>Invisible option</li>
                        <li>
                          {cookies.User.name}
                          <br />
                          <span className="email">{cookies.User.email}</span>
                        </li>
                        <li>
                          RP: {cookies.User.rp}
                          <button className="reedem">Reedem</button>
                        </li>

                        <li>
                          <button>
                            <Link to="/profile">View Profile</Link>
                          </button>
                        </li>
                        <li>
                          {" "}
                          <button onClick={signout}> Sign Out</button>
                        </li>
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
          />
        </div>

        <FoodItems signupClick={signupClick} />
      </div>
    </React.Fragment>
  );
};

export default Login;