import React from "react";
import './Login.css';
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return(
    <AuthForm>
      <Link to="/" className="focus"><Logo /></Link>
      <form action="#" className="auth__form">
        <h2 className="auth__title">Рады видеть!</h2>

        <div className="auth__group-wrap">
          <label htmlFor="email" className="auth__label">Email</label>
          <input type="email" className="auth__input" value="vitaliy@mail.loc" id="email" />
        </div>
        <ErrorLabel message="Что-то пошло не так" />

        <div className="auth__group-wrap">
          <label htmlFor="password" className="auth__label">Пароль</label>
          <input type="password" className="auth__input" id="password" />
        </div>
        <ErrorLabel message="Что-то пошло не так" />

      </form>
      <ul className="auth__nav">
        <li className="auth__nav-item">
          <button className="auth__btn">Войти</button>
        </li>
        <li className="auth__nav-item">
          <span className="auth__text">Ещё не зарегистрированы?<Link to="/signup" className="auth__link focus">Регистрация</Link></span>
        </li>
      </ul>
    </AuthForm>
  );
}

export default Login;
