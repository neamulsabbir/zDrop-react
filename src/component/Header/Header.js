import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import "./Header.css";

const Header = () => {
  /* const [cart, setCart] = useState()
  const addToCart = () => {
    const addCart = cart+ 1;
    setCart(addCart);
  } */
  return (
    <nav className="nav-container">
      <div>
        <img src={logo} alt=""></img>
      </div>

      <div>
        <input className="header-input" type="text" placeholder="Search By Keyword"></input>
      </div>

      <div className="nav-details">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart}>cart.length</FontAwesomeIcon>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
