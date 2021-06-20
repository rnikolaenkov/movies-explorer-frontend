import React from "react";
import './Movie.css';
import movie from '../../images/movie_1.jpg'
import BtnSaved from "../BtnSaved/BtnSaved";
import BtnSave from "../BtnSave/BtnSave";
import BtnRemove from "../BtnRemove/BtnRemove";

function Movie() {
  return (
    <article className="card">
      <a href='http://youtube.com' className="card__link" target="_blank" rel="noreferrer">
        <img className="card__img" src={movie} alt="Название фильма" />
        {/*<BtnSaved />*/}
        {/*<BtnSave />*/}
        <BtnRemove />
      </a>

      <div className="card__info">
        <div className="card__title">33 слова о дизайне</div>
        <div className="card__duration">1ч 17м</div>
      </div>
    </article>
  )
}

export default Movie;
