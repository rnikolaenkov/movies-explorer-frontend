import React from "react";
import './Register.css';
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import {Link} from "react-router-dom";

function Register() {
  return (
    <AuthForm>
      <Link to="/" className="focus"><Logo /></Link>
      <form action="#" className="auth__form">
        <h2 className="auth__title">Добро пожаловать!</h2>
        <div className="auth__group-wrap">
          <label htmlFor="name" className="auth__label">Имя</label>
          <input type="text" className="auth__input" value="" id="name" placeholder="Имя" />
        </div>
        <ErrorLabel message="Что-то пошло не так" />

        <div className="auth__group-wrap">
          <label htmlFor="email" className="auth__label">Email</label>
          <input type="email" className="auth__input" value="" id="email" placeholder="Email" />
        </div>
        <ErrorLabel message="Что-то пошло не так" />

        <div className="auth__group-wrap">
          <label htmlFor="password" className="auth__label">Пароль</label>
          <input type="password" className="auth__input" id="password" placeholder="Пароль" />
        </div>
        <ErrorLabel message="Что-то пошло не так" />

      </form>
      <ul className="auth__nav">
        <li className="auth__nav-item">
          <button className="auth__btn">Зарегистрироваться</button>
        </li>
        <li className="auth__nav-item">
          <span className="auth__text">Уже зарегистрированы?<Link to="/signin" className="auth__link focus">Войти</Link></span>
        </li>
      </ul>
    </AuthForm>
  );
}

export default Register;
