import React from "react";
import { useState } from "react";

import dp from "../img/dp.jfif";
import { Link } from "react-router-dom";

import FoodItems from "./FoodItems";
import "./Profile.css";

const Profile = (props) => {


  return (
    <React.Fragment>
      <div className="body profile">
        <div className="login-area">
          <div className="col-12 login-area-inside">
            <div className="col-9 title" id="title">
              <h2>Helping Hand</h2>
            </div>
            <div className="col-3 login-signup ">
              <button className="signup"><Link to="/">Back</Link></button>
            </div>
          </div>
        </div>
        <div className="lower-body">
          <div className="public-food-list">
            <div className="col-12 profile-page">
              <h3 className="mb-2">Your Profile</h3>
              <img className="mb-3" 
              src={props.cookieData.User.imageURL} />

              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td>Name: </td>
                    <td>{props.cookieData.User.name}</td>
                  </tr>
                  <tr>
                    <td>Email: </td>
                    <td>{props.cookieData.User.email}</td>
                  </tr>
                  <tr>
                    <td>Reward Points(RP):</td>
                    <td>
                      99 <button className="reedem">Reedem</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                    <button className="add-location">Add Location</button>

                    </td>
                  </tr>
                  
                </tbody>
              </table>

              {/* <div className="col-12 buttons mb-3">
              <button className="signout" onClick={signout}><Link to='/'>Sign Out</Link></button>

              </div> */}
            </div>

            <div className="col-12 selector">
              <div className="your-food food">
                <button
                // className={selectedFoodItem ? "" : "selected"}
                // onClick={handleYourFood}
                >
                  Added Food Items
                </button>
              </div>
              <div className="public-food food">
                <button
                // className={selectedFoodItem ? "selected" : ""}
                // onClick={handleAvailableFood}
                >
                  Delivered Food Items
                </button>
              </div>
            </div>

            <div className="col-12 food-items">
              <div
              //   className={
              //     selectedFoodItem
              //       ? "your-food-items"
              //       : "your-food-items selected"
              //   }
              >
                {/* <div className="add-food food-items-box">
                  Add your food items
                </div> */}

                {/* <YourFoodItem selectedFoodItem={selectedFoodItem} /> */}
              </div>

              {/* <PublicFoodItem selectedFoodItem={selectedFoodItem} /> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
