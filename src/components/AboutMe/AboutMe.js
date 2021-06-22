import React from "react";
import './AboutMe.css';
import photo from '../../images/photo_320.png';

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrap">
        <div className="about-me__wrap-item about-me__wrap-item_photo">
          <img className="about-me__photo" src={ photo } alt="фото"/>
        </div>
        <div className="about-me__wrap-item">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
            с постоянной работы.</p>
          <ul className="about-me__social">
            <li className="about-me__social-item"><a href="https://www.facebook.com/rnikolaenkov" className="about-me__social-link focus" target="_blank" rel="noreferrer">Facebook</a></li>
            <li className="about-me__social-item"><a href="https://github.com/rnikolaenkov" className="about-me__social-link focus" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
