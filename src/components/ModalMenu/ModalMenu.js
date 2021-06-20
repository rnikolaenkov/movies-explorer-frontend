import React from "react";
import './ModalMenu.css';
import {Link, NavLink} from "react-router-dom";

function ModalMenu(props) {
  const { isOpenModalMenu, closeModalMenu } = props;

  const classCss = (isOpenModalMenu)?'modal modal_open':'modal';

  const handlerCloseModalMenu = () => {
    closeModalMenu();
  }
  return(
    <div className={classCss}>
      <div className="modal__container">
        <button className="modal__close" onClick={handlerCloseModalMenu}></button>
        <ul className="modal__list">
          <li className="modal__item"><NavLink exact to="/" className="modal__link" activeClassName="modal__link_current" onClick={handlerCloseModalMenu}>Главная</NavLink></li>
          <li className="modal__item"><NavLink to="/movies" className="modal__link" activeClassName="modal__link_current" onClick={handlerCloseModalMenu}>Фильмы</NavLink></li>
          <li className="modal__item"><NavLink to="/movies-save" className="modal__link" activeClassName="modal__link_current" onClick={handlerCloseModalMenu}>Сохраненные фильмы</NavLink></li>
          <li className="modal__item">
            <Link className="modal__link focus" to="/profile" onClick={handlerCloseModalMenu}><span className="modal__text focus">Аккаунт</span> </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalMenu;
