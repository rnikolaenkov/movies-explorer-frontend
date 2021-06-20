import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import MenuAuth from "../MenuAuth/MenuAuth";
import Menu from "../Menu/Menu";


function Header(props) {
  const {cssStyle} = props;
  const newStyle =`header ${cssStyle}`;
  return (
    <header className={newStyle}>
      <div className="header__left-block">
        <Link to="/" className="header__logo-link focus">
          <Logo cssClass='' />
        </Link>

        {/*<ul className="header__navigation">*/}
        {/*  <li className="header__navigation-item"><a href="#" className="header__navigation-link header__navigation-link_active">Фильмы</a></li>*/}
        {/*  <li className="header__navigation-item"><a href="#" className="header__navigation-link">Войти</a></li>*/}
        {/*</ul>*/}

      </div>
      <div className="header__right-block">
        {/*<MenuAuth />*/}
        <Menu />
      </div>
    </header>
  )
}

export default Header;
