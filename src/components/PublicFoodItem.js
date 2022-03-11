import React, { useState } from "react";

import "./PublicFoodItem.css";

const PublicFoodItem = (props) => {
  const [destinationPlaceId, setDestinationPlaceId] = useState();

  // const navigate = useNavigate();

  const selectFoodHandler = (e) => {
    alert("Food item selected");

    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${props.publicFoodData.location}&key=AIzaSyAsqOL3Md_68A2OfEsMJbSVWYNt5sPpoRI`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinationPlaceId(data.results[0].place_id);
      });
  };

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
            <a
              className="lightbox"
              href={`#http://localhost:1000/${props.publicFoodData.images}`}
            >
              <img
                src={`http://localhost:4000/${props.publicFoodData.images}`}
                alt="foodimage"
              />
            </a>
            <div
              className="lightbox-target"
              id={`http://localhost:1000/${props.publicFoodData.images}`}
            >
              <img
                src={`http://localhost:4000/${props.publicFoodData.images}`}
                alt="foodimage"
              />
              <a className="lightbox-close" href="#"></a>
            </div>
          </div>
          <div className="col-12 col-md-9 details">
            <div className="row col-12 discriptions mb-3">
              <div className="col-12 col-md-7 mb-3 mb-md-0 food-discription">
                <h3>{props.publicFoodData.name}</h3>
                <p id="postedby">
                  posted by <span>someone</span>
                </p>
                <p className="d-none d-md-block">
                  {props.publicFoodData.description}
                </p>
                <h4>Location : {props.publicFoodData.location}</h4>
              </div>
              <div className="col-12 col-md-4 food-date">
                <div className="col-12 date-of-posting">
                  <h4>Food Posted on:</h4>
                  <p>{props.publicFoodData.createdAt}</p>
                </div>

                <div className="col-12 due-date">
                  <h4>Due Date of Delivering food:</h4>
                  <p>{props.publicFoodData.createdAt}</p>
                </div>
              </div>
            </div>

            <div className="col-12 buttons">
              <button className="col-3 me-3 select" onClick={selectFoodHandler}>
                Select
              </button>
              <a
                target="_blank"
                href={`https://www.google.com/maps/dir/?api=1&origin=QVB&origin_place_id=${props.place_id}&destination=QVB&destination_place_id=${destinationPlaceId}`}
              >
                <button
                  className="col-3 me-3 me-md-5 direction "
                  // onClick={directionHandler}
                >
                  Get Direction
                </button>
              </a>

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