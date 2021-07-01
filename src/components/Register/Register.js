import React, {useEffect, useState} from "react";
import validator from 'validator';
import './Register.css';
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import {Link, useHistory} from "react-router-dom";
import {register}  from "../../utils/MainApi";

function Register(props) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [errName, setErrName] = useState(false);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  if (props.isLogin) {
    history.push('/movies');
  }

  useEffect(() => {
    if (errName && errEmail && errPassword) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [errName, errEmail, errPassword]);

  function handleChangeName(e) {
    const val = e.target.value;
    setName(val);
    if (val.length >= 2 && val.length <= 30) {
      setErrName(true);
    } else {
      setErrName(false);
    }
  }

  function handleChangeEmail(e) {
    const val = e.target.value;
    setEmail(val);
    if (validator.isEmail(val)) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
  }

  function handleChangePassword(e) {
    const val = e.target.value;
    setPassword(val);
    if (val.length >= 6) {
      setErrPassword(true);
    } else {
      setErrPassword(false);
    }
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    register(email, password, name)
      .then((data) => {
        const message = 'Вы успешно зарегистрировались';
        props.showModalSuccessMsg(message);
        setTimeout(() => {props.handleLoginSubmit(email, password)}, 1000);
      })
      .catch((err) => {
        props.showModalErrorMsg();
      });
  }

  function checkBtnDisable(btnDisable) {
    return (btnDisable)?'disable':'';
  }

  return (
    <AuthForm>
      <Link to="/" className="focus"><Logo /></Link>
      <form action="#" className="auth__form" onSubmit={handleRegisterSubmit}>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <div className="auth__group-wrap">
          <label htmlFor="name" className="auth__label">Имя</label>
          <input type="text" className="auth__input" value={name} id="name" placeholder="Имя" onChange={handleChangeName}/>
        </div>
        <ErrorLabel message="Что-то пошло не так. Имя должно содержать от 2 до 30 символов." errShow={!errName} />

        <div className="auth__group-wrap">
          <label htmlFor="email" className="auth__label">Email</label>
          <input type="email" className="auth__input" value={email} id="email" placeholder="Email" onChange={handleChangeEmail}/>
        </div>
        <ErrorLabel message="Что-то пошло не так. Email должен содержать правильный email адрес." errShow={!errEmail} />

        <div className="auth__group-wrap">
          <label htmlFor="password" className="auth__label">Пароль</label>
          <input type="password" className="auth__input" value={password} id="password" placeholder="Пароль" onChange={handleChangePassword}/>
        </div>
        <ErrorLabel message="Что-то пошло не так. Пароль дожен содержать минимум 6 символов." errShow={!errPassword} />


        <ul className="auth__nav">
          <li className="auth__nav-item">
            <button className="auth__btn" disabled={checkBtnDisable(btnDisable)}>Зарегистрироваться</button>
          </li>
          <li className="auth__nav-item">
            <span className="auth__text">Уже зарегистрированы?<Link to="/signin" className="auth__link focus">Войти</Link></span>
          </li>
        </ul>
      </form>
    </AuthForm>
  );
}

export default Register;
