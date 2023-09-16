import React from "react";
import phoneimage from "../images/download.jpg";

import "./Cart.css";

const User = (props) => {
  console.warn("props:", props.data.cartItems.length);
  console.warn("props:", props.data.cartItems);
  return (
    <div>
      <div className="container">
        <div>
          <img src={phoneimage} className="phoneImage" alt="phone images" />
        </div>
        <div>
          <h2>
            I-Phone Price <br /> $1000.00
          </h2>
        </div>
        <div style={{display:"flex"}}>
          <button
            className="button"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "I-Phone 11" })
            }
          >
            Add To Cart
          </button>

          <button
            className="redbutton"
            onClick={()=> props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
