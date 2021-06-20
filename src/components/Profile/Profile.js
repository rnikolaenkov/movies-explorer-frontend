import React, {useState} from "react";
import './Profile.css';
import Header from "../Header/Header";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

function Profile(props) {
  const { isLogin, showModalMenu } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }


  return(
    <div className="container">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />

      <div className="profile">
        <form action="#" className="profile__form">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <div className="profile__group-wrap">
            <label htmlFor="name" className="profile__label">Имя</label>
            <input type="text" className="profile__input" value={name} id="name" onChange={handleChangeName}/>
          </div>
          <ErrorLabel message="Что-то пошло не так" />

          <div className="profile__group-wrap">
            <label htmlFor="email" className="profile__label">Email</label>
            <input type="email" className="profile__input" value={email} id="email" onChange={handleChangeEmail}/>
          </div>
          <ErrorLabel message="Что-то пошло не так" />

        </form>
        <ul className="profile__nav">
          <li className="profile__nav-item">
            <button className="profile__btn profile__edit">Редактировать</button>
          </li>
          <li className="profile__nav-item">
            <button className="profile__btn profile__logout">Выйти из аккаунта</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
