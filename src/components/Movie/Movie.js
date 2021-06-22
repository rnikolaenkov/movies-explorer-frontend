import React from "react";
import './Movie.css';
import movie from '../../images/movie_1.jpg'
import BtnSaved from "../BtnSaved/BtnSaved";
import BtnSave from "../BtnSave/BtnSave";
import BtnRemove from "../BtnRemove/BtnRemove";
import {apiConfig} from "../../utils/config";

function Movie(props) {
  const { movie } = props;
  return (
    <article className="card">
      <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
        <img className="card__img" src={`${apiConfig.externalUrl}${movie.image.url}`} alt={movie.nameRU} />
        {/*<BtnSaved />*/}
        {/*<BtnSave />*/}
        <BtnRemove />
      </a>

      <div className="card__info">
        <div className="card__title">{movie.nameRU}</div>
        <div className="card__duration">{movie.duration} м.</div>
      </div>
    </article>
  )
}

export default Movie;
