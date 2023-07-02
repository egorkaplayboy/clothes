import React from "react";
import { Link } from "react-router-dom";

import Logo from "../img/logo.png";
import Cart from "../img/cart.svg";
import Heart from "../img/heart.svg";
import Profile from "../img/user.svg";
import { useCart } from "../hooks/useCart";
import NewLogo from "../img/newlogo.png"

const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header className="header">
      <div className="header_left">
        <Link to="/">
          <img height={70} src={NewLogo} alt="logo" />
        </Link>
        <h1>Магазин одежды</h1>
      </div>
      <div className="header_right">
        <img onClick={props.onClickCart} height={30} src={Cart} alt="cart" />
        <p>{totalPrice} руб.</p>
        <Link to="/favorites">
          <img height={25} src={Heart} alt="Favorites" />
        </Link>
        <Link to="/orders">
          <img height={30} src={Profile} alt="Profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
