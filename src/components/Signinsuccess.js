import React from "react";
import { useCookies } from "react-cookie";
import tickverified from "../img/tickverified.gif"
import { Link } from "react-router-dom";


import "./Signinsuccess.css";

const Signinsuccess = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  return (
    <React.Fragment>
      <div className="success">
        <div className="wrapperAlert">
          <div className="contentAlert">
            <div className="topHalf">
              <div className="successgif">
                  <img src={tickverified} alt="successimg"></img>
                  </div>
              <h1>Sign Successfull!</h1>
              <h2>
                Welcome <span>{cookies.User.name}</span>{" "}
              </h2>
              <Link to="/"><button className="">ok</button></Link>
              <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signinsuccess;
