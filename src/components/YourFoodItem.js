import React from "react";
import { useState } from "react";
import dummyimg from "../img/dummyimg.jpg";
import moment from "moment";

import "./YourFoodItem.css";

const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

const YourFoodItem = (props) => {
  const [destinationPlaceId, setDestinationPlaceId] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const selectFoodHandler = (e) => {
    setIsSelected(!isSelected);
    // alert("Food item selected");

    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${props.publicFoodData.location}&key=${REACT_APP_GOOGLE_MAP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinationPlaceId(data.results[0].place_id);
      });
  };

  //getting the created date and converting it to normal date
  var d = new Date(props.yourFoodData.createdAt).toString();
  var index = d.lastIndexOf(":") + 3;
  const createdAtDate = d.substring(0, index);

  //extanding the date 24hrs to set as expiry date
  const expiryUTCDate = new Date(props.yourFoodData.createdAt)
  expiryUTCDate.setDate(expiryUTCDate.getDate() + 1);
  var expiryDate = new Date(expiryUTCDate).toString();
  var index1 = expiryDate.lastIndexOf(":") + 3;
  const expiryAtDate = expiryDate.substring(0, index1);

  return (
    <React.Fragment>
      <div
        className={
          props.selectedFoodItem
            ? "col-12 available-food-items"
            : "col-12 available-food-items selected"
        }
      >
        <div
          className={
            isSelected
              ? "col-12 food-item food-items-box selected mb-4"
              : "col-12 food-item food-items-box mb-4"
          }
        >
          <div className="col-3 image d-none d-md-block">
            <a
              className="lightbox"
              href={`#http://localhost:4000/${props.yourFoodData.images}`}
            >
              <img
                src={`http://localhost:4000/${props.yourFoodData.images}`}
                alt="foodimage"
              />
              {/* <p
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "80px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Click to preview image.
              </p> */}
            </a>
            <div
              className="lightbox-target"
              id={`http://localhost:4000/${props.yourFoodData.images}`}
            >
              <img
                src={`http://localhost:4000/${props.yourFoodData.images}`}
                alt="foodimage"
              />
              <a className="lightbox-close" href="#"></a>
            </div>
          </div>
          <div className="col-12 col-md-9 details">
            <div className="row col-12 discriptions mb-3">
              <div className="col-12 col-md-7 mb-3 mb-md-0 food-discription">
                <h3>{props.yourFoodData.name}</h3>

                <p id="postedby">
                  posted by <span>someone</span>
                </p>
                <p className="d-none d-md-block">
                  {props.yourFoodData.description}
                </p>
                <h4>Location : {props.yourFoodData.location}</h4>
              </div>
              <div className="col-12 col-md-4 food-date">
                <div className="col-12 date-of-posting">
                  <h4>Food Posted on:</h4>
                  <p>{createdAtDate}</p>
                </div>

                <div className="col-12 due-date">
                  <h4>Due Date of Delivering food:</h4>
                  <p>{expiryAtDate}</p>
                </div>
              </div>
            </div>

            <div className="col-12 buttons">
              <button
                className={
                  isSelected
                    ? "col-3 me-3 select selected"
                    : "col-3 me-3 select"
                }
                onClick={selectFoodHandler}
              >
                {isSelected ? "Unselect" : "Select"}
              </button>
              {isSelected ? (
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&origin=QVB&origin_place_id=${props.place_id}&destination=QVB&destination_place_id=${destinationPlaceId}`}
                >
                  <button className="col-3 me-3 me-md-5 direction ">
                    Get Direction
                  </button>
                </a>
              ) : (
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&origin=QVB&origin_place_id=${props.place_id}&destination=QVB&destination_place_id=${destinationPlaceId}`}
                >
                  <button
                    className="col-3 me-3 me-md-5 direction disabled"
                    disabled
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Select the food item."
                  >
                    Get Direction
                  </button>
                </a>
              )}
              <div className=" col-4 me-3 food-status">confirm pickup</div>
              <button className="col-1 delete">delete</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default YourFoodItem;
