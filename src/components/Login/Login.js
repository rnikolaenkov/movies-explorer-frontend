import React, {useState} from "react";
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import Logo from "../Logo/Logo";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (props.isLogin) {
    history.push('/movies');
  }

  function changeEmail(e){
    setEmail(e.target.value);
  }

  function changePassword(e){
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    props.onSubmit(email, password);
  }

  return(
    <AuthForm>
      <Link to="/" className="focus"><Logo /></Link>
      <form action="#" className="auth__form" onSubmit={onSubmit}>
        <h2 className="auth__title">Рады видеть!</h2>

        <div className="auth__group-wrap">
          <label htmlFor="email" className="auth__label">Email</label>
          <input type="email" className="auth__input" value={email} id="email" placeholder="Email" onChange={changeEmail}/>
        </div>
        <ErrorLabel message="Что-то пошло не так" />

        <div className="auth__group-wrap">
          <label htmlFor="password" className="auth__label">Пароль</label>
          <input type="password" className="auth__input" value={password} id="password" placeholder="Пароль" onChange={changePassword}/>
        </div>
        <ErrorLabel message="Что-то пошло не так" />


        <ul className="auth__nav">
          <li className="auth__nav-item">
            <button className="auth__btn">Войти</button>
          </li>
          <li className="auth__nav-item">
            <span className="auth__text">Ещё не зарегистрированы?<Link to="/signup" className="auth__link focus">Регистрация</Link></span>
          </li>
        </ul>
      </form>
    </AuthForm>
  );
}

export default Login;
