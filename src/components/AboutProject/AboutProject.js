import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__wrap">
        <div className="about-project__wrap-item">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.</p>
        </div>
        <div className="about-project__wrap-item">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-left">
          <div className="about-project__block about-project__backend">
            1 неделя
          </div>
          <span className="about-project__timeline-description">Back-end</span>
        </div>
        <div className="about-project__timeline-right">
          <div className="about-project__block about-project__frontend">
            4 недели
          </div>
          <span className="about-project__timeline-description">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
