import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

function Profile() {
  return(
    <div className="container">
      <Header cssStyle="header_is-login"/>

      <div className="profile">
        <form action="#" className="profile__form">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <div className="profile__group-wrap">
            <label htmlFor="name" className="profile__label">Имя</label>
            <input type="text" className="profile__input" value="Виталий" id="name" />
          </div>
          <ErrorLabel message="Что-то пошло не так" />

          <div className="profile__group-wrap">
            <label htmlFor="email" className="profile__label">Email</label>
            <input type="email" className="profile__input" value="vitaliy@mail.loc" id="email" />
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
