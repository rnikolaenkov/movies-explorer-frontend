import React from 'react';
import './Main.css';

import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";

function Main(props) {
  const { isLogin } = props;


  return (
    <div className="container">
      <Header cssStyle={(isLogin)?'header_is-login':''}/>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />





      <section className="student section">
        <h2 className="section__title">Студент</h2>
        <div className="student__wrap">
          <div className="student__wrap-item">
            <img className="section__photo" src="images/photo.png" alt="фото"/>
          </div>
          <div className="student__wrap-item">
            <h3 className="student__name">Виталий</h3>
            <p className="student__info">Фронтенд-разработчик, 30 лет</p>
            <p className="student__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
              жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
              с постоянной работы.</p>
            <ul className="student__social">
              <li className="student__social-item"><a href="#" className="section__social-link">Facebook</a></li>
              <li className="student__social-item"><a href="#" className="section__social-link">Github</a></li>
            </ul>
          </div>
        </div>

        <h3 className="student__portfolio">Портфолио</h3>
        <ul className="student__portfolio-list">
          <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Статичный сайт</a></li>
          <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Адаптивный сайт</a></li>
          <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Одностраничное
            приложение</a></li>
        </ul>
      </section>

      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__wrap">
          <ul className="footer__social-list">
            <li className="footer__social-item"><a href="#" className="footer__social-link">Яндекс.Практикум</a></li>
            <li className="footer__social-item"><a href="#" className="footer__social-link">Github</a></li>
            <li className="footer__social-item"><a href="#" className="footer__social-link">Facebook</a></li>
          </ul>
          <p className="footer__copy">&copy;2021</p>
        </div>
      </footer>
  </div>
  )
}

export default Main;
