import React from "react";
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h2 className="promo__title">О проекте</h2>
      <div className="promo__wrap">
        <div className="promo__wrap-item">
          <h3 className="promo__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="promo__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.</p>
        </div>
        <div className="promo__wrap-item">
          <h3 className="promo__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="promo__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.</p>
        </div>
      </div>
      <div className="promo__timeline">
        <div className="promo__timeline-left">
          <div className="promo__block promo__backend">
            1 неделя
          </div>
          <span className="promo__timeline-description">Back-end</span>
        </div>
        <div className="promo__timeline-right">
          <div className="promo__block promo__frontend">
            4 недели
          </div>
          <span className="promo__timeline-description">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default Promo;
