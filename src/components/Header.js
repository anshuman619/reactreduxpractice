import React from "react";
import cartImage from "../images/cart.png";
import "./Header.css";
 const Header = (props) => {
  return (
    <div>
      <div>
        <img src={cartImage} className="cartImage" alt="cart image" />
        <div className="cartText">{props.data.cartItems.length}</div>
      </div>
      <h1>Cart Component</h1>
    </div>
  );
};

export default Header;
