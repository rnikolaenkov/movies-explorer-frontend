import React from "react";
import './NotFound.css';
import {Link, useHistory} from "react-router-dom";

function NotFound() {
  const history = useHistory();

  const  handlerClickBack = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return(
    <div className="not-found">
      <div className="not-found__wrap">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__description">Страница не найдена</p>
      </div>
      <Link to='/' className="not-found__link focus" onClick={handlerClickBack}>Назад</Link>
    </div>
  );
}

export default NotFound;
