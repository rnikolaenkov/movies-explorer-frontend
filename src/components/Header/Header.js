import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import MenuAuth from "../MenuAuth/MenuAuth";
import Menu from "../Menu/Menu";


function Header(props) {
  const { isLogin, styles, showModalMenu } = props;
  const newStyle =`header ${styles}`;

  return (
    <header className={newStyle}>
      <div className="header__left-block">
        <Link to="/" className="header__logo-link focus">
          <Logo cssClass='' />
        </Link>
      </div>
      <div className="header__right-block">
        { (isLogin)?<Menu showModalMenu = {showModalMenu} />:<MenuAuth /> }
      </div>
    </header>
  )
}

export default Header;
