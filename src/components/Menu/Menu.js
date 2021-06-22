import React from "react";
import './Menu.css';
import {NavLink} from "react-router-dom";

function Menu(props) {
  const { showModalMenu } = props;

  const handlerMenuBurgerClick = () => {
    showModalMenu();
  }

  return (
    <>
      <ul className="menu">
        <li className="menu__item">
          <NavLink className="menu__link focus" to="/movies" activeClassName="menu__link_current">Фильмы</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link focus" to="/movies-save" activeClassName="menu__link_current">Сохраненные фильмы</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link focus" to="/profile" activeClassName="menu__link_current"><span className="menu__text focus">Аккаунт</span> </NavLink>
        </li>
      </ul>
      <button className="menu-burger" onClick={handlerMenuBurgerClick}><span className="menu-burger__span"></span></button>
    </>
    // <Link className="menu focus" to="/profile"><span className="menu__span"></span><span className="menu__text">Аккаунт</span> </Link>
  );
}

export default Menu;
