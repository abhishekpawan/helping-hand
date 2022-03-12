import React, { useEffect } from "react";
import { useState, useRef, } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import PublicFoodItem from "./PublicFoodItem";
import YourFoodItem from "./YourFoodItem";
import notlogin from "../img/notlogin.png";
import uploadimageplaceholder from "../img/uploadimageplaceholder.png";

import "./FoodItems.css";

const FoodItems = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [selectedFoodItem, setSelectedFoodItem] = useState(false);

  //function to toggle between your food and public food
  const handleYourFood = () => {
    setSelectedFoodItem(false);
  };
  const handleAvailableFood = () => {
    setSelectedFoodItem(true);
  };

  //taking image from user in add food form
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);

    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  //getting all public food data
  const [publicFoodData, setPublicFoodData] = useState([]);
  const [yourFoodData, setYourFoodData] = useState([]);

  useEffect(() => {
    const foodData = axios.get("/foods").then((foodData)=>{
      setPublicFoodData(foodData.data.foods);
    })

    //getting individualfood data
    if(cookies.User){
      const yourFoodData = axios.get(`/food/${cookies.User._id}`).then((foodData)=>{
      setYourFoodData(foodData.data.userFood);
    })
    }
    
  }, [])


  //handling enetered data
  const [enteredFoodName, setEnteredFoodName] = useState("");
  const [enteredFoodDis, setEnteredFoodDis] = useState("");
  const [enteredFoodLocation, setEnteredFoodLocation] = useState("");
  const [foodType, setFoodType] = useState();

  const foodNameHandler = (e) => {
    setEnteredFoodName(e.target.value);
  };
  const foodDisHandler = (e) => {
    setEnteredFoodDis(e.target.value);
  };
  const foodLocationHandler = (e) => {
    setEnteredFoodLocation(e.target.value);
  };
  const foodTypeHandler = (e) => {
    setFoodType(e.target.value);
  };

  //form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", enteredFoodName);
    formData.append("description", enteredFoodDis);
    formData.append("images", image, image.filename);
    formData.append("type", foodType);
    formData.append("location", enteredFoodLocation);
    formData.append("id", cookies.User._id);

    setEnteredFoodName("");
    setEnteredFoodDis("");
    setEnteredFoodLocation("");
    setFoodType(undefined);
    document.getElementById("uploadedimg").value = null;
    document.getElementById("defimg").src = uploadimageplaceholder;

    const { data } = await axios.post("/food/new", formData);
    document.location.reload() 
    
  };
 


  //form cancel handler
  const cancelHandler = () => {
    setEnteredFoodName("");
    setEnteredFoodDis("");
    setEnteredFoodLocation("");
    setFoodType(undefined);
    document.getElementById("uploadedimg").value = null;
    document.getElementById("defimg").src = uploadimageplaceholder;
  };
  
  //output of public food data
  let publicFoodItem = <div
  className={
    selectedFoodItem
      ? "col-12 available-food-items selected"
      : "col-12 available-food-items"
  }
>
  <div className="col-12 food-items-box mb-4">
    <h4>No Food items available for donation!</h4>
  </div>
  </div>
  
  if(publicFoodData.length>0){
    publicFoodItem = publicFoodData.map((food) => (
      <PublicFoodItem
        selectedFoodItem={selectedFoodItem}
        publicFoodData={food}
        place_id={cookies.place_id}
      />
    ));
  }
  

  //output of individual food data
  let yourFoodItem = <div
  className={
    selectedFoodItem
      ? "col-12 available-food-items selected"
      : "col-12 available-food-items"
  }
>
  <div className="col-12 food-items-box mb-4">
    <h4>No Food items available for donation!</h4>
  </div>
  </div>
  
  if(yourFoodData.length>0){
    yourFoodItem = yourFoodData.map((food) => (
      <YourFoodItem selectedFoodItem={selectedFoodItem} 
      yourFoodData={food}/>
    ));
  }
  


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
              {cookies.User ? (
                <div>
                  <div className="modal fade" id="food-form">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="formBx">
                          <form action="" onSubmit={submitHandler}>
                            <h2>Add Food</h2>
                            <input
                              type="text"
                              value={enteredFoodName}
                              placeholder="Food Name"
                              onChange={foodNameHandler}
                              required
                            />
                            <select
                              // className="form-select form-select-sm"
                              // aria-label=".form-select-sm example"

                              onChange={foodTypeHandler}
                              required
                            >
                              <option value="">Select Food Type</option>
                              <option value="Dry">Dry</option>
                              <option value="Gravy">Gravy</option>
                            </select>
                            <textarea
                              type="text"
                              value={enteredFoodDis}
                              placeholder="Food Discription"
                              onChange={foodDisHandler}
                              required
                            />
                            <input
                              type="text"
                              value={enteredFoodLocation}
                              placeholder="Your Address"
                              onChange={foodLocationHandler}
                              required
                            />
                            <div className="row col-12">
                              <div className="col-6">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Upload an image of your food:"
                                  disabled
                                />
                              </div>

                              <div className="col-5 offset-1 image-preview">
                                <input
                                  id="uploadedimg"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  ref={imageUploader}
                                  // value={image}
                                  required
                                />
                              </div>
                            </div>
                            <div className="image-holder">
                              <img
                                id="defimg"
                                src={uploadimageplaceholder}
                                ref={uploadedImage}
                                alt="uploaded_image"
                              />
                            </div>

                            {/* <input type="text" name="" placeholder="Food Name" /> */}
                            <h4>
                              Your Location: <span>{cookies.Location}</span>{" "}
                            </h4>
                            <div className="col-12 buttons">
                              <button
                                // data-bs-dismiss="modal"

                                className="col-5 signup me-4"
                                type="submit"
                              >
                                Add
                              </button>
                              <button
                                className="col-5 cancel"
                                type="button"
                                data-bs-dismiss="modal"
                                onClick={cancelHandler}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="add-food">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#food-form"
                    >
                      <i className="bx bxs-add-to-queue"></i>
                      Add your food items
                    </button>
                  </div>
                  {yourFoodItem}
                </div>
              ) : (
                <div className="row signup-page-inside food-items-box">
                  <div className="col-12 signup-area">
                    <div className="" id="user">
                      <h4>You are not sign in yet.</h4>

                      <p>
                        Sign in to provide one more helping hand to fight
                        against world hunger. Either you just want to provide
                        the food or want to deliver the food or BOTH!
                      </p>
                      <img src={notlogin} alt="notlogin" />
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
            </div>

            {publicFoodItem}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodItems;
