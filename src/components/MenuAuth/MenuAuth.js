import React from "react";
import './MenuAuth.css';
import {Link} from "react-router-dom";

function MenuAuth() {
  return(
    <ul className="menu-auth">
      <li className="menu-auth__item"><Link to="/signup" className="menu-auth__signup menu-auth__link">Регистрация</Link></li>
      <li className="menu-auth__item"><Link to="/signin" className="menu-auth__signin menu-auth__link">Войти</Link></li>
    </ul>
  );
}

export default MenuAuth;
