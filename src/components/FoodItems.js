import React from "react";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import PublicFoodItem from "./PublicFoodItem";
import YourFoodItem from "./YourFoodItem";
import notlogin from "../img/notlogin.png";

import "./FoodItems.css";

const FoodItems = (props) => {
  const [selectedFoodItem, setSelectedFoodItem] = useState(true);


  const handleYourFood = () => {
    setSelectedFoodItem(false);
  };
  const handleAvailableFood = () => {
    setSelectedFoodItem(true);
  };

  return (
    <React.Fragment>
      <div className="lower-body">
        <div className="public-food-list">
          <div className="col-12 signup-header ">
            <h2>Welcome to Helping Hand</h2>
            <p>
              Join Hands to remove World Hunger with your leftover foods. Which
              will also help in reducing food wastage
            </p>
          </div>
          <div className="col-12 selector">
            <div className="your-food food">
              <button
                className={selectedFoodItem ? "" : "selected"}
                onClick={handleYourFood}
              >
                Your Food Items
              </button>
            </div>
            <div className="public-food food">
              <button
                className={selectedFoodItem ? "selected" : ""}
                onClick={handleAvailableFood}
              >
                Available Food Items
              </button>
            </div>
          </div>

          <div className="col-12 food-items">
            <div
              className={
                selectedFoodItem
                  ? "your-food-items"
                  : "your-food-items selected"
              }
            >
              {/* <div className="col-10 signup-page"> */}
              {props.cookieData.Token? (
                <div>hgk</div>
              ):(<div className="row signup-page-inside food-items-box">
                <div className="col-12 signup-area">
                  <div className="" id="user">
                    <h4>You are not sign in yet.</h4>

                    <p>
                      Sign in to provide one more helping hand to fight against
                      world hunger. Either you just want to provide the food or
                      want to deliver the food or BOTH!
                    </p>
                    <img src={notlogin} />
                    {/* <h4>Sign in Here!</h4> */}
                    <div className="col-3 login-signup ">
                        <button className="signup" onClick={props.signupClick}>
                          <a href="#title">Sign in</a>
                        </button>

                    </div>
                  </div>
                </div>
              </div>
              )}
              

              <div className="add-food food-items-box">
                Add your food items</div>

              <YourFoodItem selectedFoodItem={selectedFoodItem} />
            </div>

            <PublicFoodItem selectedFoodItem={selectedFoodItem} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodItems;
