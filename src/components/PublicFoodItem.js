import React from "react";
import dummyimg from "../img/dummyimg.jpg";

import "./PublicFoodItem.css";

const PublicFoodItem = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          props.selectedFoodItem
            ? "col-12 available-food-items selected"
            : "col-12 available-food-items"
        }
      >
        {/* <div className="col-12 food-items-box mb-4">
          <h4>No Food items available for donation!</h4>
        </div> */}
        <div className="col-12 food-item food-items-box mb-4 ">
          <div className="col-3 image d-none d-md-block">
            <img src={dummyimg} />
          </div>
          <div className="col-12 col-md-9 details">
            <div className="row col-12 discriptions mb-3">
              <div className="col-12 col-md-7 mb-3 mb-md-0 food-discription">
                <h3>Food Name</h3>
                <p id="postedby">
                  posted by <span>someone</span>
                </p>
                <p className="d-none d-md-block">
                  Lorem ipsum dolor sit amet. Aut accusamus quia ab quia nihil
                  aut omnis sint sit vero repudiandae in officia esse At nobis
                  enim rem alias accusamus!{" "}
                </p>
                <h4>Location :</h4>
              </div>
              <div className="col-12 col-md-4 food-date">
                <div className="col-12 date-of-posting">
                  <h4>Food Posted on:</h4>
                  <p>28th Feb, 2022 12:45 PM</p>
                </div>

                <div className="col-12 due-date">
                  <h4>Due Date of Delivering food:</h4>
                  <p>29th Feb, 2022 12:44 PM</p>
                </div>
              </div>
            </div>

            <div className="col-12 buttons">
              <button className="col-3 me-3 select">Select</button>
              <button className="col-3 me-3 me-md-5 direction ">
                Get Direction
              </button>

              <div className=" col-5 food-status">
                Food is available for donation
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PublicFoodItem;
