import React from "react";
import './Menu.css';
import {Link} from "react-router-dom";

function Menu() {
  return (
    <Link className="menu focus" to="/profile"><span className="menu__span"></span><span className="menu__text">Аккаунт</span> </Link>
  );
}

export default Menu;
