import React from 'react';
import './Main.css';

import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function Main(props) {
  const { isLogin } = props;


  return (
    <div className="container">
      <Header cssStyle={(isLogin)?'header_is-login':''}/>

      <Hero />

      <section className="menu">
        <ul className="menu__list">
          <li className="menu__list-item"><a href="#" className="menu__list-link">О проекте</a></li>
          <li className="menu__list-item"><a href="#" className="menu__list-link">Технологии</a></li>
          <li className="menu__list-item"><a href="#" className="menu__list-link">Студент</a></li>
        </ul>
      </section>

      <section className="about section">
        <h2 className="section__title">О проекте</h2>
        <div className="section__wrap">
          <div className="section__wrap-item">
            <h3 className="section__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="section__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.</p>
          </div>
          <div className="section__wrap-item">
            <h3 className="section__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="section__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.</p>
          </div>
        </div>
        <div className="timeline section__timeline">
          <div className="timeline__left">
            <div className="timeline__block-text timeline__block timeline__block_theme_backend">
              1 неделя
            </div>
            <span className="timeline__description">Back-end</span>
          </div>
          <div className="timeline__right">
            <div className="timeline__block-text timeline__block timeline__block_theme_frontend">
              4 недели
            </div>
            <span className="timeline__description">Front-end</span>
          </div>
        </div>
      </section>

      <section className="tech section tech__wrap">
        <h2 className="section__title">Технологии</h2>
        <h3 className="tech__subtitle">7 технологий</h3>
        <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="section__tech tech-list">
          <li className="tech-list__item">HTML</li>
          <li className="tech-list__item">CSS</li>
          <li className="tech-list__item">JS</li>
          <li className="tech-list__item">React</li>
          <li className="tech-list__item">Git</li>
          <li className="tech-list__item">Express.js</li>
          <li className="tech-list__item">mongoDB</li>
        </ul>
      </section>

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
