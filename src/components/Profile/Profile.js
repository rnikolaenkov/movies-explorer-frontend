import React, {useState, useEffect} from "react";
import './Profile.css';
import Header from "../Header/Header";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import validator from "validator";

function Profile(props) {
  const { isLogin, showModalMenu } = props;
  const currentUser = React.useContext(CurrentUserContext);

  console.log(currentUser);

  const [name, setName] = useState(currentUser.user.name);
  const [email, setEmail] = useState(currentUser.user.email);
  const [btnDisable, setBtnDisable] = useState(true);
  const [errName, setErrName] = useState(true);
  const [errEmail, setErrEmail] = useState(true);

  useEffect(() => {
    if (errName && errEmail) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [errName, errEmail]);


  const handleChangeName = (e) => {
    const val = e.target.value;
    setName(val);
    if (val.length >= 2 && val.length <= 30) {
      setErrName(true);
    } else {
      setErrName(false);
    }
  }

  const handleChangeEmail = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (validator.isEmail(val)) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
  }


  function logout(e) {
    e.preventDefault();
    props.logout();
  }

  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, email);
  }


  return(
    <div className="container">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />

      <div className="profile">
        <form action="#" className="profile__form" onSubmit={onSubmit}>
          <h2 className="profile__title">Привет, {name}!</h2>
          <div className="profile__group-wrap">
            <label htmlFor="name" className="profile__label">Имя</label>
            <input type="text" className="profile__input" value={name} id="name" onChange={handleChangeName} placeholder="Имя"/>
          </div>
          <ErrorLabel message="Что-то пошло не так" errShow={!errName}/>

          <div className="profile__group-wrap">
            <label htmlFor="email" className="profile__label">Email</label>
            <input type="email" className="profile__input" value={email} id="email" onChange={handleChangeEmail} placeholder="Email"/>
          </div>
          <ErrorLabel message="Что-то пошло не так" errShow={!errEmail}/>


        <ul className="profile__nav">
          <li className="profile__nav-item">
            <button className="profile__btn profile__edit" disabled={(btnDisable?'disabled':'')}>Редактировать</button>
          </li>
          <li className="profile__nav-item">
            <button className="profile__btn profile__logout" onClick={logout}>Выйти из аккаунта</button>
          </li>
        </ul>
        </form>
      </div>
    </div>
  );
}

export default Profile;
