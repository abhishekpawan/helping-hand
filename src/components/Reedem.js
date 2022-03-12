import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import logo from "../img/logoImage.png";

import FoodItems from "./FoodItems";
import "./Profile.css";
import "./Reedem.css";

const Profile = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  return (
    <React.Fragment>
      <div className="body profile">
        <div className="login-area">
          <div className="col-12 login-area-inside">
            <div className="col-9 title" id="title">
              <img src={logo} alt="logo" width={"350px"} />
            </div>
            <div className="col-3 login-signup ">
              <button className="signup">
                <Link to="/">Back</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="lower-body">
          <div className="public-food-list">
            <div className="col-12 profile-page">
              <img className="mb-3" src={cookies.User.imageURL} />
              <h2>Reedem Items with your Reward Points(RP)</h2>
              <h5>Available Reward Points: {cookies.User.rp}</h5>
            </div>
            <div className="m-3">
              <ul class="mystyle-products">
                <li class="product">
                  <a href="#">
                    <span class="onsale">6 days Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/v/e/vet%20vang%20(1).u2470.d20160606.t122127.jpg"
                    />
                    <h3>Logitech M238 Party Mouse</h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">RP: 2000</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 2000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-33%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">3 days Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/a/n/anker%202%20cong%20power%2024w_white%20(1).u2470.d20160609.t094609.jpg"
                    />
                    <h3>Adapter Anker PowerPort 2 USB Ports-...</h3>
                    <span class="price">
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 1500</span>{" "}
                      </ins>
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">48h left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/e/x/ex200-1.u425.d20170309.t162916.175240.jpg"
                    />
                    <h3>
                      Totolink EX200 - Wifi Router Upto 300Mbps
                    </h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">299.000 ₫</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 3000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-22%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">24hrs Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/4/5/450bt_black_angle_03-1606x1606px.u2769.d20170512.t164639.178330.jpg"
                    />
                    <h3>JBL Headphone T450BT</h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">1.600.000 ₫</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 5000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-7%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">24hrs Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/d/s/dsc_0212.u425.d20160408.t134929.jpg"
                    />
                    <h3>Loa Bluetooth Speaker</h3>
                    <span class="price">
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 4000</span>{" "}
                      </ins>
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">24hrs Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/d/i/divoom-airbeat-10-black-4_1.jpg"
                    />
                    <h3>Divoom Airbeat 10 3.5W</h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">639.000 ₫</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 10000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-16%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">12hrs Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/1/4/1454517182000_img_582809_1.jpg"
                    />
                    <h3>Sony Alpha A6300 + Kit 16-50mm</h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">21.990.000 ₫</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 25000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-20%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
                <li class="product">
                  <a href="#">
                    <span class="onsale">12hrs Left</span>
                    <img
                      alt=""
                      class="attachment-shop_catalog "
                      src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/1/4/1419_02_mypassportformac_hero_png_imgw_1000_1000.u689.d20161214.t120338.15169.jpg"
                    />
                    <h3>WD My Passport 1TB (ver 2016)</h3>
                    <span class="price">
                      <del>
                        {" "}
                        {/* <span class="amount">1.699.000 ₫</span>{" "} */}
                      </del>
                      <ins>
                        {" "}
                        <span class="amount">Claim with RP: 20000</span>{" "}
                      </ins>
                      {/* <span class="sale-tag sale-tag-square">-11%</span> */}
                    </span>
                  </a>
                  <a
                    class="button add_to_cart_button product_type_simple"
                    rel="nofollow"
                    href="#"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-dark btn-circle btn-review"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                  >
                    <i class="ion ion-ios-move"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
