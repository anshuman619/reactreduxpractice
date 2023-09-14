import React from "react";
import phoneimage from "../images/download.jpg";
import cartImage from "../images/cart.png";
import "./Cart.css";

const User = () => {
  return (
    <div>
      <div>
        <img src={cartImage} className="cartImage" alt="cart image" />
      </div>
      <h1>Cart Component</h1>
      <div className="container">
        <div>
          <img src={phoneimage} className="phoneImage" alt="phone images" />
        </div>
        <div>
          <h2>
            I-Phone Price <br /> $1000.00
          </h2>
        </div>
        <div>
          <button
            className="button"
            onClick={() =>
              alert("Hello, your Item is added to the cart successfully.....")
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
